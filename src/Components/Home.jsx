import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0,0)
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
              <h1 className="heading-banner wow animate__animated animate__fadeInUp">The <span className="color-brand-2">Easiest Way</span><br className="d-none d-lg-block" />to Get Your New Job</h1>
              <div className="banner-description mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">Each month, more than 3 million job seekers turn to <br className="d-none d-lg-block" />website in their search for work, making over 140,000 <br className="d-none d-lg-block" />applications every single day</div>
              <div className="mt-40  " data-wow-delay=".2s">
                <div className="block-signin banner-button"><Link className="btn btn-default btn-shadow ml-40 hover-up" to="/contactus">Get in Touch</Link></div>
              </div>
              {/* <div class="list-tags-banner mt-60 wow animate__animated animate__fadeInUp" data-wow-delay=".3s"><strong>Popular Searches:</strong><a href="#">Designer</a>, <a href="#">Web</a>, <a href="#">IOS</a>, <a href="#">Developer</a>, <a href="#">PHP</a>, <a href="#">Senior</a>, <a href="#">Engineer</a></div> */}
            </div>
          </div>
          <div className="col-xl-4 col-lg-12 d-none d-xl-block col-md-6">
            <div className="banner-imgs">
              <div className="block-1 shape-1"><img className="img-responsive" alt="jobBox" src="assets/imgs/page/homepage1/banner1 copy1.png" /></div>
              <div className="block-2 shape-2"><img className="img-responsive" alt="jobBox" src="assets/imgs/page/homepage1/banner2 copy.png" /></div>
              {/* <div class="block-3 shape-3"><img class="img-responsive" alt="jobBox" src="assets/imgs/page/homepage1/icon-top-banner copy1.png"></div> */}
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
          <div className="content-job-inner"><span className="color-text-mutted text-32">Millions Of Jobs. </span>
            <h2 className="text-52 wow animate__animated animate__fadeInUp">Find The One That’s <span className="color-brand-2">Right</span> For You</h2>
            <div className="mt-40 pr-50 text-md-lh28 wow animate__animated animate__fadeInUp">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.</div>
            <div className="mt-40">
              <div className="wow animate__animated animate__fadeInUp"><Link className="btn btn-default" to="aboutus">More</Link></div>
            </div>
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
            <h5>CHappy Clients</h5>
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

    </>
  )
}