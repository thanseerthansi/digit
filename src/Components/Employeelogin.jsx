import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Employeelogin() {
  const [scrollPosition, setScrollPosition] = useState(0);
  // console.log("scrolll",scrollPosition)
  const mobileHeaderActive = () => {
    console.log("entered hamburg");
    var navbarTrigger = $(".burger-icon"),
      endTrigger = $(".mobile-menu-close"),
      container = $(".mobile-header-active"),
      wrapper4 = $("body");
    wrapper4.prepend('<div class="body-overlay-1"></div>');
    navbarTrigger.on("click", function (e) {
      console.log("enter fun");
      navbarTrigger.toggleClass("burger-close");
      e.preventDefault();
      container.toggleClass("sidebar-visible");
      wrapper4.toggleClass("mobile-menu-active");
    });
    endTrigger.on("click", function () {
      console.log("offf fun");
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
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    mobileHeaderActive();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <div>
        <header
          className={
            scrollPosition === 0
              ? "header sticky-bar  "
              : "header sticky-bar stick"
          }
        >
          <div className="container">
            <div className="main-header ">
              <div className="header-left">
                <div className="header-logo">
                  <a className="d-flex" href="index.html">
                    <img
                      alt="jobBox"
                      src="/assets/imgs/template/jobhub-logo copy 2.png"
                    />
                  </a>
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
                      <Link to="contactus">Contact us</Link>
                    </li>
                  </ul>
                </nav>
                <div className="burger-icon burger-icon-white">
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>
              <div className="header-right">
                <div className="block-signin">
                  <a
                    className="btn btn-default btn-shadow ml-40 hover-up"
                    href="page-register.html"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar log-bubble">
          <div className="mobile-header-wrapper-inner">
            <div className="mobile-header-content-area">
              <div className="perfect-scroll">
                <div className="mobile-menu-wrap mobile-header-border">
     
                  <nav>
                    <ul className="mobile-menu font-heading">
                      <li className="has-children">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="has-children">
                        <Link to="/aboutus">About us</Link>
                      </li>
                      <li className="has-children">
                        <Link to="/contactus">Contact us</Link>
                      </li>
                      <li>
                        <Link to="/" target="_blank">
                          Register
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="site-copyright">Copyright 2023 © Digit. </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <main className="main">
        <div className="carousel-inner"></div>
        <div className="bubbles">
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
        </div>
        <section className="pt-50 login-register">
          <div className="container ">
            <div className=" login-register-cover cont-button">
              <div className="col-lg-4 col-md-6 col-sm-12 mx-auto reg-form">
                <div className="text-center">
                  <p className="font-sm text-brand-2">Welcome back! </p>
                  <h3 className="mt-10 mb-5 text-brand-1 font-log">Log in</h3>
                  {/* <p className="font-sm text-muted mb-30">
                    Access to all features. No credit card required.
                  </p> */}
                  <div className="divider-text-center">
                    <span />
                  </div>
                </div>
                <form className="login-register text-start mt-20" action="#">
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      id="input-1"
                      type="tel"
                      required
                      name="fullname"
                      placeholder="User Name/Mail id"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="input-1"
                      type="password"
                      required
                      name="fullname"
                      placeholder="Password"
                    />
                  </div>
                  <div className="login_footer form-group d-flex justify-content-between mt-3">
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Remenber me</span>
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-brand-1 hover-up w-100 "
                      href="index-employee.html"
                      type="submit"
                      name="login"
                    >
                      Continue
                    </button>
                  </div>
                  <div className="text-muted text-center mt-3">
                    New in Digit?{" "}
                    <a href="employee-register.html">Create an account</a>
                    <br />
                    <a href="password-reset.html">Forgot password</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
