import React, { useContext, useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Filestack from '../Commonpages/Filestack';
import { notify, notifyerror } from '../Commonpages/toast';
import { ToastContainer } from 'react-toastify';
import Axioscall from '../Commonpages/Axioscall';
import { Form } from "react-bootstrap";
import { Simplecontext } from "../Commonpages/Simplecontext";
import axios from 'axios';

const animatedComponents = makeAnimated();
export default function Employeeregister() {
  const {Check_Validation,Decodetoken,getUser,userdetail}=useContext(Simplecontext)
  const [selectedskills,setselectedskills]=useState('')
  const [employeedata,setemployeedata]=useState([])
  const [employeedata2,setemployeedata2]=useState([])
  const [employeedata3,setemployeedata3]=useState([])
  const [carddata,setcarddata]=useState([])
  const [addressproof,setaddressproof]=useState({})
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
  const [additionalarray,setadditionalarray]=useState([])
  const [precompanydata,setprecompanydata]=useState({})
  const [precompanyarray,setprecompanyarray]=useState([])
  const [companydata,setcompanydata]=useState({})
  const [companyarray,setcompanyarray]=useState([])
  const [validated,setValidated]=useState(false)
  const [validated2,setValidated2]=useState(false)
  const [validated3,setValidated3]=useState(false)
  const [wizard,setWizard]=useState(1)
  const [load,setload]=useState(false)
  const [companyvalues,setcompanyvalues]=useState([])
  const debounceDelay = 500; 
  const abortControllerRef = useRef(null); // Reference to the AbortController
  const [skilloptions,setskilloptions]=useState( [
    { value: 'Reactjs', label: 'Reactjs' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Flutter', label: 'Flutter' },
    { value: 'Python', label: 'Python' },
    { value: 'CSS', label: 'CSS' },
    { value: 'Bootsrtap', label: 'Bootsrtap' },
    { value: 'HTML', label: 'HTML' }
  ])
  // console.log("valuedata",employeedata)
  // console.log("carddata",carddata)
  // console.log("siblingdata",siblingdata)
  // console.log("siblingarray",siblingsarray)
  // console.log("childdata",childdata)
  // console.log("childsarray",childsarray)
  // console.log("addressdata",addressdata)
  // console.log("currentaddressdata",currentaddressdata)
  // console.log("masterDegreedata",masterDegreedata)
  // console.log("selectedskills",selectedskills)
  // console.log("companydaprecompanydatata",precompanydata)
  // console.log("companydata",companydata)
  // console.log("companyarray",companyarray)
  console.log("userdetail",userdetail)
    useEffect(() => {     
      window.scrollTo(0,0)
      getCompanydata()
      tokenhandler()
    }, [])
    useEffect(() => {
      return () => {
        // Clean up the abort controller on component unmount
        if (abortControllerRef.current) {
          abortControllerRef.current.abort();
        }
      };
    }, []);
    const tophandler=(f,t)=>{
        window.scrollTo(f,t)
    }
  const getCompanydata=async()=>{
    try {
      let data=await Axioscall('get',"company")
      if (data.status===200){
        // console.log("datalogcompany",data.data.data)
        setcompanyvalues(data.data.data.docs)

      }
    } catch (error) {
      console.log(error)
    }
  }
  const tokenhandler=()=>{
    let token = window.localStorage.getItem('craig-token')??""
    if(token){
      let data  = Decodetoken(token)
      console.log("dataid",data)
      return data
    }
  }
  
  // console.log("skilloptions",skilloptions)
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
    // console.log("keypair",keypair)
    let data =await Filestack(ratio)
    // console.log("datafilestack",data)
    if (data){
      setvalue({...value,[keypair]:data})
    }
    
  }
  const pushhandler=(arraydata,setarraydata,listdata,setlistdata)=>{
    // console.log("data",arraydata)
    if (Object.keys(arraydata).length){
      setlistdata([...listdata,arraydata])
      setarraydata({})
    }else{
      notifyerror("no dataa added")
    }
  }
  const removeHandler=(listdata,setlistdata)=>{
    if(listdata){
      setlistdata(prevArray => prevArray.slice(0, prevArray.length - 1));
      // setlistdata(data)
    }
  }
  const addressHandler=(e)=>{
    setemployeedata2({...employeedata2,isCurrentsame:e.target.checked})
    if (e.target.checked){
      setcurrentaddressdata(addressdata)
    }else{
      setcurrentaddressdata({})
    }
  }
  const registerEmployee=async()=>{
    // e.preventDefault();
    try {
      setload(true)
      let datalist ={...employeedata}
      // user id push to datalist.at...........
      let userid = tokenhandler()
      if (userid){
        // console.log("userid",userid)
        datalist.user=userid
      }
      if (!datalist.profilePhoto){
        notifyerror("please Provide Profile Photo")
        setload(false)
        return
      }
      //......................carddata push to datalist
      if(Object.keys(carddata).length){
        if(carddata.frontUrl && carddata.backUrl){
          datalist.idcard=[{...carddata}]
        }else{
          notifyerror("Please provide IDCard Images")
          setload(false)
          return
        }
        
      }
      //......................addresproof push to datalist
      if(Object.keys(addressproof).length){
        if(carddata.frontUrl && carddata.backUrl){
          datalist.addressproof=[{...addressproof}]
        }else{
          notifyerror("Please provide address proof Images")
          setload(false)
          return
        }   
      }
      //......................lngread nad lngwrite push as list
      if(datalist.lngRead){
        let readdata = datalist.lngRead.split(',')
        // console.log("lngread",readdata)
        datalist.lngRead=readdata
      }
      if(datalist.lngWrite){
        let readdata = datalist.lngWrite.split(',')
        // console.log("lngread",readdata)
        datalist.lngWrite=readdata
      }
      //......................siblingsdata add to siblingarray and push to datalist
      let arraysibling = siblingsarray
      if(Object.keys(siblingdata).length){
        arraysibling.push(siblingdata) 
      }
      if (arraysibling.length){
        datalist.siblingsDetails=arraysibling
      }
      if(Object.keys(spousedata).length){
        datalist.spouseDetails=[{...spousedata}]
      }
      let arraychild = childsarray
      if(Object.keys(childdata).length){
        arraychild.push(childdata) 
      }
      if (arraychild.length){
        datalist.childDetails=arraychild
      }
     
      
      console.log("datalistbefore",datalist)
      let data = await Axioscall("post","employee/personal",datalist)
      console.log("datapersonal",data)
      if(data.status===200){
        notify("Successfully Saved")
        setWizard(2)     
        tophandler(0,200)
      }
      setload(false)
    } catch (error) {
      console.log(error)
      setload(false)
    }
  }
  
  const RegsterSecondform=async()=>{
    try {
      
      setload(true)
      let datalist ={...employeedata2}
      // user id push to datalist.at...........
      let userid = tokenhandler()
      if (userid){
        // console.log("userid",userid)
        datalist.user=userid
      }
      if(Object.keys(addressdata).length){
        datalist.permanantAddress=[{...addressdata}]
      }
      if(Object.keys(currentaddressdata).length){
        datalist.currentAddress=[{...currentaddressdata}]
      }
      console.log("form2",datalist)
      let data = await Axioscall("post","employee/address",datalist)
      console.log("dataaddress",data)
      if(data.status===200){
        setWizard(3)
        setload(false)
        tophandler(0,200)
      }
    } catch (error) {
      setload(false)
    }
  }
  const RegsterThirdform=async()=>{
    try {
      
      setload(true)
      // user id push to datalist.at...........
      let userid = tokenhandler()
      let datalist ={...employeedata3}
      if (userid){
        // console.log("userid",userid)
        datalist.user=userid
      }
      
      if(Object.keys(tenthdata).length){
        datalist.tenth=[{...tenthdata}]
      }
      if(Object.keys(twelthdata).length){
        datalist.twelth=[{...twelthdata}]
      }
      if(Object.keys(bachlerdata).length){
        datalist.bachelorDegree=[{...bachlerdata}]
      }
      if(Object.keys(masterDegreedata).length){
        datalist.masterDegree=[{...masterDegreedata}]
      }
      let additional = additionalarray
      if(Object.keys(additionaldata).length){
        additional.push(additionaldata) 
      }
      console.log("addtitional",additional)
      if (additional.length){
        datalist.additional=additional
      }
      if(selectedskills.length){
        let skills =[]
        console.log("skills",selectedskills)
        selectedskills.forEach(element => {
          console.log("dataskils",element.value)
          skills.push(element.value)
        });
        if (skills.length){
          datalist.skills=skills
        }
      }
        // ...........................company data push to datalist
        let company = companyarray
        console.log("companyjhbjjljlk",company)
        if(Object.keys(companydata).length){
          company.push(companydata) 
        }
        if(company.length){
          company.forEach(element=>         
            element.is_craigcompany=true
            )}
        let precompany = precompanyarray
        if(Object.keys(precompanydata).length){
          precompany.push(precompanydata) 
        }
        if(precompany.length){
          precompany.forEach(element=>         
            element.is_craigcompany=false
            )
            company=[...company,...precompany]
        }
        if(company.length){
          datalist.prevCompanies=company
        }

        // console.log("data",datalist)
        let data = await Axioscall("post","employee/educationandcareer",datalist)
        if(data.status===200){
          setWizard(4)      
          tophandler(0,200)
          getUser()
        }
        setload(false)
    } catch (error) {
      console.log(error)
      setload(false)
    }
  }
  const zipcodeHandler=async(e,code)=>{
    setload(true)
    let data =await axios.get(`https://api.postalpincode.in/pincode/${code}`)
    console.log("zipcode data",data.data[0].Status)
    if(data.data[0].Status==='Error'){
      e.target.classList.add('is-invalid');
    }else{
      e.target.classList.remove('is-invalid');
    }
    setload(false)
  }
  const skillapicall=(value)=>{
    if (abortControllerRef.current) {
      abortControllerRef.current.abort(); // Cancel the previous request
    }
    const abortController = new AbortController();
    abortControllerRef.current = abortController; // Update the reference to the new AbortController
    try {
       new Promise((resolve) => setTimeout(resolve, debounceDelay)); // Delay the request for debounceDelay milliseconds
      axios.get("https://api.apilayer.com/skills", {
        params: {
          q: value
        },
        headers: {
          apikey: "Y59xvT9r5Axhf7Go4DG1yAnSJtZWmWnD"
        },
        signal: abortController.signal // Assign the AbortSignal to the request
      }).then(res=>{
        // console.log("ok",res.data)
        if(res.data){
          // console.log("datapresent")
          let opt=[]        
          res.data.forEach(data => {
            opt.push({ value: data, label: data })
          });
          setskilloptions(opt)
        }  }
      )    
    } catch (error) {    
    }
  }
  return (
    <>
    
    <link href="/assets/css/stylecd4e.css?version=4.1" rel="stylesheet"></link>
    <main className="main reg-form-background">
  <div className="carousel-inner">
  </div>
  {load? 
  <div className="spinner-container">
    <div className="spinner" />
  </div>:null}
  <section className="pt-50 login-register">
    <div> 
      <div className=" login-register-cover">
        <div className="col-12  mx-auto">
          <div className="text-center">
            <p className="font-sm text-brand-2">Register </p>
            <h2 className="mt-10 mb-5 text-brand-1">Complete Profile Today</h2>
            {/* <p className="font-sm text-muted mb-30">Access to all features. No credit card required.</p> */}
            <div className="divider-text-center"><span>Register Now</span></div>
          </div>
          {/* multistep */}
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-11 col-sm-12 col-md-12 col-lg-9 col-xl-9 text-center p-0 mt-3 mb-2">
                <div className="card3 px-0 pt-4 pb-0 mt-3 mb-3">
                  {/* <Form  noValidate validated={validated} onSubmit={(e)=>Check_Validation(e,Regstersubmithandler,setValidated)}   className="reg-form contact10 " > */}
                    {/* progressbar */}
                    <ul id="progressbar">
                      <li className="active" id="account"><strong>Personal</strong></li>
                      <li id="personal" className={wizard===1?'':'active'}><strong>Address</strong></li>
                      <li id="payment"  className={wizard===2||wizard===1?'':'active'}><strong>Education&amp; Career</strong></li>
                      <li id="confirm"  className={wizard===4?'active':''}><strong>Finish</strong></li>
                    </ul>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
                      </div>
                    </div> <br /> {/* fieldsets */}
                    {wizard===1?
                    <Form  noValidate validated={validated} onSubmit={(e)=>Check_Validation(e,registerEmployee,setValidated)}  className="reg-form contact10 ">
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
                          <Form.Control.Feedback type="invalid">Please provide FirstName</Form.Control.Feedback>
                        </div>
                        
                        <div className="form-group col-md-4 ">
                          <label className="form-label" htmlFor="input-1" />
                          <input onChange={(e)=>setemployeedata({...employeedata,middleName:e.target.value})} value={employeedata.middleName??""}  className="form-control" id="input-1" type="text"  name="fullname" placeholder="Middile Name" />
                        </div>
                        <div className="form-group col-md-4 ">
                          <label className="form-label" htmlFor="input-1" />
                          <input className="form-control" id="input-1" type="text" required onChange={(e)=>setemployeedata({...employeedata,lastName:e.target.value})} value={employeedata.lastName??""}  name="fullname" placeholder="Last Name" />
                          <Form.Control.Feedback type="invalid">Please provide Last Name</Form.Control.Feedback>
                        </div>
                        
                        <div className="form-group mt-4 col-md-4 ">
                        <input className="dob" required onChange={(e)=>setemployeedata({...employeedata,dob:e.target.value})} value={employeedata.dob??""} placeholder="Date of Birth" type="date" onfocus="(this.type = 'date')" id="date" />
                          <Form.Control.Feedback type="invalid">Please provide dob</Form.Control.Feedback>
                        </div>
                        <div className="form-group col-md-4">
                          <label className="form-label" htmlFor="input-2" />
                          <input className="form-control"  id="input-2" type="email"  onChange={(e)=>setemployeedata({...employeedata,email:e.target.value})} value={employeedata.email??""} required name="emailaddress" placeholder="stevenjob@gmail.com" />
                          <Form.Control.Feedback type="invalid">Please provide Valid email</Form.Control.Feedback>
                        </div>
                        <div className="form-group col-md-4 ">
                          <label className="form-label" htmlFor="input-2" />
                          <input className="form-control" id="input-2" type="tel"required name="emailaddress" onChange={(e)=>setemployeedata({...employeedata,phone:e.target.value})} value={employeedata.phone??""} placeholder="Phone Number" />
                          <Form.Control.Feedback type="invalid">Please provide Valid Phone Number</Form.Control.Feedback>
                        </div>
                        <h6 className="permenent-address education col-12 mb-2 ">Language Known</h6>
                        <div className=" col-lg-6 ">
                          <label className="fieldlabels font-sm color-text-mutted">Read*</label>
                          <input type="text" required  onChange={(e)=>setemployeedata({...employeedata,lngRead:e.target.value})} value={employeedata.lngRead??""}  className="form-control" placeholder=" English,hindi..." id="" />
                          <Form.Control.Feedback type="invalid">Please provide Languages </Form.Control.Feedback>
                        </div>
                        <div className="form-group col-lg-6 font-sm color-text-mutted">
                          <label className="fieldlabels">Write*</label>
                          <input type="text" required onChange={(e)=>setemployeedata({...employeedata,lngWrite:e.target.value})} value={employeedata.lngWrite??""}  className="form-control" placeholder="  English,hindi..." id="" />
                          <Form.Control.Feedback type="invalid">Please provide Valid Languages</Form.Control.Feedback>
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
                            <select required onChange={(e)=>setcarddata({...carddata,type:e.target.value})} value={carddata.type??""} className="cs-select form-control  cs-skin-elastic cs-skin-elastic1">
                              <option value="" defaultValue="" disabled  >ID Card Type</option>
                              <option value ="drivingliscence" >Driving License</option>
                              <option value="aadhaar" >Aadhar</option>
                              <option value="passport" >Passport</option>
                            </select>
                            <Form.Control.Feedback  type="invalid">Please provide Id card type</Form.Control.Feedback>
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
                            <select required onChange={(e)=>setaddressproof({...addressproof,type:e.target.value})} value={addressproof.type??""} className=" form-control cs-select cs-skin-elastic cs-skin-elastic1">
                              <option value="" defaultValue="" disabled  >Address Proof</option>
                              <option value="Driving License">Driving License</option>
                              <option value="Aadhar">Aadhar</option>
                              <option value="Passport">Passport</option>
                             
                            </select>
                            <Form.Control.Feedback type="invalid">Please provide Address Proof </Form.Control.Feedback>
                          </div>
                        </label>
                        <div className="form-group col-lg-4 col-sm-12">
                          <label className="col-sm-12 font-sm color-text-mutted">Upload Address Proof Front Side*</label> 
                          {/* <input type="file" name="pic" accept="image/*" />  */}
                          <div className='imageselectorborder d-flex '>
                            <button onClick={()=>Filestackhandler("landscape",setaddressproof,addressproof,'frontUrl')} type='button' className='imageselector'> Choose Image</button>
                            <p style={{overflow:"hidden"}}>&nbsp;{addressproof.frontUrl??<span>No file chosen</span>}</p>
                          </div>
                        </div>
                        <div className="form-group col-lg-4 col-sm-12 font-sm color-text-mutted">
                          <label className="col-sm-12">Upload Address Proof Back Side*</label> 
                          {/* <input type="file" name="pic" accept="image/*" />  */}
                          <div className='imageselectorborder d-flex '>
                            <button onClick={()=>Filestackhandler("landscape",setaddressproof,addressproof,'backUrl')} type='button' className='imageselector'> Choose Image</button>
                            <p style={{overflow:"hidden"}}>&nbsp;{addressproof.backUrl??<span>No file chosen</span>}</p>
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
                          <input required  onChange={(e)=>setemployeedata({...employeedata,fatherName:e.target.value})} value={employeedata.fatherName??""} type="text" className="form-control" placeholder="Father's Name" id="" />
                          <Form.Control.Feedback type="invalid">Please provide Father Name </Form.Control.Feedback>
                        </div>
                        <div className="form-group col-lg-6">
                          <input required onChange={(e)=>setemployeedata({...employeedata,fatherOccupation:e.target.value})} value={employeedata.fatherOccupation??""} type="text" className="form-control" placeholder="Father's Occupation" id="" />
                          <Form.Control.Feedback type="invalid">Please provide Father Occupation </Form.Control.Feedback>
                        </div>
                        <div className="form-group col-lg-6 mt-20">
                          <input required onChange={(e)=>setemployeedata({...employeedata,motherName:e.target.value})} value={employeedata.motherName??""} type="text" className="form-control" placeholder="Mother's Name" id="" />
                          <Form.Control.Feedback type="invalid">Please provide Mother Name </Form.Control.Feedback>
                        </div>
                        <div className="form-group col-lg-6 mt-20">
                          <input  required onChange={(e)=>setemployeedata({...employeedata,motherOccupation:e.target.value})} value={employeedata.motherOccupation??""} type="text" className="form-control" placeholder="Mother's Occupation" id="" />
                          <Form.Control.Feedback type="invalid">Please provide Mother Occupation </Form.Control.Feedback>
                        </div>
                        <h6 className="permenent-address mb-3 col-12 form-t">Sibling’s details</h6>
                        {siblingsarray.length?<>
                          {siblingsarray.map((itm,k)=>(
                            <React.Fragment key={k}>
                             <div key={k} className="form-group col-lg-3">
                             <div className="text__center">
                             <input type="text"  disabled value={itm.type}  className="" placeholder="Name" id=" " />
                             {/* <select disabled value={itm.type} className="cs-select cs-skin-elastic cs-skin-elastic1">
                               <option hidden  >Select</option>
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
                              <option value="" defaultValue=""   >Select</option>
                              <option value="brother">Brother</option>
                              <option value="sister">Sister</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" required={siblingdata.type} onChange={(e)=>setsiblingdata({...siblingdata,name:e.target.value})} value={siblingdata.name??""} className="form-control" placeholder="Name" id=" " />
                          <Form.Control.Feedback type="invalid">Please provide Sibling name </Form.Control.Feedback>
                        </div>
                        <div className="form-group col-lg-3">
                          <input required={siblingdata.type} onChange={(e)=>setsiblingdata({...siblingdata,qualification:e.target.value})} value={siblingdata.qualification??""} type="text" className="form-control" placeholder="Qualification" id=" " />
                          <Form.Control.Feedback type="invalid">Please provide Sibling Qualification </Form.Control.Feedback>
                        </div>
                        <div className="form-group col-lg-3">
                          <input required={siblingdata.type} onChange={(e)=>setsiblingdata({...siblingdata,occupation:e.target.value})} value={siblingdata.occupation??""} type="text" className="form-control" placeholder="Occupation" id=" " />
                          <Form.Control.Feedback type="invalid">Please provide Sibling Occupation </Form.Control.Feedback>
                        </div>
                        <div className="line-item-property__actions col-12 row mt-3 mb-3">
                          <button onClick={()=>pushhandler(siblingdata,setsiblingdata,siblingsarray,setsiblingsarray)} className="col-lg-2 button-form1" type="button" id="btnAdd" value="+">Add</button>
                          <button onClick={()=>removeHandler(siblingsarray,setsiblingsarray)}  className="col-lg-2 button-form2" type="button"  value="-">Remove</button>
                        </div>
                        <h6 className="permenent-address mb-3 col-12 form-t">Spouse details</h6>
                        <div className="form-group col-lg-3">
                          <div className="text__center">
                            <select onChange={(e)=>setspousedata({...spousedata,type:e.target.value})} value={spousedata.type??""} className="cs-select cs-skin-elastic cs-skin-elastic1">
                              <option value="" defaultValue=""  >Select</option>
                              <option value="wife">Wife</option>
                              <option value="husband">Husband</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" required={spousedata.type}  onChange={(e)=>setspousedata({...spousedata,name:e.target.value})} value={spousedata.name??""} className="form-control" placeholder="Name" id=" " />
                          <Form.Control.Feedback type="invalid">Please provide Spouse name </Form.Control.Feedback>
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" required={spousedata.type} onChange={(e)=>setspousedata({...spousedata,qualification:e.target.value})} value={spousedata.qualification??""} className="form-control" placeholder="Qualification" id=" " />
                          <Form.Control.Feedback type="invalid">Please provide Spouse Qualification </Form.Control.Feedback>
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" required={spousedata.type}  onChange={(e)=>setspousedata({...spousedata,occupation:e.target.value})} value={spousedata.occupation??""} className="form-control" placeholder="Occupation" id=" " />
                          <Form.Control.Feedback type="invalid">Please provide Spouse Occupation </Form.Control.Feedback>
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
                              <option value="" defaultValue=""  >Select</option>
                              <option value="daughter">Daughter</option>
                              <option value="son">Son</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" required={childdata.type} onChange={(e)=>setchilddata({...childdata,name:e.target.value})} value={childdata.name??""} className="form-control" placeholder="Name" id=" " />
                          <Form.Control.Feedback type="invalid">Please provide Child Name </Form.Control.Feedback>
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" required={childdata.type} onChange={(e)=>setchilddata({...childdata,qualification:e.target.value})} value={childdata.qualification??""} className="form-control" placeholder="Qualification" id=" " />
                          <Form.Control.Feedback type="invalid">Please provide Child Qualification </Form.Control.Feedback>
                        </div>
                        <div className="form-group col-lg-3">
                          <input type="text" required={childdata.type} onChange={(e)=>setchilddata({...childdata,occupation:e.target.value})} value={childdata.occupation??""} className="form-control" placeholder="Occupation" id=" " />
                          <Form.Control.Feedback type="invalid">Please provide Child Occupation </Form.Control.Feedback>
                        </div>
                        <div className="line-item-property__actions col-12 row mt-3 mb-3">
                          <button onClick={()=>pushhandler(childdata,setchilddata,childsarray,setchildsarray)}  className="col-lg-2 button-form1" type="button" id="btnAdd" value="+">Add</button>
                          <button onClick={()=>removeHandler(childsarray,setchildsarray)} className="col-lg-2 button-form2" type="button" value="-">Remove</button>
                        </div>
                       
                      </div>
                      
                       <input type="submit" name="next" onClick={()=>tophandler(0,500)} className="pr-button  action-button" defaultValue="Next" />
                      
                    </fieldset>
                    </Form>
                    :null}
                    {wizard===2?
                    <Form  noValidate validated={validated2} onSubmit={(e)=>Check_Validation(e,RegsterSecondform,setValidated2)}  className="reg-form contact10 ">
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
                            <input required  onChange={(e)=>setaddressdata({...addressdata,line1:e.target.value})} value={addressdata.line1??""} type="text" className="form-control" placeholder="Address Line 1" id="pAddressLine1" />
                            <Form.Control.Feedback type="invalid">Please provide Address </Form.Control.Feedback>
                          </div>
                          <div className="form-group mt-20">
                            <input type="text" required  onChange={(e)=>setaddressdata({...addressdata,line2:e.target.value})} value={addressdata.line2??""} className="form-control" placeholder="Address Line 2" id="pAddressLine2" />
                            <Form.Control.Feedback type="invalid">Please provide Address </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-6 mt-20">
                            <input type="text" required onChange={(e)=>setaddressdata({...addressdata,landmark:e.target.value})} value={addressdata.landmark??""} className="form-control" placeholder="Landmark" id="pLandmark" />
                            <Form.Control.Feedback type="invalid">Please provide landmark </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-6 mt-20">
                            <input type="text" required onBlur={(e)=>zipcodeHandler(e,addressdata.zipcode)} onChange={(e)=>setaddressdata({...addressdata,zip:e.target.value})} value={addressdata.zip??""} className="form-control" placeholder="Zip Code" id="pZipcode" />
                            <Form.Control.Feedback type="invalid">Please provide valid pincode </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-4 mt-20">
                            <input type="text" required  onChange={(e)=>setaddressdata({...addressdata,city:e.target.value})} value={addressdata.city??""} className="form-control" placeholder="City" id="pCity" />
                            <Form.Control.Feedback type="invalid">Please provide City </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-4 mt-20">
                            <input type="text"  required onChange={(e)=>setaddressdata({...addressdata,state:e.target.value})} value={addressdata.state??""} className="form-control" placeholder="State" id="pState" />
                            <Form.Control.Feedback type="invalid">Please provide State </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-4 mt-20">
                            <input type="text" required  onChange={(e)=>setaddressdata({...addressdata,country:e.target.value})} value={addressdata.country??""} className="form-control" placeholder="country" id="pCountry" />
                            <Form.Control.Feedback type="invalid">Please provide Country </Form.Control.Feedback>
                          </div>
                          <h6 className='mt-20'>Current Address</h6>
                          <div className="form-group col-lg-1 col-md-1 col-xl-1 col-sm-2 ">
                            <input className="check "  onChange={(e)=>addressHandler(e)} type="checkbox" /> 
                           
                          </div>
                          <div className="form-group col-lg-11 col-md-11 col-xl-11 col-sm-8 p-address ">
                            <p className="p-address">Same as permanent address</p>
                            </div>
                          <div className="form-group ">
                            <input type="text" required onChange={(e)=>setcurrentaddressdata({...currentaddressdata,line1:e.target.value})} value={currentaddressdata.line1??""} className="form-control" placeholder="Address Line 1" id="curAddressLine1" />
                            <Form.Control.Feedback type="invalid">Please provide Address </Form.Control.Feedback>
                          </div>
                          <div className="form-group mt-20">
                            <input type="text" required onChange={(e)=>setcurrentaddressdata({...currentaddressdata,line2:e.target.value})} value={currentaddressdata.line2??""} className="form-control" placeholder="Address Line 2" id="curAddressLine2" />
                            <Form.Control.Feedback type="invalid">Please provide Address </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-6 mt-20">
                            <input type="text" required onChange={(e)=>setcurrentaddressdata({...currentaddressdata,landmark:e.target.value})} value={currentaddressdata.landmark??""} className="form-control" placeholder="Landmark" id="curLandmark" />
                            <Form.Control.Feedback type="invalid">Please provide landmark </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-6 mt-20">
                            <input type="text" required onBlur={(e)=>zipcodeHandler(e,addressdata.zipcode)} onChange={(e)=>setcurrentaddressdata({...currentaddressdata,zip:e.target.value})} value={currentaddressdata.zip??""} className="form-control" placeholder="Zip Code" id="curZipcode" />
                            <Form.Control.Feedback type="invalid">Please provide valid Pincode </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-4 mt-20">
                            <input type="text"  required onChange={(e)=>setcurrentaddressdata({...currentaddressdata,city:e.target.value})} value={currentaddressdata.city??""} className="form-control" placeholder="City" id="curCity" />
                            <Form.Control.Feedback type="invalid">Please provide city </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-4 mt-20">
                            <input type="text" required onChange={(e)=>setcurrentaddressdata({...currentaddressdata,state:e.target.value})} value={currentaddressdata.state??""} className="form-control" placeholder="State" id="curState" />
                            <Form.Control.Feedback type="invalid">Please provide State </Form.Control.Feedback>
                          </div>
                          <div className="form-group col-lg-4 mt-20">
                            <input type="text" required onChange={(e)=>setcurrentaddressdata({...currentaddressdata,country:e.target.value})} value={currentaddressdata.country??""} className="form-control" placeholder="country" id="curCountry" />
                            <Form.Control.Feedback type="invalid">Please provide country </Form.Control.Feedback>
                          </div>
                        </div>
                      </div> 
                      <input type="submit" name="next" onClick={()=>tophandler(0,500)}  className="pr-button  action-button" defaultValue="Next" /> 
                      <input type="button" name="previous" onClick={()=>setWizard(1)} className="pr-button  action-button-prev" defaultValue="Previous" />
                    </fieldset>
                    </Form>
                    :null}
                    {wizard===3?
                    <Form  noValidate validated={validated3} onSubmit={(e)=>Check_Validation(e,RegsterThirdform,setValidated3)}  className="reg-form contact10 ">
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
                                  <select required onChange={(e)=>settenthdata({...tenthdata,board:e.target.value})} value={tenthdata.board??""} className="cs-select form-control cs-skin-elastic cs-skin-elastic1">
                                    <option value="" defaultValue="" disabled  >Board</option>
                                    <option value="Kerala Board">Kerala Board</option>
                                    <option value="CBSC">CBSE</option>
                                    <option value="Karnataka Board">Karnataka Board</option>
                                  </select>
                                  <Form.Control.Feedback type="invalid">Please provide Board </Form.Control.Feedback>
                                </div>
                              </div>
                              <div className="form-group col-lg-3  ">
                                <input type="text" required onChange={(e)=>settenthdata({...tenthdata,"school/university":e.target.value})} value={tenthdata["school/university"]??""}  className="form-control" placeholder=" School/University" id=" " />
                                <Form.Control.Feedback type="invalid">Please provide school </Form.Control.Feedback>
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" required onChange={(e)=>settenthdata({...tenthdata,"garde/score":e.target.value})} value={tenthdata["garde/score"]??""}  className="form-control" placeholder=" Grade/Score" id=" " />
                                <Form.Control.Feedback type="invalid">Please provide grade/score </Form.Control.Feedback>
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" required onChange={(e)=>settenthdata({...tenthdata,year:e.target.value})} value={tenthdata.year??""}  className="form-control" placeholder=" Year" id=" " />
                                <Form.Control.Feedback type="invalid">Please provide year </Form.Control.Feedback>
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
                                  <select required onChange={(e)=>settwelthdata({...twelthdata,board:e.target.value})} value={twelthdata.board??""}  className=" form-control cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value="" hidden  >Board</option>
                                    <option value="Kerala Board">Kerala Board</option>
                                    <option value="CBSC" >CBSE</option>
                                    <option value="Karnataka Board" >Karnataka Board</option>
                                  </select>
                                  <Form.Control.Feedback type="invalid">Please provide Board </Form.Control.Feedback>
                                </div>
                              </div>
                              <div className="form-group col-lg-3  ">
                                <input type="text" required onChange={(e)=>settwelthdata({...twelthdata,"school/university":e.target.value})} value={twelthdata["school/university"]??""} className="form-control" placeholder=" School/University" id=" " />
                                <Form.Control.Feedback type="invalid">Please provide school </Form.Control.Feedback>
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" required onChange={(e)=>settwelthdata({...twelthdata,"garde/score":e.target.value})} value={twelthdata["garde/score"]??""} className="form-control" placeholder=" Grade/Score" id=" " />
                                <Form.Control.Feedback type="invalid">Please provide grade </Form.Control.Feedback>
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" required onChange={(e)=>settwelthdata({...twelthdata,year:e.target.value})} value={twelthdata.year??""} className="form-control" placeholder=" Year" id=" " />
                                <Form.Control.Feedback type="invalid">Please provide year </Form.Control.Feedback>
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
                                  <select   onChange={(e)=>setbachlerdata({...bachlerdata,course:e.target.value})} value={bachlerdata.course??""}  className="form-control cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value ="" defaultValue="" disabled  >Course</option>
                                    <option value="Computer science">Computer science</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Civil">Civil</option>
                                  </select>
                                  <Form.Control.Feedback type="invalid">Please provide Course </Form.Control.Feedback>
                                </div>
                              </div>
                              <div className="form-group col-lg-3  ">
                              <input type="text" required={bachlerdata.course} onChange={(e)=>setbachlerdata({...bachlerdata,collage:e.target.value})} value={bachlerdata.collage??""} className="form-control" placeholder=" College" id=" " />
                              <Form.Control.Feedback type="invalid">Please provide College </Form.Control.Feedback>
                                {/* <div className="text__center">
                                  <Form.Control.Feedback type="invalid">Please provide Board </Form.Control.Feedback>
                                  <select required onChange={(e)=>setbachlerdata({...bachlerdata,collage:e.target.value})} value={bachlerdata.collage??""} className="form-control cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value="" hidden  >Collage</option>
                                    <option value="">Dummy collage1</option>
                                    <option value="">Dummy collage2</option>
                                    <option value="">Dummy collage3</option>
                                  </select>
                                  
                                </div> */}
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" required={bachlerdata.course}  onChange={(e)=>setbachlerdata({...bachlerdata,"garde/score":e.target.value})} value={bachlerdata["garde/score"]??""} className="form-control" placeholder=" Grade/Score" id=" " />
                                <Form.Control.Feedback type="invalid">Please provide grade </Form.Control.Feedback>
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input required={bachlerdata.course}  onChange={(e)=>setbachlerdata({...bachlerdata,year:e.target.value})} value={bachlerdata.year??""} type="text" className="form-control" placeholder=" Year" id=" " />
                                <Form.Control.Feedback type="invalid">Please provide Year </Form.Control.Feedback>
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
                                  <select onChange={(e)=>setmasterDegreedata({...masterDegreedata,course:e.target.value})} value={masterDegreedata.course??""} className="form-control cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value="" defaultValue=""  >Course</option>
                                    <option value="">Computer science</option>
                                    <option value="">Electronics</option>
                                    <option value="">Civil</option>
                                  </select>
                                  <Form.Control.Feedback type="invalid">Please provide Course </Form.Control.Feedback>
                                </div>
                              </div>
                              <div className="form-group col-lg-3  ">
                              <input type="text" required={masterDegreedata.course} onChange={(e)=>setmasterDegreedata({...masterDegreedata,collage:e.target.value})} value={masterDegreedata.collage??""} className="form-control" placeholder=" College" id=" " />
                              <Form.Control.Feedback type="invalid">Please provide College </Form.Control.Feedback>
                                {/* <div className="text__center">
                                  <select onChange={(e)=>setmasterDegreedata({...masterDegreedata,collage:e.target.value})} value={masterDegreedata.collage??""} className="form-control cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value="" hidden  >Collage</option>
                                    <option value="">Dummy collage1</option>
                                    <option value="">Dummy collage2</option>
                                    <option value="">Dummy collage3</option>
                                  </select>
                                  <Form.Control.Feedback type="invalid">Please provide Board </Form.Control.Feedback>
                                </div> */}
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" required={masterDegreedata.course}  onChange={(e)=>setmasterDegreedata({...masterDegreedata,"garde/score":e.target.value})} value={masterDegreedata["garde/score"]??""} className="form-control" placeholder=" Grade/Score" id=" " />
                                <Form.Control.Feedback type="invalid">Please provide grade </Form.Control.Feedback>
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input type="text" required={masterDegreedata.course} onChange={(e)=>setmasterDegreedata({...masterDegreedata,year:e.target.value})} value={masterDegreedata.year??""} className="form-control" placeholder=" Year" id=" " />
                                <Form.Control.Feedback type="invalid">Please provide year </Form.Control.Feedback>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="property-fields__roww ">
                            <div id="property-fields__row-1" className="property-fields__row row">
                              <h6 className="permenent-address mb-3 col-12 form-t">Additional Qualification</h6>
                              {additionalarray.length?additionalarray.map((aitm,ak)=>
                              <React.Fragment key={ak}>
                               <div className="form-group col-lg-3 mt-10">
                                <div className="text__center">
                                <input  disabled  value={aitm.course??""} type="text" className="" placeholder=" course" id=" " />
                                  {/* <select onChange={(e)=>setadditionaldata({...additionaldata,course:e.target.value})} value={additionaldata.course??""} className="cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value="" hidden  >Course</option>
                                    <option value="">Computer science</option>
                                    <option value="">Electronics</option>
                                    <option value="">Civil</option>
                                  </select> */}
                                </div>
                              </div>
                              <div className="form-group col-lg-3  mt-10">
                                <div className="text__center">
                                <input  disabled  value={aitm.collage??""} type="text" className="" placeholder=" collage" id=" " />
                                  {/* <select  onChange={(e)=>setadditionaldata({...additionaldata,collage:e.target.value})} value={additionaldata.collage??""} className="cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value="" hidden  >Collage</option>
                                    <option value="">Dummy collage1</option>
                                    <option value="">Dummy collage2</option>
                                    <option value="">Dummy collage3</option>
                                  </select> */}
                                </div>
                              </div>
                              <div className="form-group col-lg-3 mt-10">
                                <input type="text" disabled  value={aitm["garde/score"]??""} className="" placeholder=" Grade/Score" id=" " />
                              </div>
                              <div className="form-group col-lg-3 ">
                                <input  disabled  value={aitm.year??""} type="text" className="" placeholder=" Year" id=" " />
                              </div>
                            
                              </React.Fragment>):null}
                              <div className="form-group col-lg-3 mt-10">
                                <div className="text__center">
                                  <select onChange={(e)=>setadditionaldata({...additionaldata,course:e.target.value})} value={additionaldata.course??""} className="form-control cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value="" defaultValue=""   >Course</option>
                                    <option value="Computer science">Computer science</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Civil">Civil</option>
                                  </select>
                                  <Form.Control.Feedback type="invalid">Please provide Course </Form.Control.Feedback>
                                </div>
                              </div>
                              <div className="form-group col-lg-3 mt-10 ">
                              <input type="text" required={additionaldata.course} onChange={(e)=>setadditionaldata({...additionaldata,collage:e.target.value})} value={additionaldata.collage??""} className="form-control" placeholder=" college" id=" " />
                              <Form.Control.Feedback type="invalid">Please provide college </Form.Control.Feedback>
                                {/* <div className="text__center">
                                  <select  onChange={(e)=>setadditionaldata({...additionaldata,collage:e.target.value})} value={additionaldata.collage??""} className="form-control cs-select cs-skin-elastic cs-skin-elastic1">
                                    <option value="" hidden  >Collage</option>
                                    <option value="">Dummy collage1</option>
                                    <option value="">Dummy collage2</option>
                                    <option value="">Dummy collage3</option>
                                  </select>
                                  <Form.Control.Feedback type="invalid">Please provide Board </Form.Control.Feedback>
                                </div> */}
                              </div>
                              <div className="form-group col-lg-3 mt-10">
                                <input type="text" required={additionaldata.course} onChange={(e)=>setadditionaldata({...additionaldata,"garde/score":e.target.value})} value={additionaldata["garde/score"]??""} className="form-control" placeholder=" Grade/Score" id=" " />
                                <Form.Control.Feedback type="invalid">Please provide grade</Form.Control.Feedback>
                              </div>
                              <div className="form-group col-lg-3 mt-10">
                                <input required={additionaldata.course} onChange={(e)=>setadditionaldata({...additionaldata,year:e.target.value})} value={additionaldata.year??""} type="text" className="form-control" placeholder=" Year" id=" " />
                                <Form.Control.Feedback type="invalid">Please provide year</Form.Control.Feedback>
                              </div>
                            </div>
                            <div className="line-item-property__actions col-12 row mt-3 mb-3">
                              <button onClick={()=>pushhandler(additionaldata,setadditionaldata,additionalarray,setadditionalarray)} className="col-lg-2 button-form1" type="button" id="btnAdd" value="+">Add</button>
                              <button onClick={()=>removeHandler(additionalarray,setadditionalarray)} className="col-lg-2 button-form2" type="button"  value="-">Remove</button>
                            </div>
                          </div>
                        </div>
                        <h6 className="mt-3 color-brand-1">Designation</h6>
                        <div className="col-lg-12 col-md-12">
                          <select  value={employeedata3.designation}  onChange={(e)=>setemployeedata3({...employeedata3,designation:e.target.value})} className="form-control cs-select cs-skin-elastic cs-skin-elastic1">
                            <option value="" defaultValue="" disabled  >Select Designation</option>
                            <option value="FullStack Developer">FullStack Developer</option>
                            <option value="Frontend Developer">Frontend Developer</option>
                            <option value="Backend Developer">Backend Developer</option>
                            <option value="Marketing">Marketing</option>
                          </select>
                          <Form.Control.Feedback type="invalid">Please provide Designation</Form.Control.Feedback>
                          </div>
                        <h6 className="mt-3 ">Skills</h6>
                        <div className="col-lg-12 col-md-12">
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            options={skilloptions}
                            placeholder={<div>Select Skills....</div>}
                            required
                            className=''
                            onChange={newcontent => {setselectedskills( newcontent ) }}
                            onInputChange={(value)=>skillapicall(value)} 
                            // styles={customStyles}
                          />
                          <Form.Control.Feedback type="invalid">Please provide Skills </Form.Control.Feedback>
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
                            {precompanyarray.length?precompanyarray.map((citm,ck)=>
                            <React.Fragment key={ck}>
                             <div className="form-group col-lg-6 mt-20">
                               <div className="text__center">
                               <input type="text"  value={citm.name} className="" disabled placeholder=" Position" id=" " />
                                 {/* <select value={citm.name} disabled className="form-control cs-select cs-skin-elastic cs-skin-elastic1">
                                   <option value="" hidden  >Company Name</option>
                                   <option value="Company1">Company1</option>
                                   <option value="Company2">Company2</option>
                                 </select> */}
                               </div>
                             </div>
                             <div className="form-group col-lg-6 mt-20 ">
                               <input type="text"  value={citm.position} className="" disabled placeholder=" Position" id=" " />
                             </div>
                             <div className="form-group col-lg-6 mt-20">
                               <input type="tel"  value={citm.phone} className="" disabled placeholder=" Company Phone" id=" " />
                             </div>
                             <div className="form-group col-lg-6  mt-20">
                               <input type="email"  value={citm.email} className="" disabled placeholder="Company email" id=" " />
                             </div>
                             <div className="form-group col-lg-12  mt-20">
                               <input type="text" value={citm.address} disabled className="" placeholder="Company Address" id=" " />
                             </div>
                             <div className="form-group col-lg-12 mt-20 ">
                               <textarea type="text" value={citm.jobDescription} disabled className=" text-area11" placeholder="Job Description" id=" "  />
                             </div>
                             <div className="form-group col-lg-6 mt-20">
                               <label className="col-sm-12 font-sm color-text-mutted">From*</label> 
                               <input type="date" disabled value={citm.from} className="" placeholder=" From" id=" " />
                             </div>
                             <div className="form-group col-lg-6 mt-20">
                               <label className="col-sm-12 font-sm color-text-mutted">To*</label> 
                               <input type="date"  disabled value={citm.to} className="" placeholder=" To" id=" " />
                             </div>
                               {/* <hr/> */}
                             </React.Fragment>):null}
                            <div className="form-group col-lg-6 ">
                              <input type="text"  onChange={(e)=>setprecompanydata({...precompanydata,name:e.target.value})} value={precompanydata.name??""} className="form-control" placeholder=" Company Name" id=" " />
                              <Form.Control.Feedback type="invalid">Please provide company name </Form.Control.Feedback>
                            </div>
                            <div className="form-group col-lg-6  ">
                              <input type="text" required={precompanydata.name} onChange={(e)=>setprecompanydata({...precompanydata,position:e.target.value})} value={precompanydata.position??""} className="form-control" placeholder=" Position" id=" " />
                              <Form.Control.Feedback type="invalid">Please provide position </Form.Control.Feedback>
                            </div>
                            <div className="form-group col-lg-6 mt-20">
                              <input type="tel" required={precompanydata.name}  onChange={(e)=>setprecompanydata({...precompanydata,phone:e.target.value})} value={precompanydata.phone??""} className="form-control" placeholder=" Company Phone" id=" " />
                              <Form.Control.Feedback type="invalid">Please provide phone </Form.Control.Feedback>
                            </div>
                            <div className="form-group col-lg-6  mt-20">
                              <input type="email" required={precompanydata.name}  onChange={(e)=>setprecompanydata({...precompanydata,email:e.target.value})} value={precompanydata.email??""} className="form-control" placeholder="Company email" id=" " />
                              <Form.Control.Feedback type="invalid">Please provide valid email </Form.Control.Feedback>
                            </div>
                            <div className="form-group col-lg-12  mt-20">
                              <input type="text" required={precompanydata.name}  onChange={(e)=>setprecompanydata({...precompanydata,address:e.target.value})} value={precompanydata.address??""} className="form-control" placeholder="Company Address" id=" " />
                              <Form.Control.Feedback type="invalid">Please provide address </Form.Control.Feedback>
                            </div>
                            <div className="form-group col-lg-12  mt-20">
                              <textarea required={precompanydata.name}  type="text"onChange={(e)=>setprecompanydata({...precompanydata,jobDescription:e.target.value})} value={precompanydata.jobDescription??""} className="form-control text-area11" placeholder="Job Description" id=" "  />
                              <Form.Control.Feedback type="invalid">Please provide Job Description </Form.Control.Feedback>
                            </div>
                            <div className="form-group col-lg-6 mt-20 ">
                              <label className="col-sm-12 font-sm color-text-mutted">From*</label> 
                              <input required={precompanydata.name}  type="date"onChange={(e)=>setprecompanydata({...precompanydata,from:e.target.value})} value={precompanydata.from??""} className="form-control" placeholder=" From" id=" " />
                              <Form.Control.Feedback type="invalid">Please provide Join date </Form.Control.Feedback>
                            </div>
                            <div className="form-group col-lg-6 mt-20">
                              <label className="col-sm-12 font-sm color-text-mutted">To*</label> 
                              <input type="date"  onChange={(e)=>setprecompanydata({...precompanydata,to:e.target.value})} value={precompanydata.to??""} className="form-control" placeholder=" To" id=" " />
                              <Form.Control.Feedback type="invalid">Please provide to date </Form.Control.Feedback>
                            </div>
                          </div>
                          <div className="line-item-property__actions col-12 row mt-3 mb-3">
                          <button onClick={()=>pushhandler(precompanydata,setprecompanydata,precompanyarray,setprecompanyarray)}  className="col-lg-2 button-form1" type="button"  value="+">Add</button>
                          <button onClick={()=>removeHandler(precompanyarray,setprecompanyarray)} className="col-lg-2 button-form2" type="button" value="-">Remove</button>
                          </div>
                        </div>
                        <div className="property-fields__ro ">
                          <div id="property-fields__row-2" className="property-fields__ro row">
                            <h6 className="permenent-address form-t mb-3 col-12">Company</h6>
                            {companyarray.length?companyarray.map((citm,ck)=>
                            <React.Fragment key={ck}>
                            <div className="form-group col-lg-6 ">
                              <div className="text__center">
                                <select value={citm.name} disabled className="form-control cs-select cs-skin-elastic cs-skin-elastic1">
                                  {/* <option value="" hidden  >Company Name</option>
                                  <option value="Company1">Company1</option>
                                  <option value="Company2">Company2</option> */}
                                </select>
                              </div>
                            </div>
                            <div className="form-group col-lg-6  ">
                              <input type="text"  value={citm.position} className="" disabled placeholder=" Position" id=" " />
                            </div>
                            <div className="form-group col-lg-6 mt-20">
                              <input type="tel"  value={citm.phone} className="" disabled placeholder=" Company Phone" id=" " />
                            </div>
                            <div className="form-group col-lg-6  mt-20">
                              <input type="email"  value={citm.email} className="" disabled placeholder="Company email" id=" " />
                            </div>
                            <div className="form-group col-lg-12  mt-20">
                              <input type="text"  value={citm.address} disabled className="" placeholder="Company Address" id=" " />
                            </div>
                            <div className="form-group col-lg-12  mt-20">
                              <textarea type="text"  value={citm.jobDescription} disabled className=" text-area11" placeholder="Job Description" id=" "  />
                            </div>
                            <div className="form-group col-lg-6 mt-20">
                              <label className="col-sm-12 font-sm color-text-mutted">From*</label> 
                              <input type="date" disabled value={citm.from} className="" placeholder=" From" id=" " />
                            </div>
                            <div className="form-group col-lg-6 mt-20">
                              <label className="col-sm-12 font-sm color-text-mutted">To*</label> 
                              <input type="date"  disabled value={citm.to} className="" placeholder=" To" id=" " />
                            </div>
                              {/* <hr/> */}
                            </React.Fragment>):null}
                            <div className="form-group col-lg-6 ">
                              <div className="text__center">
                                <select onChange={(e)=>setcompanydata({...companydata,name:e.target.value})} value={companydata.name} className="form-control cs-select cs-skin-elastic cs-skin-elastic1">
                                  <option value="" hidden  >Company Name</option>
                                  {companyvalues.map((company,k)=>(
                                    <option key={k} value={company._id}>{company.name}</option>
                                  ))} 
                                </select>
                                <Form.Control.Feedback type="invalid">Please provide Company </Form.Control.Feedback>
                              </div>
                            </div>
                            <div className="form-group col-lg-6  ">
                              <input type="text" required={companydata.name} onChange={(e)=>setcompanydata({...companydata,position:e.target.value})} value={companydata.position??""} className="form-control" placeholder=" Position" id=" " />
                              <Form.Control.Feedback type="invalid">Please provide position </Form.Control.Feedback>
                            </div>
                            <div className="form-group col-lg-6 ">
                              <input type="tel" required={companydata.name} onChange={(e)=>setcompanydata({...companydata,phone:e.target.value})} value={companydata.phone??""} className="form-control" placeholder=" Company Phone" id=" " />
                              <Form.Control.Feedback type="invalid">Please provide  phone</Form.Control.Feedback>
                            </div>
                            <div className="form-group col-lg-6  ">
                              <input type="email" required={companydata.name} onChange={(e)=>setcompanydata({...companydata,email:e.target.value})} value={companydata.email??""} className="form-control" placeholder="Company email" id=" " />
                              <Form.Control.Feedback type="invalid">Please provide valid email </Form.Control.Feedback>
                            </div>
                            <div className="form-group col-lg-12  mt-20">
                              <input type="text" required={companydata.name} onChange={(e)=>setcompanydata({...companydata,address:e.target.value})} value={companydata.address??""} className="form-control" placeholder="Company Address" id=" " />
                              <Form.Control.Feedback type="invalid">Please provide address </Form.Control.Feedback>
                            </div>
                            <div className="form-group col-lg-12  mt-20">
                              <textarea type="text" required={companydata.name} onChange={(e)=>setcompanydata({...companydata,jobDescription:e.target.value})} value={companydata.jobDescription??""} className="form-control text-area11" placeholder="Job Description" id=" " />
                              <Form.Control.Feedback type="invalid">Please provide Job Description </Form.Control.Feedback>
                            </div>
                            <div className="form-group col-lg-6 mt-20">
                              <label className="col-sm-12 font-sm color-text-mutted">From*</label> 
                              <input type="date" required={companydata.name} onChange={(e)=>setcompanydata({...companydata,from:e.target.value})} value={companydata.from??""} className="form-control" placeholder=" From" id=" " />
                              <Form.Control.Feedback type="invalid">Please provide joining date </Form.Control.Feedback>
                            </div>
                            <div className="form-group col-lg-6 mt-20">
                              <label className="col-sm-12 font-sm color-text-mutted">To*</label> 
                              <input type="date" onChange={(e)=>setcompanydata({...companydata,to:e.target.value})} value={companydata.to??""} className="form-control" placeholder=" To" id=" " />
                              <Form.Control.Feedback type="invalid">Please provide to date </Form.Control.Feedback>
                            </div>
                          </div>
                          <div className="line-item-property__actions col-12 row mt-3 mb-3">
                          <button onClick={()=>pushhandler(companydata,setcompanydata,companyarray,setcompanyarray)}  className="col-lg-2 button-form1" type="button"  value="+">Add</button>
                          <button onClick={()=>removeHandler(companyarray,setcompanyarray)} className="col-lg-2 button-form2" type="button" value="-">Remove</button>
                          </div>
                        </div>
                        <div className="row">
                          <h6 className=" form-t mb-3 mt-3 col-12">Any other Proficiancy</h6>
                          <div className="form-group col-lg-12 ">
                            <textarea onChange={(e)=>setemployeedata3({...employeedata3,otherproficency:e.target.value})}  value={employeedata.otherproficency??''} type="text" className="form-control text-area11" placeholder="Message" id=" "  />
                            <Form.Control.Feedback type="invalid">Please provide otherproficency </Form.Control.Feedback>
                          </div>
                        </div>
                      </div>
                      <input type="submit" name="next" onClick={()=>tophandler(0,500)} className="pr-button next action-button"   defaultValue="Submit" /> 
                      <input type="button" name="previous" onClick={()=>setWizard(2)} className="pr-button  action-button-prev" defaultValue="Previous" />
                      {/* <button onClick={(e)=>registerEmployee(e)} > click</button> */}
                    </fieldset>
                    </Form>
                    :null}
                    {wizard===4?
                    <fieldset>
                      <div className="form-card reg-form">
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
                                  <span className="profile-summary">{userdetail?.firstName??""} {userdetail?.middleName??""} {userdetail?.lastName??""}</span>
                                  <a className="profile-cv">ID:{userdetail.uniqueid}</a>
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
                    :null}
                  {/* </Form> */}
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
