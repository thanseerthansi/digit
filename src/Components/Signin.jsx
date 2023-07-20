import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Simplecontext } from "../Commonpages/Simplecontext";
import {
  auth,
  signInEmail,
  signInWithFacebook,
  signInWithGoogle,
} from "../Config/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axioscall from "../Commonpages/Axioscall";
import jwt_decode from "jwt-decode";

export default function Signin() {
  const { path,userdetail,setuserdetail,setemployeedata } = useContext(Simplecontext);
  const navigate = useNavigate();
  const countryCode = "+91";

  const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const [expandForm, setExpandForm] = useState(false);
  const [added_otp, setadded_otp] = useState("");
  const [load,setload]=useState(false)
  const [logindata,setlogindata]=useState({email:'',firstName:"",lastName:""})
  console.log("logindata",logindata)
  useEffect(() => {
    Getusernumber()
    window.scrollTo(0, 0);
    path();
  }, []);
  
  const notify = (msg) => toast.success(msg, {
    position: "top-left",
    theme: "dark",
    });
  const notifyerror = (msg) => toast.error(msg, {
    position: "top-left",
    theme: "dark",
    });

  const googlesigninhandler = async () => {
    // console.log("handler")
    const data = await signInWithGoogle();
    // console.log("dsf", data);
    let emp ={}
    if (data._tokenResponse) {
      // console.log("email",data._tokenResponse.email)
      emp.email=data._tokenResponse.email
      emp.firstName=data._tokenResponse.firstName
      emp.lastName=data._tokenResponse.lastName

      // console.log("emp,,,,,",emp)
      if(data._tokenResponse.email){
        Checkuserhandler(data._tokenResponse.email,emp,"email")
      }
    }else{
      notifyerror("Something went wrong")
    }
  };
  const facebookhandler = async () => {
    const data = await signInWithFacebook();
    console.log("datafacebook", data);
  };
  const emailhandler = async () => {
    // console.log("odk");
    const data = await signInEmail();
    console.log("datafacebook", data);
    // Checkuserhandler(data)
    
  };
 
  const generateRecaptcha = () => {
    if (!window.recaptchaVerifier) {     
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
        },
        auth
      );
      // console.log("enters recapth inside")
    }
    // console.log("enters recapth")
    window.recaptchaVerifier.render();  
  };
 
  // crud functions start................................................................
  const Checkuserhandler=async(result,emp,type)=>{
    // console.log("result",result)
    try {
      const data = await Axioscall("post","user/login",{username:result,role:"employee",type:type})
      // console.log("dataafter",data)
        if(data.status===200){
          if(data.data.data.token){
            window.localStorage.setItem("craig-token",data.data.data.token)
            Decodetoken(data.data.data.token,emp)
          }
      }else{
        console.log(data)
        notifyerror("something went wrong ")
      }
    } catch (error) {
      console.log("error",error)
    }
  }
  const Decodetoken =(token,emp)=>{
    console.log(token)
    var decoded = jwt_decode(token)
    if(decoded.completion===3){
      if(decoded.id){
        console.log("decode",decoded)
        Getuser(decoded.id,emp)
      }
    }else{
      navigate('/employeeregister',{ state: emp })
    }
   
  }
  const Rememberhandler=(e)=>{
    if (e){
      window.localStorage.setItem("craig-employeenumber",phoneNumber)
    }else{
      window.localStorage.removeItem("craig-employeenumber")
    }
  }
  const Getusernumber=()=>{
    let data = window.localStorage.getItem("craig-employeenumber")
    if (data){
      setPhoneNumber(data)
    }
  }
  const Getuser =async(datalist,emp)=>{
    try {
      console.log("id:::::",datalist)
        let data = await Axioscall("get","employee",{id:datalist})
        console.log("datagetuser",data)
        if (data.status===200){
          console.log("datadocs",data.data.data.docs)
          if(data.data.data.docs){
            setuserdetail(data.data.data.docs[0])
            setemployeedata(data.data.data.docs[0])
            window.localStorage.setItem("graiduser", "employee");
            if (data.data.data.docs[0]){
              window.localStorage.setItem("graiduseremail",data.data.data.docs[0].email);
              window.localStorage.setItem("graiduserid",data.data.data.docs[0]._id);
              navigate('/employee-profile')
            }else{
              navigate('/employeeregister',{ state: emp })
            }
            
          }else{
            window.localStorage.setItem("graiduser", "employee");
            navigate('/employeeregister')
          }
        }
    } catch (error) {
        console.log("datagetuser",error)
    }
}
const requestOTP=async(e)=>{
  try {
    e.preventDefault();
    setload(true)
    
    let data =await Axioscall("post","otp/send-otp",{mobile:phoneNumber})
    // console.log("daat",data)
    if (data.status===200){
      setExpandForm(true);
      generateRecaptcha();
      notify("check your phone for verification otp")
      
    }
    
    // inputphone.current.disabled=true
    
  } catch (error) {
    
    notifyerror("try again")
  }
  setload(false)
}
const verifyOTP=async()=>{
  try {
    setload(true)
    
    let body={
      "mobile" : phoneNumber,
      "otp" : added_otp
    }
    // console.log("e",body)
    let data = await Axioscall("post","otp/verify-otp",body)
    console.log("data",data)
    if(data.status===200){
      // inputphone.current.disabled=true
      Checkuserhandler(phoneNumber,"","phone")
      // setdisablephone(true)
      // setphonevalid(true)
    }
    else(
      notifyerror(data.response.data.message )
      // console.log("errordfghjkl",data.response.data.message )
    )
  } catch (error) {
    console.log(error)
  }
  setload(false)
}
  return (
    <>
      <main className="main">
        <ToastContainer/>
        <div className="carousel-inner"></div>
        {load? 
            <div className="spinner-container">
                        <div className="spinner " />
                      </div>:null}
        {/* <div className="bubbles">
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
        </div> */}
        <section className="pt-20 login-register">
          <div className="container ">
            <div className=" login-register-cover cont-button">
              <div className="col-lg-4 col-md-6 col-sm-12 mx-auto reg-form">
                <div className="text-center">
                  <p className="font-sm text-brand-2">Welcome back! </p>
                  <h3 className="mt-10 mb-5 text-brand-1 font-log">
                    Create an Account or Log in
                  </h3>
                  {/* <p className="font-sm text-muted mb-30">
                    Access to all features. No credit card required.
                  </p> */}
                  <button
                    onClick={googlesigninhandler}
                    className="btn social-login hover-up mb-20"
                  >
                    <img
                      src="assets/imgs/template/icons/icon-google.svg"
                      alt="jobbox"
                    />
                    <strong>Sign in with Google</strong>
                  </button>
                  <button
                    onClick={facebookhandler}
                    className="btn social-login  hover-up mb-20"
                  >
                    <img
                      className="social-login1"
                      src="assets/imgs/template/icons/icon-fb1.svg"
                      alt="jobbox"
                    />
                    <strong className="social-text">
                      Sign in with Facebook
                    </strong>
                  </button>
                  <button
                    onClick={googlesigninhandler}
                    className="btn social-login hover-up mb-20"
                  >
                    <img
                      className="social-login1"
                      src="assets/imgs/template/icons/icon-mail.svg"
                      alt="jobbox"
                    />
                    <strong className="social-text">Sign in with E mail</strong>
                  </button>
                  <div className="divider-text-center">
                    <span>Or continue with</span>
                  </div>
                </div>
                <form
                  className="login-register text-start mt-20"
                  onSubmit={(e)=>requestOTP(e)}
                >
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="input-1"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                      name="fullname"
                      placeholder="Phone Number"
                    />
                  </div><br/>
                  {expandForm?<>
                     <div className="form-group">
                     <input
                       className="form-control"
                       id="input-1"
                       type="number"
                       value={added_otp}
                       onChange={(e) => setadded_otp(e.target.value)}
                       name="otp"
                       placeholder="OTP"
                     />
                   </div><br/>  
                   <div className="form-group">
                    <button
                      className="btn btn-brand-1 hover-up w-100 "
                      type="button"
                      name="otp"
                      onClick={verifyOTP}
                    >
                      Verify OTP
                    </button>
                  </div><br/>
                  <div className="form-group">
                    <button
                      className="btn btn-brand-1 hover-up w-100 "
                      type="submit"
                      name="login"
                    >
                      Re-Send OTP
                    </button>
                  </div>
                   </>
                  :<>
                  
                  <div className="login_footer form-group d-flex justify-content-between mt-3">
                    <label className="cb-container">
                      <input type="checkbox" onChange={(e)=>Rememberhandler(e.target.checked)}  />
                      <span className="text-small">Remember me</span>
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-brand-1 hover-up w-100 "
                      type="submit"
                      name="login"
                    >
                      Continue
                    </button>
                  </div>
                  </>}
                  
                </form>
              </div>
            </div>
          </div>
          <div id='recaptcha-container'></div>
        </section>
      </main>
      {/* <Footer /> */}
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
