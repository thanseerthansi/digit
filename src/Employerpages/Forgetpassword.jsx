import React from 'react'

export default function Forgetpassword() {
  return (
    <>
    <main className="main">
  <div className="carousel-inner">
  </div>
  <section className="pt-50 login-register">
    <div className="container "> 
      <div className=" login-register-cover cont-button">
        <div className="col-lg-4 col-md-6 col-sm-12 mx-auto reg-form">
          <div className="text-center">
            <h3 className="mt-10 mb-5 text-brand-1 font-log">Reset Password</h3>
            <p className="font-sm text-muted mb-30">Access to all features. No credit card required.</p>
          </div>
          <form className="login-register text-start mt-20" action="Password-enter.html">
            <div className="form-group mb-3">
              <input className="form-control" id="input-1" type="tel" required name="fullname" placeholder="User Name /Email id" />
            </div>
            <div className="login_footer form-group d-flex justify-content-between mt-3">
              <label className="cb-container">
                <input type="checkbox" /><span className="text-small">Agree terms</span><span className="checkmark" />
              </label>
            </div>
            <div className="form-group">
              <button className="btn btn-brand-1 hover-up w-100 " href="Password-enter.html" type="submit" name="login">Continue</button>
            </div>
            <div className="text-muted text-center mt-3"> <a href="index-employee.html">Log in</a></div>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>

    </>
  )
}
