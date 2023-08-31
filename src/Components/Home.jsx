import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Simplecontext } from '../Commonpages/Simplecontext';

export default function Home() {
  const { path,userdetail,logouthandler,loghandler} = useContext(Simplecontext);
  useEffect(() => {
    window.scrollTo(0,0)
    path()
    loghandler()
}, [])

  return (
    <>
    <main className="main">
  <div className="carousel-inner">
  </div>
  <div className="bg-homepage1" />
  <section className="section-box">
    <div className="banner-hero hero-1">
      <div className="banner-inner">
        <div className="row">
          <div className="col-xl-8 col-lg-12 ">
            <div className="block-banner">
              <h1 className="heading-banner wow animate__animated animate__fadeInUp"> <span className="color-brand-2">Your Story ,Your Score:</span> Unveil Your Global Employee Performance</h1>
              <div className="banner-description mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">Join us in celebrating the power of your individuality, the strength
of our global community, and the incredible achievements that
unite us all. Unveil your global employee performance today and
continue crafting a story that leaves an indelible mark on the
world. Your story. Your score. Your legacy </div>
              {/* <div className="mt-40  " data-wow-delay=".2s">
                <div className="block-signin banner-button"><Link className="btn btn-default btn-shadow ml-40 hover-up" to="/contactus">Get in Touch</Link></div>
              </div> */}
            </div>
          </div>
          <div className="col-xl-4 col-lg-12 d-none d-xl-block col-md-6">
            <div className="banner-imgs">
              <div className="block-1 shape-1"><img className="img-responsive" alt="jobBox" src="assets/imgs/page/homepage1/banner1 copy1.png" /></div>
              <div className="block-2 shape-2"><img className="img-responsive" alt="jobBox" src="assets/imgs/page/homepage1/banner2 copy.png" /></div>
              <div className="block-4 shape-3"><img className="img-responsive" alt="jobBox" src="assets/imgs/page/homepage1/icon-bottom-banner copy.png" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="mt-100" />
  <section className="section-box overflow-visible mt-100 mb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="box-image-job "><img className="img-job-1 block-1 shape-1 z-index-banner" alt="jobBox" src="assets/imgs/page/homepage1/img-chart-Recovered.png" />
            <figure className="z-index-banner1 wow animate__animated animate__fadeIn"><img alt="jobBox" src="assets/imgs/page/homepage1/img1 copy.png" /></figure>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="content-job-inner"><span className="color-text-mutted text-32">Unlock Opportunities: </span>
            <h2 className="text-52 wow animate__animated animate__fadeInUp">Highlight Your
Profile, Get Hired!! <span className="color-brand-2"></span> </h2>
            <div className="mt-40 pr-50 text-md-lh28 wow animate__animated animate__fadeInUp">Embrace the power of showcasing your profile. With each
carefully curated detail, you're inviting employers to see your
potential, encouraging them to envision you as a valuable asset to
their team. The journey from profile highlight to job offer is within
your grasp – take that step, unlock those opportunities, and
embark on a path toward a fulfilling and successful career.</div>
            {/* <div className="mt-40">
              <div className="wow animate__animated animate__fadeInUp"><Link className="btn btn-default" to="aboutus">More</Link></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-box overflow-visible mt-80 mb-50">
  <div className="container">
    <div className="row parent00">
      <div className="col-lg-6 col-sm-12">
        <div className="content-job-inner">
          <h2 className="text-52 wow animate__animated animate__fadeInUp">How it <span className="color-brand-2">Works</span> </h2>
          <div className="mt-40  text-md-lh28 wow animate__animated animate__fadeInUp"><span className="color-brand-2">1. </span>Begin your journey by creating an account.</div>
          <div className="mt-20  text-md-lh28 wow animate__animated animate__fadeInUp"><span className="color-brand-2">2. </span>Provide accurate information to personalize your experience.</div>
          <div className="mt-20  text-md-lh28 wow animate__animated animate__fadeInUp"><span className="color-brand-2">3. </span>Your career experiences will be validated through verification from your respective employers.</div>
          <div className="mt-20  text-md-lh28 wow animate__animated animate__fadeInUp"><span className="color-brand-2">4. </span>Keep track of your progress by getting an update on your Craig score every month.</div>
          <div className="mt-20  text-md-lh28 wow animate__animated animate__fadeInUp"><span className="color-brand-2">5. </span>Stand Out Among Candidates: Get Noticed by Recruiters with Your High Craig Score.</div>
         </div>
      </div>
      <div className="col-lg-6 col-sm-12">
        <div className="box-image-job ">
          <figure className="z-index-banner1 wow animate__animated animate__fadeIn"><img alt="jobBox" src="\assets\imgs\page\homepage1\img1 copy 2.png" /></figure>
        </div>
      </div>
    </div>
  </div>
</section>

  <section className="section-box overflow-visible mt-50 mb-50">
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="text-center">
            <h1 className="color-brand-2"><span className="count">25</span><span> K+</span></h1>
            <h5>Completed Cases</h5>
            <p className="font-sm color-text-paragraph mt-10">We always provide people a <br className="d-none d-lg-block" />complete solution upon focused of<br className="d-none d-lg-block" /> any business</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="text-center">
            <h1 className="color-brand-2"><span className="count">17</span><span> +</span></h1>
            <h5>Our Office</h5>
            <p className="font-sm color-text-paragraph mt-10">We always provide people a <br className="d-none d-lg-block" />complete solution upon focused of <br className="d-none d-lg-block" />any business</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="text-center">
            <h1 className="color-brand-2"><span className="count">86</span><span> +</span></h1>
            <h5>Skilled People</h5>
            <p className="font-sm color-text-paragraph mt-10">We always provide people a <br className="d-none d-lg-block" />complete solution upon focused of <br className="d-none d-lg-block" />any business</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="text-center">
            <h1 className="color-brand-2"><span className="count">28</span><span> +</span></h1>
            <h5>Happy Clients</h5>
            <p className="font-sm color-text-paragraph mt-10">We always provide people a <br className="d-none d-lg-block" />complete solution upon focused of <br className="d-none d-lg-block" />any business</p>
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
                <input className="input-newsletter" type="text"  placeholder="Enter your email here" />
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
    <script src="/assets/js/plugins/counterup.js"></script>
    <script src="/assets/js/main8c94.js?v=4.1"></script>
      </Helmet>
    </>
  )
}
