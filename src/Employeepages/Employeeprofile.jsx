import React, { useContext, useState } from 'react'
import { Simplecontext } from '../Commonpages/Simplecontext'
import { Helmet } from 'react-helmet'
import moment from 'moment';
import QRCode from 'qrcode.react';
import Filestack from '../Commonpages/Filestack';
import Axioscall from '../Commonpages/Axioscall';
import Employeeprofupdate from './Employeeprofupdate';
import { notify } from '../Commonpages/toast';

import domtoimage from 'dom-to-image';

export default function Employeeprofile() {
  const {logouthandler,userdetail,employeedata,getUser}=useContext(Simplecontext)
  // console.log("userdetail in employee profile",userdetail)
  const [shareview,setshareview]=useState(true)
  const maxLength = userdetail ? Math.max(userdetail.lngRead.length, userdetail.lngWrite.length) : 0;
const rows = Array.from({ length: maxLength }, (_, index) => (
  <tr key={index}>
    <td data-label="Read">{userdetail && index < userdetail.lngRead.length ? userdetail.lngRead[index] : ''}</td>
    <td data-label="Write">{userdetail && index < userdetail.lngWrite.length ? userdetail.lngWrite[index] : ''}</td>
  </tr>
));
// console.log("userdetails",userdetail)
const Bannerhandler=async(ratio)=>{
  try {
    // console.log("atio in function",ratio)
    let data =await Filestack(ratio)
    let datalist = {id:userdetail._id}
    if (data){
      datalist.id=userdetail._id
      datalist.bannerImage=data
    }
    // console.log("datalist",datalist)
    let dataupdate = await Axioscall("put","employee/personal",datalist)
    if (dataupdate.status){
      getUser(); 
      notify("Image Updated")  
    }
  
  } catch (error) {
    console.log(error)
  }
  
 }
 
  // const shareContent = () => {
  //   const container = document.getElementById('myContainer');
  //   if (container) {
  //     const content = container.innerText;
  //     navigator.share({ text: content })
  //       .then(() => {
  //         console.log('Content shared successfully.');
  //       })
  //       .catch((error) => {
  //         console.error('Failed to share content:', error);
  //       });
  //   }
  // };
  const copyValue = (value) => {
    navigator.clipboard.writeText(value)
      .then(() => {
        console.log('Value copied to clipboard:', value);
        notify("Copied Uniqueid")
      })
      .catch((error) => {
        console.error('Failed to copy value:', error);
      });
  };

  const downloadHtmlAsImage = (elementId) => {
    const htmlContent = document.getElementById(elementId);
    domtoimage.toPng(htmlContent,{ useCORS: true,scale:3 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'image.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error('Error while converting HTML to image:', error);
      });
  };
 
  return (
    <>
      <main className="main">
  <div className="carousel-inner">
  </div>
  <section className="section-box-2">
    <div className="container">
      <div className="banner-hero banner-image-single">
        <img  style={{ width:"1116px",height:"308px"}}  src={userdetail?.bannerImage??"assets/imgs/page/candidates/img copy1.png"} alt="jobbox" />
        <button className="btn-editor" style={{border:"0"}} onClick={()=>Bannerhandler("banner")} />
        </div>
      <div className="box-company-profile">
        <div className="image-compay">
          <img style={{ height:"85px" , width:"85px"}} src={userdetail?.profilePhoto??"assets/imgs/page/candidates/candidate-profile copy1.png"} alt="jobbox" />
          
          </div>
        <div className="row mt-10">
          <div className="col-lg-8 col-md-12">
            <h5 className="f-18">{userdetail?.firstName??""} {userdetail?.middleName??""} {userdetail?.lastName??""} <span className="card-location font-regular ml-20">{userdetail?.address?.[0]?.permanantAddress?.[0]?.landmark??""},{userdetail?.address?.[0]?.permanantAddress?.[0]?.country??""}</span></h5><br />
            <h5 className="f-18 u-color">Unique ID : <span>{userdetail?.uniqueid??""}</span></h5>
            <p className="mt-0 font-md color-text-paragraph-2 mb-15">{userdetail?.careerandeducation?.[0]?.designation??""}</p>
            {/* <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div> */}
          </div>
          <div className="col-lg-4 col-md-12 text-lg-end">     
            <div>
              {/* <section>
                <h5 className="score-section mb-20">Score</h5>
                <svg className="circle-chart mt-10" viewBox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">
                  <circle className="circle-chart__background" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                  <circle className="circle-chart__circle" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                  <g className="circle-chart__info">
                    <text className="circle-chart__percent" x="16.91549431" y="15.5" alignmentBaseline="central" textAnchor="middle" fontSize={8}>125</text>
                    <text className="circle-chart__subline" x="16.91549431" y="20.5" alignmentBaseline="central" textAnchor="middle" fontSize={2}>Out of 999</text>
                  </g>
                </svg>
              </section> */}
              <div id="circle-staticstic-demo" />
            </div></div>
        </div>
      </div>
      <div className="border-bottom pt-10 pb-10" />
    </div>
  </section>
  <section className="section-box mt-50">
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-12 col-sm-12">
          <div className="box-nav-tabs nav-tavs-profile mb-5">
            
            <ul className="nav" role="tablist">
              <li><a className="btn btn-border aboutus-icon mb-20 active" onClick={()=>setshareview(true)} href="#tab-my-profile" data-bs-toggle="tab" role="tab" aria-controls="tab-my-profile" aria-selected="true">My Profile</a></li>
              <li><a className="btn btn-border recruitment-icon mb-20" onClick={()=>setshareview(false)} href="#tab-my-jobs"  data-bs-toggle="tab" role="tab" aria-controls="tab-my-jobs" aria-selected="false">Update Profile</a></li>
            </ul>
            <div className="border-bottom pt-10 pb-10" />
            {shareview?
            <div className="mt-20 mb-20"><a href='#' onClick={()=>downloadHtmlAsImage('htmlContent1')}>Share Profile</a></div>
            :""}
            <div className="mt-10 mb-10">
                    <a href="#" onClick={()=>{logouthandler();}}> Log Out</a>
                  </div>
            {/* <div className="mt-20 mb-20"><a className="link-red" href="#"><i className="fa fa-paper-plane-o" />Delete Account</a></div> */}
          </div>
        </div>
        <div className="col-lg-10 col-md-12 col-sm-12 col-12 mb-50 ">
          <div className="content-single ">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-my-profile" role="tabpanel" aria-labelledby="tab-my-profile">
                <div className="row form-contact">
                  <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                      <div className="card-grid- hover-up">
                        <div className="card-grid-2-image-left">
                          <div className="card-grid-2-image-rd online">
                          </div>
                          <div className="card-profile ">
                          </div>
                        </div>
                        <div className="card-block-info">
                          <div className="class-verification1">
                            {/* <p className="font-md color-text-paragraph-2 ">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p> */}
                            <table style={{width:"100%"}}>
                              <tbody>
                                <tr>
                                  <td>Date of birth</td>
                                  <td>:</td>
                                  <td className="td-verify">{userdetail?.dob?moment(userdetail.dob).format("YYYY-MM-DD"):""??"no"}</td>
                                </tr>
                                <tr>
                                  <td>Email</td>
                                  <td>:</td>
                                  <td className="td-verify">{userdetail?.email??""}</td>
                                </tr>
                                <tr>
                                  <td> Phone Number</td>
                                  <td>:</td>
                                  <td className="td-verify">{userdetail?.phone??""}</td>
                                </tr>
                                <tr>
                                  <td> Permenent Address</td>
                                  <td>:</td>
                                  <td className="td-verify">{userdetail?.address?.[0]?.permanantAddress?.[0]?.line1??""} {userdetail?.address?.[0]?.permanantAddress?.[0]?.line2??""} {userdetail?.address?.[0]?.permanantAddress?.[0]?.landmark??""} {userdetail?.address?.[0]?.permanantAddress?.[0]?.city??""}-{userdetail?.address?.[0]?.permanantAddress?.[0]?.zip??""}</td>
                                </tr>
                                <tr>
                                  <td> Current Address</td>
                                  <td>:</td>
                                  <td className="td-verify">{userdetail?.address?.[0]?.currentAddress?.[0]?.line1??""} {userdetail?.address?.[0]?.currentAddress?.[0]?.line2??""} {userdetail?.address?.[0]?.currentAddress?.[0]?.landmark??""} {userdetail?.address?.[0]?.currentAddress?.[0]?.city??""}-{userdetail?.address?.[0]?.currentAddress?.[0]?.zip??""}</td>
                                  </tr>
                                <tr>
                                  <td>Merital Status</td>
                                  <td>:</td>
                                  <td className="td-verify">{userdetail?.maritalStatus??""}</td>
                                </tr>
                                <tr>
                                  <td>Father's Name</td>
                                  <td>:</td>
                                  <td className="td-verify">{userdetail?.fatherName??""}</td>
                                </tr>
                                <tr>
                                  <td>Father's Occupation</td>
                                  <td>:</td>
                                  <td className="td-verify">{userdetail?.fatherOccupation??""}</td>
                                </tr>
                                <tr>
                                  <td>Mother's Name</td>
                                  <td>:</td>
                                  <td className="td-verify">{userdetail?.motherName??""}</td>
                                </tr>
                                <tr>
                                  <td>Mother's Occupation</td>
                                  <td>:</td>
                                  <td className="td-verify">{userdetail?.motherOccupation??""}</td>
                                </tr>
                               
                                <tr>
                                  <td className=" verification-tb-margin" colSpan={3}><h6>Sibling Details</h6></td>
                                </tr>
                                {userdetail?.siblingsDetails?.length?userdetail.siblingsDetails.map((sibling,sk)=>(<>
                                  <tr key={sk}>
                                  <td>Name</td>
                                  <td>:</td>
                                  <td className="td-verify">{sibling?.name??""}</td>
                                </tr>
                                <tr>
                                  <td>Qualification</td>
                                  <td>:</td>
                                  <td className="td-verify">{sibling?.qualification??""}</td>
                                </tr>
                                <tr>
                                  <td>Occuption</td>
                                  <td>:</td>
                                  <td className="td-verify">{sibling?.occupation??""}</td>
                                </tr>
                                </>)):"No Siblings Found"??""}
                                
                               
                                <tr>
                                
                                  <td className=" verification-tb-margin" colSpan={3}><h6>Spouse Details</h6></td>
                                </tr>
                                {userdetail?.spouseDetails?.length?userdetail.spouseDetails.map((spouse,sk)=>(<>
                                <tr key={sk}>
                                  <td>Name</td>
                                  <td>:</td>
                                  <td className="td-verify">{spouse?.name??""}</td>
                                </tr>
                                <tr>
                                  <td>Qualification</td>
                                  <td>:</td>
                                  <td className="td-verify">{spouse?.qualification??""}</td>
                                </tr>
                                <tr>
                                  <td>Occuption</td>
                                  <td>:</td>
                                  <td className="td-verify">{spouse?.occupation??""}</td>
                                </tr>
                                </>)):"No Spouse Found"??""}
                                <tr>
                                  <td className=" verification-tb-margin" colSpan={3}><h6>Child Details</h6></td>
                                </tr>
                                {userdetail?.childDetails?.length?userdetail.childDetails.map((child,ck)=>(<>
                                <tr key={ck}>
                                  <td>Name</td>
                                  <td>:</td>
                                  <td className="td-verify">{child?.name??""}</td>
                                </tr>
                                <tr>
                                  <td>Qualification</td>
                                  <td>:</td>
                                  <td className="td-verify">{child?.qualification??""}</td>
                                </tr>
                                <tr>
                                  <td>Occuption</td>
                                  <td>:</td>
                                  <td className="td-verify">{child?.occupation??""}</td>
                                </tr>
                                </>)):"No Child Found"??""}
                              </tbody>
                            </table>
                          </div>
                          <div className="card-2-bottom card-2-bottom-candidate mt-30">
                            <div className="text-start">
                              {userdetail?.careerandeducation?.[0]?.skills.map((caritm,crk)=>(
                                <a key={crk} className="btn btn-tags-sm mb-10 mr-5">{caritm}</a>
                              ))??""}
                              
                              {/* <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Adobe XD</a> */}
                              {/* <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">PSD</a>
                              <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">App</a>
                              <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Digital</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4  col-sm-12  pl-lg-15 mt-lg-30">
                      <div className="sidebar-border">
                        <div className="box-profile-completed text-center mb-10">
                          <div className="grid">
                            <section>
                              <div id="circle-staticstic-demo" />
                            </section></div>
                          <h5 className="f-18 mt-10 text-center">Experience</h5>
                          <div className="sidebar-list-job88 text-imp">
                            <ul className="list-unstyled timeline-sm">
                              {userdetail?.careerandeducation?.[0]?.prevCompanies.map((pcompany,pk)=>(
                                 <li key={pk} className="timeline-sm-item">
                                 <span className="timeline-sm-date">{moment(pcompany.from).format('yyy')}-{pcompany?.to && moment(pcompany.to,'YYYY-MM-DD', true).isValid()? moment(pcompany.to,'YYYY-MM-DD').format('YY'): ''}</span>
                                 <h6 className="mt-0 mb-1">{pcompany.name} </h6>
                                 {pcompany.is_verified?
                                 <div className="mt-10 mb-1"><img className="ml-0" src="/assets/imgs/page/candidates/verified.png" alt="jobbox" /></div>:''}
                                 <p>{pcompany.position}</p>
                               </li>
                              ))??""}
                             
                              {/* <li className="timeline-sm-item">
                                <span className="timeline-sm-date">2012 - 15</span>
                                <h6 className="mt-0 mb-1">Senior Graphic Designer</h6>
                                <p>Software Inc.</p>
                              </li>
                              <li className="timeline-sm-item">
                                <span className="timeline-sm-date">2010 - 12</span>
                                <h6 className="mt-0 mb-1">Graphic Designer</h6>
                                <p>Coderthemes LLP</p>
                              </li> */}
                            </ul>
                          </div>
                          <div className="sidebar-list-job text-imp ">
                            <h6 className="mb-3 mt-4 text-uppercase text-center "><i className="mdi mdi-cards-variant mr-1" />
                              LANGUAGE KNOWN</h6>
                            <div className="table-responsive mb-30">
                              <table className="table table-borderless mb-0 ">
                                <thead className="t-head-verify">
                                  <tr>
                                    <th scope="col">Read</th>
                                    <th scope="col">Write</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {rows}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="htmlContent1"  className="theme--dark88">
                        <div id="container" className="container88">
                          <div className="header">
                            <div className="logo" />
                          </div>    
                          <section id="htmlContent1"  className="left-section">
                            {/* <img src="assets/imgs/page/login-register/qr.png" className="is-circle6 profile-pic" /> */}
                            <QRCode style={{height:"100px",width:"100px"}} value={`${window.location.origin}/candidatedetails/${userdetail?._id??""}`} />
                            <div className="profile-detail">
                              <p className="profile-name">CRAG CARD</p>
                              <span className="profile-summary">{userdetail?.firstName??""} {userdetail?.middleName??""} {userdetail?.lastName??""}</span>
                              <a className="profile-cv">ID:{userdetail?.uniqueid??""}</a>
                            </div>
                          </section>
                          <div className="front-smooth" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-white mb-30">
                  <div className="box-padding">
                    <h5 className="icon-edu">Career</h5>
                    <div className="row mt-30">
                      <div className="col-lg-9">
                        <div className="row">
                        </div>
                        <div className="box-timeline mt-50">
                         
                          {userdetail?.careerandeducation?.[0]?.prevCompanies.map((pcompany,pk)=>(
                          <div key={pk} className="item-timeline"> 
                            <div className="timeline-year"> <span>{moment(pcompany.from).format('yyy')}-{pcompany?.to && moment(pcompany.to, 'YYYY-MM-DD', true).isValid()? moment(pcompany.to, 'YYYY-MM-DD').format('YY'):'Present'}</span></div>

                            <div className="timeline-info"> 
                              <h5 className="color-brand-1 mb-10">{pcompany?.name??""}</h5>
                              {pcompany.is_verified?
                                 <div className="mt-10 mb-1"><img className="ml-0" src="/assets/imgs/page/candidates/verified.png" alt="jobbox" /></div>:''}
                              
                              <h6 className="color-text-paragraph-2 mb-15">{pcompany.position}</h6>
                              <p className="color-text-paragraph-2 mb-15">company mail:{pcompany.email}</p>
                              <p className="color-text-paragraph-2 mb-15">Company Phone&nbsp;:{pcompany.phone}</p>
                              <p className="color-text-paragraph-2 mb-15">Location:{pcompany.address}</p>
                              {/* <p className="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam debitis voluptas quas ut quisquam vel maiores odit iure nobis ea?</p> */}
                            </div>
                          </div>
                           ))??""}
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-white mb-30">
                  <div className="box-padding">
                    <h5 className="icon-edu">Education</h5>
                    <div className="row mt-30">
                      <div className="col-lg-9">
                        <div className="row">
                          <table className="table9">
                            <thead>
                              <tr>
                                <th scope="col">Cource</th>
                                <th scope="col">Field/board</th>
                                <th scope="col">Collage</th>
                                <th scope="col">Grade/Score</th>
                                <th scope="col">Year</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td data-label="Cource">10th Board</td>
                                <td data-label="Field/board">{userdetail?.careerandeducation?.[0]?.tenth?.[0]?.board??""}</td>
                                <td data-label="Collage">{userdetail?.careerandeducation?.[0]?.tenth?.[0]?.['school/university']??""}</td>
                                <td data-label="Grade/Score">{userdetail?.careerandeducation?.[0]?.tenth?.[0]?.['garde/score']??""}</td>
                                <td data-label="Year">{userdetail?.careerandeducation?.[0]?.tenth?.[0]?.year??""}</td>
                              </tr>
                              <tr>
                                <td scope="row" data-label="Cource">12th Board</td>
                                <td data-label="Field/board">{userdetail?.careerandeducation?.[0]?.twelth?.[0]?.board??""}</td>
                                <td data-label="Collage">{userdetail?.careerandeducation?.[0]?.twelth?.[0]?.['school/university']??""}</td>
                                <td data-label="Grade/Score">{userdetail?.careerandeducation?.[0]?.twelth?.[0]?.['garde/score']??""}</td>
                                <td data-label="Year">{userdetail?.careerandeducation?.[0]?.twelth?.[0]?.year??""}</td>
                              </tr>
                              <tr>
                                <td scope="row" data-label="Cource">Bachelor’s</td>
                                <td data-label="Field/board">{userdetail?.careerandeducation?.[0]?.bachelorDegree?.[0]?.course??""}</td>
                                <td data-label="Collage">{userdetail?.careerandeducation?.[0]?.bachelorDegree?.[0]?.collage??""}</td>
                                <td data-label="Grade/Score">{userdetail?.careerandeducation?.[0]?.bachelorDegree?.[0]?.['garde/score']??""}</td>
                                <td data-label="Year">{userdetail?.careerandeducation?.[0]?.bachelorDegree?.[0]?.year??""}</td>
                              </tr>
                              {userdetail?.careerandeducation?.[0]?.masterDegree?.[0]?.course?
                              <tr>
                                <td scope="row" data-label="Cource">Master’s</td>
                                <td data-label="Field/board">{userdetail?.careerandeducation?.[0]?.masterDegree?.[0]?.course??""}</td>
                                <td data-label="Collage">{userdetail?.careerandeducation?.[0]?.masterDegree?.[0]?.collage??""}</td>
                                <td data-label="Grade/Score">{userdetail?.careerandeducation?.[0]?.masterDegree?.[0]?.['garde/score']??""}</td>
                                <td data-label="Year">{userdetail?.careerandeducation?.[0]?.masterDegree?.[0]?.year??""}</td>
                              </tr>
                              :""??""}
                              {/* {userdetail?.careerandeducation?.[0]?.masterDegree?.[0]?
                              <tr>
                                <td scope="row" data-label="Cource">Master’s</td>
                                <td data-label="Field/board">{userdetail?.careerandeducation?.[0]?.masterDegree?.[0]?.course??""}</td>
                                <td data-label="Collage">{userdetail?.careerandeducation?.[0]?.masterDegree?.[0]?.collage??""}</td>
                                <td data-label="Grade/Score">{userdetail?.careerandeducation?.[0]?.masterDegree?.[0]?.['garde/score']??""}</td>
                                <td data-label="Year">{userdetail?.careerandeducation?.[0]?.masterDegree?.[0]?.year??""}</td>
                              </tr>
                              :""??""} */}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-my-jobs" role="tabpanel" aria-labelledby="tab-my-jobs">
                <h3 className="mt-0 mb-15 color-brand-1">Update Profile</h3><a className="font-md color-text-paragraph-2" href="#">Update your profile</a>
               
                <Employeeprofupdate value={1}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-box mt-50 mb-20">
    <div className="container">
      <div className="box-newsletter">
        <div className="row">
          <div className="col-xl-3 col-12 text-center d-none d-xl-block"><img src="assets/imgs/template/newsletter-left copy.png" alt="joxBox" /></div>
          <div className="col-lg-12 col-xl-6 col-12">
            <h2 className="text-md-newsletter text-center">New Things Will Always<br /> Update Regularly</h2>
            <div className="box-form-newsletter mt-40">
              <form className="form-newsletter">
                <input className="input-newsletter" type="text"  defaultValue="" placeholder="Enter your email here" />
                <button className="btn btn-default font-heading icon-send-letter">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
<Helmet>
<script src="/assets/js/vendor/modernizr-3.6.0.min.js"></script>
    <script src="/assets/js/vendor/jquery-3.6.0.min.js"></script>
    <script src="/assets/js/vendor/jquery-migrate-3.3.0.min.js"></script>
    <script src="/assets/js/vendor/bootstrap.bundle.min.js"></script>
    <script src="/assets/js/plugins/waypoints.js"></script>
    <script src="/assets/js/plugins/wow.js"></script>
    <script src="/assets/js/plugins/magnific-popup.js"></script>
    <script src="/assets/js/plugins/perfect-scrollbar.min.js"></script>
    <script src="/assets/js/plugins/select2.min.js"></script>
    <script src="/assets/js/plugins/isotope.js"></script>
    <script src="/assets/js/plugins/scrollup.js"></script>
    <script src="/assets/js/plugins/swiper-bundle.min.js"></script>
    <script src="/assets/js/main8c94.js?v=4.1"></script>
</Helmet>
    </>
  )
}
