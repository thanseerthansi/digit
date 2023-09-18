import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Axioscall from '../Commonpages/Axioscall'
import { Simplecontext } from '../Commonpages/Simplecontext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { notify, notifyerror } from '../Commonpages/toast';
import { Modal, ModalFooter } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import moment from 'moment';

export default function Notification() {
    const {userdetail,Check_Validation,getNotification,notificationdata,setnotificationdata } = useContext(Simplecontext);
    // const [notificationdata,setnotificationdata]=useState([])
    const[isOpen,setIsopen]=useState({show:false,value:null})
    const [validated,setValidated]=useState(false)
      useEffect(() => {
       window.scrollTo(0,0)
       getNotification()
  
      }, [])
      // console.log("isopen",isOpen)
      const tokenhandler=()=>{
        let token = window.localStorage.getItem('craig-token')??""
        if(token){
          let data  = Decodetoken(token)
          return data
        }
      }
      // const getNotification=async()=>{
      //   try {
      //     let body ={
      //       email:window.localStorage.getItem("graiduseremail"),
      //       page:1,
      //       limit:10
      //     }
      //     let data = await Axioscall("get","notification",body)
      //     console.log("data",data.data.data.docs)
      //     if (data.status===200){
      //       setnotificationdata(data.data.data.docs)
      //     }
      //   } catch (error) {
      //     console.log(error)
      //   }
      // }
      const notificationUpdate=async(notif,type)=>{
        try {
          if(!type){
            notif = isOpen.value.notification
            type = "reschedule"
           
          }
          let body = {
            interviewId:notif.interviewId,
            notificationId:notif._id,
            user:notif.user._id,
            type:type,
            company:notif.company
          }
          if(type==="reschedule"){
            body.date = isOpen.value.date
            body.time = isOpen.value.time
            body.place = isOpen.value.beforeData.place
            body.beforedate =isOpen.value.beforeData
          }
          console.log("nottttt",body)
          let data = await Axioscall("put","interview-schedule",body,"header")
          // console.log("data",data)
          if(data.status===200){
            notify(data.data.message)
            setIsopen({show:false,value:null})
            getNotification()
          }else{
            notifyerror("went wrong")
          }
        } catch (error) {
          console.log(error)
        }
      }
      const timeHandler=(value)=>{
        const formattedTime = moment(value, 'HH:mm').format('hh:mm A');
        setIsopen({...isOpen,value:{...isOpen.value,time:formattedTime}})
      }
      const notificationdeleteHalndler=async(notid)=>{
        try {
          let data = await Axioscall("delete",`notification`,{id:notid})
          // console.log("datanotide.ete",data)
          if(data.status===200){
            notify(data.data.message)
            getNotification()
          }else{
            notifyerror("Something Went Wrong")
          }
        } catch (error) {
          console.log(error)
        }
      }
      const Beforetime = (gdate) => {
        const dateStr = gdate.date;
        const timeStr = gdate.time;
        const [year, month, day] = dateStr.split("-").map(Number);
        const [time, period] = timeStr.split(" ");
        const [hours, minutes] = time.split(":").map(Number);
        const givenDate = new Date(year, month - 1, day, hours, minutes);
        const currentDate = new Date();
        // console.log("givendaet",givenDate)
        // console.log("currentdate",currentDate)
        // Calculate the time difference in milliseconds
        const timeDifference = givenDate - currentDate;
        // console.log("Timediff",timeDifference)
        if (timeDifference < 48 * 60 * 60 * 1000) {
          // console.log("The given date is within 48 hours of now")
          return true; // The given date is within 48 hours of now
        } else {
          // console.log("The given date is not within 48 hours of now")
          return false; // The given date is not within 48 hours of now
        }
      };
    return (
      <>
      <main className="main notification-container">
    <div className="carousel-inner">
    </div>
    <div className="container mb-80  ">
      <div className="row  mt-80">
        <div className="col-lg-9 right margin-top notification-content">
          <h3 className="m-b-50 heading-line mb-40">Notifications</h3>
          
          <div className="box shadow-sm rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Recent</h6>
            </div>
            <div className="box-body p-0">
              {notificationdata.length?notificationdata.map((newnot,nk)=>(
               <React.Fragment key={nk}> 
               <>
               {newnot.type==="interview_schedule"?
              <div key={nk} className="p-3 align-items-center bg-light border-bottom osahan-post-header row">
                <div className='col-12 col-md-12 col-lg-12 d-flex'>
                <div className="dropdown-list-image mr-3 ">
                  <img className="rounded-circle" src={newnot?.user?.profilePhoto??"https://bootdey.com/img/Content/avatar/avatar3.png"}  alt=""/>
                </div>
                <div className="font-weight-bold mr-3 mt-2">
                <p  className="">{newnot?.message??""}</p>
                  {/* <div className="small">{newnot.user.firstName} {newnot.user.middleName} {newnot.user.lastName}  Worked from {newnot?.message?.from??""} to {newnot?.message?.to??"Present"} </div> */}
                </div>
                <br/>
                
                </div>
                <div style={{marginLeft:"6%"}} className='text-center'>
                <div className=" ntn-btn font-weight-bold d-flex ml-4"   >
                  <div>
                  <button onClick={()=>notificationUpdate(newnot,"accept")} type="button"  className="btn btn-outline-success btn-sm ">Accept</button>
                  </div>
                  <div className='ml-2' style={{marginLeft:"10px"}}>
                  <button  onClick={()=>notificationUpdate(newnot,"reject")} type="button" className="btn btn-outline-success btn-sm  ">Reject</button>
                  </div>{Beforetime(newnot.beforeData)?
                   ""
                  : <>
                    
                  {newnot.isRescheduled?"":
                  <div className='ml-2' style={{marginLeft:"10px"}}>
                  <button  onClick={()=>setIsopen({...isOpen,show:true,value:{...isOpen.value,notification:newnot,beforeData:newnot.beforeData}})} type="button" className="btn btn-outline-success btn-sm  ">Reschedule</button>
                  </div>}
                  </>}
                </div>
                </div>

                
              </div>
              :<div key={nk} className="p-3 d-flex align-items-center bg-light border-bottom osahan-post-header row">
              <div className='col-12 col-md-9 col-lg-9 d-flex'>
              <div className="dropdown-list-image mr-3 ">
                <img className="rounded-circle" src={newnot?.user?.profilePhoto??"https://bootdey.com/img/Content/avatar/avatar3.png"}  alt=""/>
              </div>
              <div className="font-weight-bold mr-3 mt-2">
              <p  className="">{newnot?.message??""}</p>
                {/* <div className="small">{newnot.user.firstName} {newnot.user.middleName} {newnot.user.lastName}  Worked from {newnot?.message?.from??""} to {newnot?.message?.to??"Present"} </div> */}
              </div>
             
              </div>
              <div className='col-md-3 col-lg-3 '>
              <div className='ml-2' style={{marginLeft:"10px"}}>
                  <button onClick={(e)=>notificationdeleteHalndler(newnot._id)} type="button" className="btn btn-outline-success btn-sm  ">Delete</button>
                  </div>

              </div>
              
                
        
             
            </div>}
              </>
              </React.Fragment>
              )):<div><p className='text-center'>No  Notifications Found</p></div>}
            </div>
          </div>
         
          {/* {notificationdata.filter(t=>t.is_viewed===true).length?
          <div className="box shadow-sm rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Earlier</h6>
            </div>
            <div className="box-body p-0">
            {notificationdata.filter(t=>t.is_viewed===true).length?notificationdata.filter(t=>t.is_viewed===true).map((newnot,nk)=>(
              <div key={nk} className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={newnot?.user?.profilePhoto??"https://bootdey.com/img/Content/avatar/avatar3.png"}  alt=""/>
                </div>
                <div className="font-weight-bold mr-3">
                  <Link to={`/verification/${newnot._id}/${newnot.user._id}`} className="text-truncate ">Request For Employee Verification</Link>
                  <div className="small">{newnot.user.firstName} {newnot.user.middleName} {newnot.user.lastName}  Worked from {newnot?.message?.from??""} to {newnot?.message?.to??"Present"} </div>
                </div>
                <div className="font-weight-bold mr-3 ml-30 margin-left1">
                <Link type="button" to={`/verification/${newnot._id}/${newnot.user._id}`} className="btn btn-outline-success btn-sm ">{newnot.message.is_verified?"Verify":"View"}</Link>
                </div>
              </div>
              )):<div><p className='text-center'>No Earlier Notifications Found</p></div>}
              
            </div>
          </div>
          :""} */}
        </div>
      </div>
    </div>
    <Modal show={isOpen.show} onHide={() => setIsopen({...isOpen,show:false})}>
        <Modal.Header closeButton>
          <Modal.Title><h6>Reschedule Interview</h6></Modal.Title>
        </Modal.Header>
        <Form validated={validated} noValidate onSubmit={(e)=>Check_Validation(e,notificationUpdate,setValidated)}>
          <Modal.Body>
            
            <div className="form-group col-md-12 mb-3 ">
              <label className="font-sm color-text mb-10">Available Date:</label>
              <input  required placeholder="Available Date" onChange={(e) => setIsopen({...isOpen,value:{...isOpen.value,date:e.target.value}})} value={isOpen.value?.date??""} type="date" className="form-control"  />
              <Form.Control.Feedback type="invalid">
                Please provide any reason
              </Form.Control.Feedback>
            </div>
            <div className="form-group col-md-12 mb-3 ">
              <label className="font-sm color-text mb-10">Available Time:</label>
              <input  required placeholder="Available Time" onChange={(e) => timeHandler(e.target.value)} value={isOpen.value?.time?moment(isOpen.value.time, 'hh:mm A').format('HH:mm'):""} type="time" className="form-control"  />
              <Form.Control.Feedback type="invalid">
                Please provide any reason
              </Form.Control.Feedback>
            </div>
          </Modal.Body>
          <ModalFooter>
            <Button variant="success" type='submit'>Submit</Button>
          </ModalFooter>
        </Form>
      </Modal>
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
      <script src="/assets/js/plugins/counterup.js"></script>
      <script src="/assets/js/main8c94.js?v=4.1"></script>
  </Helmet>
      </>
    )
}
