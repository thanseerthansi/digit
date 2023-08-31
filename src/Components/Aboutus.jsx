import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Simplecontext } from '../Commonpages/Simplecontext'

export default function Aboutus() {
  const {path,loghandler} = useContext(Simplecontext)
    useEffect(() => {
      window.scrollTo(0,0)
      path();
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
            <h2 className="mb-10">About Us</h2>
            <p className="font-lg color-text-paragraph-2">Get the latest news, updates and tips</p>
          </div>
          <div className="col-lg-6 text-lg-end">
            <ul className="breadcrumbs mt-40">
              <li><Link to="/">Home</Link></li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-box mt-50">
    <div className="post-loop-grid">
      <div className="container">
        <div className="text-center">
          <h6 className="f-18 color-text-mutted text-uppercase">Our company</h6>
          <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">About Our Company</h2>
          <p className="font-sm color-text-paragraph wow animate__animated animate__fadeInUp w-lg-50 mx-auto">At EUPHORICODERS PRIVATE LIMITED, we are driven by our passion for 
revolutionizing the employee-employer relationship. We are committed 
to innovation, continuous improvement, and the relentless pursuit of 
excellence. Together with our dedicated team, forward-thinking 
partners, and visionary clients, we aim to create a future where every 
workplace is characterized by trust, collaboration, and mutual success.</p>
        </div>
        <div className="row mt-70">
          <div className="col-lg-6 col-md-12 col-sm-12"><div className="box-image-job "><img className="img-job-1 block-1 shape-1 z-index-banner" alt="jobBox" src="assets/imgs/page/homepage1/img-chart-Recovered.png" />
              <figure className="wow animate__animated animate__fadeIn z-index-banner1"><img alt="jobBox" src="assets/imgs/page/homepage1/img1 copy1.png" /></figure>
            </div></div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h3 className="mt-15">What we can do?</h3>
            <div className="mt-20">
              <p className="font-md color-text-paragraph mt-20">We understand that the relationship between employees and employers 
is the backbone of any successful organization. However, traditional 
approaches to employee-employer interactions often fall short, leading 
to miscommunication, disengagement, and a lack of trust. We aim to 
bridge this gap by creating an innovative solution that transforms the 
dynamics between employees and employers.</p>
              <p className="font-md color-text-paragraph mt-20">By enhancing the employee-employer relationship, we envision a 
workplace where employees feel valued, supported, and motivated to 
perform at their best. Our product will help employers create a positive 
work environment that encourages growth, promotes professional 
development, and recognizes the contributions of their workforce</p>
              {/* <p className="font-md color-text-paragraph mt-20">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis non nisi purus. Integer sit nostra, per inceptos himenaeos.</p>
              <p className="font-md color-text-paragraph mt-20">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis non nisi purus. Integer sit nostra, per inceptos himenaeos.</p> */}
            </div>
          </div>
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
                <input className="input-newsletter" type="text" value={""} placeholder="Enter your email here" />
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
  )
}
