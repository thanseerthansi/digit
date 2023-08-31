import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Simplecontext } from "../Commonpages/Simplecontext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axioscall from "../Commonpages/Axioscall";
import { Form } from "react-bootstrap";
import jwt_decode from "jwt-decode";

export default function Employeelogin() {
  const { path,Check_Validation,setuserdetail,setemployeedata} = useContext(Simplecontext);
  const navigate = useNavigate()
  const [formdata,setformdata]=useState({username:"",password:""});
  const [Validated,setValidated]=useState(false)
  const [load,setload]=useState(false)
  useEffect(() => {
    getcraigcredintial()
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

  const LoginEmployer=async()=>{
    try {
      setload(true)
      let datalist = {...formdata}
      datalist.role="employer"
      let data = await Axioscall("post","user/login",datalist)
      if (data.status===200){
        // console.log("datadocs",data.data.data.token)
          if(data.data.data.token){
            window.localStorage.setItem("craig-token",data.data.data.token)
            Decodetoken(data.data.data.token)
          }else{
            notifyerror("invalid Username or password")
          }
      }else{
        notifyerror("invalid Username or password")
      }

    } catch (error) {
      console.log("errorr",error)
      notifyerror("Something went wong try again later")
    }
    setload(false)
  }
  const Decodetoken =(token)=>{
    var decoded = jwt_decode(token)
    if(decoded.role==='hr'){
      if(decoded.company){
        Getuser({id:decoded.company})
      }
    }else{
      if(decoded.id){
      Getuser({userid:decoded.id})
    }
    }   
  }
  const Getuser =async(body)=>{
    try {
        let data = await Axioscall("get","company",body)
        if (data.status===200){
          if(data.data.data){
            setuserdetail(data.data.data)
            setemployeedata(data.data.data)
            window.localStorage.setItem("graiduser","employer");
            window.localStorage.setItem("graiduseremail",data.data.data.email);
            window.localStorage.setItem("graiduserid",data.data.data._id);
            navigate('/employer-profile')
          }else{
            console.log("something went wrong")
          }
        }
    } catch (error) {
        console.log("datagetuser",error)
    }
}
  const setvaluehandler =(event)=>{
    const { name, value } = event.target;
    setformdata(prevState => ({ ...prevState, [name]: value }));
  }
  const Rememberhandler=(e)=>{
    if(e){
      if(formdata.username && formdata.password){
        window.localStorage.setItem("craig-employercredintial",JSON.stringify(formdata))
      }
    }else{
      window.localStorage.removeItem("craig-employercredintial")
    }    
  }
  const getcraigcredintial=()=>{
    let data = JSON.parse(localStorage.getItem('craig-employercredintial'))
    if (data){
      setformdata(data)
    }
  }
  return (
    <>
      <main className="main">
        <ToastContainer/>
        {load? 
  <div className="spinner-container">
    <div className="spinner" />
  </div>:null}
        <div className="carousel-inner"></div>
        <section className="pt-50 login-register">
          <div className="container ">
            <div className=" login-register-cover cont-button">
              <div className="col-lg-4 col-md-6 col-sm-12 mx-auto reg-form">
                <div className="text-center">
                  <p className="font-sm text-brand-2">Welcome back! </p>
                  <h3 className="mt-10 mb-5 text-brand-1 font-log">Login</h3>
                  {/* <p className="font-sm text-muted mb-30">
                    Access to all features. No credit card required.
                  </p> */}
                  <div className="divider-text-center">
                    <span />
                  </div>
                </div>
                <Form noValidate validated={Validated} className="login-register text-start mt-20" onSubmit={(e)=>Check_Validation(e,LoginEmployer,setValidated)}>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      id="input-1"
                      type="tel"
                      required
                      name="username"
                      onChange={setvaluehandler}
                      value={formdata.username}
                      placeholder="User Name/Mail id"
                    />
                    <Form.Control.Feedback type="invalid">
                          Please provide a Username
                        </Form.Control.Feedback>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="input-1"
                      type="password"
                      required
                      name="password"
                      onChange={setvaluehandler}
                      value={formdata.password}
                      placeholder="Password"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a password
                    </Form.Control.Feedback>
                  </div>
                  <div className="login_footer form-group d-flex justify-content-between mt-3">
                    <label className="cb-container">
                      <input type="checkbox"  onChange={(e)=>Rememberhandler(e.target.checked)} />
                      <span className="text-small">Remember me</span>
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-brand-1 hover-up w-100 "
                      // href="index-employee.html"
                      type="submit"
                      name="login"
                    >
                      Continue
                    </button>
                  </div>
                  <div className="text-muted text-center mt-3">
                    New in Craig?{" "}
                    <Link to="/employer-register">Create an account</Link>
                    <br />
                    {/* <Link to="password-reset.html">Forgot password</Link> */}
                  </div>
                </Form>
              </div>
            </div>
          </div>
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
