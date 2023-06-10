import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  // console.log("scrolll",scrollPosition)
  const mobileHeaderActive=()=> {
    console.log("entered hamburg")
    var navbarTrigger = $(".burger-icon"),
      endTrigger = $(".mobile-menu-close"),
      container = $(".mobile-header-active"),
      wrapper4 = $("body");
    wrapper4.prepend('<div class="body-overlay-1"></div>');
    navbarTrigger.on("click", function (e) {
      console.log("enter fun")
      navbarTrigger.toggleClass("burger-close");
      e.preventDefault();
      container.toggleClass("sidebar-visible");
      wrapper4.toggleClass("mobile-menu-active");
    });
    endTrigger.on("click", function () {
      console.log("offf fun")
      container.removeClass("sidebar-visible");
      wrapper4.removeClass("mobile-menu-active");
    });
    $(".body-overlay-1").on("click", function () {
      container.removeClass("sidebar-visible");
      wrapper4.removeClass("mobile-menu-active");
      navbarTrigger.removeClass("burger-close");
    });
  }
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    mobileHeaderActive();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // console.log("windowpath",window.location.pathname)
  return (
 <div>
  <header className={scrollPosition===0?"header sticky-bar  ":"header sticky-bar stick"  }>
    <div className="container">
      <div className="main-header">
        <div className="header-left">
          <div className="header-logo"><Link className="d-flex" to="/"><img alt="jobBox" src="./assets/imgs/template/jobhub-logo copy 2.png" /></Link></div>
        </div>
        <div className="header-nav">
          <nav className="nav-main-menu">
            <ul className="main-menu">
              <li className="has-children"><Link  to="/">Home</Link>
              </li>
              <li className="has-children"><Link to="/aboutus">About us</Link>
              </li>
              <li className="has-children"><Link to="/contactus">Contact us</Link>
              </li>
            </ul>
          </nav>
          <div className="burger-icon burger-icon-white"><span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" /></div>
        </div>
        <div className="header-right">
          {window.location.pathname==="/Signin"||window.location.pathname==="/employerlogin"?
          <div className="block-signin">
          <a
            className="btn btn-default btn-shadow ml-40 hover-up"
            href="page-register.html"
          >
            Register
          </a>
        </div>
          :
          <div className="block-signin"><Link className="text-link-bd-btom hover-up" to="/employerlogin">Find &nbsp; Candidates</Link><Link className="btn btn-default btn-shadow ml-40 hover-up" to="Signin">Sign in</Link></div>
           }
          </div>
      </div>
    </div>
  </header>
  
  <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
    <div className="mobile-header-wrapper-inner">
      <div className="mobile-header-content-area">
        <div className="perfect-scroll">
          <div className="mobile-menu-wrap mobile-header-border">
            {/* mobile menu start*/}
            <nav>
              <ul className="mobile-menu font-heading">
                <li className="has-children"><Link  to="/">Home</Link>
                </li>
                <li className="has-children"><Link to="/aboutus">About us</Link>
                </li>
                <li className="has-children mb-3"><Link to="/employerlogin">Find candidates </Link>
                </li>
                <li className="has-children"><Link to="/contactus">Contact us</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="site-copyright">Copyright 2023 © Digit.</div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
