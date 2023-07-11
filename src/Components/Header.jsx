import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Simplecontext } from "../Commonpages/Simplecontext";
import { Helmet } from "react-helmet";

export default function Header() {
  const { path, pathvalue,userdetail,logouthandler } = useContext(Simplecontext);
  const windowuser = window.localStorage.getItem("graiduser")??""
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const mobileHeaderActive = () => {
    // console.log("entered hamburg")
    var navbarTrigger = $(".burger-icon"),
      endTrigger = $(".mobile-menu-close"),
      container = $(".mobile-header-active"),
      wrapper4 = $("body");
    wrapper4.prepend('<div class="body-overlay-1"></div>');
    navbarTrigger.on("click", function (e) {
      // console.log("enter fun")
      navbarTrigger.toggleClass("burger-close");
      e.preventDefault();
      container.toggleClass("sidebar-visible");
      wrapper4.toggleClass("mobile-menu-active");
    });
    endTrigger.on("click", function () {
      // console.log("offf fun")
      container.removeClass("sidebar-visible");
      wrapper4.removeClass("mobile-menu-active");
    });
    $(".body-overlay-1").on("click", function () {
      container.removeClass("sidebar-visible");
      wrapper4.removeClass("mobile-menu-active");
      navbarTrigger.removeClass("burger-close");
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
      // console.log("windowuser",window.localStorage.getItem("graiduser"))
      // console.log("userdetail",userdetail)
      // console.log("window.location.pathname",window.location.pathname)
      if(window.localStorage.getItem("graiduser")==="employee" && !userdetail && window.location.pathname !== "/employeeregister"){
        console.log("no user.............................................................")
        logouthandler()
      }
    };

    window.addEventListener("scroll", handleScroll);

    mobileHeaderActive();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log("windowpath",window.location.pathname)
  return (
    <div>
      <header
        className={
          scrollPosition === 0
            ? "header sticky-bar  "
            : "header sticky-bar stick"
        }
      >
        <div className="container">
          <div className="main-header">
            <div className="header-left">
            {/* <div className="header-logo"><Link className="d-flex" to="index.html"><h3 className="header-text">CRAIG</h3></Link></div> */}
              <div className="header-logo">
                <Link className="d-flex" to="/">
                  <img
                    alt="jobBox"
                    src=".\assets\imgs\logo\craig-logo-dark.png"
                    height={30}
                  />
                </Link>
              </div>
            </div>
            <div className="header-nav">
              <nav className="nav-main-menu">
                <ul className="main-menu">
                  <li className="has-children">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="has-children">
                    <Link to="/aboutus">About us</Link>
                  </li>
                  <li className="has-children">
                    <Link to="/contactus">Contact us</Link>
                  </li>
                  {windowuser==="employer"? <li className="has-children"><Link to="/candidates">Candidates</Link>
                </li>:null}
                </ul>
              </nav>
              <div className="burger-icon burger-icon-white">
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
            {windowuser==="employer"?<>
            {/* <div class="header-right">
            <div class="block-signin"><Link className="btn btn-default2 btn-shadow ml-40 " to="/notification"><i className="fa-sharp fa-solid fa-bell notification-bell"></i></Link></div>
          </div> */}
          <div className="header-right">
          <div className="block-signin"><Link className="btn btn-default2 btn-shadow ml-40 "  to="/notification"><i className="fa-sharp fa-solid fa-bell notification-bell"></i><span className="notification-label notification-label-red">3</span></Link></div>
        </div>
        </>:null}
            <div className="header-right">
              {windowuser?windowuser==="employer"?<>
                
               <div className="block-signin">
               
               <Link className="btn btn-default btn-shadow ml-40 hover-up" to="/employer-profile">Profile</Link>
               </div></>:userdetail?<>
               <div className="block-signin">
                {pathvalue==="/employeeregister"?<div className="block-signin" style={{width:"180px"}}/>:
               <Link className="btn btn-default btn-shadow ml-40 hover-up" to="/employee-profile">Profile</Link>
               }
               </div>
               </>:<div className="block-signin" style={{width:"180px"}}/>
               :
           <>
              {pathvalue === "/Signin" || pathvalue === "/employerlogin" ? (
                pathvalue === "/Signin" ? (
                  <div className="block-signin" style={{width:"180px"}}>
                    {/* <Link
                      className="btn btn-default btn-shadow ml-40 hover-up"
                      to="/employeeregister"
                    >
                      Register
                    </Link> */}
                  </div>
                ) : 
                (
                  <div className="block-signin">
                    <Link
                      className="btn btn-default btn-shadow ml-40 hover-up"
                      to="/employer-register"
                    >
                      Register
                    </Link>
                  </div>
                )
              ) : (
                <div className="block-signin block-signin1">
                  <Link
                    className="text-link-bd-btom hover-up"
                    to="/employerlogin"
                  >
                    Find &nbsp; Candidates
                  </Link>
                  <Link
                    className="btn btn-default btn-shadow ml-40 hover-up"
                    to="Signin"
                  >
                    Sign in
                  </Link>
                </div>
              )}</>}
            </div>
          </div>
        </div>
      </header>

      <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                {/* mobile menu start*/}
                <nav>
                  <ul className="mobile-menu font-heading">
                    <li className="has-children">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="has-children">
                      <Link to="/aboutus">About us</Link>
                    </li>
                    <li className="has-children mb-3">
                      <Link to="/employerlogin">Find candidates </Link>
                    </li>
                    <li className="has-children">
                      <Link to="/contactus">Contact us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="site-copyright">Copyright 2023 © Digit.</div>
            </div>
          </div>
        </div>
      </div>
      <Helmet>
        <script src="https://kit.fontawesome.com/065c1878aa.js" crossorigin="anonymous"></script>
      </Helmet>
    </div>
  );
}
