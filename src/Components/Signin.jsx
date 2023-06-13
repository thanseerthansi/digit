import React, { useContext, useEffect } from "react";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Simplecontext } from "../Commonpages/Simplecontext";

export default function Signin() {
  const {path} = useContext(Simplecontext)
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
        <section className="pt-20 login-register">
          <div className="container ">
            <div className=" login-register-cover cont-button">
              <div className="col-lg-4 col-md-6 col-sm-12 mx-auto reg-form">
                <div className="text-center">
                  <p className="font-sm text-brand-2">Welcome back! </p>
                  <h3 className="mt-10 mb-5 text-brand-1 font-log">
                    Create an Account or Log in
                  </h3>
                  <p className="font-sm text-muted mb-30">
                    Access to all features. No credit card required.
                  </p>
                  <button className="btn social-login hover-up mb-20">
                    <img
                      src="assets/imgs/template/icons/icon-google.svg"
                      alt="jobbox"
                    />
                    <strong>Sign in with Google</strong>
                  </button>
                  <button className="btn social-login  hover-up mb-20">
                    <img
                      className="social-login1"
                      src="assets/imgs/template/icons/icon-fb1.svg"
                      alt="jobbox"
                    />
                    <strong className="social-text">
                      Sign in with Facebook
                    </strong>
                  </button>
                  <button className="btn social-login hover-up mb-20">
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
                <form className="login-register text-start mt-20" action="#">
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="input-1"
                      type="tel"
                      required
                      name="fullname"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="login_footer form-group d-flex justify-content-between mt-3">
                    <label className="cb-container">
                      <input type="checkbox" />
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
