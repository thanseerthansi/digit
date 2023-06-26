import React, { useContext } from 'react'
import { Simplecontext } from '../Commonpages/Simplecontext'

export default function Employeeprofile() {
  const {logouthandler}=useContext(Simplecontext)
  return (
    <>
        <main className="main">
  <div className="carousel-inner">
  </div>
  <section className="section-box-2">
    <div className="container">
      <div className="banner-hero banner-image-single"><img src="assets/imgs/page/candidates/img copy1.png" alt="jobbox" /><a className="btn-editor" href="#" /></div>
      <div className="box-company-profile">
        <div className="image-compay"><img src="assets/imgs/page/candidates/candidate-profile copy1.png" alt="jobbox" /></div>
        <div className="row mt-10">
          <div className="col-lg-8 col-md-12">
            <h5 className="f-18">Steven Jobs <span className="card-location font-regular ml-20">New York, US</span></h5><br />
            <h5 className="f-18 u-color">Unique ID : <span>889900673321</span></h5>
            <p className="mt-0 font-md color-text-paragraph-2 mb-15">UI/UX Designer. Front end Developer</p>
            <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
          </div>
          <div className="col-lg-4 col-md-12 text-lg-end">     
            <div>
              <section>
                <h5 className="score-section mb-20">Score</h5>
                <svg className="circle-chart mt-10" viewBox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">
                  <circle className="circle-chart__background" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                  <circle className="circle-chart__circle" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                  <g className="circle-chart__info">
                    <text className="circle-chart__percent" x="16.91549431" y="15.5" alignmentBaseline="central" textAnchor="middle" fontSize={8}>125</text>
                    <text className="circle-chart__subline" x="16.91549431" y="20.5" alignmentBaseline="central" textAnchor="middle" fontSize={2}>Out of 999</text>
                  </g>
                </svg>
              </section>
              <div id="circle-staticstic-demo" />
            </div></div>
        </div>
      </div>
      <div className="border-bottom pt-10 pb-10" />
    </div>
  </section>
  <section className="section-box mt-50">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-12 col-sm-12">
          <div className="box-nav-tabs nav-tavs-profile mb-5">
            <ul className="nav" role="tablist">
              <li><a className="btn btn-border aboutus-icon mb-20 active" href="#tab-my-profile" data-bs-toggle="tab" role="tab" aria-controls="tab-my-profile" aria-selected="true">My Profile</a></li>
              <li><a className="btn btn-border recruitment-icon mb-20" href="#tab-my-jobs" data-bs-toggle="tab" role="tab" aria-controls="tab-my-jobs" aria-selected="false">Update Profile</a></li>
            </ul>
            <div className="border-bottom pt-10 pb-10" />
            <div className="mt-20 mb-20"><a className href="#">Share Profile</a></div>
            <div className="mt-20 mb-20"><a className  href="#" onClick={()=>logouthandler()}>Logout</a></div>
            <div className="mt-20 mb-20"><a className="link-red" href="#"><i className="fa fa-paper-plane-o" />Delete Account</a></div>
          </div>
        </div>
        <div className="col-lg-9 col-md-12 col-sm-12 col-12 mb-50 ">
          <div className="content-single ">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-my-profile" role="tabpanel" aria-labelledby="tab-my-profile">
                <div className="row form-contact">
                  <div className="col-lg-9 col-md-12">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div className="card-grid- hover-up">
                        <div className="card-grid-2-image-left">
                          <div className="card-grid-2-image-rd online">
                          </div>
                          <div className="card-profile pt-10">
                          </div>
                        </div>
                        <div className="card-block-info">
                          <div className="theme--dark">
                            <div id="container" className="container99">
                              <div className="header">
                                <div className="logo" />
                              </div>    
                              <section className="left-section">
                                <img src="assets/imgs/page/login-register/qr.png" className="is-circle6 profile-pic" />
                                <div className="profile-detail">
                                  <p className="profile-name">CRAG CARD</p>
                                  <span className="profile-summary">Deepak</span>
                                  <a className="profile-cv">ID:08INKL9507290001</a>
                                </div>
                              </section>
                              <div className="front-smooth" />
                            </div>
                          </div>
                          <p className="font-md color-text-paragraph-2 mt-30">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                          <p className="font-md color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                          <p className="font-sm color-brand-1">E Mail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;stevenjob@gmail.com</p>
                          <p className="font-sm color-brand-1">Mobile &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp; 01 - 234 567 89</p>
                          <p className="font-sm color-brand-1">Country &nbsp;&nbsp;:&nbsp; USA</p>
                          <p className="font-sm color-brand-1">State  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;New York</p>
                          <p className="font-sm color-brand-1">Zip code :&nbsp; 67345</p>
                          <p className="font-sm color-brand-1">Website&nbsp;&nbsp; : &nbsp;https://alithemes.com/</p>
                          <div className="card-2-bottom card-2-bottom-candidate mt-30">
                            <div className="text-start"><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">PSD</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">App</a><a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">Digital</a>
                            </div>
                          </div>
                          <div className="employers-info align-items-center justify-content-center mt-15">
                            <div className="row">
                              <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-white mb-30">
                  <div className="box-padding">
                    <h5 className="icon-edu">Career</h5>
                    <div className="row mt-30">
                      <div className="col-lg-9">
                        <div className="row">
                        </div>
                        <div className="box-timeline mt-50">
                          <div className="item-timeline"> 
                            <div className="timeline-year"> <span>2008-2012</span></div>
                            <div className="timeline-info"> 
                              <h5 className="color-brand-1 mb-20">Compony 1</h5>
                              <h6 className="color-text-paragraph-2 mb-15">Software engineer</h6>
                              <p className="color-text-paragraph-2 mb-15">company mail:Dummy@gmail.com</p>
                              <p className="color-text-paragraph-2 mb-15">Company Phone&nbsp;:+964545432</p>
                              <p className="color-text-paragraph-2 mb-15">Location:
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quibusdam?</p>
                              <p className="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam debitis voluptas quas ut quisquam vel maiores odit iure nobis ea?</p>
                            </div>
                          </div>
                          <div className="item-timeline"> 
                            <div className="timeline-year"> <span>2012-2013</span></div>
                            <div className="timeline-info"> 
                              <h5 className="color-brand-1 mb-20">Compony 2</h5>
                              <h6 className="color-text-paragraph-2 mb-15">Software engineer</h6>
                              <p className="color-text-paragraph-2 mb-15">company mail:Dummy@gmail.com</p>
                              <p className="color-text-paragraph-2 mb-15">Company Phone&nbsp;:+964545432</p>
                              <p className="color-text-paragraph-2 mb-15">Location:
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quibusdam?</p>
                              <p className="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam debitis voluptas quas ut quisquam vel maiores odit iure nobis ea?</p>
                            </div>
                          </div>
                          <div className="item-timeline"> 
                            <div className="timeline-year"> <span>2014-2015</span></div>
                            <div className="timeline-info"> 
                              <h5 className="color-brand-1 mb-20">Compony 3</h5>
                              <h6 className="color-text-paragraph-2 mb-15">Software engineer</h6>
                              <p className="color-text-paragraph-2 mb-15">company mail:Dummy@gmail.com</p>
                              <p className="color-text-paragraph-2 mb-15">Company Phone&nbsp;:+964545432</p>
                              <p className="color-text-paragraph-2 mb-15">Location:
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quibusdam?</p>
                              <p className="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam debitis voluptas quas ut quisquam vel maiores odit iure nobis ea?</p>
                            </div>
                          </div>
                          <div className="item-timeline"> 
                            <div className="timeline-year"> <span>2016-2018 </span></div>
                            <div className="timeline-info"> 
                              <h5 className="color-brand-1 mb-20">Compony 4</h5>
                              <h6 className="color-text-paragraph-2 mb-15">Software engineer</h6>
                              <p className="color-text-paragraph-2 mb-15">company mail:Dummy@gmail.com</p>
                              <p className="color-text-paragraph-2 mb-15">Company Phone&nbsp;:+964545432</p>
                              <p className="color-text-paragraph-2 mb-15">Location:
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quibusdam?</p>
                              <p className="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam debitis voluptas quas ut quisquam vel maiores odit iure nobis ea?</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-white mb-30">
                  <div className="box-padding">
                    <h5 className="icon-edu">Education</h5>
                    <div className="row mt-30">
                      <div className="col-lg-9">
                        <div className="row">
                          <table className="table9">
                            <thead>
                              <tr>
                                <th scope="col">Cource</th>
                                <th scope="col">Field/board</th>
                                <th scope="col">Collage</th>
                                <th scope="col">Grade/Score</th>
                                <th scope="col">Year</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td data-label="Cource">10th Board</td>
                                <td data-label="Field/board">Kerala Board</td>
                                <td data-label="Collage">Dummy School</td>
                                <td data-label="Grade/Score">9.6</td>
                                <td data-label="Year">03/31/2016</td>
                              </tr>
                              <tr>
                                <td scope="row" data-label="Cource">12th Board</td>
                                <td data-label="Field/board">Kerala Board</td>
                                <td data-label="Collage">Dummy School</td>
                                <td data-label="Grade/Score">6.8</td>
                                <td data-label="Year">02/29/2016</td>
                              </tr>
                              <tr>
                                <td scope="row" data-label="Cource">Bachelor’s</td>
                                <td data-label="Field/board">Computer Science</td>
                                <td data-label="Collage">Dummy Collage</td>
                                <td data-label="Grade/Score">9.6</td>
                                <td data-label="Year">02/29/2016</td>
                              </tr>
                              <tr>
                                <td scope="row" data-label="Cource">Master’s</td>
                                <td data-label="Field/board">Electronics</td>
                                <td data-label="Collage">Dummy Collage</td>
                                <td data-label="Grade/Score">8.9</td>
                                <td data-label="Year">01/31/2016</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-my-jobs" role="tabpanel" aria-labelledby="tab-my-jobs">
                <h3 className="mt-0 mb-15 color-brand-1">Update Profile</h3><a className="font-md color-text-paragraph-2" href="#">Update your profile</a>
                <div className="mt-35 mb-40 box-info-profie">
                  <div className="image-profile"><img src="assets/imgs/page/candidates/candidate-profile copy1.png" alt="jobbox" /></div><a className="btn btn-apply">Upload Avatar</a><a className="btn btn-link">Delete</a>
                </div>
                <div className="row form-contact">
                  <div className="col-lg-12 col-md-12 row">
                    <div className="form-group col-md-6 mb-3">
                      <label className="font-sm color-text-mutted mb-10">Full Name *</label>
                      <input className="form-control" type="text" defaultValue="Steven Job" />
                    </div>
                    <div className="form-group col-md-6 mb-3">
                      <label className="font-sm color-text-mutted mb-10">Email *</label>
                      <input className="form-control" type="text" defaultValue="stevenjob@gmail.com" />
                    </div>
                    <div className="form-group col-md-6 mb-3">
                      <label className="font-sm color-text-mutted mb-10">Contact number</label>
                      <input className="form-control" type="text" defaultValue="01 - 234 567 89" />
                    </div>
                    <div className="form-group col-md-6 mb-3">
                      <label className="font-sm color-text-mutted mb-10">Personal website</label>
                      <input className="form-control" type="url" defaultValue="https://alithemes.com/" />
                    </div>
                    <div className="form-group mb-3">
                      <label className="font-sm color-text-mutted mb-10">Bio</label>
                      <textarea className="form-control" rows={4} defaultValue={"We are AliThemes , a creative and dedicated group of individuals who love web development almost as much as we love our customers. We are passionate team with the mission for achieving the perfection in web design."} />
                    </div>
                    <div className="form-group col-md-6 mb-3">
                      <label className="font-sm color-text-mutted mb-10">Country</label>
                      <input className="form-control" type="text" defaultValue="United States" />
                    </div>
                    <div className="form-group col-md-6 mb-3">
                      <label className="font-sm color-text-mutted mb-10">State</label>
                      <input className="form-control" type="text" defaultValue="New York" />
                    </div>
                    <div className="form-group col-md-6 mb-3">
                      <label className="font-sm color-text-mutted mb-10">City</label>
                      <input className="form-control" type="text" defaultValue="Mcallen" />
                    </div>
                    <div className="form-group col-md-6 mb-3">
                      <label className="font-sm color-text-mutted mb-10">Zip code</label>
                      <input className="form-control" type="text" defaultValue={82356} />
                    </div>
                    <div className="form-group col-md-12 mb-3">
                      <h5 className="mt-20 color-brand-1">Skills</h5>
                      <div className="box-skills">
                        <div className="form-contact">
                          <div className="form-group">
                            <input className="form-control search-icon" type="text" defaultValue placeholder="E.g. Angular, Laravel..." />
                          </div>
                        </div>
                        <div className="box-tags mt-30"><a className="btn btn-grey-small mr-10">Figma<span className="close-icon" /></a><a className="btn btn-grey-small mr-10">Adobe XD<span className="close-icon" /></a><a className="btn btn-grey-small mr-10">NextJS<span className="close-icon" /></a><a className="btn btn-grey-small mr-10">React<span className="close-icon" /></a><a className="btn btn-grey-small mr-10">App<span className="close-icon" /></a><a className="btn btn-grey-small mr-10">Digital<span className="close-icon" /></a><a className="btn btn-grey-small mr-10">NodeJS<span className="close-icon" /></a></div>
                        <div className="mt-40"> <span className="card-info font-sm color-text-paragraph-2">You can add up to 15 skills</span></div>
                      </div>
                    </div>
                    <div className="form-group col-md-12 mb-3">
                      <div className="panel-white mb-30">
                        <div className="box-padding">
                          <h5 className="icon-edu">Education</h5>
                          <div className="row mt-30">
                            <div className="col-lg-9">
                              <div className="row">
                                <div className="col-lg-12"> 
                                  <div className="form-group mt-10">
                                    <button data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm" className="btn btn-default1 btn-brand icon-tick">Add Timeline</button>
                                  </div>
                                </div>
                              </div>
                              <div className="box-timeline mt-50">
                                <div className="item-timeline"> 
                                  <div className="timeline-year"> <span>2008-2012</span></div>
                                  <div className="timeline-info"> 
                                    <h5 className="color-brand-1 mb-20">Compony 1</h5>
                                    <h6 className="color-text-paragraph-2 mb-15">Software engineer</h6>
                                    <p className="color-text-paragraph-2 mb-15">company mail:Dummy@gmail.com</p>
                                    <p className="color-text-paragraph-2 mb-15">Company Phone&nbsp;:+964545432</p>
                                    <p className="color-text-paragraph-2 mb-15">Location:
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quibusdam?</p>
                                    <p className="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam debitis voluptas quas ut quisquam vel maiores odit iure nobis ea?</p>
                                  </div>
                                  <div className="timeline-actions"> <a className="btn btn-editor1" /><a className="btn btn-remove1" /></div>
                                </div>
                                <div className="item-timeline"> 
                                  <div className="timeline-year"> <span>2012-2013</span></div>
                                  <div className="timeline-info"> 
                                    <h5 className="color-brand-1 mb-20">Compony 2</h5>
                                    <h6 className="color-text-paragraph-2 mb-15">Software engineer</h6>
                                    <p className="color-text-paragraph-2 mb-15">company mail:Dummy@gmail.com</p>
                                    <p className="color-text-paragraph-2 mb-15">Company Phone&nbsp;:+964545432</p>
                                    <p className="color-text-paragraph-2 mb-15">Location:
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quibusdam?</p>
                                    <p className="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam debitis voluptas quas ut quisquam vel maiores odit iure nobis ea?</p>
                                  </div>
                                  <div className="timeline-actions"> <a className="btn btn-editor1" /><a className="btn btn-remove1" /></div>
                                </div>
                                <div className="item-timeline"> 
                                  <div className="timeline-year"> <span>2014-2015</span></div>
                                  <div className="timeline-info"> 
                                    <h5 className="color-brand-1 mb-20">Compony 3</h5>
                                    <h6 className="color-text-paragraph-2 mb-15">Software engineer</h6>
                                    <p className="color-text-paragraph-2 mb-15">company mail:Dummy@gmail.com</p>
                                    <p className="color-text-paragraph-2 mb-15">Company Phone&nbsp;:+964545432</p>
                                    <p className="color-text-paragraph-2 mb-15">Location:
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quibusdam?</p>
                                    <p className="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam debitis voluptas quas ut quisquam vel maiores odit iure nobis ea?</p>
                                  </div>
                                  <div className="timeline-actions"> <a className="btn btn-editor1" /><a className="btn btn-remove1" /></div>
                                </div>
                                <div className="item-timeline"> 
                                  <div className="timeline-year"> <span>2016-2018 </span></div>
                                  <div className="timeline-info"> 
                                    <h5 className="color-brand-1 mb-20">Compony 4</h5>
                                    <h6 className="color-text-paragraph-2 mb-15">Software engineer</h6>
                                    <p className="color-text-paragraph-2 mb-15">company mail:Dummy@gmail.com</p>
                                    <p className="color-text-paragraph-2 mb-15">Company Phone&nbsp;:+964545432</p>
                                    <p className="color-text-paragraph-2 mb-15">Location:
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quibusdam?</p>
                                    <p className="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam debitis voluptas quas ut quisquam vel maiores odit iure nobis ea?</p>
                                  </div>
                                  <div className="timeline-actions"> <a className="btn btn-editor1" /><a className="btn btn-remove1" /></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel-white mb-30">
                      <div className="box-padding">
                        <h5 className="icon-edu">Career</h5>
                        <div className="row mt-30">
                          <div className="col-lg-11 col-md-12">
                            <div className="col-lg-12 mt-20"> 
                              <div className="form-group mb-10">
                                <button data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm2" className="btn btn-default1 btn-brand ft-button3">Add New</button>
                              </div>
                            </div>
                            <div className="row">
                              <table className="table9">
                                <thead>
                                  <tr>
                                    <th scope="col">Cource/</th>
                                    <th scope="col">Field/board</th>
                                    <th scope="col">Collage</th>
                                    <th scope="col">Grade/Score</th>
                                    <th scope="col">Year</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td data-label="Company">10th Board</td>
                                    <td data-label="Position">Kerala Board</td>
                                    <td data-label="Position">Dummy School</td>
                                    <td data-label="From">9.6</td>
                                    <td data-label="To">03/31/2016</td>
                                    <td className="timeline-actions"> <a className="btn btn-editor1" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm1" /><a className="btn btn-remove1" /></td>
                                  </tr>
                                  <tr>
                                    <td scope="row" data-label="Company">12th Board</td>
                                    <td data-label="Position">Kerala Board</td>
                                    <td data-label="Position">Dummy School</td>
                                    <td data-label="From">6.8</td>
                                    <td data-label="To">02/29/2016</td>
                                    <td className="timeline-actions"> <a className="btn btn-editor1" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm1" /><a className="btn btn-remove1" /></td>
                                  </tr>
                                  <tr>
                                    <td scope="row" data-label="Company">Bachelor’s</td>
                                    <td data-label="Position">Computer Science</td>
                                    <td data-label="Position">Dummy Collage</td>
                                    <td data-label="From">9.6</td>
                                    <td data-label="To">02/29/2016</td>  
                                    <td className="timeline-actions"> <a className="btn btn-editor1" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm1" /><a className="btn btn-remove1" /></td>
                                  </tr>
                                  <tr>
                                    <td scope="row" data-label="Company">Master’s</td>
                                    <td data-label="Position">Electronics</td>
                                    <td data-label="Position">Dummy Collage</td>
                                    <td data-label="From">8.9</td>
                                    <td data-label="To">01/31/2016</td>
                                    <td className="timeline-actions"> <a className="btn btn-editor1" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm1" /><a className="btn btn-remove1" /></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom pt-10 pb-10" />
                    <div className="box-button mt-15 col-md-6">
                      <button className="btn btn-apply-big font-mx font-bold ft-button1 mb-10 ">Save All Changes</button><button className="btn btn-apply-big font-mx font-bold ft-button2 mb-10 ">Reset</button>
                    </div>
                  </div>
                </div>
              </div>
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

    </>
  )
}
