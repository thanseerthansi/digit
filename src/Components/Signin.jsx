import React, { useEffect } from "react";
import Footer from "./Footer";

export default function Signin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
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
    </>
  );
}
