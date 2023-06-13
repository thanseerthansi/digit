import React from "react";
import { Helmet } from "react-helmet";

export default function Employerregister() {
  return (
    <>
      <main className="main">
        <div className="carousel-inner"></div>
        <section className="pt-20 login-register">
          <div className="container">
            <div className=" login-register-cover">
              <div className="col-lg-6 col-md-9 col-sm-12 mx-auto">
                <div className="text-center">
                  <p className="font-sm text-brand-2">Register </p>
                  <h2 className="mt-10 mb-5 text-brand-1">
                    Complete Profile Today
                  </h2>
                  <p className="font-sm text-muted mb-30">
                    Access to all features. No credit card required.
                  </p>
                </div>
                <form
                  className="login-register text-start mt-20 reg-form row"
                  action="#"
                >
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      id="input-1"
                      type="text"
                      required
                      name="fullname"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="form-group mb-3 col-md-6">
                    <input
                      className="form-control "
                      id="input-2"
                      type="email"
                      required
                      name="emailaddress"
                      placeholder="Company email"
                    />
                  </div>
                  <div className="form-group mb-3 col-md-6">
                    <input
                      className="form-control"
                      id="input-3"
                      type="tel"
                      required
                      name="username"
                      placeholder="Company Phone"
                    />
                  </div>
                  <h6 className="permenent-address"> Address</h6>
                  <div className="form-group mt-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address Line 1"
                      id="pAddressLine1"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mt-3"
                      placeholder="Address Line 2"
                      id="pAddressLine2"
                    />
                  </div>
                  <div className="form-group col-md-6 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Landmark"
                      id="pLandmark"
                    />
                  </div>
                  <div className="form-group col-md-6  mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip Code"
                      id="pZipcode"
                    />
                  </div>
                  <div className="form-group col-md-4 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      id="pCity"
                    />
                  </div>
                  <div className="form-group col-md-4 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State"
                      id="pState"
                    />
                  </div>
                  <div className="form-group col-md-4 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="country"
                      id="pCountry"
                    />
                  </div>
                  <div className="form-group mb-3 mt-3">
                    <input
                      className="form-control"
                      id="input-3"
                      type="text"
                      required
                      name="username"
                      placeholder="User Name"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      id="input-4"
                      type="password"
                      required
                      name="password"
                      placeholder="password"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      className="form-control mb-3"
                      id="input-5"
                      type="password"
                      required
                      name="re-password"
                      placeholder="re-password"
                    />
                  </div>
                  <div className="login_footer form-group d-flex justify-content-between mb-3">
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">
                        Agree our terms and policy
                      </span>
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-brand-1 hover-up w-100"
                      type="submit"
                      name="login"
                    >
                      Submit &amp; Register
                    </button>
                  </div>
                  <div className="text-muted text-center mt-3">
                    Already have an account?{" "}
                    <a href="employee-login.html">Sign in</a>
                  </div>
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
