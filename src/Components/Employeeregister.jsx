import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Filestack from '../Commonpages/Filestack';
import { notifyerror } from '../Commonpages/toast';
import { ToastContainer } from 'react-toastify';


const animatedComponents = makeAnimated();
export default function Employeeregister() {
  const [selectedskills,setselectedskills]=useState('')
  const [employeedata,setemployeedata]=useState([])
  const [carddata,setcarddata]=useState([])
  const [addressdata,setaddressdata]=useState([])
  const [currentaddressdata,setcurrentaddressdata]=useState([])
  const [siblingdata,setsiblingdata]=useState({})
  const [siblingsarray,setsiblingsarray]=useState([])
  const [childdata,setchilddata]=useState({})
  const [childsarray,setchildsarray]=useState([])
  const [spousedata,setspousedata]=useState({})
  const [tenthdata,settenthdata]=useState([])
  const [twelthdata,settwelthdata]=useState([])
  const [bachlerdata,setbachlerdata]=useState([])
  const [masterDegreedata,setmasterDegreedata]=useState([])
  const [additionaldata,setadditionaldata]=useState({})
  const [additionalarray,setadditionalarray]=useState({})

  console.log("valuedata",employeedata)
  // console.log("carddata",carddata)
  // console.log("siblingdata",siblingdata)
  // console.log("siblingarray",siblingsarray)
  // console.log("childdata",childdata)
  // console.log("childsarray",childsarray)
  // console.log("addressdata",addressdata)
  console.log("currentaddressdata",currentaddressdata)
  console.log("masterDegreedata",masterDegreedata)
  console.log("selectedskills",selectedskills)

    useEffect(() => {     
      window.scrollTo(0,0)
    }, [])
    
    const tophandler=()=>{
        window.scrollTo(0,200)
    }
  
  const colourOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'grey', label: 'grey' },
    { value: 'red', label: 'red' }
  ]
  const customStyles = {
    control: (provided) => ({
      ...provided,
      // Add your custom styles for the control element here
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: 'red', // Set the desired color for the cross button
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'green', // Set the desired color for the dropdown button
    }),
  };
  const Filestackhandler=async(ratio,setvalue,value,keypair)=>{
    console.log("keypair",keypair)
    let data =await Filestack(ratio)
    console.log("datafilestack",data)
    if (data){
      setvalue({...value,[keypair]:data})
    }
    
  }
  const pushhandler=(arraydata,setarraydata,listdata,setlistdata)=>{
    console.log("data",arraydata.length)
    if (Object.keys(arraydata).length){
      setlistdata([...listdata,arraydata])
      setarraydata({})
    }else{
      notifyerror("no dataa dded")
    }
  }
  const removeHandler=(listdata,setlistdata)=>{
    if(listdata){
      setlistdata(prevArray => prevArray.slice(0, prevArray.length - 1));
      // setlistdata(data)
    }
  }
  const addressHandler=(e)=>{
    setaddressdata({...addressdata,isCurrentsame:e.target.checked})
    if (e.target.checked){
      setcurrentaddressdata(addressdata)
    }else{
      setcurrentaddressdata({})
    }
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
                          <input onChange={(e)=>setemployeedata({...employeedata,firstName:e.target.value})} value={employeedata.firstName??""} className="form-control" id="input-1" type="text" required name="Full Name " placeholder="First Name " />
                        </div>
                        <div className="form-group col-md-4 ">
                          <label className="form-label" htmlFor="input-1" />
                          <input onChange={(e)=>setemployeedata({...employeedata,middleName:e.target.value})} value={employeedata.middleName??""}  className="form-control" id="input-1" type="text" required name="fullname" placeholder="Middile Name" />
                        </div>
                        <div className="form-group col-md-4 ">
                          <label className="form-label" htmlFor="input-1" />
                          <input className="form-control" id="input-1" type="text" required onChange={(e)=>setemployeedata({...employeedata,lastName:e.target.value})} value={employeedata.lastName??""}  name="fullname" placeholder="Last Name" />
                        </div>
                        <div className="form-group mt-4 col-md-4 ">
                          <input className="dob" onChange={(e)=>setemployeedata({...employeedata,dob:e.target.value})} value={employeedata.dob??""} placeholder="Date of Birth" type="text" onfocus="(this.type = 'date')" id="date" />
                        </div>
                        <div className="form-group col-md-4">
                          <label className="form-label" htmlFor="input-2" />
                          <input className="form-control" id="input-2" type="email"  onChange={(e)=>setemployeedata({...employeedata,email:e.target.value})} value={employeedata.email??""} required name="emailaddress" placeholder="stevenjob@gmail.com" />
                        </div>
                        <div className="form-group col-md-4 ">
                          <label className="form-label" htmlFor="input-2" />
                          <input className="form-control" id="input-2" type="tel"required name="emailaddress" onChange={(e)=>setemployeedata({...employeedata,phone:e.target.value})} value={employeedata.phone??""} placeholder="Phone Number" />
                        </div>
                        <h6 className="permenent-address education col-12 mb-2 ">Language Known</h6>
                        <div className=" col-lg-6 ">
                          <label className="fieldlabels font-sm color-text-mutted">Read*</label>
                          <input type="text"  onChange={(e)=>setemployeedata({...employeedata,lngRead:e.target.value})} value={employeedata.lngRead??""}  className="form-control" placeholder=" Language" id="" />
                        </div>
                        <div className="form-group col-lg-6 font-sm color-text-mutted">
                          <label className="fieldlabels">Write*</label>
                          <input type="text" onChange={(e)=>setemployeedata({...employeedata,lngWrite:e.target.value})} value={employeedata.lngWrite??""}  className="form-control" placeholder=" Language" id="" />
                        </div>
                        <div className="col-md-12 mb-3">
                          <label className="col-sm-12 font-sm color-text-mutted">Upload Your Photo*</label> 
                          {/* <input type="file" onClick={(e)=>Filestackhandler(e)} name="pic" accept="image/*" />  */}
                          <div className='imageselectorborder d-flex'>
                            <button onClick={()=>Filestackhandler("square",setemployeedata,employeedata,'profilePhoto')}  type='button' className='imageselector'> Choose Image</button>
                            <p style={{overflow:"hidden"}}>&nbsp;{employeedata.profilePhoto}</p>
                          </div>

                        </div>
                        <label className="dropdown  col-lg-4 col-md-12 col-sm-12 mt-30">
                          <div className="text__center ">
                            <select onChange={(e)=>setcarddata({...carddata,type:e.target.value})} value={carddata.type??""} className="cs-select  cs-skin-elastic cs-skin-elastic1">
                              <option value="" hidden >ID Card Type</option>
                              <option value ="drivingliscence" >Driving License</option>
                              <option value="aadhaar" >Aadhar</option>
                              <option value="passport" >Passport</option>
                            </select>
                          </div>
                        </label>
                        <div className="form-group col-lg-4 col-sm-12">
                          <label className="col-sm-12 font-sm color-text-mutted">Upload ID card front Side*</label>
                          {/* <input type="file" name="pic" accept="image/*" />  */}
                          <div className='imageselectorborder d-flex '>
                            <button onClick={()=>Filestackhandler("landscape",setcarddata,carddata,'frontUrl')} type='button' className='imageselector'> Choose Image</button>
                            <p style={{overflow:"hidden"}}>&nbsp;{carddata.frontUrl}</p>
                          </div>
                        </div>
                        <div className="form-group col-lg-4 col-sm-12">
                          <label className="col-sm-12 font-sm color-text-mutted">Upload ID card Back Side*</label> 
                          {/* <input type="file" name="pic" accept="image/*" />  */}
                          <div className='imageselectorborder d-flex '>
                            <button onClick={()=>Filestackhandler("landscape",setcarddata,carddata,'backUrl')} type='button' className='imageselector'> Choose Image</button>
                            <p style={{overflow:"hidden"}}>&nbsp;{carddata.backUrl??<span>No file chosen</span>}</p>
                          </div>
                        </div>
                        <label className="dropdown col-lg-4 col-sm-12 mt-30">
                          <div className="text__center">
                            <select onChange={(e)=>setaddressdata({...addressdata,type:e.target.value})} value={addressdata.type??""} className="cs-select cs-skin-elastic cs-skin-elastic1">
                              <option value disabled selected>Address Proof</option>
                              <option value>Driving License</option>
                              <option value>Aadhar</option>
                              <option value>Passport</option>
                            </select>
                          </div>
                        </label>
                        <div className="form-group col-lg-4 col-sm-12">
                          <label className="col-sm-12 font-sm color-text-mutted">Upload Address Proof Front Side*</label> 
                          {/* <input type="file" name="pic" accept="image/*" />  */}
                          <div className='imageselectorborder d-flex '>
                            <button onClick={()=>Filestackhandler("landscape",setaddressdata,addressdata,'frontUrl')} type='button' className='imageselector'> Choose Image</button>
                            <p style={{overflow:"hidden"}}>&nbsp;{addressdata.frontUrl??<span>No file chosen</span>}</p>
                          </div>
                        </div>
                        <div className="form-group col-lg-4 col-sm-12 font-sm color-text-mutted">
                          <label className="col-sm-12">Upload Address Proof Back Side*</label> 
                          {/* <input type="file" name="pic" accept="image/*" />  */}
                          <div className='imageselectorborder d-flex '>
                            <button onClick={()=>Filestackhandler("landscape",setaddressdata,addressdata,'backUrl')} type='button' className='imageselector'> Choose Image</button>
                            <p style={{overflow:"hidden"}}>&nbsp;{addressdata.backUrl??<span>No file chosen</span>}</p>
                          </div>
                        </div>
                        <div className="col-12 row mt-3 mb-20">
                          <label className="col-lg-4 col-sm-6">Marital status</label>
                          <p className="col-lg-2 col-sm-2 mari">
                            <input onChange={()=>setemployeedata({...employeedata,maritalStatus:"single"})} checked={employeedata.maritalStatus==="single"?true:false}  type="radio" id="test1" name="radio-group"  />
                            <label htmlFor="test1">Single</label>
                          </p>
                          <p className="col-lg-2 col-sm-2 mari">
                            <input onChange={()=>setemployeedata({...employeedata,maritalStatus:"married"})} checked={employeedata.maritalStatus==="married"?true:false} type="radio" id="test2" name="radio-group" />
                            <label htmlFor="test2">Married</label>
                          </p>
                          <p className="col-lg-2 col-sm-2 mari">
                            <input onChange={()=>setemployeedata({...employeedata,maritalStatus:"others"})} checked={employeedata.maritalStatus==="others"?true:false} type="radio" id="test3" name="radio-group" />
                            <label htmlFor="test3">Others</label>
                          </p>
                        </div>
                        <h6 className="permenent-address mb-3 col-12 form-t">Family Background</h6>
                        <div className="form-group col-lg-6">
                          <input onChange={(e)=>setemployeedata({...employeedata,fatherName:e.target.value})} value={employeedata.fatherName??""} type="text" className="form-control" placeholder="Father's Name" id="" />
                        </div>
                        <div className="form-group col-lg-6">
                          <input onChange={(e)=>setemployeedata({...employeedata,fatherOccupation:e.target.value})} value={employeedata.fatherOccupation??""} type="text" className="form-control" placeholder="Father's Occupation" id="" />
                        </div>
                        <div className="form-group col-lg-6">
                          <input onChange={(e)=>setemployeedata({...employeedata,motherName:e.target.value})} value={employeedata.motherName??""} type="text" className="form-control" placeholder="Mother's Name" id="" />
                        </div>
                        <div className="form-group col-lg-6">
                          <input onChange={(e)=>setemployeedata({...employeedata,motherOccupation:e.target.value})} value={employeedata.motherOccupation??""} type="text" className="form-control" placeholder="Mother's Occupation" id="" />
                        </div>
                        <h6 className="permenent-address mb-3 col-12 form-t">Sibling’s details</h6>
                        {siblingsarray.length?<>
                          {siblingsarray.map((itm,k)=>(
                            <React.Fragment key={k}>
                             <div key={k} className="form-group col-lg-3">
                             <div className="text__center">
                             <input type="text"  disabled value={itm.type}  className="" placeholder="Name" id=" " />
                             {/* <select disabled value={itm.type} className="cs-select cs-skin-elastic cs-skin-elastic1">
                               <option hidden selected>Select</option>
                               <option value="brother">Brother</option>
                               <option value="sister">Sister</option>
                             </select> */}
                           </div>
                         </div>
                         <div className="form-group col-lg-3">
                           <input type="text"  disabled value={itm.name} className="" placeholder="Name" id=" " />
                         </div>
                         <div className="form-group col-lg-3">
                           <input  value={itm.qualification} disabled type="text" className="" placeholder="Qualification" id=" " />
                         </div>
                         <div className="form-group col-lg-3">
                           <input  value={itm.occupation} disabled type="text" className="" placeholder="Occupation" id=" " />
                         </div>
                         </React.Fragment>
                          ))}
                           
                          </>:null}
                        <div className="form-group col-lg-3">                         
                          <div className="text__center">
                            <select onChange={(e)=>setsiblingdata({...siblingdata,type:e.target.value})} value={siblingdata.type??""} className="cs-select cs-skin-elastic cs-skin-elastic1">
                              <option hidden selected>Select</option>
                              <option value="brother">Brother</option>
                              <option value="sister">Sister</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" onChange={(e)=>setsiblingdata({...siblingdata,name:e.target.value})} value={siblingdata.name??""} className="form-control" placeholder="Name" id=" " />
                        </div>
                        <div className="form-group col-lg-3">
                          <input onChange={(e)=>setsiblingdata({...siblingdata,qualification:e.target.value})} value={siblingdata.qualification??""} type="text" className="form-control" placeholder="Qualification" id=" " />
                        </div>
                        <div className="form-group col-lg-3">
                          <input onChange={(e)=>setsiblingdata({...siblingdata,occupation:e.target.value})} value={siblingdata.occupation??""} type="text" className="form-control" placeholder="Occupation" id=" " />
                        </div>
                        <div className="line-item-property__actions col-12 row mt-3 mb-3">
                          <button onClick={()=>pushhandler(siblingdata,setsiblingdata,siblingsarray,setsiblingsarray)} className="col-lg-2 button-form1" type="button" id="btnAdd" value="+">Add</button>
                          <button onClick={()=>removeHandler(siblingsarray,setsiblingsarray)} className="col-lg-2 button-form2" type="button" id="btnDel" value="-">Remove</button>
                        </div>
                        <h6 className="permenent-address mb-3 col-12 form-t">Spouse details</h6>
                        <div className="form-group col-lg-3">
                          <div className="text__center">
                            <select onChange={(e)=>setspousedata({...spousedata,type:e.target.value})} value={spousedata.type??""} className="cs-select cs-skin-elastic cs-skin-elastic1">
                              <option value="" hidden selected>Select</option>
                              <option value="wife">Wife</option>
                              <option value="husband">Husband</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text"  onChange={(e)=>setspousedata({...spousedata,name:e.target.value})} value={spousedata.name??""} className="form-control" placeholder="Name" id=" " />
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" onChange={(e)=>setspousedata({...spousedata,qualification:e.target.value})} value={spousedata.qualification??""} className="form-control" placeholder="Qualification" id=" " />
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text"  onChange={(e)=>setspousedata({...spousedata,occupation:e.target.value})} value={spousedata.occupation??""} className="form-control" placeholder="Occupation" id=" " />
                        </div>
                        <h6 className="permenent-address mb-3 col-12 form-t">Child’s details</h6>
                        {childsarray.length?<>
                          {childsarray.map((itm,ck)=>(
                            <React.Fragment key={ck}>
                             <div className="form-group col-lg-3">
                             <div className="text__center">
                             <input type="text"  disabled value={itm.type}  className="" placeholder="Name" id=" " />
                           </div>
                         </div>
                         <div className="form-group col-lg-3">
                           <input type="text"  disabled value={itm.name} className="" placeholder="Name" id=" " />
                         </div>
                         <div className="form-group col-lg-3">
                           <input  value={itm.qualification} disabled type="text" className="" placeholder="Qualification" id=" " />
                         </div>
                         <div className="form-group col-lg-3">
                           <input  value={itm.occupation} disabled type="text" className="" placeholder="Occupation" id=" " />
                         </div>
                         </React.Fragment>
                          ))}
                           
                          </>:null}
                        <div className="form-group col-lg-3">
                          <div className="text__center">
                            <select  onChange={(e)=>setchilddata({...childdata,type:e.target.value})} value={childdata.type??""} className="cs-select cs-skin-elastic cs-skin-elastic1">
                              <option value="" hidden selected>Select</option>
                              <option value="daughter">Daughter</option>
                              <option value="son">Son</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" onChange={(e)=>setchilddata({...childdata,name:e.target.value})} value={childdata.name??""} className="form-control" placeholder="Name" id=" " />
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" onChange={(e)=>setchilddata({...childdata,qualification:e.target.value})} value={childdata.qualification??""} className="form-control" placeholder="Qualification" id=" " />
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" onChange={(e)=>setchilddata({...childdata,occupation:e.target.value})} value={childdata.occupation??""} className="form-control" placeholder="Occupation" id=" " />
                        </div>
                        <div className="line-item-property__actions col-12 row mt-3 mb-3">
                          <button onClick={()=>pushhandler(childdata,setchilddata,childsarray,setchildsarray)}  className="col-lg-2 button-form1" type="button" id="btnAdd" value="+">Add</button>
                          <button onClick={()=>removeHandler(childsarray,setchildsarray)} className="col-lg-2 button-form2" type="button" id="btnDel" value="-">Remove</button>
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
                            <input   onChange={(e)=>setaddressdata({...addressdata,line1:e.target.value})} value={addressdata.line1??""} type="text" className="form-control" placeholder="Address Line 1" id="pAddressLine1" />
                          </div>
                          <div className="form-group">
                            <input type="text"  onChange={(e)=>setaddressdata({...addressdata,line2:e.target.value})} value={addressdata.line2??""} className="form-control" placeholder="Address Line 2" id="pAddressLine2" />
                          </div>
                          <div className="form-group col-lg-6">
                            <input type="text"  onChange={(e)=>setaddressdata({...addressdata,landmark:e.target.value})} value={addressdata.landmark??""} className="form-control" placeholder="Landmark" id="pLandmark" />
                          </div>
                          <div className="form-group col-lg-6 ">
                            <input type="text"  onChange={(e)=>setaddressdata({...addressdata,zip:e.target.value})} value={addressdata.zip??""} className="form-control" placeholder="Zip Code" id="pZipcode" />
                          </div>
                          <div className="form-group col-lg-4">
                            <input type="text"  onChange={(e)=>setaddressdata({...addressdata,city:e.target.value})} value={addressdata.city??""} className="form-control" placeholder="City" id="pCity" />
                          </div>
                          <div className="form-group col-lg-4">
                            <input type="text"  onChange={(e)=>setaddressdata({...addressdata,state:e.target.value})} value={addressdata.state??""} className="form-control" placeholder="State" id="pState" />
                          </div>
                          <div className="form-group col-lg-4">
                            <input type="text"  onChange={(e)=>setaddressdata({...addressdata,country:e.target.value})} value={addressdata.country??""} className="form-control" placeholder="country" id="pCountry" />
                          </div>
                          <h6>Current Address</h6>
                          <div className="form-group col-lg-1 col-md-1 col-xl-1 col-sm-2 ">
                            <input className="check "  onChange={(e)=>addressHandler(e)} type="checkbox" /> 
                           
                          </div>
                          <div className="form-group col-lg-11 col-md-11 col-xl-11 col-sm-8 p-address ">
                            <p className="p-address">Same as permanent address<p />
                            </p></div>
                          <div className="form-group">
                            <input type="text" onChange={(e)=>setcurrentaddressdata({...currentaddressdata,line1:e.target.value})} value={currentaddressdata.line1??""} className="form-control" placeholder="Address Line 1" id="curAddressLine1" />
                          </div>
                          <div className="form-group">
                            <input type="text" onChange={(e)=>setcurrentaddressdata({...currentaddressdata,line2:e.target.value})} value={currentaddressdata.line2??""} className="form-control" placeholder="Address Line 2" id="curAddressLine2" />
                          </div>
                          <div className="form-group col-lg-6">
                            <input type="text" onChange={(e)=>setcurrentaddressdata({...currentaddressdata,landmark:e.target.value})} value={currentaddressdata.landmark??""} className="form-control" placeholder="Landmark" id="curLandmark" />
                          </div>
                          <div className="form-group col-lg-6">
                            <input type="text" onChange={(e)=>setcurrentaddressdata({...currentaddressdata,zip:e.target.value})} value={currentaddressdata.zip??""} className="form-control" placeholder="Zip Code" id="curZipcode" />
                          </div>
                          <div className="form-group col-lg-4">
                            <input type="text"  onChange={(e)=>setcurrentaddressdata({...currentaddressdata,city:e.target.value})} value={currentaddressdata.city??""} className="form-control" placeholder="City" id="curCity" />
                          </div>
                          <div className="form-group col-lg-4">
                            <input type="text" onChange={(e)=>setcurrentaddressdata({...currentaddressdata,state:e.target.value})} value={currentaddressdata.state??""} className="form-control" placeholder="State" id="curState" />
                          </div>
                          <div className="form-group col-lg-4">
                            <input type="text" onChange={(e)=>setcurrentaddressdata({...currentaddressdata,country:e.target.value})} value={currentaddressdata.country??""} className="form-control" placeholder="country" id="curCountry" />
                          </div>
                        </div>
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
                            <div id=" " className="property-fields__row row">
                              <h6 className="permenent-address mb-3 col-12 form-t">10th Board</h6>
                              <div className="form-group col-lg-3 ">
                                <div className="text__center">
                                  <select onChange={(e)=>settenthdata({...tenthdata,board:e.target.value})} value={tenthdata.board??""} className="cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value="" hidden selected>Board</option>
                                    <option value="Kerala Board">Kerala Board</option>
                                    <option value="CBSC">CBSE</option>
                                    <option value="Karnataka Board">Karnataka Board</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group col-lg-3  ">
                                <input type="text"  onChange={(e)=>settenthdata({...tenthdata,"school/university":e.target.value})} value={tenthdata["school/university"]??""}  className="form-control" placeholder=" School/University" id=" " />
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text"  onChange={(e)=>settenthdata({...tenthdata,"garde/score":e.target.value})} value={tenthdata["garde/score"]??""}  className="form-control" placeholder=" Grade/Score" id=" " />
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text"  onChange={(e)=>settenthdata({...tenthdata,year:e.target.value})} value={tenthdata.year??""}  className="form-control" placeholder=" Year" id=" " />
                              </div>
                            </div>
                          </div>
                        </div> 
                        <div className="row">
                          <div className=" ">
                            <div id=" " className=" row">
                              <h6 className="permenent-address mb-3 col-12 form-t">12th Board</h6>
                              <div className="form-group col-lg-3 ">
                                <div className="text__center">
                                  <select  onChange={(e)=>settwelthdata({...twelthdata,board:e.target.value})} value={twelthdata.board??""}  className="cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value="" hidden selected>Board</option>
                                    <option value="Kerala Board">Kerala Board</option>
                                    <option value="CBSC" >CBSE</option>
                                    <option value="Karnataka Board" >Karnataka Board</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group col-lg-3  ">
                                <input type="text" onChange={(e)=>settenthdata({...tenthdata,"school/university":e.target.value})} value={tenthdata["school/university"]??""} className="form-control" placeholder=" School/University" id=" " />
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" onChange={(e)=>settenthdata({...tenthdata,"garde/score":e.target.value})} value={tenthdata["garde/score"]??""} className="form-control" placeholder=" Grade/Score" id=" " />
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" onChange={(e)=>settenthdata({...tenthdata,year:e.target.value})} value={tenthdata.year??""} className="form-control" placeholder=" Year" id=" " />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className=" ">
                            <div id=" " className=" row">
                              <h6 className="permenent-address mb-3 col-12 form-t">Bachelor’s Degree</h6>
                              <div className="form-group col-lg-3 ">
                                <div className="text__center">
                                  <select  onChange={(e)=>setbachlerdata({...bachlerdata,course:e.target.value})} value={bachlerdata.course??""}  className="cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value ="" hidden selected>Course</option>
                                    <option value="Computer science">Computer science</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Civil">Civil</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group col-lg-3  ">
                                <div className="text__center">
                                  <select onChange={(e)=>setbachlerdata({...bachlerdata,collage:e.target.value})} value={bachlerdata.collage??""} className="cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value="" hidden selected>Collage</option>
                                    <option value="">Dummy collage1</option>
                                    <option value="">Dummy collage2</option>
                                    <option value="">Dummy collage3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" onChange={(e)=>setbachlerdata({...bachlerdata,"garde/score":e.target.value})} value={bachlerdata["garde/score"]??""} className="form-control" placeholder=" Grade/Score" id=" " />
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input  onChange={(e)=>setbachlerdata({...bachlerdata,year:e.target.value})} value={bachlerdata.year??""} type="text" className="form-control" placeholder=" Year" id=" " />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className=" ">
                            <div id=" " className=" row">
                              <h6 className="permenent-address mb-3 col-12 form-t">Master’s Degree </h6>
                              <div className="form-group col-lg-3 ">
                                <div className="text__center">
                                  <select onChange={(e)=>setmasterDegreedata({...masterDegreedata,course:e.target.value})} value={masterDegreedata.course??""} className="cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value="" hidden selected>Course</option>
                                    <option value="">Computer science</option>
                                    <option value="">Electronics</option>
                                    <option value="">Civil</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group col-lg-3  ">
                                <div className="text__center">
                                  <select onChange={(e)=>setmasterDegreedata({...masterDegreedata,collage:e.target.value})} value={masterDegreedata.collage??""} className="cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value="" hidden selected>Collage</option>
                                    <option value="">Dummy collage1</option>
                                    <option value="">Dummy collage2</option>
                                    <option value="">Dummy collage3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text"  onChange={(e)=>setmasterDegreedata({...masterDegreedata,"garde/score":e.target.value})} value={masterDegreedata["garde/score"]??""} className="form-control" placeholder=" Grade/Score" id=" " />
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" onChange={(e)=>setmasterDegreedata({...masterDegreedata,year:e.target.value})} value={masterDegreedata.year??""} className="form-control" placeholder=" Year" id=" " />
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
                                  <select onChange={(e)=>setadditionaldata({...additionaldata,course:e.target.value})} value={additionaldata.course??""} className="cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value="" hidden selected>Course</option>
                                    <option value="">Computer science</option>
                                    <option value="">Electronics</option>
                                    <option value="">Civil</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group col-lg-3  ">
                                <div className="text__center">
                                  <select  onChange={(e)=>setadditionaldata({...additionaldata,collage:e.target.value})} value={additionaldata.collage??""} className="cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value="" hidden selected>Collage</option>
                                    <option value="">Dummy collage1</option>
                                    <option value="">Dummy collage2</option>
                                    <option value="">Dummy collage3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text"  onChange={(e)=>setadditionaldata({...additionaldata,"garde/score":e.target.value})} value={additionaldata["garde/score"]??""} className="form-control" placeholder=" Grade/Score" id=" " />
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input  onChange={(e)=>setadditionaldata({...additionaldata,year:e.target.value})} value={additionaldata.year??""} type="text" className="form-control" placeholder=" Year" id=" " />
                              </div>
                            </div>
                            <div className="line-item-property__actions col-12 row mt-3 mb-3">
                              <button onClick={()=>pushhandler(additionaldata,setadditionaldata,additionalarray,setadditionalarray)} className="col-lg-2 button-form1" type="button" id="btnAdd" value="+">Add</button>
                              <button onClick={()=>removeHandler(additionalarray,setadditionalarray)} className="col-lg-2 button-form2" type="button" id="btnDel" value="-">Remove</button>
                            </div>
                          </div>
                        </div>
                        <h6 className="mt-3 color-brand-1">Skills</h6>
                        <div className="col-lg-12 col-md-12">
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            options={colourOptions}
                            placeholder={<div>Select Skills....</div>}
                            // onchange={sel}
                            // styles={customStyles}
                          />
                          {/* <div className="box-skills">
                            <div className="form-contact">
                              <div className="form-group">
                                <input className="form-control search-icon" type="text" defaultValue placeholder="E.g. Angular, Laravel..." />
                              </div>
                            </div>
                            <div className="box-tags mt-30"><a className="btn btn-grey-small mr-10">Figma<span className="close-icon" /></a><a className="btn btn-grey-small mr-10">Adobe XD<span className="close-icon" /></a><a className="btn btn-grey-small mr-10">NextJS<span className="close-icon" /></a><a className="btn btn-grey-small mr-10">React<span className="close-icon" /></a><a className="btn btn-grey-small mr-10">App<span className="close-icon" /></a><a className="btn btn-grey-small mr-10">Digital<span className="close-icon" /></a><a className="btn btn-grey-small mr-10">NodeJS<span className="close-icon" /></a></div>
                            <div className="mt-40"> <span className="card-info font-sm color-text-paragraph-2">You can add up to 15 skills</span></div>
                          </div> */}
                        </div>
                        <h6 className="permenent-address mb-3">Career</h6>
                        <div className="property-fields__ro ">
                          <div id="property-fields__row-2" className="property-fields__ro row">
                            <h6 className="permenent-address form-t mb-3 col-12">Company</h6>
                            <div className="form-group col-lg-6 ">
                              <input type="text" className="form-control" placeholder=" Company Name" id=" " />
                            </div>
                            <div className="form-group col-lg-6  ">
                              <input type="text" className="form-control" placeholder=" Position" id=" " />
                            </div>
                            <div className="form-group col-lg-6 ">
                              <input type="tel" className="form-control" placeholder=" Company Phone" id=" " />
                            </div>
                            <div className="form-group col-lg-6  ">
                              <input type="email" className="form-control" placeholder="Company email" id=" " />
                            </div>
                            <div className="form-group col-lg-12  ">
                              <input type="text" className="form-control" placeholder="Company Address" id=" " />
                            </div>
                            <div className="form-group col-lg-12  ">
                              <textarea type="text" className="form-control text-area11" placeholder="Job Description" id=" " defaultValue={""} />
                            </div>
                            <div className="form-group col-lg-6 ">
                              <label className="col-sm-12 font-sm color-text-mutted">From*</label> 
                              <input type="date" className="form-control" placeholder=" From" id=" " />
                            </div>
                            <div className="form-group col-lg-6 ">
                              <label className="col-sm-12 font-sm color-text-mutted">To*</label> 
                              <input type="date" className="form-control" placeholder=" To" id=" " />
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
                              <input type="text" className="form-control" placeholder=" Position" id=" " />
                            </div>
                            <div className="form-group col-lg-6 ">
                              <input type="tel" className="form-control" placeholder=" Company Phone" id=" " />
                            </div>
                            <div className="form-group col-lg-6  ">
                              <input type="email" className="form-control" placeholder="Company email" id=" " />
                            </div>
                            <div className="form-group col-lg-12  ">
                              <input type="text" className="form-control" placeholder="Company Address" id=" " />
                            </div>
                            <div className="form-group col-lg-12  ">
                              <textarea type="text" className="form-control text-area11" placeholder="Job Description" id=" " defaultValue={""} />
                            </div>
                            <div className="form-group col-lg-6 ">
                              <label className="col-sm-12 font-sm color-text-mutted">From*</label> 
                              <input type="date" className="form-control" placeholder=" From" id=" " />
                            </div>
                            <div className="form-group col-lg-6 ">
                              <label className="col-sm-12 font-sm color-text-mutted">To*</label> 
                              <input type="date" className="form-control" placeholder=" To" id=" " />
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
                            <textarea type="text" className="form-control text-area11" placeholder="Message" id=" " defaultValue={""} />
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
