import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import Axioscall from '../Commonpages/Axioscall'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { notify, notifyerror } from '../Commonpages/toast'
import { uniqueId } from 'filestack-js'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import { Simplecontext } from '../Commonpages/Simplecontext'

export default function Candidates() {
  const {userdetail,Check_Validation,Decodeall}=useContext(Simplecontext) 
  const [employeesdata,setemployeedata]=useState([])
  const [currentpage,setcurrentpage]=useState({total:0,next:"",prev:"",current:1})
  const [fileterid,setfilterid]=useState('')
  const [isOpen,setIsOpen]=useState(false)
  const [hrdata,sethrdata]=useState('')
  const [validated,setValidated]=useState(false)  
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  const getCandidte=async(page)=>{ 
    try {
      if(fileterid){
        let body={
          limit:16,
          page:page?page:currentpage.current,
          uniqueid:fileterid,
          role:"hr"
        }
        let data=await Axioscall("get","employee",body)
        if (data.status===200){
          let datapage = data.data.data
          setcurrentpage({...currentpage,total:datapage.totalPages,next:datapage.hasNextPage,prev:datapage.hasPrevPage})
          setemployeedata(data.data.data.docs)
        }
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  const Addcompanyhandler=async(userid,emp)=>{
    try {
     
      let body={
        user : userid,
        company : window.localStorage.getItem("graiduserid"),
        type : "assign",
        role: "employee"
    }
    if(Decodeall().role==='hr'){
      body={
        user : userid,
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
      if(data.status===200){
        notify("added Successfully")
        getCandidte()
        if(!emp){}
        setIsOpen(false)
      }else{
        notifyerror(data.response.data.message)
      }
    } catch (error) {
      console.log(error) 
    }
  }
  const Nulldata=()=>{
    sethrdata('')
  }
  const checkEmployee=(userid,designation)=>{
    if(designation==="HR"){
      sethrdata({...hrdata,HR:userid})
      setIsOpen(true)
    }else{
      Addcompanyhandler(userid,"employee")
    }
  }
  return (
    <>
    <main className="main">
  <div className="carousel-inner">
  </div>
  <section className="section-box-2">
    <div className="container">
      <div className="banner-hero banner-company">
        <div className="block-banner text-center">
          <h3 className="wow animate__animated animate__fadeInUp">Browse Candidates</h3>
          <div className="box-list-character">
            <div className="search-wrapper  col-md-6">
              <i className="search-icon fas fa-search mt-3" />
              <input type="text" className="search" value={fileterid} onChange={(e)=>setfilterid(e.target.value)}  placeholder="Serch by UniqueId" />
              <button onClick={()=>getCandidte()} className="search-button">Search </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-box mt-30">
    <div className="container">           
      <div className="content-page">
        <div className="row">
          {employeesdata.length?employeesdata.map((emp,ek)=>(
            <div key={ek} className="col-xl-3 col-lg-4 col-md-6">
              
            <div className="card-grid-2 hover-up">
            <div className='text-end mr-5 pt-5'><button onClick={()=>checkEmployee(emp.user[0]._id,emp.careerandeducation[0].designation)} className='btn btn-tags-sm '>Add to Company</button></div>
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><Link to={`/candidatedetails/${emp._id}`}>
                    <figure><img alt="jobBox" src={emp?.profilePhoto??`assets/imgs/page/candidates/user1.png`}  /></figure></Link>
                    
                    </div>
                    
                <div className="card-profile pt-10"><Link to={`/candidatedetails/${emp._id}`}>
                    <h5>{emp.firstName} {emp.middleName} {emp.lastName}</h5></Link><span className="font-xs color-text-mutted">{emp?.careerandeducation?.[0]?.designation??"designation"}</span>
                  <h6 className="card-id">ID:{emp.uniqueid}</h6>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">{emp?.address?.[0]?.permanantAddress?.[0]?.line1??""} {emp?.address?.[0]?.permanantAddress?.[0]?.line2??""}</p>
                <p className="font-xs color-text-paragraph-2">{emp?.address?.[0]?.permanantAddress?.[0]?.city??""}-{emp?.address?.[0]?.permanantAddress?.[0]?.zip??""}</p>
                <p className="font-xs color-text-paragraph-2"></p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start">
                    {emp?.careerandeducation?.[0]?.skills.slice(0, 4).map((skill,sk)=>(
                      <a key={sk} className="btn btn-tags-sm mb-10 mr-5">{skill}</a>
                    ))??""}

                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">{emp?.address?.[0]?.permanantAddress?.[0]?.landmark??""},{emp?.address?.[0]?.permanantAddress?.[0]?.country??""}</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center" />
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          )):<div><p>No Employees Found </p></div>}

        </div>
      </div>
      {currentpage.total>1?
      <div className="paginations ">
        <ul className="pager">
          <li><button className="pager-prev border-0" onClick={()=>currentpage?.prev?setcurrentpage(currentpage.current-1)&getCandidte(currentpage.current-1):''??""} /></li>
          <li><a className="pager-number active" >{currentpage.current}</a></li>
          <li><button className="pager-next border-0" onClick={()=>currentpage?.next?setcurrentpage(currentpage.current+1)&getCandidte(currentpage.current+1):''??""} /></li>
        </ul>
      </div>:""}
    </div>
  </section>
  {/* <section className="section-box mt-50 mb-20">
    <div className="container">
      <div className="box-newsletter">
        <div className="row">
          <div className="col-xl-3 col-12 text-center d-none d-xl-block"><img src="assets/imgs/template/newsletter-left copy.png" alt="joxBox" /></div>
          <div className="col-lg-12 col-xl-6 col-12">
            <h2 className="text-md-newsletter text-center">New Things Will Always<br /> Update Regularly</h2>
            <div className="box-form-newsletter mt-40">
              <form className="form-newsletter">
                <input className="input-newsletter" type="text" defaultValue="" placeholder="Enter your email here" />
                <button className="btn btn-default font-heading icon-send-letter">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  <Modal show={isOpen} onHide={()=>setIsOpen(false)&Nulldata()}>
        <Modal.Header closeButton>
          <Modal.Title><h4>HR</h4></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated} onSubmit={(e)=>Check_Validation(e,Addcompanyhandler,setValidated)} className="login-register text-start mt-20 pb-30" action="#">
       <div>
        <div className="form-group ">
          <div className="text__center">
            <select value={hrdata?.HR??""} disabled required onChange={(e)=>sethrdata({...hrdata,HR:e.target.value})} className="cs-select cs-skin-elastic cs-skin-elastic1 pl-20 form-control">
              <option value=""  defaultValue="" disabled>Select an HR</option>
              {employeesdata.length?employeesdata.map((emp,ek)=>(
                <option key={ek} value={emp._id}>{emp.firstName} {emp.middleName} {emp.lastName}</option>
              )):""}
              
              {/* <option value>Shibin</option>
              <option value>Rahul</option> */}
            </select>
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
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={()=>setIsOpen(false)&Nulldata()}>
            Close
          </Button>
          
        </Modal.Footer> */}
      </Modal>
</main>
    <Helmet>
    <script src="https://kit.fontawesome.com/065c1878aa.js" crossorigin="anonymous"></script>
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
    <script src="/assets/js/noUISlider.js"></script>
    <script src="/assets/js/slider.js"></script>
    <script src="/assets/js/main8c94.js?v=4.1"></script>
    </Helmet>
    </>
  )
}
