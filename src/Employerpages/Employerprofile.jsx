import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Simplecontext } from "../Commonpages/Simplecontext";
import { Form } from "react-bootstrap";
import Axioscall from "../Commonpages/Axioscall";
import moment from 'moment';
import { notify, notifyerror } from "../Commonpages/toast";
import Filestack from "../Commonpages/Filestack";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import jwt_decode from "jwt-decode";
export default function Employerprofile() {
  const {logouthandler,userdetail,Check_Validation,employeedata,setemployeedata,getUser,Filestackhandler,Decodeall,hrdata,Hrcheck}=useContext(Simplecontext) 
  const [validated,setValidated]=useState(false)
  const [certificatedata,setcertificatedata]=useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [load,setload]=useState(false)
  const [addressdata,setaddressdata]=useState([]);
  const [notcomplete,setnotcomplete]=useState(false)
  const [photomodal,setphotomodal]=useState({modal:false,data:""})
  const [emailotp,setemailotp]=useState('')
  const numberRegex = /^\d+$/;
  useEffect(() => {
    window.scrollTo(0,0)
    if(userdetail?.status==="rejected"??""){
      setnotcomplete(true)
    }
    if(userdetail?.certificate?.length===0??""){
      setnotcomplete(true)
    }
    Hrcheck()
  }, [])
  useEffect(()=>{
    if(!Object.keys(certificatedata).length){
    if(employeedata.certificate?.length){
      setcertificatedata(employeedata.certificate[0])
      setemployeedata({...employeedata,address_proof_type:employeedata.certificate[0].name})
    }}
  },[employeedata])
 const Employeeupdate=async()=>{
  try {
    setIsOpen(true)
    let datalist = {...employeedata}
    if (employeedata._id){
      datalist.id=employeedata._id   
    }
    if(employeedata.status==="rejected"){
      datalist.status="pending"
    }
    if(Object.keys(certificatedata).length){
      if (certificatedata.front_url&&certificatedata.back_url){
        datalist.certificate = [{...certificatedata , name : employeedata.address_proof_type}]
      }}else{
        if(employeedata.address_proof_type){
          datalist.certificate
        }
      }
    let data = await Axioscall("put","company",datalist)
    if(data.status===200){
      getUser(); 
      notify("Updated Successfully")
      window.scrollTo(0,0)
    } 
    setIsOpen(false)
  } catch (error) {
    console.log("error",error)
    setIsOpen(false)
  }

 }
 const Bannerhandler=async(ratio)=>{
  try {
    let data =await Filestack(ratio)
    let datalist = {...employeedata}
    if (data){
      datalist.id=employeedata._id
      datalist.bannerImage=data
    }
    let dataupdate = await Axioscall("put","company",datalist)
    if (dataupdate.status){
      getUser(); 
      notify("Image Updated")  
    }
  } catch (error) {
    console.log(error)
  }
  
 }
 const zipcodeHandler=async(e,code)=>{
  setload(true)
  let data =await axios.get(`https://api.postalpincode.in/pincode/${code}`)
  if(data.data[0].Status==='Success'){
    
    e.target.classList.remove('is-invalid');
    let place = data.data[0].PostOffice[0]
    setemployeedata({...employeedata,address:[{...employeedata.address[0],city:place.Name,state:place.State,country:place.Country}]})
  }else{
    e.target.classList.add('is-invalid');
  }
  setload(false)
}
const ConfirmmailSend=async()=>{
  try {
    setload(true)
    let data = await Axioscall("post","company/sendcode",{email:userdetail.email})
    if(data.status===200){
      notify("check your mail for verification otp")
      setIsOpen(true)
    }else{
      notifyerror("Something Went wrong Sent again")
    }
    setload(false)
  } catch (error) {
    setload(false)
    console.log(error)
    notifyerror("Something Went wrong Sent again")
  }
}

const verifyotp=async()=>{
  try {
      
    let body={
      "email" : userdetail.email,
      "otp" : emailotp
    }
    let data = await Axioscall("post","company/verifycode",body)
    if(data.status===200){
      setIsOpen(false)
      Employeeupdate()
      
    }
    else(
      notifyerror(data.response.data.message )
    )
  } catch (error) {
    console.log(error)
  }

}
function Decodetoken (){
  var decoded = jwt_decode(window.localStorage.getItem('craig-token'))
  if(decoded){
   
    return decoded
  }
}
  return (
    <>
      <main className="main">
      {/* {userdetail?.status==="rejected"?
          <><div><img src="\assets\imgs\page\blog\warning-icon.png" width={100} alt="cookie" /></div>
          <p>Your Profile is Rejected  due to "{userdetail?.rejectedReason??""}" Update Your Profile Again..</p></>
          : userdetail?.certificate?.length===0?<>
          <div><img src="\assets\imgs\page\blog\warning-icon.png" width={50} alt="cookie" /></div>
            <p>Your Profile is Incomplete  <br/> Upload Certificates to complete ....</p></>
            :""??""
          } */}
      {userdetail?.status==="rejected"?
      <section>
          <div className="container mt-5">
            <div className="row">        
              <div className="col-sm-12">
                <div className="alert fade alert-simple alert-danger alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show " role="alert" data-brk-library="component__alert">
                  {/* <button type="button" className="close font__size-18" data-dismiss="alert">
                    <span aria-hidden="true">
                      <i className="fa fa-times danger " />
                    </span>
                    <span className="sr-only">Close</span>
                  </button> */}
                  <i class="start-icon fa fa-exclamation-triangle faa-flash animated"></i>
                  <strong className="font__weight-semibold">Warning !</strong> Your Profile is Rejected  due to "{userdetail?.rejectedReason??""}" Update Your Profile Again.. </div>
              </div>
              
            </div>
          </div>
        </section>:userdetail?.certificate?.length===0?
              <section>
          <div className="container mt-5">
            <div className="row">      
              <div className="col-sm-12">
                <div className="alert fade alert-simple alert-danger alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show " role="alert" data-brk-library="component__alert">
                  {/* <button type="button" className="close font__size-18" data-dismiss="alert">
                    <span aria-hidden="true">
                      <i className="fa fa-times danger " />
                    </span>
                    <span className="sr-only">Close</span>
                  </button> */}
                  <i class="start-icon fa fa-exclamation-triangle faa-flash animated"></i>&nbsp;&nbsp;
                  <strong className="font__weight-semibold">Warning !</strong> Your Profile is Incomplete . Upload Certificates to complete </div>
              </div>
              
            </div>
          </div>
        </section>
        :""??""
        }

        <div className="carousel-inner"></div>
        {load? 
            <div className="spinner-container">
                        <div className="spinner " />
                      </div>:null}
                     
        <section className="section-box-2">
          <div className="container">
            <div className="banner-hero banner-image-single">
              <img
                src={userdetail.bannerImage?userdetail?.bannerImage ?? 'assets/imgs/page/candidates/img copy.png':'assets/imgs/page/candidates/img copy.png'}
                style={{ width:"1116px",height:"308px"}}
                alt="jobbox"
              />
              <button className="btn-editor" style={{border:"0"}} onClick={()=>Bannerhandler("banner")} />
            </div>
            <div className="box-company-profile">
              <div className="image-compay">
                <img
                style={{ height:"85px" , width:"85px"}}
                  src={ userdetail?.profilePhoto ?? 'assets/imgs/page/candidates/candidate-profile copy.png'}
                  alt="jobbox"
                />
              </div>
              <div className="row mt-10">
                <div className="col-lg-8 col-md-12">
                  <h5 className="f-18">
                    {hrdata?.username??userdetail?.user?.username??""}
                    {/* {hrdata?.username??userdetail?userdetail.user.username:""} */}
                    <span className="card-location font-regular ml-20">
                      {userdetail?userdetail?.address?.[0]?.city??"":""},{userdetail?userdetail?.address?.[0]?.country??"":""}
                    </span>
                  </h5>
                  {userdetail.status==="verified"?
                    <div className=""><img className="ml-3" src="/assets/imgs/page/candidates/verified.png" alt="jobbox" /></div>
                    :<div className=""><img className="ml-3" src="\assets\imgs\page\candidates\grey.png" alt="jobbox" /></div>}
                  <p className="mt-0 font-md color-text-paragraph-2 mb-15">
                    {userdetail?userdetail?.name??"":""}
                  </p>
                </div>
              </div>
            </div>
            <div className="border-bottom pt-10 pb-10" />
          </div>
        </section>
        <section className="section-box mt-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="box-nav-tabs nav-tavs-profile mb-5">
                  <ul className="nav" role="tablist">
                    <li>
                      <a
                        className="btn btn-border aboutus-icon mb-20 active"
                        href="#tab-my-profile"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="tab-my-profile"
                        aria-selected="true"
                      >
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a className="btn btn-border recruitment-icon mb-20" href="#tab-saved-jobs" data-bs-toggle="tab" role="tab" aria-controls="tab-my-jobs" aria-selected="false">
                        Update Profile
                      </a>
                    </li>
                    {Decodeall().role==='hr'?"":
                    <li>
                    <Link className="btn btn-border people-icon mb-20" to="/hrlist" >
                        HR
                      </Link>
                    </li>
                      }
                    <li>
                      <Link className="btn btn-border peoples-icon mb-20" to="/employeelist" >
                        Employees
                      </Link>
                    </li>
                  </ul>
                  <div className="border-bottom pt-10 pb-10" />
                  <div className="mt-10 mb-10">
                    <a href="#" onClick={()=>{logouthandler();}}> Log Out</a>
                  </div>
                </div>
                <div className="mt-20 mb-20">                    
                </div>
              </div>
              <div className="col-lg-9 col-md-8 col-sm-12 col-12 mb-50">
                <div className="content-single">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="tab-my-profile"
                      role="tabpanel"
                      aria-labelledby="tab-my-profile"
                    >
                      <div className="  box-info-profie"></div>
                      <div className="row form-contact">
                        <div className="col-lg-6 col-md-12">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="card-grid- hover-up">
                              <div className="card-grid-2-image-left">
                                <div className="card-grid-2-image-rd online">
                                  <a href="candidate-details.html"></a>
                                </div>
                                <div className="card-profile pt-10">
                                  <a href="candidate-details.html">
                                    <h5>{hrdata?.username??userdetail?.user?.username??""}</h5>
                                    {/* <h5>{hrdata?.username??userdetail?userdetail?.user.username??""??"":""}</h5> */}
                                  </a>
                                  <span className="font-xs color-text-mutted">
                                    {userdetail?.name??""}
                                  </span>
                                </div>
                              </div>
                              {/* profile start..................... */}
                             <div className="card-block-info class-verification1">
                              <table style={{width:"100%"}}>
                                <tbody><tr>
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
                                    <td> Location</td>
                                    <td>:</td>
                                    <td className="td-verify">{userdetail?.address?.[0]?.landmark??""}</td>
                                  </tr>
                                  <tr>
                                    <td>Age of the Company</td>
                                    <td>:</td>
                                    <td className="td-verify">{userdetail?.ageOfCompany??""}</td>
                                  </tr>
                                  <tr>
                                    <td>Number of Employees </td>
                                    <td>:</td>
                                    <td className="td-verify">{userdetail?.noOfemployees??""}</td>
                                  </tr>
                                  <tr>
                                    <td>Number of Directors</td>
                                    <td>:</td>
                                    <td className="td-verify">{userdetail?.noOfdirectors??""}</td>
                                  </tr>
                                  <tr>
                                    <td>Industry Type</td>
                                    <td>:</td>
                                    <td className="td-verify">{userdetail?.industryType??""}</td>
                                  </tr>
                                  <tr>
                                    <td>Service Provided </td>
                                    <td>:</td>
                                    <td className="td-verify">{userdetail?.serviceProdvided??""}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                              {/* profile end..................... */}
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="tab-my-jobs"
                      role="tabpanel"
                      aria-labelledby="tab-my-jobs"
                    ></div>
                    <div
                      className="tab-pane fade"
                      id="tab-saved-jobs"
                      role="tabpanel"
                      aria-labelledby="tab-saved-jobs"
                    >
                      <h3 className="mt-0 mb-15 color-brand-1">My Account</h3>
                      <a className="font-md color-text-paragraph-2" href="#">
                        Update your profile
                      </a>
                      <div className="mt-35 mb-40 box-info-profie">
                        <div className="image-profile">
                          <img
                            src={employeedata.profilePhoto?employeedata.profilePhoto:"assets/imgs/page/candidates/candidate-profile copy.png"}
                            alt="jobbox"
                          />
                        </div>
                        <button className="btn btn-apply" onClick={()=>Filestackhandler("square",setemployeedata,employeedata,'profilePhoto')}>Upload Avatar</button>
                        <button className="btn btn-link" onClick={()=>setemployeedata({...employeedata,profilePhoto:''})}>Delete</button>
                      </div>
                      {/* form ................................... */}
                      <div className="row form-contact">
                        <Form noValidate validated={validated} onSubmit={(e)=>Check_Validation(e,ConfirmmailSend,setValidated)} >
                        <div className="col-lg-12 col-md-12 row ">
                          <div className="form-group col-lg-6 mb-3">
                            <label className="font-sm color-text-mutted mb-10">Company Name *</label>
                            <input required value={employeedata?.name??""} onChange={(e)=>setemployeedata({...employeedata,name:e.target.value})} className="form-control" type="text" placeholder="Company Name" />
                            <Form.Control.Feedback type="invalid">Please provide a Company Name</Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-6 mb-3">
                            <label className="font-sm color-text-mutted mb-10">Email *</label>
                            <input required className="form-control" disabled type="text"value={employeedata?.email??""} onChange={(e)=>setemployeedata({...employeedata,email:e.target.value})}/>
                            <Form.Control.Feedback type="invalid">
                              Please provide valid email
                            </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-6 mb-3">
                            <label className="font-sm color-text-mutted mb-10">Contact number</label>
                            <input required className="form-control" disabled type="text" value={employeedata?.phone??""} placeholder="01 - 234 567 89" onChange={(e)=>setemployeedata({...employeedata,phone:e.target.value})} />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid phone
                            </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-6 mb-3">
                            <label className="font-sm color-text-mutted mb-10">Incorporation Date</label>
                            <input required className="form-control" type="date" value={moment(employeedata?.incorporationDate).format("YYYY-MM-DD")??""} placeholder="01 - 234 567 89" onChange={(e)=>setemployeedata({...employeedata,incorporationDate:e.target.value})}  />
                            <Form.Control.Feedback type="invalid">
                              Please provide Incorporation Date
                            </Form.Control.Feedback>
                          </div>
                         
                          <label className="dropdown col-lg-6 col-sm-12 ">
                          <label required className="font-sm color-text-mutted mb-10">Industry Type</label>
                            <div className="text__center">
                              <select value={employeedata?.industryType??""} placeholder="01 - 234 567 89" onChange={(e)=>setemployeedata({...employeedata,industryType:e.target.value})} className="cs-select cs-skin-elastic cs-skin-elastic1">
                              <option value="" defaultValue="" disabled >Industry Type</option>
                              <option value="software-development">Software Development</option>
                              <option value="web-development">Web Development</option>
                              <option value="mobile-app-development">Mobile App Development</option>
                              <option value="data-analytics">Data Analytics</option>
                              <option value="cloud-computing">Cloud Computing</option>
                              <option value="cybersecurity">Cybersecurity</option>
                              <option value="artificial-intelligence">Artificial Intelligence</option>
                              <option value="machine-learning">Machine Learning</option>
                              <option value="networking-infrastructure">Networking and Infrastructure</option>
                              <option value="database-management">Database Management</option>
                              <option value="IT-consulting">IT Consulting</option>
                              <option value="IT-support">IT Support and Services</option>
                              </select>
                            </div>
                            <Form.Control.Feedback type="invalid">
                              Please provide Industry type
                            </Form.Control.Feedback>
                          </label>
                          
                          <label className="dropdown col-lg-6 col-sm-12  ">
                          <label className="font-sm color-text-mutted mb-10">Service Provided</label>
                            <div className="text__center">
                              <select required value={employeedata?.serviceProdvided??""} placeholder="01 - 234 567 89" onChange={(e)=>setemployeedata({...employeedata,serviceProdvided:e.target.value})} className="cs-select cs-skin-elastic cs-skin-elastic1">
                              <option value hidden defaultValue="" >Service Provided</option>
                              <option value="software-development">Software Development</option>
                              <option value="web-development">Web Development</option>
                              <option value="mobile-app-development">Mobile App Development</option>
                              <option value="data-analytics">Data Analytics</option>
                              <option value="cloud-computing">Cloud Computing</option>
                              <option value="cybersecurity">Cybersecurity</option>
                              <option value="artificial-intelligence">Artificial Intelligence</option>
                              <option value="machine-learning">Machine Learning</option>
                              <option value="networking-infrastructure">Networking and Infrastructure</option>
                              <option value="database-management">Database Management</option>
                              <option value="IT-consulting">IT Consulting</option>
                              <option value="IT-support">IT Support and Services</option>
                              </select>
                            </div>
                            <Form.Control.Feedback type="invalid">
                              Please provide Service Provided
                            </Form.Control.Feedback>
                          </label>
                          <div className="form-group col-lg-4 mb-3">
                            <label className="font-sm color-text-mutted mb-10">Age of the company</label>
                            <input required  className={`form-control ${employeedata.ageOfCompany?numberRegex.test(employeedata.ageOfCompany)?"":"is-invalid":""}` } type="text" pattern="[0-9]*" value={employeedata?.ageOfCompany??""} placeholder="01 - 234 567 89" onChange={(e)=>setemployeedata({...employeedata,ageOfCompany:e.target.value})} />
                            <Form.Control.Feedback type="invalid">
                              Please provide Age of the company as digit
                            </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-4 mb-3">
                            <label className="font-sm color-text-mutted mb-10">Number Of Employees</label>
                            <input required className={`form-control ${employeedata.noOfemployees?numberRegex.test(employeedata.noOfemployees)?"":"is-invalid":""}` } type="text" pattern="[0-9]*" value={employeedata?.noOfemployees??""} placeholder="01 - 234 567 89" onChange={(e)=>setemployeedata({...employeedata,noOfemployees:e.target.value})} />
                            <Form.Control.Feedback type="invalid">
                              Please provide No of Employees as digit
                            </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-4 mb-3">
                            <label className="font-sm color-text-mutted mb-10">Number Of Directors</label>
                            <input required className={`form-control ${employeedata.noOfdirectors?numberRegex.test(employeedata.noOfdirectors)?"":"is-invalid":""}` } type="text" pattern="[0-9]*" value={employeedata?.noOfdirectors??""} placeholder="01 - 234 567 89" onChange={(e)=>setemployeedata({...employeedata,noOfdirectors:e.target.value})} />
                            <Form.Control.Feedback type="invalid">
                              Please provide No of Directors
                            </Form.Control.Feedback>
                          </div>
                          <label className="dropdown col-lg-12 col-sm-12 mt-15">
              <div className="text__center">
                <select required={certificatedata.front_url||certificatedata.back_url} onChange={(e)=>setemployeedata({...employeedata,address_proof_type:e.target.value})}   value={employeedata.address_proof_type??""} className={`form-control cs-select mb-0 cs-skin-elastic cs-skin-elastic1 ${certificatedata.front_url||certificatedata.back_url?employeedata.address_proof_type?'':"is-invalid":""}` }>
                  <option value="" defaultValue="" disabled>Government Approved Certificate</option>
                  <option value="MOA">MOA</option>
                  <option value="Incorporation Certificate">Incorporation Certificate</option>
                  <option value="Panchayath Certificate">Panchayath Certificate</option>
                </select>
              <Form.Control.Feedback className="text-start"  type="invalid">Please Select Certificate type</Form.Control.Feedback>
              </div>
            </label>
            <div className="form-group col-lg-6 col-sm-12">
              <label className="font-sm color-text-mutted">Certificate Front side*</label> 
              <div className='imageselectorborder d-flex '>
                <button onClick={()=>Filestackhandler("landscape",setcertificatedata,certificatedata,'front_url')}  type='button' className='imageselector'> Choose Image</button>
                <p onClick={()=>setphotomodal({...photomodal,modal:true,data:certificatedata.front_url})} style={{overflow:"hidden"}}>&nbsp;{certificatedata.front_url??<span>No file chosen</span>}</p>
              </div>
            </div>
            <div className="form-group col-lg-6 col-sm-12">
              <label className="font-sm color-text-mutted">Certificate Back side*</label> 
              <div className='imageselectorborder d-flex '>
              <button onClick={()=>Filestackhandler("landscape",setcertificatedata,certificatedata,'back_url')}  type='button' className='imageselector'> Choose Image</button>
                <p  onClick={()=>setphotomodal({...photomodal,modal:true,data:certificatedata.back_url})} style={{overflow:"hidden"}}>&nbsp;{certificatedata.back_url??<span>No file chosen</span>}</p>
              </div>
            </div>
                          <h6 className="permenent-address mb-3"> Address</h6>
                          <div className="form-group mb-3">
                            <label className="font-sm color-text-mutted mb-10">Address Line 1</label>
                            <input required type="text" className="form-control" placeholder="Address Line 1"   value={employeedata?.address?.[0]?.line1??""??""} onChange={(e)=>setemployeedata({...employeedata,address:[{...employeedata.address[0],line1:e.target.value}]})} id="pAddressLine1" />
                            <Form.Control.Feedback type="invalid">
                              Please provide address
                            </Form.Control.Feedback>
                          </div>
                          <div className="form-group mb-3">
                            <label className="font-sm color-text-mutted mb-10">Address Line 2</label>
                            <input required type="text" className="form-control" placeholder="Address Line 2"  value={employeedata?.address?.[0]?.line2??""??""} onChange={(e)=>setemployeedata({...employeedata,address:[{...employeedata.address[0],line2:e.target.value}]})} id="pAddressLine2" />
                            <Form.Control.Feedback type="invalid">
                              Please provide address 
                            </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-md-6 mb-3">
                            <label className="font-sm color-text-mutted mb-10">Landmark</label>
                            <input type="text" className="form-control" placeholder="Landmark" id="pLandmark"  value={employeedata?.address?.[0]?.landmark??""??""} onChange={(e)=>setemployeedata({...employeedata,address:[{...employeedata.address[0],landmark:e.target.value}]})}/>
                            <Form.Control.Feedback type="invalid">
                              Please provide landmark
                            </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-md-6 mb-3 ">
                            <label className="font-sm color-text-mutted mb-10">Zip Code</label>
                            <input required type="text" className="form-control" onBlur={(e)=>zipcodeHandler(e,employeedata?.address?.[0]?.zipcode??"")} placeholder="Zip Code"  value={employeedata?.address?.[0]?.zipcode??""??""} onChange={(e)=>setemployeedata({...employeedata,address:[{...employeedata.address[0],zipcode:e.target.value}]})} id="pZipcode" />
                            <Form.Control.Feedback type="invalid">
                              Please provide Zipcode
                            </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-md-4  mb-3">
                            <label className="font-sm color-text-mutted mb-10">City</label>
                            <input required type="text" className="form-control" placeholder="City"  value={employeedata?.address?.[0]?.city??""??""} onChange={(e)=>setemployeedata({...employeedata,address:[{...employeedata.address,city:e.target.value}]})} id="pCity" />
                            <Form.Control.Feedback type="invalid">
                              Please provide city
                            </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-md-4 mb-3">
                            <label className="font-sm color-text-mutted mb-10">State</label>
                            <input required type="text" className="form-control" placeholder="State" id="pState" value={employeedata?.address?.[0]?.state??''} onChange={(e)=>setemployeedata({...employeedata,address:[{...employeedata.address,state:e.target.value}]})}/>
                            <Form.Control.Feedback type="invalid">
                              Please provide state
                            </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-md-4 mb-3 ">
                            <label className="font-sm color-text-mutted mb-10">Country</label>
                            <input required type="text" className="form-control" placeholder="country" id="pCountry" value={employeedata?.address?.[0]?.country??""??""} onChange={(e)=>setemployeedata({...employeedata,address:[{...employeedata.address,country:e.target.value}]})}/>
                            <Form.Control.Feedback type="invalid">
                              Please provide country
                            </Form.Control.Feedback>
                          </div>
                          {/* <div className="text-center">{validated?<span className="text-danger">Fill all required field</span>:""}</div> */}
                          <div className="box-button mt-15 ">

                            <button  type="submit" className="btn btn-apply-big font-md font-bold">Update</button>
                            
                          </div>
                         
                        </div>
                          </Form>
                      </div>
                      {/* form ends................................... */}
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
                <div className="col-xl-3 col-12 text-center d-none d-xl-block">
                  <img
                    src="assets/imgs/template/newsletter-left copy.png"
                    alt="joxBox"
                  />
                </div>
                <div className="col-lg-12 col-xl-6 col-12">
                  <h2 className="text-md-newsletter text-center">
                    New Things Will Always
                    <br /> Update Regularly
                  </h2>
                  <div className="box-form-newsletter mt-40">
                    <form className="form-newsletter">
                      <input
                        className="input-newsletter"
                        type="text"
                        defaultValue=""
                        placeholder="Enter your email here"
                      />
                      <button className="btn btn-default font-heading icon-send-letter">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* modal................................................................ */}
      <Modal show={isOpen} onHide={()=>setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title><h4>Check your email for otp</h4></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="form-group  mt-10">
             <input onChange={(e)=>setemailotp(e.target.value)}  className={`form-control mb-3`} id="input-5" type="otp"  name="otp" placeholder="otp" />
             <Form.Control.Feedback type="invalid">not  match</Form.Control.Feedback>
           </div>
           <div className="form-group">
           <button className="btn btn-brand-1 hover-up w-100" type="button" onClick={()=>verifyotp()}  name="login">Submit OTP</button>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setIsOpen(false)}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      {/* popup warning start */}
     {/* <section className="sec__container">
  <div className="cookie__box">
    <img src="https://i.postimg.cc/mDLqkpv7/cookie.png" alt="cookie" />
    
    <div className="content">
      <h2>Cookie Notice</h2>
      <p>#### uses cookies because they're freshly baked &amp; tasty.</p>
      <div className="btn__group">
        <button className="accept__btn">Accept</button>
        <a href="#####" target="_blank" className="learn__more-btn">Learn More</a>
      </div>
    </div>
  </div>
</section> */}

      {/* popup warning end */}
      {/* <Modal show={notcomplete} onHide={()=>setnotcomplete(false)} centered  size="sm">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="mt-3 text-center">
          {userdetail?.status==="rejected"?
          <><div><img src="\assets\imgs\page\blog\warning-icon.png" width={100} alt="cookie" /></div>
          <p>Your Profile is Rejected  due to "{userdetail?.rejectedReason??""}" Update Your Profile Again..</p></>
          : userdetail?.certificate?.length===0?<>
          <div><img src="\assets\imgs\page\blog\warning-icon.png" width={50} alt="cookie" /></div>
            <p>Your Profile is Incomplete  <br/> Upload Certificates to complete ....</p></>
            :""??""
          }
          
        <div className="text-end mt-4">
          </div>
        
        </Modal.Body>
      </Modal> */}
      <Modal show={photomodal.modal} onHide={()=>setphotomodal({...photomodal,modal:false})}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        {photomodal.data?
        <img
                src={photomodal.data?photomodal?.data:""??""}
                // style={{ width:"1116px",height:"308px"}}
                alt="jobbox"
              />
              :<p> Image Not Found</p>}
        </Modal.Body>
      </Modal>
        </section>
      </main>
    </>
  );
}
