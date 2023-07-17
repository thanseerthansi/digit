import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Axioscall from '../Commonpages/Axioscall';
import { useEffect } from 'react';
import moment from 'moment/moment';
import { Simplecontext } from '../Commonpages/Simplecontext';
import { notify } from '../Commonpages/toast';

export default function Notificationprofile() {
  const {userdetail } = useContext(Simplecontext);
    const {id,userId}=useParams();
    const [userprofile,setuserprofile]=useState('')
    const navigate = useNavigate();
    console.log("userprofile in notificaton",userprofile)
    // console.log("iddddddddd",id)
    // console.log("userId",userId)
      console.log("userdetails",userdetail)
    const maxLength = userprofile ? Math.max(userprofile.lngRead.length, userprofile.lngWrite.length) : 0;
const rows = Array.from({ length: maxLength }, (_, index) => (
  <tr key={index}>
    <td data-label="Read">{userprofile && index < userprofile.lngRead.length ? userprofile.lngRead[index] : ''}</td>
    <td data-label="Write">{userprofile && index < userprofile.lngWrite.length ? userprofile.lngWrite[index] : ''}</td>
  </tr>
));
    useEffect(()=>{
      window.scrollTo(0,0)
        getUser()
        notificationViewed()
    },[])
    const getUser=async()=>{
        try {
          let body={
            limit:1,
            page:1,
            user:userId
          }
          let data=await Axioscall("get","employee",body)
            // console.log("notificationuserdata",data.data.data.docs)
            if (data.status===200){
                setuserprofile(data.data.data.docs[0])
            }
        } catch (error) {
            
        }
    }
    const notificationViewed=async()=>{
      try {
        if (id){
          let data= await Axioscall("put","notification",{id:id,is_viewed:true})
          console.log("datanotificatio update",data)
          if (data.status===200){
            console.log("status,updated")
            
          }
        }
       
      } catch (error) {
        
      }
    }
    const verifynot=async(value)=>{
      try {
        let body={
          userid:userId,
          email:userdetail.email,
          is_verified:value,
          notificationid:id
      }
      // console.log("body",body)
        let data =await Axioscall("post","employee/companyVerify",body)
        // console.log("verifydata",data.status)
        if(data.status===200){
          try { 
            userprofile.careerandeducation[0].prevCompanies.forEach((element) => {
              if (element.email===window.localStorage.getItem("graiduseremail")){
                // console.log("fascsdfwenfjsuio",element.to)
                if(element?.to && moment(element.to, 'YYYY-MM-DD', true).isValid()){
                  // console.log("sdftyasdin")
                }else{
                  // console.log("notttttttttttt")
                  Addcompanyhandler()
              }
              }
            });
          } catch (error) {
           console.log("erorrrorrr",error) 
          }
          notify("successfully Verified")
          navigate("/notification")
        }
      } catch (error) {
        
      }
    }
    const Addcompanyhandler=async()=>{
      // console.log(".........................")
      try {
        let body={
          user :userprofile.user[0]._id,
          company : window.localStorage.getItem("graiduserid"),
          type : "assign"
      }
      // console.log("bodyyyyyyyy",body)
        let data = await Axioscall("post","employee/assign",body)
        console.log("dataaddcompany",data)
        if(data.status===200){
          // notify("added Successfully")
          // getCandidte()
          console.log("getsuccess")
          return
        }
      } catch (error) {
        console.log(error) 
      }
      // return
    }
  return (
    <>
    <main className="main ">
  <div className="carousel-inner">
  </div>
  <div className="container mt-60 mb-100 verification-cover pb-40">
    <div className="row">
      <div className="col-lg-5 col-xl-5">
        <div className="card-box9 row">
          <div className="col-md-4">
            <img src={userprofile?.profilePhoto??"https://bootdey.com/img/Content/avatar/avatar7.png"} className="rounded-circle9 avatar-xl img-thumbnail" alt="profile-image" />
          </div>
          <div className="col-md-8 mt-30">
            <h4 className="mb-0">{userprofile?.firstName??""} {userprofile?.middleName??""} {userprofile?.lastName??""}</h4>
            <p className="text-muted">@{userprofile?.careerandeducation?.[0]?.designation??""}</p>
            <p className="text-muted">ID:{userprofile?.uniqueid??""} </p>
          </div>
          <div className=" mt-40 ">
            {/* <h5 className="font-13 text-uppercase h5-verify ">About Me :</h5>
            <p className="text-muted font-13 mb-3 ">
              Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type.
            </p> */}
            <div className="class-verification ">
              <table style={{width:"100%"}}>
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
          </div>
        </div> {/* end card-box */}
        {/* <div class="card-box9 text-center">
                  <h4 class="header-title">Skills</h4>
                  <p class="mb-3">Everyone realizes why a new common language would be desirable</p>
      
                  <div class="pt-1 font-verification">
                      <h6 class="text-uppercase mt-0">HTML5 </h6>
                      <div class="progress progress-sm m-0">
                          <div class="progress-bar bg-purple" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%">
                              <span class="sr-only">90% Complete</span>
                          </div>
                      </div>
                  </div>
      
                  <div class="mt-2 pt-1">
                      <h6 class="text-uppercase">PHP </h6>
                      <div class="progress progress-sm m-0">
                          <div class="progress-bar bg-purple" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style="width: 67%">
                              <span class="sr-only">67% Complete</span>
                          </div>
                      </div>
                  </div>
      
                  <div class="mt-2 pt-1">
                      <h6 class="text-uppercase">WordPress </h6>
                      <div class="progress progress-sm m-0">
                          <div class="progress-bar bg-purple" role="progressbar" aria-valuenow="48" aria-valuemin="0" aria-valuemax="100" style="width: 48%">
                              <span class="sr-only">48% Complete</span>
                          </div>
                      </div>
                  </div>
      
                  <div class="mt-2 pt-1">
                      <h6 class="text-uppercase">Laravel </h6>
                      <div class="progress progress-sm m-0">
                          <div class="progress-bar bg-purple" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 95%">
                              <span class="sr-only">95% Complete</span>
                          </div>
                      </div>
                  </div>
      
                  <div class="mt-2 pt-1">
                      <h6 class="text-uppercase">ReactJs</h6>
                      <div class="progress progress-sm m-0">
                          <div class="progress-bar bg-purple" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style="width: 72%">
                              <span class="sr-only">72% Complete</span>
                          </div>
                      </div>
                  </div>
      
              </div> end card-box */}
      </div> {/* end col*/}
      <div className="col-lg-7 col-xl-7">
        <div className="card-box9">
          <div className="tab-content">
            <div className="tab-pane show active" id="about-me">
              <h5 className="mb-4 text-uppercase"><i className="mdi mdi-briefcase mr-1" />
                Experience</h5>
              <ul className="list-unstyled timeline-sm">
              {userprofile?.careerandeducation?.[0]?.prevCompanies.map((pcompany,pk)=>(
                  <li key={pk} className="timeline-sm-item">
                  <span className="timeline-sm-date">{moment(pcompany.from).format('yyy')}-{pcompany?.to && moment(pcompany.to, 'YYYY-MM-DD', true).isValid()? moment(pcompany.to, 'YYYY-MM-DD').format('YY'): pcompany?.to ?? ''}</span>
                  <h6 className="mt-0 mb-1">{pcompany.name} / {pcompany.position}</h6>
                  <p>{pcompany.email}</p>
                  <p>{pcompany.address}</p>
                  <p>{pcompany.jobDescription}</p>
                </li>
              ))??""}
                {/* <li className="timeline-sm-item">
                  <span className="timeline-sm-date">2015 - 19</span>
                  <h5 className="mt-0 mb-1">Lead designer / Developer</h5>
                  <p>websitename.com</p>
                  <p className="text-muted mt-2">Everyone realizes why a new common language
                    would be desirable: one could refuse to pay expensive translators.
                    To achieve this, it would be necessary to have uniform grammar,
                    pronunciation and more common words.</p>
                </li>
                <li className="timeline-sm-item">
                  <span className="timeline-sm-date">2012 - 15</span>
                  <h5 className="mt-0 mb-1">Senior Graphic Designer</h5>
                  <p>Software Inc.</p>
                  <p className="text-muted mt-2">If several languages coalesce, the grammar
                    of the resulting language is more simple and regular than that of
                    the individual languages. The new common language will be more
                    simple and regular than the existing European languages.</p>
                </li>
                <li className="timeline-sm-item">
                  <span className="timeline-sm-date">2010 - 12</span>
                  <h5 className="mt-0 mb-1">Graphic Designer</h5>
                  <p>Coderthemes LLP</p>
                  <p className="text-muted mt-2 mb-0">The European languages are members of
                    the same family. Their separate existence is a myth. For science
                    music sport etc, Europe uses the same vocabulary. The languages
                    only differ in their grammar their pronunciation.</p>
                </li> */}
              </ul>
              <h5 className="mb-3 mt-4 text-uppercase "><i className="mdi mdi-cards-variant mr-1" />
                SKILLS</h5>
              <div className="card-2-bottom card-2-bottom-candidate mt-30">
              {userprofile?.careerandeducation?.[0]?.skills.map((caritm,crk)=>(
                <a key={crk} className="btn btn-tags-sm mb-10 mr-5">{caritm}</a>
              ))??""}
                {/* <div className="box-tags mt-30"><a className="btn btn-grey-small mr-10">Figma</a><a className="btn btn-grey-small mr-10">Adobe XD</a><a className="btn btn-grey-small mr-10">NextJS</a><a className="btn btn-grey-small mr-10">React</a><a className="btn btn-grey-small mr-10">App</a><a className="btn btn-grey-small mr-10">Digital</a><a className="btn btn-grey-small mr-10">NodeJS</a> */}
                {/* </div> */}
              </div>
              <h5 className="mb-3 mt-4 text-uppercase "><i className="mdi mdi-cards-variant mr-1" />
                Education</h5>
              <div className="table-responsive mt-20  ">
                <table className="table table-borderless mb-24">
                  <thead className="thead-light">
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
                              <tr>
                                <td scope="row" data-label="Cource">Bachelor’s</td>
                                <td data-label="Field/board">{userprofile?.careerandeducation?.[0]?.bachelorDegree?.[0]?.course??""}</td>
                                <td data-label="Collage">{userprofile?.careerandeducation?.[0]?.bachelorDegree?.[0]?.collage??""}</td>
                                <td data-label="Grade/Score">{userprofile?.careerandeducation?.[0]?.bachelorDegree?.[0]?.['garde/score']??""}</td>
                                <td data-label="Year">{userprofile?.careerandeducation?.[0]?.bachelorDegree?.[0]?.year??""}</td>
                              </tr>
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
              <h5 className="mb-3 mt-4 text-uppercase mt-30"><i className="mdi mdi-cards-variant mr-1" />
                LANGUAGE KNOWN</h5>
              <div className="table-responsive mb-45 mt-20">
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
            {/* end timeline content*/}
          </div>
          {/* end settings content*/}
        </div> {/* end tab-content */}
        <div className="row " style={{float: 'right'}}>
          <div className="text-left col-md-5  col-6">
            <button type="submit" onClick={()=>verifynot(true)} className="btn btn-success waves-effect  mt-2"><i className="mdi mdi-content-save" /> Verify</button>
          </div>
          <div className="text-right col-md-5 col-6 ">
            <button type="submit" onClick={()=>verifynot(false)} className="btn btn-danger waves-effect w mt-2"><i className="mdi mdi-content-save" /> Cancel</button>
          </div>
        </div>
      </div> {/* end card-box*/}
    </div> {/* end col */}
  </div>
</main>

    </>
  )
}
