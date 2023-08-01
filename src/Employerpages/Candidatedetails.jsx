import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import Axioscall from '../Commonpages/Axioscall';
import moment from 'moment';
import QRCode from 'qrcode.react';

export default function Candidatedetails() {
    const {id}=useParams();
    const [userprofile,setuserprofile]=useState('')
    useEffect(()=>{
      getemployee()
      window.scrollTo(0,200)
      
    },[])
    const maxLength = userprofile ? Math.max(userprofile.lngRead.length, userprofile.lngWrite.length) : 0;
    const rows = Array.from({ length: maxLength }, (_, index) => (
      <tr key={index}>
        <td data-label="Read">{userprofile && index < userprofile.lngRead.length ? userprofile.lngRead[index] : ''}</td>
        <td data-label="Write">{userprofile && index < userprofile.lngWrite.length ? userprofile.lngWrite[index] : ''}</td>
      </tr>
    ));
    const getemployee=async()=>{
        try {
            let body = {
                page:1,
                limit:1,
                user :id
            }
            let data = await Axioscall("get","employee",body)
            if(data){
              setuserprofile(data.data.data.docs[0])              
            }
        } catch (error) {
            
        }
    }
  
  const experianceHandler=()=>{
    let exp = userprofile?.careerandeducation?.[0]?.prevCompanies??""
    let from =[]
    let to =[]
    var result = " No Experience"
    if (exp.length){
      exp.forEach(comp => {     
        from.push(comp?.from??"");
        if ( comp?.to && moment(comp.to, 'YYYY-MM-DD', true).isValid())
        to.push(comp?.to??moment().format('YYYY-MM-DD'));     
      });
    
    let newdateto = new Date
    if (to.length){
      newdateto =new Date(Math.max(...to.map(date => Date.parse(date))))?.toISOString()?.slice(0, 10)??"";
    }
    
   
    let oldestDatefrom = new Date(Math.min(...from.map(date => Date.parse(date)))).toISOString().slice(0, 10);
    var newDateObj = new Date(newdateto);
    var oldDateObj = new Date(oldestDatefrom);
    var differenceInMilliseconds = newDateObj - oldDateObj;
    var differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    var differenceInMonths = Math.floor(differenceInDays / 30);
    var differenceInYears = Math.floor(differenceInMonths / 12);
    
    if (differenceInYears > 0) {
      result = differenceInYears + (differenceInYears === 1 ? ' year' : ' years');
    } else if (differenceInMonths > 0) {
      result = differenceInMonths + (differenceInMonths === 1 ? ' month' : ' months');
    } else {
      result = differenceInDays + (differenceInDays === 1 ? ' day' : ' days');
    }
  }
    return result
  }
 
  const degreeHandler=()=>{
    let data= userprofile?.careerandeducation?.[0]??""
    let rslt=""
    if(data){
      if(data.bachelorDegree.length){
        rslt = "Bachelor Degree"
      }
      if(data.masterDegree.length){
        console.log("master")
        rslt = "Master Degree"
      }
      return rslt
    } 
  }

  return (
    <>
    <main className="main">
  <div className="carousel-inner">
  </div>
  <section className="section-box-2">
    <div className="container">
      <div className="banner-hero banner-image-single"><img style={{ width:"1116px",height:"308px"}}  src={userprofile?.bannerImage??"/assets/imgs/page/candidates/img copy1.png"} alt="jobbox" /></div>
      <div className="box-company-profile">
        <div className="image-compay"><img style={{ height:"85px" , width:"85px"}} src={userprofile?.profilePhoto??"/assets/imgs/page/candidates/candidate-profile copy1.png"} alt="jobbox" /></div>
        <div className="row mt-10">
          <div className="col-lg-8 col-md-12">
            <h5 className="f-18">{userprofile?.firstName??""} {userprofile?.middleName??""} {userprofile?.lastName??""}<span className="card-location font-regular ml-20">{userprofile?userprofile.address[0].city:""},{userprofile?userprofile.address[0].country:""}</span></h5>
            {userprofile.is_verified?
                    <div className=""><img className="ml-3" src="/assets/imgs/page/candidates/verified.png" alt="jobbox" /></div>
                    :<div className=""><img className="ml-3" src="\assets\imgs\page\candidates\grey.png" alt="jobbox" /></div>}
            <h6 className="f-18 u-color">Unique ID : <span>{userprofile?.uniqueid??""}</span></h6>
            <p className="mt-0 font-md color-text-paragraph-2 mb-15">{userprofile?.careerandeducation?.[0]?.designation??""}</p>
          </div>
          <div className="col-lg-4 col-md-12 text-lg-end">     
            <div>
              <div id="circle-staticstic-demo" />
            </div>
          </div>
        </div>
      </div>
      <div className="box-nav-tabs mt-40 mb-5">
        <ul className="nav" role="tablist">
          <li><a className="btn btn-border recruitment-icon mr-15 mb-5 active" href="#tab-skills" data-bs-toggle="tab" role="tab" aria-controls="tab-skills" aria-selected="true">Career</a></li>
          <li><a className="btn btn-border aboutus-icon mr-15 mb-5 " href="#tab-short-bio" data-bs-toggle="tab" role="tab" aria-controls="tab-short-bio" aria-selected="false">Short Bio</a></li>
        </ul>
      </div>
      <div className="border-bottom pt-10 pb-10" />
    </div>
  </section>
  <section className="section-box mt-50">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
          <div className="content-single">
            <div className="tab-content">
              <div className="tab-pane fade  mb-80" id="tab-short-bio" role="tabpanel" aria-labelledby="tab-short-bio">
                <h4>About </h4>
                <div className="class-verification1">
                  <table>
                    <tbody>
                      <tr>
                        <td>Date of birth</td>
                        <td>:</td>
                        <td className="td-verify">{userprofile?moment(userprofile.dob).format('d/mm/yyy'):""}</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td className="td-verify">{userprofile?.email??""}</td>
                      </tr>
                      <tr>
                        <td> Phone Number</td>
                        <td>:</td>
                        <td className="td-verify">{userprofile?.phone??""}</td>
                      </tr>
                      <tr>
                        <td> Permenent Address</td>
                        <td>:</td>
                        <td className="td-verify">{userprofile?.address?.[0]?.permanantAddress?.[0]?.line1??""} {userprofile?.address?.[0]?.permanantAddress?.[0]?.line2??""} {userprofile?.address?.[0]?.permanantAddress?.[0]?.landmark??""},{userprofile?.address?.[0]?.permanantAddress?.[0]?.city??""}-{userprofile?.address?.[0]?.permanantAddress?.[0]?.zip??""}</td>
                      </tr>
                      <tr>
                    <td> Current Address</td>
                    <td>:</td>
                    <td className="td-verify">{userprofile?.address?.[0]?.currentAddress?.[0]?.line1??""} {userprofile?.address?.[0]?.currentAddress?.[0]?.line2??""} {userprofile?.address?.[0]?.currentAddress?.[0]?.landmark??""} {userprofile?.address?.[0]?.currentAddress?.[0]?.city??""}-{userprofile?.address?.[0]?.currentAddress?.[0]?.zip??""}</td>
                  </tr>
                  <tr>
                    <td>Merital Status</td>
                    <td>:</td>
                    <td className="td-verify">{userprofile?.maritalStatus??""}</td>
                  </tr>
                  <tr>
                    <td>Father's Name</td>
                    <td>:</td>
                    <td className="td-verify">{userprofile?.fatherName??""}</td>
                  </tr>
                  <tr>
                    <td className='d-flex'>Father's Occupation</td>
                    <td>:</td>
                    <td className="td-verify">{userprofile?.fatherOccupation??""}</td>
                  </tr>
                  <tr>
                    <td>Mother's Name</td>
                    <td>:</td>
                    <td className="td-verify">{userprofile?.motherName??""}</td>
                  </tr>
                  <tr>
                    <td>Mother's Occupation</td>
                    <td>:</td>
                    <td className="td-verify">{userprofile?.motherOccupation??""}</td>
                  </tr>
                  <tr>
                  <td className=" verification-tb-margin" colSpan={3}><h6>Sibling Details</h6></td>
                                </tr>
                                {userprofile?.siblingsDetails?.length?userprofile.siblingsDetails.map((sibling,sk)=>(<>
                                  <tr key={sk}>
                                  <td className='d-flex'>Name</td>
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
                                {userprofile?.spouseDetails?.length?userprofile.spouseDetails.map((spouse,sk)=>(<>
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
                                {userprofile?.childDetails?.length?userprofile.childDetails.map((child,ck)=>(<>
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
                <h4 className="pt-4">Education</h4>
                <div className="row mb-40">
                  <div className="col-lg-12 col-md-12 col-sm-12 mb-30">
                    <h6 className="color-text-paragraph-2" />
                    <div className="box-progress-bar mt-20">
                      <table className="table9">
                        <thead>
                          <tr>
                            <th scope="col">Cource</th>
                            <th scope="col">Field/board</th>
                            <th scope="col">College</th>
                            <th scope="col">Grade/Score</th>
                            <th scope="col">Year</th>
                          </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td data-label="Cource">10th Board</td>
                                <td data-label="Field/board">{userprofile?.careerandeducation?.[0]?.tenth?.[0]?.board??""}</td>
                                <td data-label="Collage">{userprofile?.careerandeducation?.[0]?.tenth?.[0]?.['school/university']??""}</td>
                                <td data-label="Grade/Score">{userprofile?.careerandeducation?.[0]?.tenth?.[0]?.['garde/score']??""}</td>
                                <td data-label="Year">{userprofile?.careerandeducation?.[0]?.tenth?.[0]?.year??""}</td>
                              </tr>
                              <tr>
                                <td scope="row" data-label="Cource">12th Board</td>
                                <td data-label="Field/board">{userprofile?.careerandeducation?.[0]?.twelth?.[0]?.board??""}</td>
                                <td data-label="Collage">{userprofile?.careerandeducation?.[0]?.twelth?.[0]?.['school/university']??""}</td>
                                <td data-label="Grade/Score">{userprofile?.careerandeducation?.[0]?.twelth?.[0]?.['garde/score']??""}</td>
                                <td data-label="Year">{userprofile?.careerandeducation?.[0]?.twelth?.[0]?.year??""}</td>
                              </tr>
                              {userprofile?.careerandeducation?.[0]?.bachelorDegree?.[0]?.course?
                              <tr>
                                <td scope="row" data-label="Cource">Bachelor’s</td>
                                <td data-label="Field/board">{userprofile?.careerandeducation?.[0]?.bachelorDegree?.[0]?.course??""}</td>
                                <td data-label="Collage">{userprofile?.careerandeducation?.[0]?.bachelorDegree?.[0]?.collage??""}</td>
                                <td data-label="Grade/Score">{userprofile?.careerandeducation?.[0]?.bachelorDegree?.[0]?.['garde/score']??""}</td>
                                <td data-label="Year">{userprofile?.careerandeducation?.[0]?.bachelorDegree?.[0]?.year??""}</td>
                              </tr>
                              :""??""}
                              {userprofile?.careerandeducation?.[0]?.masterDegree?.[0]?.course?
                              <tr>
                                <td scope="row" data-label="Cource">Master’s</td>
                                <td data-label="Field/board">{userprofile?.careerandeducation?.[0]?.masterDegree?.[0]?.course??""}</td>
                                <td data-label="Collage">{userprofile?.careerandeducation?.[0]?.masterDegree?.[0]?.collage??""}</td>
                                <td data-label="Grade/Score">{userprofile?.careerandeducation?.[0]?.masterDegree?.[0]?.['garde/score']??""}</td>
                                <td data-label="Year">{userprofile?.careerandeducation?.[0]?.masterDegree?.[0]?.year??""}</td>
                              </tr>
                              :""??""}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <h6 className="color-text-paragraph-2" />
                    <h4 />
                  </div>
                </div>
                <p />
                <h4>Skills</h4>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="box-tags mt-30">
                  {userprofile?.careerandeducation?.[0]?.skills.map((caritm,crk)=>(
                <a key={crk} className="btn btn-tags-sm mb-10 mr-5">{caritm}</a>
              ))??""}
                  </div>
                </div>
              </div>
              <div className="tab-pane show active fade" id="tab-skills" role="tabpanel" aria-labelledby="tab-skills">
                <div className="panel-white mb-30">
                  <div className="box-padding">
                    <div className="row mt-30">
                      <div className="col-lg-9">
                        <div className="row">
                        </div>
                        <div className="box-timeline mt-50">
                        
               {userprofile?.careerandeducation?.[0]?.prevCompanies.map((pcompany,pk)=>(
                          <div key={pk} className="item-timeline"> 
                            <div className="timeline-year"> <span>{moment(pcompany.from).format('yyy')}-{pcompany?.to && moment(pcompany.to, 'YYYY-MM-DD', true).isValid()? moment(pcompany.to, 'YYYY-MM-DD').format('YY'): pcompany?.to ?? ''}</span></div>
                            <div className="timeline-info"> 
                              <h5 className="color-brand-1 mb-20">{pcompany.name}</h5>
                              {pcompany.is_verified?
                            <div className=""><img className="ml-3" src="/assets/imgs/page/candidates/verified.png" alt="jobbox" /></div>
                            :<div className=""><img className="ml-3" src="\assets\imgs\page\candidates\grey.png" alt="jobbox" /></div>}
                              <h6 className="color-text-paragraph-2 mb-15">{pcompany.position}</h6>
                              <p className="color-text-paragraph-2 mb-15">company mail: {pcompany.email}</p>
                              <p className="color-text-paragraph-2 mb-15">Company Phone&nbsp;: {pcompany.phone}</p>
                              <p className="color-text-paragraph-2 mb-15">Location: {pcompany.address}</p>
                              <p className="color-text-paragraph-2 mb-15">{pcompany.jobDescription}</p>
                            </div>
                          </div>
                          ))??""}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12  pl-lg-15 mt-lg-30">
          <div className="sidebar-border">
            <div className="box-profile-completed text-center mb-30">
              <div className="grid">
                <section>
                  <div id="circle-staticstic-demo " />
                </section></div>
              <div className="text-imp">
                <h5 className="f-18 mt-10">Overview</h5>
                <div className="sidebar-list-job text-imp">
                  <ul>
                    <li>
                      <div className="sidebar-icon-item"><i className="fi-rr-briefcase" /></div>
                      <div className="sidebar-text-info"><span className="text-description">Experience</span><strong className="small-heading">{experianceHandler()}</strong></div>
                    </li>
                    <li>
                      <div className="sidebar-icon-item"><i className="fi-rr-marker" /></div>
                      <div className="sidebar-text-info"><span className="text-description">Language</span>
                      {userprofile?.lngRead?.map((lang,lk)=>(
                        <strong key={lk} className="small-heading">{lang}</strong>
                      ))??""}
                      </div>
                    </li>
                    <li>
                      <div className="sidebar-icon-item"><i className="fi-rr-time-fast" /></div>
                      <div className="sidebar-text-info"><span className="text-description">Education Level</span>
                      <strong className="small-heading">{degreeHandler()}</strong>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sidebar-list-job text-imp">
                <h6 className="mb-3 mt-4 text-uppercase "><i className="mdi mdi-cards-variant mr-1" />
                  LANGUAGE  KNOWN</h6>
                <div className="table-responsive mb-10">
                  <table className="table table-borderless mb-0">
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
          <div className="theme--dark77">
          <div className="content-wrapper11">
                      <div className="tilt">
                        <div className="credit-card">
                          <div className="credit-card__front" style={{backgroundImage: 'url(/assets/imgs/template/visa-bg.jpg)'}}>    
                            <div className="circle circle-1" />
                            <div className="circle circle-2" />
                            <div className="logo">
                              <img src="\assets\imgs\logo\logo_craig-10.png" />
                            </div>
                            <div className="VISA">
                              <QRCode style={{height:"100px",width:"100px",backgroundColor:"white",padding:'6px'}} value={`${window.location.origin}/candidatedetails/${userprofile?._id??""}`} />
                            </div>
                            <div className="card-expiry-group">
                              <label htmlFor="card-expiry">Unique ID</label>
                              <h5 className="card-number">{userprofile?.uniqueid??""}</h5>
                            </div>
                            <div className="card-name-group">
                              <label htmlFor="card-name">NAME</label>
                              <h6 className="card-number">{userprofile?.firstName??""} {userprofile?.middleName??""} {userprofile?.lastName??""} </h6>
                            </div>
                          </div>
                        </div>
                      </div>{/* tilt */}
                    </div>  
          
            {/* <div id="container" className="container77">
              <div className="header">
                <div className="logo" />
              </div>    
              <section className="left-section">
              <QRCode style={{height:"100px",width:"100px"}} value={`${window.location.origin}/candidatedetails/${userprofile?._id??""}`} />
                <div className="profile-detail">
                  <p className="profile-name">CRAIGCARD</p>
                  <span className="profile-summary">{userprofile?.firstName??""} {userprofile?.middleName??""} {userprofile?.lastName??""} </span>
                  <a className="profile-cv">ID:{userprofile?.uniqueid??""}</a>
                </div>
              </section>
              <div className="front-smooth" />
            </div> */}
          </div>
        </div>
      </div>
    </div></section>
  <section className="section-box mt-50 mb-20">
    <div className="container">
      <div className="box-newsletter">
        <div className="row">
          <div className="col-xl-3 col-12 text-center d-none d-xl-block"><img src="/assets/imgs/template/newsletter-left copy.png" alt="joxBox" /></div>
          <div className="col-lg-12 col-xl-6 col-12">
            <h2 className="text-md-newsletter text-center">New Things Will Always<br /> Update Regularly</h2>
            <div className="box-form-newsletter mt-40">
              <form className="form-newsletter">
                <input className="input-newsletter" type="text" defaultValue placeholder="Enter your email here" />
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
<script src="https://kit.fontawesome.com/065c1878aa.js" crossorigin="anonymous"></script>
    <script data-cfasync="false" src="../../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="/assets/js/vendor/modernizr-3.6.0.min.js"></script>
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
