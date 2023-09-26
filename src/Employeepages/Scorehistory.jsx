import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Axioscall from '../Commonpages/Axioscall';
import { Simplecontext } from '../Commonpages/Simplecontext';
import moment from 'moment';
import { capitalizeFirstLetter } from '../Commonpages/StringFunctions';

export default function Scorehistory() {
    const {userdetail}=useContext(Simplecontext)
    const [ history,sethistory]=useState([])

    useEffect(()=>{
        window.scrollTo(0,0)
        getHistory()
    },[userdetail]);
    // console.log("userdetails",userdetail)
    const getHistory=async()=>{
        try {
            let data =await Axioscall("get",`temp-score/${userdetail._id}`)
            console.log("data",data.data.data)
            if(data.status===200){
                sethistory(data.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const attendanceHandler=(value)=>{
        let data = ""
      if(value==="platinum"){
        data = "platinum(95% - 100%)"
      }else if(value==="gold"){
        data = "gold(90% - 95%)"
      }else if(value==="silver"){
        data = "silver(80% - 90%)"
      }else if(value==="bronze"){
        data = "bronze(Below 80%)"
      }else{
        data =""
      }
      return data
    }
    const ratingHandler=(value)=>{
        let data = 0
        if(value==="platinum"){
          data = "Platinum(10 Rating)"
        }else if(value==="gold"){
          data = "Gold(7-9 Rating)"
        }else if(value==="silver"){
          data = "Silver(4-6 Rating)"
        }else if(value==="bronze"){
          data = "Bronze(1-3 Rating)"
        }else{
          data =""
        }
        // console.log("attandance dara",data)
        return data
      }
  return (
    <div>
        <main className="main notification-container">
  <div className="carousel-inner">
  </div>
  <div className="container mb-40  ">
    <div className="row  mt-40">
      <div className="col-lg-9 right margin-top notification-content">
        {/* <h4 className="m-b-50 heading-line mb-40">Score History</h4> */}
        {/* <button onClick={()=>{ return navigate(-1)}} type="button" className="btn btn-primary btn-sm shadow-none"  style={{ marginRight:"10px"}}>
                                                <i className="bx bx-arrow-back font-size-16 align-middle me-2"></i> Back
                                            </button> */}
        <div className="box shadow-sm rounded bg-white mb-3">
          <div className="box-title border-bottom p-3">
            <h6 className="m-0">Score History</h6>
          </div>
          <div className="box-body p-3">
            {history.length?history.map((itm,k)=>(

          
          <div key={k} className="p-3  bg-light border-bottom osahan-post-header ">
                
          <div className='row'>
            <div className='text-end'><span style={{fontWeight:"bold"}}>{moment(itm.createdAt).format("DD-MM-YYYY")}</span></div>
            <div className='col-6'>
                <div className='row'>
                    <div className='col-3'><span style={{fontWeight:"bold"}}>Attendance</span></div>
                    <div className='col-1'>:</div>
                    <div className='col-6'>{attendanceHandler(itm.attendance.value)}</div>
                </div>
                <div className='row'>
                    <div className='col-3'><span style={{fontWeight:"bold"}}>Performance</span></div>
                    <div className='col-1'>:</div>
                    <div className='col-6'>{ratingHandler(itm.perfomance.value)}</div>
                </div>
            </div>
            <div className='col-6 '>
            <div className='row'>
                    <div className='col-4'><span style={{fontWeight:"bold"}}>Extra Hours</span></div>
                    <div className='col-1'>:</div>
                    <div className='col-6'>{itm.extraWork?.value?capitalizeFirstLetter(itm.extraWork.value):""??""}</div>
                </div>
                <div className='row'>
                    <div className='col-4'><span style={{fontWeight:"bold"}}>Senior duty </span></div>
                    <div className='col-1'>:</div>
                    <div className='col-6'>{itm.managerPost.value?'done':"No"}</div>
                </div>
            </div>
           </div>
                
                
              </div>
                )):<p className='text-center'>No History Found</p>}
           
       
          </div>
        </div>
       
       
      </div>
    </div>
  </div>
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
    </div>
  )
}
