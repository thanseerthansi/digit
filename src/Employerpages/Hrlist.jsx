import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import Axioscall from '../Commonpages/Axioscall'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Simplecontext } from '../Commonpages/Simplecontext'
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { notify } from '../Commonpages/toast'
export default function Hrlist() {
  const {userdetail,Check_Validation}=useContext(Simplecontext) 
  const [employeesdata,setemployeedata]=useState([])
  const [currentpage,setcurrentpage]=useState({total:0,next:"",prev:"",current:1})
  const [fileterid,setfilterid]=useState('')
  const [isOpen, setIsOpen] = useState(false);
  const [validated,setValidated]=useState(false)
  const [load,setload]=useState(false)
  const [hrdata,sethrdata]=useState('')
  const [userid,setuserid]=useState('')
  // console.log("hrdata",hrdata)
  useEffect(() => {
    getCandidte()
    window.scrollTo(0,0)
  }, [])
  
  const getCandidte=async(page)=>{
    try {
      let body={
        limit:16,
        page:page?page:currentpage.current,
        uniqueid:fileterid,
        designation:"HR",
        company_id:window.localStorage.getItem("graiduserid")
      }
      let data=await Axioscall("get","employee",body)
      // console.log("dataemployee",data.data)
      if (data.status===200){
        let datapage = data.data.data
        setcurrentpage({...currentpage,total:datapage.totalPages,next:datapage.hasNextPage,prev:datapage.hasPrevPage})
        setemployeedata(data.data.data.docs)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const hrAssign=async(user)=>{
   
    let msg ="HR added Successfully"
    setload(true)
    try {
      let body={
        user : userid?userid:user,
        company : window.localStorage.getItem("graiduserid"),
        role:'hr',
        
    }
    if(hrdata.type==="assign"){

    }else{
      msg ="HR Removed Successfully"
      body.type="remove"
    }
    let obj ={...hrdata,...body}
    // console.log("bodyyyyyyyyyy1",obj)
      let data = await Axioscall("post","employee/assign",obj)
      // console.log("data",data)
      if(data.status===200){
        notify(msg)
        getCandidte()
        sethrdata('')
        setIsOpen(false)
        Nulldata()
      }
    } catch (error) {
      console.log(error) 
    }
    setload(false)
  }
  const Nulldata=()=>{
    sethrdata('')
  }
  return (
    <>
    <main className="main">
  <div className="carousel-inner">
  </div>
  {load? 
  <div className="spinner-container">
    <div className="spinner" />
  </div>:null}
  <section className="section-box-2">
    <div className="container">
      <div className="banner-hero banner-company">
        <div className="block-banner text-center">
          <h3 className="wow animate__animated animate__fadeInUp">Browse Candidates</h3>
          {/* <div className="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, <br className="d-none d-xl-block" />atque delectus molestias quis?</div> */}
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
              {emp?.user?.[0]?.isHr?<>
                <div className='text-end mr-5 pt-5'><button onClick={()=>setuserid(emp?._id??"")&hrAssign(emp?._id??"")} className='btn btn-tags-sm '>Remove HR</button></div>
              </>:
                <div className='text-end mr-5 pt-5'><button onClick={()=>{setIsOpen(true)&setuserid(emp?.user?.[0]?._id??"") & sethrdata({...hrdata,HR:emp._id,type:"assign" })}} className='btn btn-tags-sm '>Create HR</button></div>
              ??""}
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><Link to={`/candidatedetails/${emp._id}`}>
                    <figure><img alt="jobBox" src={emp?.profilePhoto??`assets/imgs/page/candidates/user1.png`}  /></figure></Link></div>
                <div className="card-profile pt-10"><Link to={`/candidatedetails/${emp._id}`}>
                    <h5>{emp.firstName} {emp.middleName} {emp.lastName}</h5></Link><span className="font-xs color-text-mutted">{emp?.careerandeducation?.[0]?.designation??"designation"}</span>
                  <h6 className="card-id">ID:{emp.uniqueid}</h6>
                  {/* <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div> */}
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
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )):<div><p>No HR Found in Your Company</p></div>}
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
  <section className="section-box mt-50 mb-20">
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
  </section>
  <Modal show={isOpen} onHide={()=>setIsOpen(false)&Nulldata()}>
        <Modal.Header closeButton>
          <Modal.Title><h4>HR</h4></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated} onSubmit={(e)=>Check_Validation(e,hrAssign,setValidated)} className="login-register text-start mt-20 pb-30" action="#">
       <div>
        <div className="form-group ">
          <div className="text__center">
            <select value={hrdata?.HR??""} required onChange={(e)=>sethrdata({...hrdata,HR:e.target.value})} className="cs-select cs-skin-elastic cs-skin-elastic1 pl-20 form-control">
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
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setIsOpen(false)&Nulldata()}>
            Close
          </Button>
          
        </Modal.Footer>
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
