import React from 'react'

export default function Resetpassord() {
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
            <h3 className="mt-10 mb-5 text-brand-1 font-log">Create Password</h3>
            <p className="font-sm text-muted mb-30">Access to all features. No credit card required.</p>
          </div>
          <form className="login-register text-start mt-20" action="employee-login.html">
            <div className="form-group mb-3">
              <input className="form-control" id="input-1" type="password" required name="fullname" placeholder="Enter password" />
            </div>
            <div className="form-group mb-3">
              <input className="form-control" id="input-1" type="password" required name="fullname" placeholder="Re-password" />
            </div>
            <div className="login_footer form-group d-flex justify-content-between mt-3">
              <label className="cb-container">
                <input type="checkbox" /><span className="text-small">Agree terms</span><span className="checkmark" />
              </label>
            </div>
            <div className="form-group">
              <button className="btn btn-brand-1 hover-up w-100 " href="employee-login.html" type="submit" name="login">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>

    </>
  )
}
