import React, { useState ,useEffect, useContext, useRef} from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import Filestack from "../Commonpages/Filestack";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axioscall from "../Commonpages/Axioscall";
import { Form } from "react-bootstrap";
import { Simplecontext } from "../Commonpages/Simplecontext";
import axios from "axios";
import ru from 'react-phone-number-input/locale/ru'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
export default function Employerregister() {
  const {Check_Validation}=useContext(Simplecontext)
  const [companydata,setcompanydata]=useState([]);
  const [certificatedata,setcertificatedata]=useState([]);
  const [addressdata,setaddressdata]=useState([]);
  const [validated,setValidated]=useState(false)
  const [load,setload]=useState(false)
  const [emailvalid,setemailvalid]=useState(false)
  const [phonevalid,setphonevalid]=useState(false)
  const [phonevalidationdata,setphonevalidationdata]=useState({otp:"",verifynumber:false})
  const [emailvalidationdata,setemailvalidationdata]=useState({otp:"",verifyemail:false})
  const inputemail = useRef(false);
  const [disablephone,setdisablephone]=useState(false)
  const numberRegex = /^\d+$/;
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  let regex = new RegExp(/(0|91)?[6-9][0-9]{9}/);
  const notify = (msg) => toast.success(msg, {
    position: "top-left",
    theme: "dark",
    });
  const notifyerror = (msg) => toast.error(msg, {
    position: "top-left",
    theme: "dark",
    });

  const navigate  = useNavigate();
 
  const Filestackhandler=async(ratio,setvalue,value,keypair)=>{
    let data =await Filestack(ratio)
    if (data){
      setvalue({...value,[keypair]:data})
    }  
  }

  const handlePhoneChange = (value) => {
    setcompanydata({ ...companydata, phone: value });
  };
  const Regstersubmithandler= async ()=>{
    setload(true)
    try {
      let datalist = {...companydata}
      if (!datalist.profilePhoto){
        notifyerror("please add ProfileImage")
        setload(false)
        return 
      }
      if (Object.keys(addressdata).length){
        datalist.address=[{...addressdata}]
      }
      
      if(Object.keys(certificatedata).length){
        if (certificatedata.front_url&&certificatedata.back_url){
          datalist.certificate = [{...certificatedata , name : companydata.address_proof_type}]
        }    
      }
      datalist.role = "employer"
      datalist.status = "pending"
      if (  datalist.password != datalist.repassword)
      {
        notifyerror("Password Mismatch")
      }
      else
      {
        const data = await Axioscall("post","company/",datalist)
        if (data.status === 200)
        {
          notify("Company Registered Successfully , Please Login Your Account")
          navigate("/employerlogin")
        }
      }
    } catch (error) {
      console.log("error",error)
      setload(false)
    }
    setload(false)
  }
  const zipcodeHandler=async(e,code)=>{
    setload(true)
    let data =await axios.get(`https://api.postalpincode.in/pincode/${code}`)
    console.log("zipcode data",data.data[0].Status)
    if(data.data[0].Status==='Success'){
      
      e.target.classList.remove('is-invalid');
      let place = data.data[0].PostOffice[0]
      setaddressdata({...addressdata,city:place.Name,state:place.State,country:place.Country})
    }else{
      e.target.classList.add('is-invalid');
    }
    setload(false)
  }
  const emailVerification=async()=>{
    try {
      setload(true)
      let data = await Axioscall("post","company/sendcode",{email:companydata.email})
      console.log("dataemail",data)
      if(data.status===200){
        notify("check your mail for verification otp")
        setemailvalidationdata({...emailvalidationdata,verifynumber:true})
      }else{
        notifyerror("Something Went wrong Sent again")
      }
      setload(false)
    } catch (error) {
      setload(false)
      notifyerror("Something Went wrong Sent again")
    }
  }
  const emailotpverify=async()=>{
    try {   
      
      let body={
        "email" : companydata.email,
        "otp" : emailvalidationdata.otp
      }
      let data = await Axioscall("post","company/verifycode",body)
      if(data.status===200){
        inputemail.current.disabled=true
        setcompanydata({...companydata,username:companydata.email})
        setemailvalid(true)
      }
      else(
        notifyerror(data.response.data.message )
      )
    } catch (error) {
      console.log(error)
    }
  }
  
  const phoneVerification=async()=>{
    try {
      setload(true)
      let data =await Axioscall("post","otp/send-otp",{mobile:companydata.phone})
      console.log("daat",data)
      if (data.status===200){
        notify("check your phone for verification otp")
        setphonevalidationdata({...phonevalidationdata,verifynumber:true})
      }
    } catch (error) {
      
      notifyerror("try again")
    }
    setload(false)
  }
  const phoneotpverify=async()=>{
    setload(true)
    try {
      
      let body={
        "mobile" : companydata.phone,
        "otp" : phonevalidationdata.otp
      }
      let data = await Axioscall("post","otp/verify-otp",body)
      console.log("data",data)
      if(data.status===200){
        setdisablephone(true)
        setphonevalid(true)
      }
      else(
        notifyerror(data.response.data.message )
      )
    } catch (error) {
      console.log(error)
    }
    setload(false)
  }
  return (
    <>
    <main className="main">
    
  <div className="carousel-inner">
  </div>
  <section className="pt-20 login-register">
    <div className="container"> 
      <div className=" login-register-cover">
        <div className="col-lg-6 col-md-9 col-sm-12 mx-auto">
          <div className="text-center">
            <p className="font-sm text-brand-2">Register</p>
            <h2 className="mt-10 mb-5 text-brand-1">Complete Profile Today</h2>
          </div>
          <Form  noValidate validated={validated} onSubmit={(e)=>Check_Validation(e,Regstersubmithandler,setValidated)} className="login-register text-start mt-20 reg-form row" >
            <div className="form-group mb-3">
              <input className="form-control" required onChange={(e)=>setcompanydata({...companydata,name:e.target.value})} value={companydata.name??""}  type="text"  name="name" placeholder="Company Name" />
              <Form.Control.Feedback type="invalid">Please provide a Company Name</Form.Control.Feedback>             
            </div>

            {load? 
            <div className="spinner-container">
                        <div className="spinner " />
                      </div>:null}
                     
            <div className="loader"></div>
            <div className="form-group mb-3 ">
              <input className="form-control " ref={inputemail} id="input-2" required onChange={(e)=>setcompanydata({...companydata,email:e.target.value})} value={companydata.email??""} type="email"  name="emailaddress" placeholder="Company email" />
              <Form.Control.Feedback type="invalid">Please provide a Company email</Form.Control.Feedback>
            </div>
            {emailvalid?<>
            <div className="form-group mb-3 ">
            <div className="d-flex">
            <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="IN"
                disabled={disablephone}
                value={companydata.phone}
                onChange={handlePhoneChange}
                style={{ width:"100%",fontSize: '14px',display:"flex",border:'1px solid #E0E6F6',borderRadius:"6px",paddingLeft:"13px"}}
                />
            </div>
              <Form.Control.Feedback type="invalid">Please provide valid Phone Number</Form.Control.Feedback>
            </div>
            {phonevalid?<>
            <div className="form-group mb-3 col-md-6">
              <label className="col-sm-12 font-sm color-text-mutted">Incorporation Date*</label> 
              <input className="form-control" id="input-3" onChange={(e)=>setcompanydata({...companydata,incorporationDate:e.target.value})} value={companydata.incorporationDate??""} type="date" required name="username" placeholder="Incorporation Date" />
              <Form.Control.Feedback type="invalid">Please provide incorporationDate</Form.Control.Feedback>
            </div>
            <div className="form-group mb-3 col-md-6">
              <label className="col-sm-12 font-sm color-text-mutted">Age of the company (Year)*</label>
              <input required  className={`form-control ${companydata.ageOfCompany?numberRegex.test(companydata.ageOfCompany)?"":"is-invalid":""}` } type="text" pattern="[0-9]*" onChange={(e)=>setcompanydata({...companydata,ageOfCompany:e.target.value})} value={companydata.ageOfCompany??""} placeholder="01 - 234 567 89" />
              <Form.Control.Feedback type="invalid">Please provide Age of Company</Form.Control.Feedback>
            </div>
            <div className="form-group mb-3 col-md-6">
              <label className="col-sm-12 font-sm color-text-mutted">Number Of Employees*</label> 
              <input  className={`form-control ${companydata.noOfemployees?numberRegex.test(companydata.noOfemployees)?"":"is-invalid":""}` } id="input-3" onChange={(e)=>setcompanydata({...companydata,noOfemployees:e.target.value})} value={companydata.noOfemployees??""} type="text" required name="username" placeholder="Number Of Employees" />
              <Form.Control.Feedback type="invalid">Please provide Number of Employees</Form.Control.Feedback>
            </div>
            <div className="form-group mb-3 col-md-6">
              <label className="col-sm-12 font-sm color-text-mutted">Number of Directors*</label>
              <input  className={`form-control ${companydata.noOfdirectors?numberRegex.test(companydata.noOfdirectors)?"":"is-invalid":""}` } id="input-3" onChange={(e)=>setcompanydata({...companydata,noOfdirectors:e.target.value})} value={companydata.noOfdirectors??""} type="text" required name="username" placeholder="Number of Directors" />
              <Form.Control.Feedback type="invalid">Please provide Number of Directors</Form.Control.Feedback>
            </div>
            <label className="dropdown col-lg-6 col-sm-12 mt-20">
              <div className="text__center">
                <select required onChange={(e)=>setcompanydata({...companydata,industryType:e.target.value})} value={companydata.industryType??""} className="form-control cs-select cs-skin-elastic cs-skin-elastic1">
                  <option value="" defaultValue="" disabled>Industry Type</option>
                  <option value="automotive">Automotive</option>
                  <option value="banking">Banking</option>
                  <option value="construction">Construction</option>
                  <option value="energy">Energy</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="food">Food and Beverage</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="informationtech">Information Technology</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="telecom">Telecommunications</option>
                  <option value="transportation">Transportation</option>
                  <option value="pharmaceutical">Pharmaceutical</option>
                  <option value="finance">Finance</option>
                  <option value="insurance">Insurance</option>
                  <option value="consulting">Consulting</option>
                  <option value="media">Media</option>
                  <option value="education">Education</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="real-estate">Real Estate</option>

                </select>
                <Form.Control.Feedback type="invalid">Please Select Industry Type</Form.Control.Feedback>
              </div>
              
            </label>
            <label className="dropdown col-lg-6 col-sm-12 mt-20">
              <div className="text__center">
                <select required onChange={(e)=>setcompanydata({...companydata,serviceProdvided:e.target.value})} value={companydata.serviceProdvided??""} className="form-control cs-select cs-skin-elastic cs-skin-elastic1">
                  <option defaultValue="" value='' disabled> -- Service Provided -- </option>
                  <option value="automotive">Automotive</option>
                  <option value="banking">Banking</option>
                  <option value="construction">Construction</option>
                  <option value="energy">Energy</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="food">Food and Beverage</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="informationtech">Information Technology</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="telecom">Telecommunications</option>
                  <option value="transportation">Transportation</option>
                  <option value="pharmaceutical">Pharmaceutical</option>
                  <option value="finance">Finance</option>
                  <option value="insurance">Insurance</option>
                  <option value="consulting">Consulting</option>
                  <option value="media">Media</option>
                  <option value="education">Education</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="real-estate">Real Estate</option>
                </select>
                <Form.Control.Feedback type="invalid">Please Select a Service Provided</Form.Control.Feedback>
              </div>
              
            </label>
            <label className="dropdown col-lg-12 col-sm-12 mt-15">
              <div className="text__center">
                <select required={certificatedata.front_url||certificatedata.back_url} onChange={(e)=>setcompanydata({...companydata,address_proof_type:e.target.value})}  value={companydata.address_proof_type??""} className={`form-control cs-select cs-skin-elastic cs-skin-elastic1 mb-0 ${certificatedata.front_url||certificatedata.back_url?companydata.address_proof_type?'':"is-invalid":""}`}>
                  <option value="" defaultValue="" disabled>Government Approved Certificate</option>
                  <option value="MOA">MOA</option>
                  <option value="Incorporation Certificate">Incorporation Certificate</option>
                  <option value="Panchayath Certificate">Panchayath Certificate</option>
                </select>
              <Form.Control.Feedback type="invalid">Please Select Certificate type</Form.Control.Feedback>
              </div>
            </label>
            <div className="form-group col-lg-6 col-sm-12">
              <label className="font-sm color-text-mutted">Certificate Front side*</label> 
              <div className='imageselectorborder d-flex '>
                <button onClick={()=>Filestackhandler("landscape",setcertificatedata,certificatedata,'front_url')}  type='button' className='imageselector'> Choose Image</button>
                <p style={{overflow:"hidden"}}>&nbsp;{certificatedata.front_url??<span>No file chosen</span>}</p>
              </div>
            </div>
            <div className="form-group col-lg-6 col-sm-12">
              <label className="font-sm color-text-mutted">Certificate Back side*</label> 
              <div className='imageselectorborder d-flex '>
              <button onClick={()=>Filestackhandler("landscape",setcertificatedata,certificatedata,'back_url')}  type='button' className='imageselector'> Choose Image</button>
                <p style={{overflow:"hidden"}}>&nbsp;{certificatedata.back_url??<span>No file chosen</span>}</p>
              </div>
            </div>

            <div className="form-group col-lg-6 col-sm-12">
              <label className="font-sm color-text-mutted">Profile Image*</label> 
              <div className='imageselectorborder d-flex '>
                <button onClick={()=>Filestackhandler("square",setcompanydata,companydata,'profilePhoto')}  type='button' className='imageselector'> Choose Image</button>
                <p style={{overflow:"hidden"}}>&nbsp;{companydata.profilePhoto??<span>No file chosen</span>}</p>
              </div>
            </div>
            <div className="form-group col-lg-6 col-sm-12">
              <label className="font-sm color-text-mutted">Banner Image</label> 
              <div className='imageselectorborder d-flex '>
              <button onClick={()=>Filestackhandler("banner",setcompanydata,companydata,'bannerImage')}  type='button' className='imageselector'> Choose Image</button>
                <p style={{overflow:"hidden"}}>&nbsp;{companydata.bannerImage??<span>No file chosen</span>}</p>
              </div>
            </div>

            <h6 className="permenent-address"> Address</h6>
            <div className="form-group mt-4">
              <input onChange={(e)=>setaddressdata({...addressdata,line1:e.target.value})} value={addressdata.line1??""} required type="text" className="form-control" placeholder="Address Line 1" id="pAddressLine1" />
              <Form.Control.Feedback type="invalid">Please provide Address </Form.Control.Feedback>
            </div>
            <div className="form-group">
              <input onChange={(e)=>setaddressdata({...addressdata,line2:e.target.value})} value={addressdata.line2??""} type="text" className="form-control mt-3" placeholder="Address Line 2" id="pAddressLine2" />
            </div>
            <div className="form-group col-md-6 mt-3">
              <input  onChange={(e)=>setaddressdata({...addressdata,landmark:e.target.value})} required value={addressdata.landmark??""}type="text" className="form-control" placeholder="Landmark" id="pLandmark" />
              <Form.Control.Feedback type="invalid">Please provide Landmark</Form.Control.Feedback>           
            </div>
            <div className="form-group col-md-6  mt-3">
              <input onBlur={(e)=>zipcodeHandler(e,addressdata.zipcode)} required onChange={(e)=>setaddressdata({...addressdata,zipcode:e.target.value})} value={addressdata.zipcode??""}type="number" className="form-control" placeholder="Zip Code" id="pZipcode" />
              <Form.Control.Feedback type="invalid">Please provide Valid Zipcode</Form.Control.Feedback>
            </div>
            <div className="form-group col-md-4 mt-3">
              <input onChange={(e)=>setaddressdata({...addressdata,city:e.target.value})} required value={addressdata.city??""} type="text" className="form-control" placeholder="City" id="pCity" />
              <Form.Control.Feedback type="invalid">Please provide City</Form.Control.Feedback>
            </div>
            <div className="form-group col-md-4 mt-3">
              <input  onChange={(e)=>setaddressdata({...addressdata,state:e.target.value})} required value={addressdata.state??""}type="text" className="form-control" placeholder="State" id="pState" />
              <Form.Control.Feedback type="invalid">Please provide  state</Form.Control.Feedback>
            </div>
            <div className="form-group col-md-4 mt-3">
              <input onChange={(e)=>setaddressdata({...addressdata,country:e.target.value})} required value={addressdata.country??""} type="text" className="form-control" placeholder="country" id="pCountry" />
              <Form.Control.Feedback type="invalid">Please provide country</Form.Control.Feedback>
            </div>
            <div className="form-group mb-3 mt-50">
              <input disabled onChange={(e)=>setcompanydata({...companydata,username:e.target.value})} value={companydata.username??""} className="form-control" id="input-3" type="text" required name="username" placeholder="User Name" />
              <Form.Control.Feedback type="invalid">Please provide a  UserName/email</Form.Control.Feedback>
            </div>
            <div className="form-group mb-3">
              <input onChange={(e)=>setcompanydata({...companydata,password:e.target.value})} value={companydata.password??""} className="form-control" id="input-4" type="password" required name="password" placeholder="password" />
              <Form.Control.Feedback type="invalid">Please provide a Password</Form.Control.Feedback>
            </div>
            <div className="form-group mb-3">
              <input onChange={(e)=>setcompanydata({...companydata,repassword:e.target.value})} value={companydata.repassword??""} className={`form-control mb-3  ${companydata.password?companydata.password===companydata.repassword ?'': 'is-invalid' :""}`} id="input-5" type="password" required name="re-password" placeholder="re-password" />
              <Form.Control.Feedback type="invalid">Passwords do not match</Form.Control.Feedback>
            </div>
            <div className="login_footer form-group d-flex justify-content-between mb-3">
              <label className="cb-container">
                <input required type="checkbox" /><span className="text-small">Agree our terms and policy</span><span className="checkmark" />
                <Form.Control.Feedback type="invalid">Please Tick Terms and policy</Form.Control.Feedback>
              </label>
            </div>
            <div className="form-group">
              <button className="btn btn-brand-1 hover-up w-100" type="submit"  name="login">Submit &amp; Register</button>
            </div>
            </>:<><div className="form-group">
              <button className="btn btn-brand-1 hover-up w-100" type="button" onClick={()=>phoneVerification()} name="login">Send otp</button>
            </div>
            {phonevalidationdata.verifynumber?<>
             <div className="form-group mb-3 mt-10">
             <input onChange={(e)=>setphonevalidationdata({...phonevalidationdata,otp:e.target.value})} value={phonevalidationdata.otp??""} className={`form-control mb-3`} id="input-5" type="otp"  name="otp" placeholder="OTP" />
             <Form.Control.Feedback type="invalid">not  match</Form.Control.Feedback>
           </div>
           {/* <div className="text-center">{validated?<span className="text-danger">Fill all required field</span>:""}</div> */}
           <div className="form-group">
           <button className="btn btn-brand-1 hover-up w-100" type="button" onClick={()=>phoneotpverify()} name="login">Submit OTP</button>
         </div>
           </> :""}
            
            </>}
            </>:<><div className="form-group">
              <button className="btn btn-brand-1 hover-up w-100" type="button" onClick={()=>emailVerification()} name="login">send email</button>
            </div>
            {emailvalidationdata.verifynumber?<>
             <div className="form-group  mt-10">
             <input onChange={(e)=>setemailvalidationdata({...emailvalidationdata,otp:e.target.value})} value={emailvalidationdata.otp??""} className={`form-control mb-3`} id="input-5" type="otp"  name="otp" placeholder="otp" />
             <Form.Control.Feedback type="invalid">not  match</Form.Control.Feedback>
           </div>
           <div className="form-group">
           <button className="btn btn-brand-1 hover-up w-100" type="button" onClick={()=>emailotpverify()} name="login">Submit OTP</button>
         </div>
           </> :""}
            </>
            }
            <div className="text-muted text-center mt-3">Already have an account? <Link to="/employerlogin">Sign in</Link></div>
          </Form>
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
  );
}
