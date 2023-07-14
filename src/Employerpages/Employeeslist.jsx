import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { Simplecontext } from '../Commonpages/Simplecontext';

export default function Employeeslist() {
  const {userdetail } = useContext(Simplecontext);
  console.log("userdetails in employeelist",userdetail)
  return (
    <>
    <main className="main">
  <div className="carousel-inner">
  </div>
  <section className="section-box-2">
    <div className="container">
      <div className="banner-hero banner-company">
        <div className="block-banner text-center">
          <h3 className="wow animate__animated animate__fadeInUp">Browse Candidates</h3>
          <div className="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, <br className="d-none d-xl-block" />atque delectus molestias quis?</div>
          <div className="box-list-character">
            <div className="search-wrapper  col-md-6">
              <i className="search-icon fas fa-search mt-3" />
              <input type="text" className="search" placeholder="Serch Here" />
              <button className="search-button">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-box mt-30">
    <div className="container">           
      <div className="content-page">
        <div className="box-filters-job">
          <div className="row">
            <div className="col-xl-6 col-lg-5"><span className="text-small text-showing">Showing <strong>41-60 </strong>of <strong>944 </strong>jobs</span></div>
            <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
              <div className="display-flex2">
                <div className="box-border mr-10"><span className="text-sortby">Show:</span>
                  <div className="dropdown dropdown-sort">
                    <button className="btn dropdown-toggle" id="dropdownSort" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><span>12</span><i className="fi-rr-angle-small-down" /></button>
                    <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort">
                      <li><a className="dropdown-item active" href="#">10</a></li>
                      <li><a className="dropdown-item" href="#">12</a></li>
                      <li><a className="dropdown-item" href="#">20</a></li>
                    </ul>
                  </div>
                </div>
                <div className="box-border"><span className="text-sortby">Sort by:</span>
                  <div className="dropdown dropdown-sort">
                    <button className="btn dropdown-toggle" id="dropdownSort2" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><span>Newest Post</span><i className="fi-rr-angle-small-down" /></button>
                    <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort2">
                      <li><a className="dropdown-item active" href="#">Newest Post</a></li>
                      <li><a className="dropdown-item" href="#">Oldest Post</a></li>
                      <li><a className="dropdown-item" href="#">Rating Post</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><a href="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user1.png" /></figure></a></div>
                <div className="card-profile pt-10"><a href="candidate-details.html">
                    <h5>Robert Fox</h5></a><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <h6 className="card-id">ID:9088667766</h6>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">PSD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">App</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Digital</a>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><a href="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user2.png" /></figure></a></div>
                <div className="card-profile pt-10"><a href="candidate-details.html">
                    <h5>Cody Fisher</h5></a><span className="font-xs color-text-mutted">Python developer</span>
                  <h6 className="card-id">ID:9088667766</h6>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">PSD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">App</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Digital</a>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd "><a href="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user3.png" /></figure></a></div>
                <div className="card-profile pt-10"><a href="candidate-details.html">
                    <h5>Jerome Bell</h5></a><span className="font-xs color-text-mutted">Content Manager</span>
                  <h6 className="card-id">ID:9088667766</h6>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">PSD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">App</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Digital</a>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><a href="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user4.png" /></figure></a></div>
                <div className="card-profile pt-10"><a href="candidate-details.html">
                    <h5>Jane Cooper</h5></a><span className="font-xs color-text-mutted">Network</span>
                  <h6 className="card-id">ID:9088667766</h6>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">PSD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">App</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Digital</a>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><a href="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user5.png" /></figure></a></div>
                <div className="card-profile pt-10"><a href="candidate-details.html">
                    <h5>Floyd Miles</h5></a><span className="font-xs color-text-mutted">Photo Editing</span>
                  <h6 className="card-id">ID:9088667766</h6>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">PSD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">App</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Digital</a>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><a href="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user6.png" /></figure></a></div>
                <div className="card-profile pt-10"><a href="candidate-details.html">
                    <h5>Devon Lane</h5></a><span className="font-xs color-text-mutted">Online Marketing</span>
                  <h6 className="card-id">ID:9088667766</h6>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">PSD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">App</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Digital</a>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><a href="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user7.png" /></figure></a></div>
                <div className="card-profile pt-10"><a href="candidate-details.html">
                    <h5>Jerome Bell</h5></a><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <h6 className="card-id">ID:9088667766</h6>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">PSD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">App</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Digital</a>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><a href="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user8.png" /></figure></a></div>
                <div className="card-profile pt-10"><a href="candidate-details.html">
                    <h5>Eleanor</h5></a><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <h6 className="card-id">ID:9088667766</h6>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">PSD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">App</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Digital</a>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><a href="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user9.png" /></figure></a></div>
                <div className="card-profile pt-10"><a href="candidate-details.html">
                    <h5>Theresa</h5></a><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <h6 className="card-id">ID:9088667766</h6>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">PSD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">App</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Digital</a>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><a href="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user10.png" /></figure></a></div>
                <div className="card-profile pt-10"><a href="candidate-details.html">
                    <h5>Robert Fox</h5></a><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <h6 className="card-id">ID:9088667766</h6>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">PSD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">App</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Digital</a>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><a href="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user11.png" /></figure></a></div>
                <div className="card-profile pt-10"><a href="candidate-details.html">
                    <h5>Cameron</h5></a><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <h6 className="card-id">ID:9088667766</h6>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">PSD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">App</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Digital</a>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><a href="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user12.png" /></figure></a></div>
                <div className="card-profile pt-10"><a href="candidate-details.html">
                    <h5>Jacob Jones</h5></a><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <h6 className="card-id">ID:9088667766</h6>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">PSD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">App</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Digital</a>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><a href="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user13.png" /></figure></a></div>
                <div className="card-profile pt-10"><a href="candidate-details.html">
                    <h5>Court Henry</h5></a><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <h6 className="card-id">ID:9088667766</h6>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">PSD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">App</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Digital</a>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><a href="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user14.png" /></figure></a></div>
                <div className="card-profile pt-10"><a href="candidate-details.html">
                    <h5>Hawkins</h5></a><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <h6 className="card-id">ID:9088667766</h6>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">PSD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">App</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Digital</a>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><a href="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user15.png" /></figure></a></div>
                <div className="card-profile pt-10"><a href="candidate-details.html">
                    <h5>Howard</h5></a><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <h6 className="card-id">ID:9088667766</h6>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">PSD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">App</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Digital</a>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><a href="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user1.png" /></figure></a></div>
                <div className="card-profile pt-10"><a href="candidate-details.html">
                    <h5> Alexander</h5></a><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <h6 className="card-id">ID:9088667766</h6>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">PSD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">App</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Digital</a>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="paginations">
        <ul className="pager">
          <li><a className="pager-prev" href="#" /></li>
          <li><a className="pager-number" href="#">1</a></li>
          <li><a className="pager-number" href="#">2</a></li>
          <li><a className="pager-number" href="#">3</a></li>
          <li><a className="pager-number" href="#">4</a></li>
          <li><a className="pager-number" href="#">5</a></li>
          <li><a className="pager-number active" href="#">6</a></li>
          <li><a className="pager-number" href="#">7</a></li>
          <li><a className="pager-next" href="#" /></li>
        </ul>
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
    <script src="https://kit.fontawesome.com/065c1878aa.js" crossorigin="anonymous"></script>
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
    <script src="/assets/js/noUISlider.js"></script>
    <script src="/assets/js/slider.js"></script>
    <script src="/assets/js/main8c94.js?v=4.1"></script>
    </Helmet>
    </>
  )
}
