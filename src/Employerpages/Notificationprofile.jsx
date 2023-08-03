import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Axioscall from '../Commonpages/Axioscall';
import { useEffect } from 'react';
import moment from 'moment/moment';
import { Simplecontext } from '../Commonpages/Simplecontext';
import { notify, notifyerror } from '../Commonpages/toast';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";

export default function Notificationprofile() {
  const {userdetail,Decodeall,Check_Validation } = useContext(Simplecontext);
    const {id,userId}=useParams();
    const [userprofile,setuserprofile]=useState('')
    const [load,setload]=useState(false)
    const navigate = useNavigate();
    const [isOpen,setIsOpen]=useState(false)
    const [hrdata,sethrdata]=useState('')
    const [validated,setValidated]=useState(false)
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
          if (data.status===200){        
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
    const verifynot=async(value,emp)=>{
      try {
        if(userdetail.status==="verified"){
          let msg= "Successfully Verified"
          if(value===false){
            msg ="Canceled"
          }
          let body={
            userid:userprofile.user[0]._id,
            email:userdetail.email,
            is_verified:value,
            notificationid:id
        }
          let data =await Axioscall("post","employee/companyVerify",body)
          if(data.status===200){
            try { 
              userprofile.careerandeducation[0].prevCompanies.forEach((element) => {
                if (element.email===window.localStorage.getItem("graiduseremail")){
                  if(element?.to && moment(element.to, 'YYYY-MM-DD', true).isValid()){
                   
                  }else{
                    if(value===true){
                      if(emp){
                        if(emp==="employee"){
                          Addcompanyhandler(emp)
                        }
                        
                      }                    
                    }
                }
                }
              });
            } catch (error) {
             console.log("erorrrorrr",error) 
            }
            notify(msg)
            navigate("/notification")
          }
        }else{
          notifyerror("Your Profile is not Verified")
        }
       
      } catch (error) {
        
      }
    }
    const Addcompanyhandler=async(emp)=>{
        setload(true)
      try { 
      let body={
        user : userprofile.user[0]._id,
        company : window.localStorage.getItem("graiduserid"),
        type : "assign",
        role: "employee"
    }
    if(Decodeall().role==='hr'){
      body={
        user :userprofile.user[0]._id,
        hr:Decodeall().assignedHr,
        company : window.localStorage.getItem("graiduserid"),
        type : "assign",
        role: "employee"
    }
    } 
    if(!emp){
      body={
        user : hrdata.HR,
        company : window.localStorage.getItem("graiduserid"),
        type : "assign",
        role: "hr",
        username:hrdata.username,
        password:hrdata.password    
    }    
    }
        let data = await Axioscall("post","employee/assign",body)
        try {
          if(data.status===200){
            if(!emp){ 
              verifynot(true)
            }
            
            return
          }else{ 
            console.log(".............",data.response.data.message)
             notifyerror(data.response.data.message)}
        } catch (error) {
          console.log(error)
          
        }
      } catch (error) {
        console.log("errrror",error) 
      }
      setload(false)
    }

    const Nulldata=()=>{
      sethrdata('')
    }
    const checkEmployee=(userid,designation,value)=>{
      if(designation==="HR"){
        sethrdata({...hrdata,HR:userid})
        setIsOpen(true)       
      }else{
        verifynot(value,"employee")
      }
    }
  return (
    <>
    <main className="main ">
  <div className="carousel-inner">
  </div>
  {load? 
  <div className="spinner-container">
    <div className="spinner" />
  </div>:null}
  <div className="container mt-60 mb-100 verification-cover pb-40">
    <div className="row">
      <div className="col-lg-5 col-xl-5">
        <div className="card-box9 row">
          <div className="col-md-4">
            <img src={userprofile?.profilePhoto??"https://bootdey.com/img/Content/avatar/avatar7.png"} className="rounded-circle9 avatar-xl img-thumbnail" alt="profile-image" />
          </div>
          <div className="col-md-8 mt-5">
            <h4 className="mb-0">{userprofile?.firstName??""} {userprofile?.middleName??""} {userprofile?.lastName??""}</h4>
            {userprofile.is_verified?
            <div className=""><img className="ml-3" src="/assets/imgs/page/candidates/verified.png" alt="jobbox" /></div>
            :<div className=""><img className="ml-3" src="\assets\imgs\page\candidates\notverify.png" alt="jobbox" /></div>}
            <p className="text-muted">@{userprofile?.careerandeducation?.[0]?.designation??""}</p>
            <p className="text-muted">ID:{userprofile?.uniqueid??""} </p>
          </div>
          <div className=" mt-40 ">
            
            <div className="class-verification ">
              <table style={{width:"110%"}}>
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
                    <td className="td-verify">{userprofile?.address?.[0]?.permanantAddress?.[0]?.line1??""}&nbsp; {userprofile?.address?.[0]?.permanantAddress?.[0]?.line2??""}&nbsp; {userprofile?.address?.[0]?.permanantAddress?.[0]?.landmark??""},&nbsp;{userprofile?.address?.[0]?.permanantAddress?.[0]?.city??""}&nbsp;-&nbsp;{userprofile?.address?.[0]?.permanantAddress?.[0]?.zip??""}</td>
                  </tr>
                  <tr>
                    <td> Current Address</td>
                    <td>:</td>
                    <td className="td-verify">{userprofile?.address?.[0]?.currentAddress?.[0]?.line1??""}&nbsp; {userprofile?.address?.[0]?.currentAddress?.[0]?.line2??""}&nbsp; {userprofile?.address?.[0]?.currentAddress?.[0]?.landmark??""},&nbsp; {userprofile?.address?.[0]?.currentAddress?.[0]?.city??""}&nbsp;-&nbsp;{userprofile?.address?.[0]?.currentAddress?.[0]?.zip??""}</td>
                  </tr>
                  <tr>
                    <td>Marital Status</td>
                    <td>:</td>
                    <td className="td-verify">{userprofile?.maritalStatus??""}</td>
                  </tr>
                  <tr>
                    <td>Father's Name</td>
                    <td>:</td>
                    <td className="td-verify">{userprofile?.fatherName??""}</td>
                  </tr>
                  <tr>
                    <td className='d-flex'>Father's Career</td>
                    <td>:</td>
                    <td className="td-verify">{userprofile?.fatherOccupation??""}</td>
                  </tr>
                  <tr>
                    <td>Mother's Name</td>
                    <td>:</td>
                    <td className="td-verify">{userprofile?.motherName??""}</td>
                  </tr>
                  <tr>
                    <td>Mother's Career</td>
                    <td>:</td>
                    <td className="td-verify">{userprofile?.motherOccupation??""}</td>
                  </tr>
                  {userprofile?.siblingsDetails?.length?<>
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
                                </>:""??""}
                                {userprofile?.spouseDetails?.length?<>
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
                                </>:""??""}
                                {userprofile?.childDetails?.length?<>
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
                                </>:""??""}
                </tbody>
              </table>
            </div>
          </div>
        </div> {/* end card-box */}        
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
                  {pcompany.is_verified?
                    <div className=""><img className="ml-3" src="/assets/imgs/page/candidates/verified.png" alt="jobbox" /></div>
                    :<div className=""><img className="ml-3" src="\assets\imgs\page\candidates\notverify.png" alt="jobbox" /></div>}
                  <p>{pcompany.email}</p>
                  <p>{pcompany.address}</p>
                  <p>{pcompany.jobDescription}</p>
                </li>
              ))??""}
              
              </ul>
              <h5 className="mb-3 mt-4 text-uppercase "><i className="mdi mdi-cards-variant mr-1" />
                SKILLS</h5>
              <div className="card-2-bottom card-2-bottom-candidate mt-30">
              {userprofile?.careerandeducation?.[0]?.skills.map((caritm,crk)=>(
                <a key={crk} className="btn btn-tags-sm mb-10 mr-5">{caritm}</a>
              ))??""}
              </div>
              <h5 className="mb-3 mt-4 text-uppercase "><i className="mdi mdi-cards-variant mr-1" />
                Education</h5>
              <div className="table-responsive mt-20  ">
                <table className="table table-borderless mb-24">
                  <thead className="thead-light">
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
            <button type="submit" onClick={()=>checkEmployee(userprofile.user[0]._id,userprofile.careerandeducation[0].designation,true)} className="btn btn-success waves-effect  mt-2"><i className="mdi mdi-content-save" /> Verify Employee</button>
          </div>
          <div className="text-right col-md-5 col-6 ">
            <button type="submit" onClick={()=>submitdelete(verifynot,false)} className="btn btn-danger waves-effect w mt-2"><i className="mdi mdi-content-save" /> Reject</button>
          </div>
        </div>
      </div> {/* end card-box*/}
    </div> {/* end col */}
  </div>
  <Modal show={isOpen} onHide={()=>setIsOpen(false)&Nulldata()}>
        <Modal.Header closeButton>
          <Modal.Title><h4>HR</h4></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated} onSubmit={(e)=>Check_Validation(e,Addcompanyhandler,setValidated)} className="login-register text-start mt-20 pb-30" action="#">
       <div>
        <div className="form-group ">
          <div className="text__center mb-20">
          
            <input  value={userprofile?.firstName??""} disabled required   className="form-control" id="input-1" type="text"  name="fullname" placeholder="User Name/Mail id" />
            <Form.Control.Feedback type="invalid">Select an HR</Form.Control.Feedback>
          </div>
        </div>
        <div className="form-group mb-3">
          <input  value={hrdata?.username??""}  onChange={(e)=>sethrdata({...hrdata,username:e.target.value})}  className="form-control" id="input-1" type="tel" required name="fullname" placeholder="User Name/Mail id" />
          <Form.Control.Feedback type="invalid">Provide Username /Mail</Form.Control.Feedback>
        </div>
        <div className="form-group mb-3">
          <input  value={hrdata?.password??""}  onChange={(e)=>sethrdata({...hrdata,password:e.target.value})}  className="form-control" id="input-1" type="password" required name="fullname" placeholder="Password" />
          <Form.Control.Feedback type="invalid">Provide Password</Form.Control.Feedback>
        </div>
        <div className="form-group">
          <input value={hrdata?.repassword??""}  onChange={(e)=>sethrdata({...hrdata,repassword:e.target.value})} className={`form-control   ${hrdata.password?hrdata.password===hrdata.repassword ?'': 'is-invalid' :""}`} id="input-1" type="password" required name="fullname" placeholder="re-password" />
          <Form.Control.Feedback type="invalid">Password Not Match</Form.Control.Feedback>
        </div>
        
        <div className="form-group mt-10">
          <button className="btn btn-brand-1 hover-up w-100 " href="index-employee.html" type="submit" name="login">Continue</button>
        </div>
        
      </div>

      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setIsOpen(false)&Nulldata()}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
</main>

    </>
  )
}
