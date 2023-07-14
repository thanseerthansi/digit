import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Simplecontext } from '../Commonpages/Simplecontext'

export default function Contactus() {
  const {path,loghandler} = useContext(Simplecontext)
    useEffect(() => {
        window.scrollTo(0,0)
        path()
        loghandler()
      }, [])
  return (
    <>
    <div className="modal fade" id="ModalApplyJobForm" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content apply-job-form">
      <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" />
      <div className="modal-body pl-30 pr-30 pt-50">
        <div className="text-center">
          <p className="font-sm text-brand-2">Job Application </p>
          <h2 className="mt-10 mb-5 text-brand-1 text-capitalize">Start your career today</h2>
          <p className="font-sm text-muted mb-30">Please fill in your information and send it to the employer.                 </p>
        </div>
        <form className="login-register text-start mt-20 pb-30" action="#">
          <div className="form-group">
            <label className="form-label" htmlFor="input-1">Full Name *</label>
            <input className="form-control" id="input-1" type="text" required name="fullname" placeholder="Steven Job" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="input-2">Email *</label>
            <input className="form-control" id="input-2" type="email" required name="emailaddress" placeholder="stevenjob@gmail.com" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="number">Contact Number *</label>
            <input className="form-control" id="number" type="text" required name="phone" placeholder="(+01) 234 567 89" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="des">Description</label>
            <input className="form-control" id="des" type="text" required name="Description" placeholder="Your description..." />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="file">Upload Resume</label>
            <input className="form-control" id="file" name="resume" type="file" />
          </div>
          <div className="login_footer form-group d-flex justify-content-between">
            <label className="cb-container">
              <input type="checkbox" /><span className="text-small">Agree our terms and policy</span><span className="checkmark" />
            </label><a className="text-muted" href="page-contact.html">Lean more</a>
          </div>
          <div className="form-group">
            <button className="btn btn-default hover-up w-100" type="submit" name="login">Apply Job</button>
          </div>
          <div className="text-muted text-center">Do you need support? <a href="page-contact.html">Contact Us</a></div>
        </form>
      </div>
    </div>
  </div>
</div>

    <main className="main">
  <div className="carousel-inner">
  </div>
  <section className="section-box">
    <div className="breacrumb-cover bg-img-about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="mb-10">Contact us</h2>
            <p className="font-lg color-text-paragraph-2">Get the latest news, updates and tips</p>
          </div>
          <div className="col-lg-6 text-lg-end">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-box mt-70">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 text-center d-none d-lg-block"><img src="assets/imgs/page/contact/img copy12.png" alt="joxBox" /></div>
        <div className="col-lg-8 mb-40"><span className="font-md color-brand-2 mt-20 d-inline-block">Contact us</span>
          <h2 className="mt-5 mb-10">Get in touch</h2>
          <p className="font-md color-text-paragraph-2">The right move at the right time saves your investment. live<br className="d-none d-lg-block" /> the dream of expanding your business.</p>
          <form className="contact-form-style mt-30" id="contact-form" action="#" method="post">
            <div className="row wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
              <div className="col-lg-6 col-md-6">
                <div className="input-style mb-20">
                  <input className="font-sm color-text-paragraph-2" name="name" placeholder="Enter your name" type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="input-style mb-20">
                  <input className="font-sm color-text-paragraph-2" name="company" placeholder="company (optioanl)" type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="input-style mb-20">
                  <input className="font-sm color-text-paragraph-2" name="email" placeholder="Your email" type="email" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="input-style mb-20">
                  <input className="font-sm color-text-paragraph-2" name="phone" placeholder="Phone number" type="tel" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="textarea-style mb-30">
                  <textarea className="font-sm color-text-paragraph-2" name="message" placeholder="Message" defaultValue={""} />
                </div>
                <button className="submit btn btn-send-message" type="submit">Send message</button>
              </div>
            </div>
          </form>
          <p className="form-messege" />
        </div>
      </div>
    </div>
  </section>
  <section className="section-box mt-50 mb-20">
    <div className="container">
      <div className="box-newsletter">
        <div className="row">
          <div className="col-xl-3 col-12 text-center d-none d-xl-block"><img src="assets/imgs/template/newsletter-left copy.png" alt="joxBox" /></div>
          <div className="col-lg-12 col-xl-6 col-12">
            <h2 className="text-md-newsletter text-center">New Things Will Always<br /> Update Regularly</h2>
            <div className="box-form-newsletter mt-40">
              <form className="form-newsletter">
                <input className="input-newsletter" type="text" defaultValue placeholder="Enter your email here" />
                <button className="btn btn-default font-heading icon-send-letter">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
<Helmet>
    <script data-cfasync="false" src="../../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="assets/js/vendor/modernizr-3.6.0.min.js"></script>
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
  )
}
