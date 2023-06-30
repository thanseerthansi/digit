import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Simplecontext } from "../Commonpages/Simplecontext";
import { Form } from "react-bootstrap";

export default function Employerprofile() {
  const {logouthandler,userdetail,Check_Validation,employeedata,setemployeedata}=useContext(Simplecontext)
  
  const [validated,setValidated]=useState(false)
  console.log("userdetailin profile",userdetail)
  console.log("employeedata profile",employeedata)
  
  // const navigate = useNavigate();
  useEffect(() => {
    console.log("useeffectemployee",userdetail)
  }, [])
  
 const Employeeupdate=async(e)=>{
    console.log("okentered to employee update")
    try {
      
    } catch (error) {
      
    }

 }
  return (
    <>
      <main className="main">
        <div className="carousel-inner"></div>
        <section className="section-box-2">
          <div className="container">
            <div className="banner-hero banner-image-single">
              <img
                src="assets/imgs/page/candidates/img copy.png"
                alt="jobbox"
              />
              <a className="btn-editor" href="#" />
            </div>
            <div className="box-company-profile">
              <div className="image-compay">
                <img
                  src="assets/imgs/page/candidates/candidate-profile copy.png"
                  alt="jobbox"
                />
              </div>
              <div className="row mt-10">
                <div className="col-lg-8 col-md-12">
                  <h5 className="f-18">
                    {userdetail?userdetail.user.username:""}
                    <span className="card-location font-regular ml-20">
                      {userdetail?userdetail.address[0].city:""},{userdetail?userdetail.address[0].country:""}
                    </span>
                  </h5>
                  <p className="mt-0 font-md color-text-paragraph-2 mb-15">
                    {userdetail?userdetail?.name??"":""}
                  </p>
                </div>
              </div>
            </div>
            <div className="border-bottom pt-10 pb-10" />
          </div>
        </section>
        <section className="section-box mt-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="box-nav-tabs nav-tavs-profile mb-5">
                  <ul className="nav" role="tablist">
                    <li>
                      <a
                        className="btn btn-border aboutus-icon mb-20 active"
                        href="#tab-my-profile"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="tab-my-profile"
                        aria-selected="true"
                      >
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a className="btn btn-border recruitment-icon mb-20" href="#tab-saved-jobs" data-bs-toggle="tab" role="tab" aria-controls="tab-my-jobs" aria-selected="false">
                        Update Profile
                      </a>
                    </li>
                  </ul>
                  <div className="border-bottom pt-10 pb-10" />
                  <div className="mt-10 mb-10">
                    <a href="#" onClick={()=>{logouthandler();}}> Log Out</a>
                  </div>
                </div>
                <div className="mt-20 mb-20">
                  <a className="link-red" href="#" onClick={() => {logouthandler();}}> Delete Account </a>
                  {/* <button className="link-red" onClick={()}>Log Out</button> */}
                </div>
              </div>
              <div className="col-lg-9 col-md-8 col-sm-12 col-12 mb-50">
                <div className="content-single">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="tab-my-profile"
                      role="tabpanel"
                      aria-labelledby="tab-my-profile"
                    >
                      <div className="  box-info-profie"></div>
                      <div className="row form-contact">
                        <div className="col-lg-6 col-md-12">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="card-grid- hover-up">
                              <div className="card-grid-2-image-left">
                                <div className="card-grid-2-image-rd online">
                                  <a href="candidate-details.html"></a>
                                </div>
                                <div className="card-profile pt-10">
                                  <a href="candidate-details.html">
                                    <h5>{userdetail?userdetail?.user.username??""??"":""}</h5>
                                  </a>
                                  <span className="font-xs color-text-mutted">
                                    {userdetail?.name??""}
                                  </span>
                                </div>
                              </div>
                              <div className="card-block-info">
                                <p className="font-xs color-text-paragraph-2">
                                  | Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Vero repellendus magni,
                                  atque delectus molestias quis?
                                </p>
                                <p className="font-sm color-brand-1">
                                  E Mail
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  : &nbsp;{userdetail?.email??""}
                                </p>
                                <p className="font-sm color-brand-1">
                                  Mobile &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;
                                  {userdetail?.phone??""}
                                </p>
                                <p className="font-sm color-brand-1">
                                  Country &nbsp;&nbsp;:&nbsp; {userdetail?userdetail.address[0]?.country??"":""}
                                </p>
                                <p className="font-sm color-brand-1">
                                  State
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  : &nbsp;{userdetail?userdetail.address[0]?.state??"":""}
                                </p>
                                <p className="font-sm color-brand-1">
                                  Zip code :&nbsp; {userdetail?userdetail.address?.[0]?.zipcode??"":""}
                                </p>
                                {/* <p className="font-sm color-brand-1">
                                  Website&nbsp;&nbsp; :
                                  &nbsp;https://alithemes.com/
                                </p> */}
                                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                  <div className="text-start"></div>
                                </div>
                                <div className="employers-info align-items-center justify-content-center mt-15">
                                  <div className="row">
                                    <div className="col-6">
                                      <span className="d-flex align-items-center">
                                        <i className="fi-rr-marker mr-5 ml-0" />
                                        <span className="font-sm color-text-mutted">
                                        {userdetail?userdetail.address[0].city:""},{userdetail?userdetail.address[0].country:""}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="tab-my-jobs"
                      role="tabpanel"
                      aria-labelledby="tab-my-jobs"
                    ></div>
                    <div
                      className="tab-pane fade"
                      id="tab-saved-jobs"
                      role="tabpanel"
                      aria-labelledby="tab-saved-jobs"
                    >
                      <h3 className="mt-0 mb-15 color-brand-1">My Account</h3>
                      <a className="font-md color-text-paragraph-2" href="#">
                        Update your profile
                      </a>
                      <div className="mt-35 mb-40 box-info-profie">
                        <div className="image-profile">
                          <img
                            src="assets/imgs/page/candidates/candidate-profile copy.png"
                            alt="jobbox"
                          />
                        </div>
                        <a className="btn btn-apply">Upload Avatar</a>
                        <a className="btn btn-link">Delete</a>
                      </div>
                      <div className="row form-contact">
                        <Form noValidate validated={validated} onSubmit={(e)=>Check_Validation(e,Employeeupdate,setValidated)} >
                        <div className="col-lg-12 col-md-12 row ">
                          <div className="form-group col-lg-6 mb-3">
                            <label className="font-sm color-text-mutted mb-10">
                              Full Name *
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={employeedata?.user?.username??""}
                              onChange={(e)=>setemployeedata({...employeedata,user:{...employeedata.user,username:e.target.value}})}
                            />
                            <Form.Control.Feedback type="invalid">
                          Please provide a Username
                        </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-6 mb-3">
                            <label className="font-sm color-text-mutted mb-10">
                              Email *
                            </label>
                            <input
                              className="form-control"
                              type="email"
                              value={employeedata?.email??""}
                              onChange={(e)=>setemployeedata({...employeedata,email:e.target.value})}
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide valid email
                            </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-6 mb-3">
                            <label className="font-sm color-text-mutted mb-10">
                              Contact number
                            </label>
                            <input
                              className="form-control"
                              type="tel"
                              value={employeedata?.phone??""}
                              onChange={(e)=>setemployeedata({...employeedata,phone:e.target.value})}
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid phone
                            </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-6 mb-3">
                            <label className="font-sm color-text-mutted mb-10">
                              Personal website
                            </label>
                            <input
                              className="form-control"
                              type="url"
                              value={employeedata?.website??""}
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid website
                            </Form.Control.Feedback>
                          </div>
                          <div className="form-group mb-3">
                            <label className="font-sm color-text-mutted mb-10">
                              Bio
                            </label>
                            <textarea
                              className="form-control"
                              rows={4}
                              value={employeedata?.bio??""}
                              onChange={(e)=>setemployeedata({...employeedata,bio:e.target.value})}
                              // defaultValue={
                              //   "We are AliThemes , a creative and dedicated group of individuals who love web development almost as much as we love our customers. We are passionate team with the mission for achieving the perfection in web design."
                              // }
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide bio
                            </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-6 mb-3">
                            <label className="font-sm color-text-mutted mb-10">
                              Country
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={employeedata?.address?.[0]?.country??""??""}
                              onChange={(e)=>setemployeedata({...employeedata,address:[{...employeedata.address,country:e.target.value}]})}

                            />
                            <Form.Control.Feedback type="invalid">
                          Please provide country
                        </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-6 mb-3">
                            <label className="font-sm color-text-mutted mb-10">
                              State
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={employeedata?.address?.address[0].state??''}
                              onChange={(e)=>setemployeedata({...employeedata,address:[{...employeedata.state,state:e.target.value}]})}
                            />
                            <Form.Control.Feedback type="invalid">
                          Please provide state
                        </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-6 mb-3">
                            <label className="font-sm color-text-mutted mb-10">
                              City
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              defaultValue="Mcallen"
                            />
                          </div>
                          <div className="form-group col-lg-6 mb-3">
                            <label className="font-sm color-text-mutted mb-10">
                              Zip code
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              defaultValue={82356}
                            />
                          </div>
                          <div className="box-button mt-15 ">
                            <button className="btn btn-apply-big font-md font-bold">
                              Update
                            </button>
                          </div>
                        </div>
                        </Form>
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
                <div className="col-xl-3 col-12 text-center d-none d-xl-block">
                  <img
                    src="assets/imgs/template/newsletter-left copy.png"
                    alt="joxBox"
                  />
                </div>
                <div className="col-lg-12 col-xl-6 col-12">
                  <h2 className="text-md-newsletter text-center">
                    New Things Will Always
                    <br /> Update Regularly
                  </h2>
                  <div className="box-form-newsletter mt-40">
                    <form className="form-newsletter">
                      <input
                        className="input-newsletter"
                        type="text"
                        defaultValue
                        placeholder="Enter your email here"
                      />
                      <button className="btn btn-default font-heading icon-send-letter">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
