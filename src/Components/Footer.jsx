import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Simplecontext } from '../Commonpages/Simplecontext';
import { useEffect } from 'react';

export default function Footer() {
  const { path, pathvalue,userdetail,logouthandler } = useContext(Simplecontext);
  const windowuser = window.localStorage.getItem("graiduser")??""
  // console.log("pathvalue",pathvalue)
  useEffect(()=>{
    path()
  })
  return (
    <>
    <footer className="footer mt-50">
  <div className="container">
    <div className="row">
      <div className="footer-col-1 col-md-4 col-sm-12 ">
        <Link to="/"><img className="footer-logo" alt="jobBox" src="\assets\imgs\logo\craig-logo-dark.png" /></Link>
        <div className="mt-20 mb-20 font-xs color-text-paragraph-2">JobBox is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide.</div>
        <div className="footer-social"><a className="icon-socials icon-facebook" href="#" /><a className="icon-socials icon-twitter" href="#" /><a className="icon-socials icon-linkedin" href="#" /></div>
      </div>
      <div className="footer-col-2 col-md-3 col-xs-6">
        <h6 className="mb-20">Quick Links</h6>
        <ul className="menu-footer">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About us</Link></li>
          <li><Link to="/contactus">Contact us</Link></li>
        </ul>
      </div>
      <div className="footer-col-4 col-md-3 col-xs-6">
        <h6 className="mb-20">Resources</h6>
        <ul className="menu-footer">
          {/* <li><Link to="employee-register.html">Register</Link></li>
          <li><Link to="#">Candidate Register</Link></li>
          <li><Link to="#">Profile</Link></li> */}
          {windowuser==="employer"? <li className="has-children"><Link to="/candidates">Candidates</Link>
                </li>:null}
                {windowuser==="employer"?<>
            
          <li className="has-children"><Link   to="/notification">Notification</Link></li>
        
        </>:null}
        {windowuser?windowuser==="employer"?<>
        <li className="has-children"><Link  to="/employer-profile">Profile</Link></li>
        </>:userdetail?<>
        {pathvalue==="/employeeregister"?"":
               <li className="has-children"><Link  to="/employee-profile">Profile</Link></li>
              }   
        </>:""
        :<>
        {pathvalue === "/Signin" || pathvalue === "/employerlogin" ? (
                pathvalue === "/Signin" ? "" : 
                (
                  <li className="has-children">
                    <Link
                      
                      to="/employer-register"
                    >
                      Register
                    </Link>
                  </li>
                )
              ) : (
                <>
                <li className="has-children">
                  <Link
                    
                    to="/employerlogin"
                  >
                    For &nbsp; Employers
                  </Link>
                </li>
                <li className="has-children">
                  <Link
                    
                    to="Signin"
                  >
                    Sign in
                  </Link>
                </li></>
              )}</>}
        </ul>
      </div>
      <div className="footer-col-6 col-md-3 col-sm-12">
        <h6 className="mb-20">Find us</h6>
        <p className="color-text-paragraph-2 font-xs">Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
        <p className="color-text-paragraph-2 font-xs mt-2">Call:+91-9090818190</p>
        <p className="color-text-paragraph-2 font-xs mt-2">Mail:dummy@gmail.com</p>
      </div>
    </div>
    <div className="footer-bottom mt-50">
      <div className="row">
        <div className="col-md-12"><span className="font-xs color-text-paragraph">Copyright © 2023. Craig all right reserved</span></div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}
