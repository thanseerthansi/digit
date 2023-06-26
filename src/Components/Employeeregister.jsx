import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

export default function Employeeregister() {
    useEffect(() => {     
      window.scrollTo(0,0)
    }, [])
    
    const tophandler=()=>{
        window.scrollTo(0,200)
    }
  const selecthandler=(e)=>{
    console.log("eeeevalue selected",e)
  }
  return (
    <>
    <link href="/assets/css/stylecd4e.css?version=4.1" rel="stylesheet"></link>
    <main className="main reg-form-background">
  <div className="carousel-inner">
  </div>
  <section className="pt-50 login-register">
    <div> 
      <div className=" login-register-cover">
        <div className="col-12  mx-auto">
          <div className="text-center">
            <p className="font-sm text-brand-2">Register </p>
            <h2 className="mt-10 mb-5 text-brand-1">Complete Profile Today</h2>
            <p className="font-sm text-muted mb-30">Access to all features. No credit card required.</p>
            <div className="divider-text-center"><span>Register Now</span></div>
          </div>
          {/* multistep */}
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-11 col-sm-12 col-md-12 col-lg-9 col-xl-9 text-center p-0 mt-3 mb-2">
                <div className="card3 px-0 pt-4 pb-0 mt-3 mb-3">
                  <form id="msform"  className="reg-form contact10">
                    {/* progressbar */}
                    <ul id="progressbar">
                      <li className="active" id="account"><strong>Personal</strong></li>
                      <li id="personal"><strong>Address</strong></li>
                      <li id="payment"><strong>Education&amp; Career</strong></li>
                      <li id="confirm"><strong>Finish</strong></li>
                    </ul>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
                      </div>
                    </div> <br /> {/* fieldsets */}
                    <fieldset>
                      <div className="form-card row">
                        <div className="row">
                          <div className="col-12">
                            <h2 className="fs-title">Personal Information:</h2>
                          </div>
                        </div> 
                        <div className="form-group col-md-4 ">
                          <label className="form-label" htmlFor="input-1" />
                          <input className="form-control" id="input-1" type="text" required name="Full Name " placeholder="First Name " />
                        </div>
                        <div className="form-group col-md-4 ">
                          <label className="form-label" htmlFor="input-1" />
                          <input className="form-control" id="input-1" type="text" required name="fullname" placeholder="Middile Name" />
                        </div>
                        <div className="form-group col-md-4 ">
                          <label className="form-label" htmlFor="input-1" />
                          <input className="form-control" id="input-1" type="text" required name="fullname" placeholder="Last Name" />
                        </div>
                        <div className="form-group mt-4 col-md-4 ">
                          <input className="dob" placeholder="Date of Birth" type="text" onfocus="(this.type = 'date')" id="date" />
                        </div>
                        <div className="form-group col-md-4">
                          <label className="form-label" htmlFor="input-2" />
                          <input className="form-control" id="input-2" type="email" required name="emailaddress" placeholder="stevenjob@gmail.com" />
                        </div>
                        <div className="form-group col-md-4 ">
                          <label className="form-label" htmlFor="input-2" />
                          <input className="form-control" id="input-2" type="tel" required name="emailaddress" placeholder="Phone Number" />
                        </div>
                        <h6 className="permenent-address education col-12 mb-2 ">Language Known</h6>
                        <div className=" col-lg-6 ">
                          <label className="fieldlabels font-sm color-text-mutted">Read*</label>
                          <input type="text" className="form-control" placeholder=" Language" id />
                        </div>
                        <div className="form-group col-lg-6 font-sm color-text-mutted">
                          <label className="fieldlabels">Write*</label>
                          <input type="text" className="form-control" placeholder=" Language" id />
                        </div>
                        <div className="col-md-12 mb-3">
                          <label className="col-sm-12 font-sm color-text-mutted">Upload Your Photo*</label> 
                          <input type="file" name="pic" accept="image/*" /> 
                        </div>
                        <label className="dropdown  col-lg-4 col-md-12 col-sm-12 mt-30">
                          <div className="text__center ">
                            <select className="cs-select  cs-skin-elastic cs-skin-elastic1">
                              <option value disabled selected>ID Card Type</option>
                              <option value>Driving License</option>
                              <option value>Aadhar</option>
                              <option value>Passport</option>
                            </select>
                          </div>
                        </label>
                        <div className="form-group col-lg-4 col-sm-12">
                          <label className="col-sm-12 font-sm color-text-mutted">Upload ID card front Side*</label>
                          <input type="file" name="pic" accept="image/*" /> 
                        </div>
                        <div className="form-group col-lg-4 col-sm-12">
                          <label className="col-sm-12 font-sm color-text-mutted">Upload ID card Back Side*</label> 
                          <input type="file" name="pic" accept="image/*" /> 
                        </div>
                        <label className="dropdown col-lg-4 col-sm-12 mt-30">
                          <div className="text__center">
                            <select className="cs-select cs-skin-elastic cs-skin-elastic1">
                              <option value disabled selected>Address Proof</option>
                              <option value>Driving License</option>
                              <option value>Aadhar</option>
                              <option value>Passport</option>
                            </select>
                          </div>
                        </label>
                        <div className="form-group col-lg-4 col-sm-12">
                          <label className="col-sm-12 font-sm color-text-mutted">Upload Address Proof Front Side*</label> 
                          <input type="file" name="pic" accept="image/*" /> 
                        </div>
                        <div className="form-group col-lg-4 col-sm-12 font-sm color-text-mutted">
                          <label className="col-sm-12">Upload Address Proof Back Side*</label> 
                          <input type="file" name="pic" accept="image/*" /> 
                        </div>
                        <div className="col-12 row mt-3 mb-20">
                          <label className="col-lg-4 col-sm-6">Marital status</label>
                          <p className="col-lg-2 col-sm-2 mari">
                            <input type="radio" id="test1" name="radio-group" defaultChecked />
                            <label htmlFor="test1">Single</label>
                          </p>
                          <p className="col-lg-2 col-sm-2 mari">
                            <input type="radio" id="test2" name="radio-group" />
                            <label htmlFor="test2">Married</label>
                          </p>
                          <p className="col-lg-2 col-sm-2 mari">
                            <input type="radio" id="test3" name="radio-group" />
                            <label htmlFor="test3">Others</label>
                          </p>
                        </div>
                        <h6 className="permenent-address mb-3 col-12 form-t">Family Background</h6>
                        <div className="form-group col-lg-6">
                          <input type="text" className="form-control" placeholder="Father's Name" id />
                        </div>
                        <div className="form-group col-lg-6">
                          <input type="text" className="form-control" placeholder="Father's Occupation" id />
                        </div>
                        <div className="form-group col-lg-6">
                          <input type="text" className="form-control" placeholder="Mother's Name" id />
                        </div>
                        <div className="form-group col-lg-6">
                          <input type="text" className="form-control" placeholder="Mother's Occupation" id />
                        </div>
                        <h6 className="permenent-address mb-3 col-12 form-t">Sibling’s details</h6>
                        <div className="form-group col-lg-3">
                          <div className="text__center">
                            <select className="cs-select cs-skin-elastic cs-skin-elastic1">
                              <option value disabled selected>Select</option>
                              <option value>Brother</option>
                              <option value>Sister</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" className="form-control" placeholder="Name" id />
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" className="form-control" placeholder="Qualification" id />
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" className="form-control" placeholder="Occupation" id />
                        </div>
                        <div className="line-item-property__actions col-12 row mt-3 mb-3">
                          <button className="col-lg-2 button-form1" type="button" id="btnAdd" value="+">Add</button>
                          <button className="col-lg-2 button-form2" type="button" id="btnDel" value="-">Remove</button>
                        </div>
                        <h6 className="permenent-address mb-3 col-12 form-t">Spouse details</h6>
                        <div className="form-group col-lg-3">
                          <div className="text__center">
                            <select className="cs-select cs-skin-elastic cs-skin-elastic1">
                              <option value disabled selected>Select</option>
                              <option value>Wife</option>
                              <option value>Husband</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" className="form-control" placeholder="Name" id />
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" className="form-control" placeholder="Qualification" id />
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" className="form-control" placeholder="Occupation" id />
                        </div>
                        <h6 className="permenent-address mb-3 col-12 form-t">Child’s details</h6>
                        <div className="form-group col-lg-3">
                          <div className="text__center">
                            <select className="cs-select cs-skin-elastic cs-skin-elastic1">
                              <option value disabled selected>Select</option>
                              <option value>Doughter</option>
                              <option value>Son</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" className="form-control" placeholder="Name" id />
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" className="form-control" placeholder="Qualification" id />
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" className="form-control" placeholder="Occupation" id />
                        </div>
                        <div className="line-item-property__actions col-12 row mt-3 mb-3">
                          <button className="col-lg-2 button-form1" type="button" id="btnAdd" value="+">Add</button>
                          <button className="col-lg-2 button-form2" type="button" id="btnDel" value="-">Remove</button>
                        </div>
                      </div> <input type="button" name="next" onClick={tophandler} className="pr-button next action-button" defaultValue="Next" />
                    </fieldset>
                    <fieldset>
                      <div className="form-card">
                        <div className="row">
                          <div className="col-12">
                            <h2 className="fs-title">Address:</h2>
                          </div>
                        </div> 
                        <div className="row">
                          <h6 className="permenent-address">Permanent Address</h6>
                          <div className="form-group mt-4">
                            <input type="text" className="form-control" placeholder="Address Line 1" id="pAddressLine1" />
                          </div>
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Address Line 2" id="pAddressLine2" />
                          </div>
                          <div className="form-group col-lg-6">
                            <input type="text" className="form-control" placeholder="Landmark" id="pLandmark" />
                          </div>
                          <div className="form-group col-lg-6 ">
                            <input type="text" className="form-control" placeholder="Zip Code" id="pZipcode" />
                          </div>
                          <div className="form-group col-lg-4">
                            <input type="text" className="form-control" placeholder="City" id="pCity" />
                          </div>
                          <div className="form-group col-lg-4">
                            <input type="text" className="form-control" placeholder="State" id="pState" />
                          </div>
                          <div className="form-group col-lg-4">
                            <input type="text" className="form-control" placeholder="country" id="pCountry" />
                          </div>
                          <h6>Current Address</h6>
                          <div className="form-group col-lg-1 col-md-1 col-xl-1 col-sm-2 ">
                            <input className="check " type="checkbox" /> 
                          </div>
                          <div className="form-group col-lg-11 col-md-11 col-xl-11 col-sm-8 p-address ">
                            <hp className="p-address">Same as permanent address<p />
                            </hp></div>
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Address Line 1" id="curAddressLine1" />
                          </div>
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Address Line 2" id="curAddressLine2" />
                          </div>
                          <div className="form-group col-lg-6">
                            <input type="text" className="form-control" placeholder="Landmark" id="curLandmark" />
                          </div>
                          <div className="form-group col-lg-6">
                            <input type="text" className="form-control" placeholder="Zip Code" id="curZipcode" />
                          </div>
                          <div className="form-group col-lg-4">
                            <input type="text" className="form-control" placeholder="City" id="curCity" />
                          </div>
                          <div className="form-group col-lg-4">
                            <input type="text" className="form-control" placeholder="State" id="curState" />
                          </div>
                          <div className="form-group col-lg-4">
                            <input type="text" className="form-control" placeholder="country" id="curCountry" />
                          </div>
                        </div>
                        <input type="text" name="phno_2" placeholder="Alternate Contact No." />
                      </div> 
                      <input type="button" name="next" onClick={tophandler} className="pr-button next action-button" defaultValue="Next" /> 
                      <input type="button" name="previous" className="pr-button previous action-button-previous" defaultValue="Previous" />
                    </fieldset>
                    <fieldset>
                      <div className="form-card">
                        <div className="row">
                          <div className="col-12">
                            <h2 className="fs-title">Education and career:</h2>
                          </div>
                        </div>
                        <div className="row">
                          <h6 className="permenent-address mb-3 col-12">Education Qualification</h6>
                          <div className=" ">
                            <div id className="property-fields__row row">
                              <h6 className="permenent-address mb-3 col-12 form-t">10th Board</h6>
                              <div className="form-group col-lg-3 ">
                                <div className="text__center">
                                  <select className="cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value disabled selected>Board</option>
                                    <option value>Kerala Board</option>
                                    <option value>CBSE</option>
                                    <option value>Karnataka Board</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group col-lg-3  ">
                                <input type="text" className="form-control" placeholder=" School/University" id />
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" className="form-control" placeholder=" Grade/Score" id />
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" className="form-control" placeholder=" Year" id />
                              </div>
                            </div>
                          </div>
                        </div> 
                        <div className="row">
                          <div className=" ">
                            <div id className=" row">
                              <h6 className="permenent-address mb-3 col-12 form-t">12th Board</h6>
                              <div className="form-group col-lg-3 ">
                                <div className="text__center">
                                  <select className="cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value disabled selected>Board</option>
                                    <option value>Kerala Board</option>
                                    <option value>CBSE</option>
                                    <option value>Karnataka Board</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group col-lg-3  ">
                                <input type="text" className="form-control" placeholder=" School/University" id />
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" className="form-control" placeholder=" Grade/Score" id />
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" className="form-control" placeholder=" Year" id />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className=" ">
                            <div id className=" row">
                              <h6 className="permenent-address mb-3 col-12 form-t">Bachelor’s Degree</h6>
                              <div className="form-group col-lg-3 ">
                                <div className="text__center">
                                  <select className="cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value disabled selected>Cource</option>
                                    <option value>Computer science</option>
                                    <option value>Electronics</option>
                                    <option value>Civil</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group col-lg-3  ">
                                <div className="text__center">
                                  <select className="cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value disabled selected>Collage</option>
                                    <option value>Dummy collage1</option>
                                    <option value>Dummy collage2</option>
                                    <option value>Dummy collage3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" className="form-control" placeholder=" Grade/Score" id />
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" className="form-control" placeholder=" Year" id />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className=" ">
                            <div id className=" row">
                              <h6 className="permenent-address mb-3 col-12 form-t">Master’s Degree </h6>
                              <div className="form-group col-lg-3 ">
                                <div className="text__center">
                                  <select className="cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value disabled selected>Cource</option>
                                    <option value>Computer science</option>
                                    <option value>Electronics</option>
                                    <option value>Civil</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group col-lg-3  ">
                                <div className="text__center">
                                  <select className="cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value disabled selected>Collage</option>
                                    <option value>Dummy collage1</option>
                                    <option value>Dummy collage2</option>
                                    <option value>Dummy collage3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" className="form-control" placeholder=" Grade/Score" id />
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" className="form-control" placeholder=" Year" id />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="property-fields__roww ">
                            <div id="property-fields__row-1" className="property-fields__row row">
                              <h6 className="permenent-address mb-3 col-12 form-t">Additional Qualification</h6>
                              <div className="form-group col-lg-3 ">
                                <div className="text__center">
                                  <select className="cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value disabled selected>Cource</option>
                                    <option value>Computer science</option>
                                    <option value>Electronics</option>
                                    <option value>Civil</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group col-lg-3  ">
                                <div className="text__center">
                                  <select className="cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value disabled selected>Collage</option>
                                    <option value>Dummy collage1</option>
                                    <option value>Dummy collage2</option>
                                    <option value>Dummy collage3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" className="form-control" placeholder=" Grade/Score" id />
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" className="form-control" placeholder=" Year" id />
                              </div>
                            </div>
                            <div className="line-item-property__actions col-12 row mt-3 mb-3">
                              <button className="col-lg-2 button-form1" type="button" id="btnAdd" value="+">Add</button>
                              <button className="col-lg-2 button-form2" type="button" id="btnDel" value="-">Remove</button>
                            </div>
                          </div>
                        </div>
                        <h6 className="mt-3 color-brand-1">Skills</h6>
                        <div className="col-lg-12 col-md-12">
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
                        <h6 className="permenent-address mb-3">Career</h6>
                        <div className="property-fields__ro ">
                          <div id="property-fields__row-2" className="property-fields__ro row">
                            <h6 className="permenent-address form-t mb-3 col-12">Company</h6>
                            <div className="form-group col-lg-6 ">
                              <input type="text" className="form-control" placeholder=" Company Name" id />
                            </div>
                            <div className="form-group col-lg-6  ">
                              <input type="text" className="form-control" placeholder=" Position" id />
                            </div>
                            <div className="form-group col-lg-6 ">
                              <input type="tel" className="form-control" placeholder=" Company Phone" id />
                            </div>
                            <div className="form-group col-lg-6  ">
                              <input type="email" className="form-control" placeholder="Company email" id />
                            </div>
                            <div className="form-group col-lg-12  ">
                              <input type="text" className="form-control" placeholder="Company Address" id />
                            </div>
                            <div className="form-group col-lg-12  ">
                              <textarea type="text" className="form-control text-area11" placeholder="Job Description" id defaultValue={""} />
                            </div>
                            <div className="form-group col-lg-6 ">
                              <label className="col-sm-12 font-sm color-text-mutted">From*</label> 
                              <input type="date" className="form-control" placeholder=" From" id />
                            </div>
                            <div className="form-group col-lg-6 ">
                              <label className="col-sm-12 font-sm color-text-mutted">To*</label> 
                              <input type="date" className="form-control" placeholder=" To" id />
                            </div>
                          </div>
                          <div className="line-item-property__actions col-12 row mt-3 mb-3">
                            <button className="col-lg-2 button-form1" type="button" id="btnAd" value="+">Add</button>
                            <button className="col-lg-2 button-form2" type="button" id="btnDe" value="-">Remove</button>
                          </div>
                        </div>
                        <div className="property-fields__ro ">
                          <div id="property-fields__row-2" className="property-fields__ro row">
                            <h6 className="permenent-address form-t mb-3 col-12">Company</h6>
                            <div className="form-group col-lg-6 ">
                              <div className="text__center">
                                <select className="cs-select cs-skin-elastic cs-skin-elastic1">
                                  <option value disabled selected>Company Name</option>
                                  <option value="france">Company1</option>
                                  <option value="brazil">Company2</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-group col-lg-6  ">
                              <input type="text" className="form-control" placeholder=" Position" id />
                            </div>
                            <div className="form-group col-lg-6 ">
                              <input type="tel" className="form-control" placeholder=" Company Phone" id />
                            </div>
                            <div className="form-group col-lg-6  ">
                              <input type="email" className="form-control" placeholder="Company email" id />
                            </div>
                            <div className="form-group col-lg-12  ">
                              <input type="text" className="form-control" placeholder="Company Address" id />
                            </div>
                            <div className="form-group col-lg-12  ">
                              <textarea type="text" className="form-control text-area11" placeholder="Job Description" id defaultValue={""} />
                            </div>
                            <div className="form-group col-lg-6 ">
                              <label className="col-sm-12 font-sm color-text-mutted">From*</label> 
                              <input type="date" className="form-control" placeholder=" From" id />
                            </div>
                            <div className="form-group col-lg-6 ">
                              <label className="col-sm-12 font-sm color-text-mutted">To*</label> 
                              <input type="date" className="form-control" placeholder=" To" id />
                            </div>
                          </div>
                          <div className="line-item-property__actions col-12 row mt-3 mb-3">
                            <button className="col-lg-2 button-form1" type="button" id="btnAd" value="+">Add</button>
                            <button className="col-lg-2 button-form2" type="button" id="btnDe" value="-">Remove</button>
                          </div>
                        </div>
                        <div className="row">
                          <h6 className=" form-t mb-3 mt-3 col-12">Any other Proficiancy</h6>
                          <div className="form-group col-lg-12 ">
                            <textarea type="text" className="form-control text-area11" placeholder="Message" id defaultValue={""} />
                          </div>
                        </div>
                      </div>
                      <input type="button" name="next" className="pr-button next action-button"   defaultValue="Submit" /> 
                      <input type="button" name="previous" className="pr-button previous action-button-previous" defaultValue="Previous" />
                    </fieldset>
                    <fieldset>
                      <div className="form-card">
                        <div className="row">
                          <div className="col-7">
                          </div>
                          <div className="col-5">
                          </div>
                        </div> <br /><br />
                        <h2 className="purple-text text-center mb-20"><strong>SUCCESS </strong></h2> <br />
                        <div className="row justify-content-center">
                          <div className="theme--dark">
                            <div id="container" className="container99 container98">
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
                          <div className="profile-pils mt-20">
                            <span className="pils"><a href="candidate-profile.html" target="_blank"><i className="fa fa-eye" />View Profile</a></span>
                            <span className="pils"><a href target="_blank"><i className="fa fa-paper-plane-o" /> Share Profile</a></span>
                          </div>
                        </div> <br /><br />
                        <div className="row justify-content-center mt-130">
                          <div className="col-7 text-center">
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
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
        <script src="https://kit.fontawesome.com/065c1878aa.js" crossorigin="anonymous"></script>
    </Helmet>
    </>
  )
}
