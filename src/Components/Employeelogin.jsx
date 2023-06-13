import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Simplecontext } from "../Commonpages/Simplecontext";

export default function Employeelogin() {
  const { path } = useContext(Simplecontext);

  useEffect(() => {
    window.scrollTo(0, 0);
    path();
  }, []);

  return (
    <>
      <main className="main">
        <div className="carousel-inner"></div>
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
