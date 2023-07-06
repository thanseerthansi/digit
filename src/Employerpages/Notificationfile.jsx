import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Axioscall from '../Commonpages/Axioscall'

export default function Notificationfile() {
    useEffect(() => {
     window.scrollTo(0,0)
    }, [])
    const tokenhandler=()=>{
      let token = window.localStorage.getItem('craig-token')??""
      if(token){
        let data  = Decodetoken(token)
        console.log("dataid",data)
        return data
      }
    }
    const getNotification=async()=>{
      try {
        let data = await Axioscall("get","")
        if (data.status===200){

        }
      } catch (error) {
        
      }
    }
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
            <div className="p-3 d-flex align-items-center bg-light border-bottom osahan-post-header">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt />
              </div>
              <div className="font-weight-bold mr-3">
                <a href="verification.html"><div className="text-truncate ">Request For Profile Verification</div>
                  <div className="small">Income tax sops on the cards, The bias in VC funding, and other top news for you</div></a>
              </div>
              <div className="font-weight-bold mr-3 ml-30 margin-left1">
                <button type="button" href="verification.html" className="btn btn-outline-success btn-sm ">Verify</button>
              </div>
            </div>
            <div className="p-3 d-flex align-items-center osahan-post-header">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt />
              </div>
              <div className="font-weight-bold mr-3">
                <div className="text-truncate ">Request For Profile Verification</div>
                <div className="small">Income tax sops on the cards, The bias in VC funding, and other top news for you</div>
              </div>
              <div className="font-weight-bold mr-3 ml-30 margin-left1">
                <button type="button" className="btn btn-outline-success btn-sm">Verify</button>
              </div>
            </div>
          </div>
        </div>
        <div className="box shadow-sm rounded bg-white mb-3">
          <div className="box-title border-bottom p-3">
            <h6 className="m-0">Earlier</h6>
          </div>
          <div className="box-body p-0">
            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt />
              </div>
              <div className="font-weight-bold mr-3">
                <div className="text-truncate ">Request For Profile Verification</div>
                <div className="small">Income tax sops on the cards, The bias in VC funding, and other top news for you</div>
              </div>
              <div className="font-weight-bold mr-3 ml-30 margin-left1">
                <button type="button" className="btn btn-outline-success btn-sm">Verify</button>
              </div>
            </div>
            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
              <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt /></div>
              <div className="font-weight-bold mr-3">
                <div className="text-truncate">DAILY RUNDOWN: SATURDAY</div>
                <div className="small">Pellentesque semper ex diam, at tristique ipsum varius sed. Pellentesque non </div>
                <div className="small text-success"><i className="fa fa-check-circle" /> Verified</div>
              </div>
            </div>
            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt />
              </div>
              <div className="font-weight-bold mr-3">
                <div className="mb-2"><span className="font-weight-normal">Congratulate Gurdeep Singh Osahan (iamgurdeeposahan)</span> for 5 years </div>
                <div className="small text-success1"><i className="fa-sharp fa-solid fa-circle-xmark" />Not Verified</div>
              </div>
            </div>
            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt />
              </div>
              <div className="font-weight-bold mr-3">
                <div>
                  <span className="font-weight-normal">Congratulate Mnadeep singh (iamgurdeeposahan)</span> for 4 years 
                  <div className="small text-success"><i className="fa fa-check-circle" /> Verified</div>
                </div>
              </div>
            </div>
            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
              <div className="dropdown-list-image mr-3 d-flex align-items-center bg-success justify-content-center rounded-circle text-white">M</div>
              <div className="font-weight-bold mr-3">
                <div className="text-truncate">DAILY RUNDOWN: MONDAY</div>
                <div className="small">Nunc purus metus, aliquam vitae venenatis sit amet, porta non est.</div>
                <div className="small text-success"><i className="fa fa-check-circle" /> Verified</div>
              </div>
            </div>
            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
              <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt /></div>
              <div className="font-weight-bold mr-3">
                <div className="text-truncate">DAILY RUNDOWN: SATURDAY</div>
                <div className="small">Pellentesque semper ex diam, at tristique ipsum varius sed. Pellentesque non metus </div>
              </div>
            </div>
            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt />
              </div>
              <div className="font-weight-bold mr-3">
                <div className="mb-2"><span className="font-weight-normal">Congratulate Gurdeep Singh Osahan (iamgurdeeposahan)</span> for 5 years.</div>
              </div>
            </div>
            <div className="p-3 d-flex align-items-center osahan-post-header">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt />
              </div>
              <div className="font-weight-bold mr-3">
                <div>
                  <span className="font-weight-normal">Congratulate Mnadeep singh (iamgurdeeposahan)</span> for 4 years .
                  <div className="small text-success"><i className="fa fa-check-circle" /> Verified</div>
                </div>
              </div>
            </div>
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
    </>
  )
}
