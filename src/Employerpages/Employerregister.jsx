import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Filestack from "../Commonpages/Filestack";

export default function Employerregister() {
  const [companydata,setcompanydata]=useState([]);
  const [certificatedata,setcertificatedata]=useState([]);
  const [addressdata,setaddressdata]=useState([]);


  const navigate  = useNavigate();
 
  const Filestackhandler=async(ratio,setvalue,value,keypair)=>{
    console.log("keypair",keypair)
    let data =await Filestack(ratio)
    console.log("datafilestack",data)
    if (data){
      setvalue({...value,[keypair]:data})
    }
    
  }
  const Regstersubmithandler=(e)=>{
    e.preventDefault();
    console.log("ok")
    try {
      let datalist = {...companydata}
      if (Object.keys(addressdata).length){
        datalist.address=[{...addressdata}]
      }
      if(Object.keys(certificatedata).length){
        datalist.certificate = [{...certificatedata}]
      }
      console.log("datalist employer",datalist)
      // navigate("/employer-profile")
    } catch (error) {
      console.log("error",error)
    }
  }
  const sss=(e)=>{
    e.preventDefault();
    console.log("ss enteres")
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
            <p className="font-sm text-muted mb-30">Access to all features. No credit card required.</p>
          </div>
          <form className="login-register text-start mt-20 reg-form row" onSubmit={(e)=>Regstersubmithandler(e)}>
            <div className="form-group mb-3">
              <input className="form-control" onChange={(e)=>setcompanydata({...companydata,name:e.target.value})} value={companydata.name??""}  type="text" required name="name" placeholder="Company Name" />
            </div>
            <div className="form-group mb-3 col-md-6">
              <input className="form-control " id="input-2" onChange={(e)=>setcompanydata({...companydata,email:e.target.value})} value={companydata.email??""} type="email" required name="emailaddress" placeholder="Company email" />
            </div>
            <div className="form-group mb-3 col-md-6">
              <input className="form-control" id="input-3" onChange={(e)=>setcompanydata({...companydata,phone:e.target.value})} value={companydata.phone??""} type="tel" required name="username" placeholder="Company Phone" />
            </div>
            <div className="form-group mb-3 col-md-6">
              <label className="col-sm-12 font-sm color-text-mutted">Incorporation Date*</label> 
              <input className="form-control" id="input-3" onChange={(e)=>setcompanydata({...companydata,incorporationDate:e.target.value})} value={companydata.incorporationDate??""} type="date" required name="username" placeholder="Incorporation Date" />
            </div>
            <div className="form-group mb-3 col-md-6">
              <label className="col-sm-12 font-sm color-text-mutted">Age of the company (Year)*</label>
              <input className="form-control" id="input-3" onChange={(e)=>setcompanydata({...companydata,ageOfCompany:e.target.value})} value={companydata.ageOfCompany??""} type="number" required name="username" placeholder="Age of the company" />
            </div>
            <div className="form-group mb-3 col-md-6">
              <label className="col-sm-12 font-sm color-text-mutted">Number Of Employees*</label> 
              <input className="form-control" id="input-3" onChange={(e)=>setcompanydata({...companydata,noOfemployees:e.target.value})} value={companydata.noOfemployees??""} type="number" required name="username" placeholder="Number Of Employees" />
            </div>
            <div className="form-group mb-3 col-md-6">
              <label className="col-sm-12 font-sm color-text-mutted">Number of Directors*</label>
              <input className="form-control" id="input-3" onChange={(e)=>setcompanydata({...companydata,noOfdirectors:e.target.value})} value={companydata.noOfdirectors??""} type="number" required name="username" placeholder="Number of Directors" />
            </div>
            <label className="dropdown col-lg-6 col-sm-12 mt-20">
              <div className="text__center">
                <select onChange={(e)=>setcompanydata({...companydata,industryType:e.target.value})} value={companydata.industryType??""} className="cs-select cs-skin-elastic cs-skin-elastic1">
                  <option value disabled selected>Industry Type</option>
                  <option value>IT</option>
                  <option value>Medical</option>
                  <option value>Education</option>
                </select>
              </div>
            </label>
            <label className="dropdown col-lg-6 col-sm-12 mt-20">
              <div className="text__center">
                <select onChange={(e)=>setcompanydata({...companydata,serviceProdvided:e.target.value})} value={companydata.serviceProdvided??""} className="cs-select cs-skin-elastic cs-skin-elastic1">
                  <option value disabled selected>Service Provided</option>
                  <option value>IT</option>
                  <option value>Medical</option>
                  <option value>Education</option>
                </select>
              </div>
            </label>
            <label className="dropdown col-lg-12 col-sm-12 mt-15">
              <div className="text__center">
                <select onChange={(e)=>setcertificatedata({...certificatedata,name:e.target.value})} value={certificatedata.name??""} className="cs-select cs-skin-elastic cs-skin-elastic1">
                  <option value disabled selected>Government Approved Certificate</option>
                  <option value>Driving License</option>
                  <option value>Aadhar</option>
                  <option value>Passport</option>
                </select>
              </div>
            </label>
            <div className="form-group col-lg-6 col-sm-12">
              <label className="font-sm color-text-mutted">Certificate Front side*</label> 
              <div className='imageselectorborder d-flex '>
                <button onClick={()=>Filestackhandler("landscape",setcertificatedata,certificatedata,'front_url')}  type='button' className='imageselector'> Choose Image</button>
                <p style={{overflow:"hidden"}}>&nbsp;{certificatedata.front_url??<span>No file chosen</span>}</p>
              </div>
            {/* <input onChange={(e)=>Filestackhandler("landscape",setcertificatedata,certificatedata,'front_url')}  type="file" className="form-control" name="pic" accept="image/*" />  */}
            </div>
            <div className="form-group col-lg-6 col-sm-12">
              <label className="font-sm color-text-mutted">Certificate Back side*</label> 
              <div className='imageselectorborder d-flex '>
                <button onChange={(e)=>Filestackhandler("landscape",setcertificatedata,certificatedata,'backurl')}type='button' className='imageselector'> Choose Image</button>
                <p style={{overflow:"hidden"}}>&nbsp;{certificatedata.backUrl??<span>No file chosen</span>}</p>
              </div>
              {/* <input onChange={(e)=>Filestackhandler("landscape",setcertificatedata,certificatedata,'backurl')}  type="file" className="form-control" name="pic" accept="image/*" />  */}
            </div>
            <h6 className="permenent-address"> Address</h6>
            <div className="form-group mt-4">
              <input onChange={(e)=>setaddressdata({...addressdata,line1:e.target.value})} value={addressdata.line1??""} type="text" className="form-control" placeholder="Address Line 1" id="pAddressLine1" />
            </div>
            <div className="form-group">
              <input onChange={(e)=>setaddressdata({...addressdata,line2:e.target.value})} value={addressdata.line2??""} type="text" className="form-control mt-3" placeholder="Address Line 2" id="pAddressLine2" />
            </div>
            <div className="form-group col-md-6 mt-3">
              <input  onChange={(e)=>setaddressdata({...addressdata,landmark:e.target.value})} value={addressdata.landmark??""}type="text" className="form-control" placeholder="Landmark" id="pLandmark" />
            </div>
            <div className="form-group col-md-6  mt-3">
              <input  onChange={(e)=>setaddressdata({...addressdata,zipcode:e.target.value})} value={addressdata.zipcode??""}type="text" className="form-control" placeholder="Zip Code" id="pZipcode" />
            </div>
            <div className="form-group col-md-4 mt-3">
              <input onChange={(e)=>setaddressdata({...addressdata,city:e.target.value})} value={addressdata.city??""} type="text" className="form-control" placeholder="City" id="pCity" />
            </div>
            <div className="form-group col-md-4 mt-3">
              <input  onChange={(e)=>setaddressdata({...addressdata,state:e.target.value})} value={addressdata.state??""}type="text" className="form-control" placeholder="State" id="pState" />
            </div>
            <div className="form-group col-md-4 mt-3">
              <input onChange={(e)=>setaddressdata({...addressdata,country:e.target.value})} value={addressdata.country??""} type="text" className="form-control" placeholder="country" id="pCountry" />
            </div>
            <div className="form-group mb-3 mt-50">
              <input onChange={(e)=>setcompanydata({...companydata,username:e.target.value})} value={companydata.username??""} className="form-control" id="input-3" type="text" required name="username" placeholder="User Name" />
            </div>
            <div className="form-group mb-3">
              <input onChange={(e)=>setcompanydata({...companydata,password:e.target.value})} value={companydata.password??""} className="form-control" id="input-4" type="password" required name="password" placeholder="password" />
            </div>
            <div className="form-group mb-3">
              <input onChange={(e)=>setcompanydata({...companydata,repassword:e.target.value})} value={companydata.repassword??""} className="form-control mb-3" id="input-5" type="password" required name="re-password" placeholder="re-password" />
            </div>
            <div className="login_footer form-group d-flex justify-content-between mb-3">
              <label className="cb-container">
                <input type="checkbox" /><span className="text-small">Agree our terms and policy</span><span className="checkmark" />
              </label>
            </div>
            <div className="form-group">
              <button className="btn btn-brand-1 hover-up w-100" type="submit"  name="login">Submit &amp; Register</button>
            </div>
            <div className="text-muted text-center mt-3">Already have an account? <a href="employee-login.html">Sign in</a></div>
          </form>
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
