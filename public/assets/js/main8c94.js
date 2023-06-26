

//mainform end

$(document).ready(function () {
    var num1 = $('.property-fields__ro').length;
    if (num1 - 1 == 0)
      $('#btnDe').attr('disabled', 'disabled');
  
    $('#btnAd').click(function () {
  
      var num1 = $('.property-fields__ro').length;
      var newNum1 = num1 + 1;
      var newElem1 = $('#property-fields__row-2').clone().attr('id', 'property-fields__ro-' + newNum1);
  
  
      $('#property-fields__ro-' + num1).after(newElem1);
  
      $('#btnDe').attr('disabled', false);
  
      if (newNum1 == 19)
  
        $('#btnAd').attr('disabled', 'disabled');
  
    });
  
    $('#btnDe').click(function () {
      var num1 = $('.property-fields__ro').length; 
  
      $('#property-fields__ro-' + num1).remove();
  
      $('#btnAd').attr('disabled', false);
  
      if (num1 - 1 == 1)
  
        $('#btnDe').attr('disabled', 'disabled');
  
    });
  });


$(document).ready(function () {
    var num = $('.property-fields__row').length;
    if (num - 1 == 0)
      $('#btnDel').attr('disabled', 'disabled');
  
    $('#btnAdd').click(function () {
  
      var num = $('.property-fields__row').length;
      var newNum = num + 1;
      var newElem = $('#property-fields__row-1').clone().attr('id', 'property-fields__row-' + newNum);
  
  
  
      $('#property-fields__row-' + num).after(newElem);
  
      $('#btnDel').attr('disabled', false);
  
      if (newNum == 19)
  
        $('#btnAdd').attr('disabled', 'disabled');
  
    });
  
    $('#btnDel').click(function () {
      var num = $('.property-fields__row').length; 
  
      $('#property-fields__row-' + num).remove();
  
      $('#btnAdd').attr('disabled', false);
  
      if (num - 1 == 1)
  
        $('#btnDel').attr('disabled', 'disabled');
  
    });
  });



  /////register form clone 2
  $('body')
  .on('click', 'div.three button.btn-search', function(event) {
    event.preventDefault();
    var $input = $('div.three input');
    $input.focus();
    if ($input.val().length() > 0) {
      // submit form
    }
  })
  .on('click', 'div.four button.btn-search', function(event) {
    event.preventDefault();
    var $input = $('div.four input');
    $input.focus();
    if ($input.val().length() > 0) {
      // submit form
    }
  })
  .on('click', 'div.five button.btn-search', function(event) {
    event.preventDefault();
    var $input = $('div.five input');
    $input.focus();
    if ($input.val().length() > 0) {
      // submit form
    }
  })
  .on('click', 'div.six button.btn-search', function(event) {
    event.preventDefault();
    var $input = $('div.six input');
    $input.focus();
    if ($input.val().length() > 0) {
      // submit form
    }
  })
  .on('click', 'div.thirteen button.btn-search', function(event) {
    event.preventDefault();
    var $input = $('div.thirteen input');
    $input.focus();
    if ($input.val().length() > 0) {
      // submit form
    }
  })
  .on('click', 'div.fourteen button.btn-search', function(event) {
    event.preventDefault();
    var $input = $('div.fourteen input');
    $input.focus();
    if ($input.val().length() > 0) {
      // submit form
    }
  })
;

  

//log in page toggle

//courtesy to the super coder I can't recall
! function(e) {
    "use strict";
  
    function t(e) {
      return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
    }
  
    function s(e, t) {
      var s = l(e, t) ? i : n;
      s(e, t)
    }
    var l, n, i;
    "classList" in document.documentElement ? (l = function(e, t) {
      return e.classList.contains(t)
    }, n = function(e, t) {
      e.classList.add(t)
    }, i = function(e, t) {
      e.classList.remove(t)
    }) : (l = function(e, s) {
      return t(s).test(e.className)
    }, n = function(e, t) {
      l(e, t) || (e.className = e.className + " " + t)
    }, i = function(e, s) {
      e.className = e.className.replace(t(s), " ")
    });
    var c = {
      hasClass: l,
      addClass: n,
      removeClass: i,
      toggleClass: s,
      has: l,
      add: n,
      remove: i,
      toggle: s
    };
    "function" == typeof define && define.amd ? define(c) : e.classie = c
  }(window),
  function(e) {
    "use strict";
  
    function t(e, t) {
      if (!e) return !1;
      for (var s = e.target || e.srcElement || e || !1; s && s != t;) s = s.parentNode || !1;
      return s !== !1
    }
  
    function s(e, t) {
      for (var s in t) t.hasOwnProperty(s) && (e[s] = t[s]);
      return e
    }
  
    function l(e, t) {
      this.el = e, this.options = s({}, this.options), s(this.options, t), this._init()
    }
    l.prototype.options = {
      newTab: !0,
      stickyPlaceholder: !0,
      onChange: function() {
        return !1
      }
    }, l.prototype._init = function() {
      var e = this.el.querySelector("option[selected]");
      this.hasDefaultPlaceholder = e && e.disabled, this.selectedOpt = e || this.el.querySelector("option"), this._createSelectEl(), this.selOpts = [].slice.call(this.selEl.querySelectorAll("option[data-option]")), this.selOptsCount = this.selOpts.length, this.current = this.selOpts.indexOf(this.selEl.querySelector("option.cs-selected")) || -1, this.selPlaceholder = this.selEl.querySelector("span.cs-placeholder"), this._initEvents()
    }, l.prototype._createSelectEl = function() {
      var e = "",
        t = function(e) {
          var t = "",
            s = "",
            l = "";
          return !e.selectedOpt || this.foundSelected || this.hasDefaultPlaceholder || (s += "cs-selected ", this.foundSelected = !0), e.getAttribute("data-class") && (s += e.getAttribute("data-class")), e.getAttribute("data-link") && (l = "data-link=" + e.getAttribute("data-link")), "" !== s && (t = 'class="' + s + '" '), "<li " + t + l + ' data-option data-value="' + e.value + '"><span>' + e.textContent + "</span></li>"
        };
      [].slice.call(this.el.children).forEach(function(s) {
        if (!s.disabled) {
          var l = s.tagName.toLowerCase();
          "option" === l ? e += t(s) : "optgroup" === l && (e += '<li class="cs-optgroup"><span>' + s.label + "</span><ul>", [].slice.call(s.children).forEach(function(s) {
            e += t(s)
          }), e += "</ul></li>")
        }
      });
      var s = '<div class="cs-options"><ul>' + e + "</ul></div>";
      this.selEl = document.createElement("div"), this.selEl.className = this.el.className, this.selEl.tabIndex = this.el.tabIndex, this.selEl.innerHTML = '<span class="cs-placeholder">' + this.selectedOpt.textContent + "</span>" + s, this.el.parentNode.appendChild(this.selEl), this.selEl.appendChild(this.el)
    }, l.prototype._initEvents = function() {
      var e = this;
      this.selPlaceholder.addEventListener("click", function() {
        e._toggleSelect()
      }), this.selOpts.forEach(function(t, s) {
        t.addEventListener("click", function() {
          e.current = s, e._changeOption(), e._toggleSelect()
        })
      }), document.addEventListener("click", function(s) {
        var l = s.target;
        e._isOpen() && l !== e.selEl && !t(l, e.selEl) && e._toggleSelect()
      }), this.selEl.addEventListener("keydown", function(t) {
        var s = t.keyCode || t.which;
        switch (s) {
          case 38:
            t.preventDefault(), e._navigateOpts("prev");
            break;
          case 40:
            t.preventDefault(), e._navigateOpts("next");
            break;
          case 32:
            t.preventDefault(), e._isOpen() && "undefined" != typeof e.preSelCurrent && -1 !== e.preSelCurrent && e._changeOption(), e._toggleSelect();
            break;
          case 13:
            t.preventDefault(), e._isOpen() && "undefined" != typeof e.preSelCurrent && -1 !== e.preSelCurrent && (e._changeOption(), e._toggleSelect());
            break;
          case 27:
            t.preventDefault(), e._isOpen() && e._toggleSelect()
        }
      })
    }, l.prototype._navigateOpts = function(e) {
      this._isOpen() || this._toggleSelect();
      var t = "undefined" != typeof this.preSelCurrent && -1 !== this.preSelCurrent ? this.preSelCurrent : this.current;
      ("prev" === e && t > 0 || "next" === e && t < this.selOptsCount - 1) && (this.preSelCurrent = "next" === e ? t + 1 : t - 1, this._removeFocus(), classie.add(this.selOpts[this.preSelCurrent], "cs-focus"))
    }, l.prototype._toggleSelect = function() {
      this._removeFocus(), this._isOpen() ? (-1 !== this.current && (this.selPlaceholder.textContent = this.selOpts[this.current].textContent), classie.remove(this.selEl, "cs-active")) : (this.hasDefaultPlaceholder && this.options.stickyPlaceholder && (this.selPlaceholder.textContent = this.selectedOpt.textContent), classie.add(this.selEl, "cs-active"))
    }, l.prototype._changeOption = function() {
      "undefined" != typeof this.preSelCurrent && -1 !== this.preSelCurrent && (this.current = this.preSelCurrent, this.preSelCurrent = -1);
      var t = this.selOpts[this.current];
      this.selPlaceholder.textContent = t.textContent, this.el.value = t.getAttribute("data-value");
      var s = this.selEl.querySelector("li.cs-selected");
      s && classie.remove(s, "cs-selected"), classie.add(t, "cs-selected"), t.getAttribute("data-link") && (this.options.newTab ? e.open(t.getAttribute("data-link"), "_blank") : e.location = t.getAttribute("data-link")), this.options.onChange(this.el.value)
    }, l.prototype._isOpen = function() {
      return classie.has(this.selEl, "cs-active")
    }, l.prototype._removeFocus = function() {
      var e = this.selEl.querySelector("li.cs-focus");
      e && classie.remove(e, "cs-focus")
    }, e.SelectFx = l
  }(window),
  function() {
    [].slice.call(document.querySelectorAll("select.cs-select")).forEach(function(e) {
      new SelectFx(e)
    })
  }();
//alredy
(function($) {
    ("use strict");
    // Page loading
    $(window).on("load", function() {
        $("#preloader-active").fadeOut("slow");
    });  

// multistep-form 
   
$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;
    
    setProgressBar(current);
    
    $(".next").click(function(){
    
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    next_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(++current);
    });
    
    $(".previous").click(function(){
    
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    //show the previous fieldset
    previous_fs.show();
    
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    previous_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(--current);
    });
    
    function setProgressBar(curStep){
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
    .css("width",percent+"%")
    }
    
    $(".submit").click(function(){
    return false;
    })
    
    });
    //add new
    var ct = 1;
function new_link()
{
	ct++;
	var div1 = document.createElement('div');
	div1.id = ct;
	// link to delete extended form elements
	var delLink = '<div style="text-align:right;margin-right:65px"><a href="javascript:delIt('+ ct +')">Del</a></div>';
	div1.innerHTML = document.getElementById('newlinktpl').innerHTML + delLink;
	document.getElementById('newlink').appendChild(div1);
}
// function to delete the newly added set of elements
function delIt(eleId)
{
	d = document;
	var ele = d.getElementById(eleId);
	var parentEle = d.getElementById('newlink');
	parentEle.removeChild(ele);
}
function duplicate() {    
    var original = document.getElementById('service');
    var rows = original.parentNode.rows;
    var i = rows.length - 1;
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "duplic" + (i); // there can only be one element with an ID
    original.parentNode.insertBefore(clone, rows[i]);
}


// carousal

    var multipleCardCarousel = document.querySelector(
        "#carouselExampleControls"
      );
      if (window.matchMedia("(min-width: 768px)").matches) {
        var carousel = new bootstrap.Carousel(multipleCardCarousel, {
          interval: false,
        });
        var carouselWidth = $(".carousel-inner")[0].scrollWidth;
        var cardWidth = $(".carousel-item").width();
        var scrollPosition = 0;
        $("#carouselExampleControls .carousel-control-next").on("click", function () {
          if (scrollPosition < carouselWidth - cardWidth * 4) {
            scrollPosition += cardWidth;
            $("#carouselExampleControls .carousel-inner").animate(
              { scrollLeft: scrollPosition },
              600
            );
          }
        });
        $("#carouselExampleControls .carousel-control-prev").on("click", function () {
          if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            $("#carouselExampleControls .carousel-inner").animate(
              { scrollLeft: scrollPosition },
              600
            );
          }
        });
      } else {
        $(multipleCardCarousel).addClass("slide");
      }
    /*-----------------
        Menu Stick
    -----------------*/
    var header = $(".sticky-bar");
    var win = $(window);
    win.on("scroll", function() {
        var scroll = win.scrollTop();
        if (scroll < 200) {
            header.removeClass("stick");
            $(".header-style-2 .categories-dropdown-active-large").removeClass("open");
            $(".header-style-2 .categories-button-active").removeClass("open");
        } else {
            header.addClass("stick");
        }
    });
    /*------ ScrollUp -------- */
    $.scrollUp({
        scrollText: '<i class="fi-rr-arrow-small-up"></i>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade"
    });
    /*------ Wow Active ----*/
    new WOW().init();
    //sidebar sticky
    if ($(".sticky-sidebar").length) {
        $(".sticky-sidebar").theiaStickySidebar();
    }
    /*----------------------------
        Category toggle function
    ------------------------------*/
    if ($(".categories-button-active").length) {
        var searchToggle = $(".categories-button-active");
        searchToggle.on("click", function(e) {
            e.preventDefault();
            if ($(this).hasClass("open")) {
                $(this).removeClass("open");
                $(this).siblings(".categories-dropdown-active-large").removeClass("open");
            } else {
                $(this).addClass("open");
                $(this).siblings(".categories-dropdown-active-large").addClass("open");
            }
        });
    }
    /*---------------------
        Select active
    --------------------- */
    if ($(".select-active").length) {
        $(".select-active").select2();
    }
    /*---- CounterUp ----*/
    if ($(".count").length) {
        $(".count").counterUp({
            delay: 10,
            time: 2000
        });
    }
    // Isotope active
    if ($(".grid").length) {
        $(".grid").imagesLoaded(function() {
            // init Isotope
            var $grid = $(".grid").isotope({
                itemSelector: ".grid-item",
                percentPosition: true,
                layoutMode: "masonry",
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: ".grid-item"
                }
            });
        });
    }
    /*====== SidebarSearch ======*/
    function sidebarSearch() {
        var searchTrigger = $(".search-active"),
            endTriggersearch = $(".search-close"),
            container = $(".main-search-active");
        searchTrigger.on("click", function(e) {
            e.preventDefault();
            container.addClass("search-visible");
        });
        endTriggersearch.on("click", function() {
            container.removeClass("search-visible");
        });
    }
    sidebarSearch();
    /*====== Sidebar menu Active ======*/
    function mobileHeaderActive() {
        var navbarTrigger = $(".burger-icon"),
            endTrigger = $(".mobile-menu-close"),
            container = $(".mobile-header-active"),
            wrapper4 = $("body");
        wrapper4.prepend('<div class="body-overlay-1"></div>');
        navbarTrigger.on("click", function(e) {
            navbarTrigger.toggleClass("burger-close");
            e.preventDefault();
            container.toggleClass("sidebar-visible");
            wrapper4.toggleClass("mobile-menu-active");
        });
        endTrigger.on("click", function() {
            container.removeClass("sidebar-visible");
            wrapper4.removeClass("mobile-menu-active");
        });
        $(".body-overlay-1").on("click", function() {
            container.removeClass("sidebar-visible");
            wrapper4.removeClass("mobile-menu-active");
            navbarTrigger.removeClass("burger-close");
        });
    }
    mobileHeaderActive();
    /*---------------------
        Mobile menu active
    ------------------------ */
    var $offCanvasNav = $(".mobile-menu"),
        $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");
    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fi-rr-angle-small-down"></i></span>');
    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();
    /*Category Sub Menu Toggle*/
    $offCanvasNav.on("click", "li a, li .menu-expand", function(e) {
        var $this = $(this);
        if (
            $this
            .parent()
            .attr("class")
            .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
            ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
        ) {
            e.preventDefault();
            if ($this.siblings("ul:visible").length) {
                $this.parent("li").removeClass("active");
                $this.siblings("ul").slideUp();
            } else {
                $this.parent("li").addClass("active");
                $this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
                $this.closest("li").siblings("li").find("ul:visible").slideUp();
                $this.siblings("ul").slideDown();
            }
        }
    });
    /*--- language currency active ----*/
    $(".mobile-language-active").on("click", function(e) {
        e.preventDefault();
        $(".lang-dropdown-active").slideToggle(900);
    });
    /*--- categories-button-active-2 ----*/
    $(".categories-button-active-2").on("click", function(e) {
        e.preventDefault();
        $(".categori-dropdown-active-small").slideToggle(900);
    });
    /*--- Mobile demo active ----*/
    var demo = $(".tm-demo-options-wrapper");
    $(".view-demo-btn-active").on("click", function(e) {
        e.preventDefault();
        demo.toggleClass("demo-open");
    });
    /*-----More Menu Open----*/
    $(".more_slide_open").slideUp();
    $(".more_categories").on("click", function() {
        $(this).toggleClass("show");
        $(".more_slide_open").slideToggle();
    });
    /* --- SwiperJS --- */

    $(".swiper-group-9").each(function() {
        var swiper_10_items = new Swiper(this, {
            spaceBetween: 20,
            slidesPerView: 9,
            slidesPerGroup: 2,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-9",
                prevEl: ".swiper-button-prev-group-9"
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1360: {
                    slidesPerView: 9
                },
                1199: {
                    slidesPerView: 7
                },
                800: {
                    slidesPerView: 5
                },
                390: {
                    slidesPerView: 4
                },
                250: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 15
                }
            }
        });
    });
    $(".swiper-group-7").each(function() {
        var swiper_10_items = new Swiper(this, {
            spaceBetween: 20,
            slidesPerView: 7,
            slidesPerGroup: 2,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-7",
                prevEl: ".swiper-button-prev-group-7"
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1360: {
                    slidesPerView: 7
                },
                1199: {
                    slidesPerView: 5
                },
                800: {
                    slidesPerView: 4
                },
                390: {
                    slidesPerView: 3
                },
                250: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 15
                }
            }
        });
    });
    $(".swiper-group-6").each(function() {
        var swiper_6_items = new Swiper(this, {
            spaceBetween: 30,
            slidesPerView: 6,
            slidesPerGroup: 2,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1360: {
                    slidesPerView: 6
                },
                1199: {
                    slidesPerView: 5
                },
                992: {
                    slidesPerView: 4
                },
                600: {
                    slidesPerView: 3
                },
                400: {
                    slidesPerView: 2
                },
                250: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 15
                }
            }
        });
    });
    $(".swiper-group-5").each(function() {
        var swiper_5_items = new Swiper(this, {
            spaceBetween: 15,
            slidesPerGroup: 3,
            slidesPerView: 5,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1199: {
                    slidesPerView: 5
                },
                800: {
                    slidesPerView: 3
                },
                475: {
                    slidesPerView: 2
                },
                350: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                },
                275: {
                    slidesPerView: 1
                }
            }
        });
    });
    $(".swiper-group-4-border").each(function() {
        var swiper_4_items_border = new Swiper(this, {
            spaceBetween: 30,
            slidesPerView: 4,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-border",
                prevEl: ".swiper-button-prev-border"
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1360: {
                    slidesPerView: 4
                },
                1199: {
                    slidesPerView: 3
                },
                600: {
                    slidesPerView: 2
                },
                350: {
                    slidesPerView: 1
                },
                150: {
                    slidesPerView: 1
                }
            }
        });
    });
    $(".swiper-group-4").each(function() {
        var swiper_3_items = new Swiper(this, {
            spaceBetween: 30,
            slidesPerView: 4,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-4",
                prevEl: ".swiper-button-prev-4"
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4
                },
                800: {
                    slidesPerView: 2
                },
                400: {
                    slidesPerView: 1
                },
                150: {
                    slidesPerView: 1
                }
            }
        });
    });
    $(".swiper-group-4-banner").each(function () {
        var swiper_3_items = new Swiper(this, {
            spaceBetween: 30,
            slidesPerView: 4,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-4",
                prevEl: ".swiper-button-prev-4"
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4
                },
                800: {
                    slidesPerView: 4
                },
                400: {
                    slidesPerView: 3
                },
                150: {
                    slidesPerView: 2
                }
            }
        });
    });
    $(".swiper-group-3").each(function() {
        var swiper_3_items = new Swiper(this, {
            spaceBetween: 30,
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3
                },
                800: {
                    slidesPerView: 2
                },
                400: {
                    slidesPerView: 1
                },
                250: {
                    slidesPerView: 1
                }
            }
        });
    });
    $(".swiper-group-3-explore").each(function () {
        var swiper_3_items = new Swiper(this, {
            spaceBetween: 30,
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3
                },
                600: {
                    slidesPerView: 3
                },
                350: {
                    slidesPerView: 2
                },
                250: {
                    slidesPerView: 1
                }
            }
        });
    });
    $(".swiper-group-2").each(function() {
        var swiper_2_items = new Swiper(this, {
            spaceBetween: 30,
            slidesPerView: 2,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1199: {
                    slidesPerView: 2
                },
                800: {
                    slidesPerView: 1
                },
                600: {
                    slidesPerView: 1
                },
                400: {
                    slidesPerView: 1
                },
                250: {
                    slidesPerView: 1
                }
            }
        });
    });

    $(".swiper-group-1").each(function() {
        var swiper_1_items = new Swiper(this, {
            spaceBetween: 30,
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-1",
                prevEl: ".swiper-button-prev-1"
            },
            autoplay: {
                delay: 10000
            }
        });
    });

    //Dropdown selected item
    $(".dropdown-menu li a").on("click", function(e) {
        e.preventDefault();
        $(this)
            .parents(".dropdown")
            .find(".btn span")
            .html($(this).text() + ' <span class="caret"></span>');
        $(this).parents(".dropdown").find(".btn").val($(this).data("value"));
    });
    $(".list-tags-job .remove-tags-job").on("click", function(e) {
        e.preventDefault();
        $(this).closest(".job-tag").remove();
    });
    // Video popup
    if ($(".popup-youtube").length) {
        $(".popup-youtube").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }
    // Init function billed
    checkBilled();
})(jQuery);
// Check billed
function checkBilled() {
    var checkBox = $("#cb_billed_type");
    var forMonth = $(".for-month");
    var forYear = $(".for-year");
    for (var i = 0; i < forMonth.length; i++) {
        if (checkBox.is(":checked")) {
            forYear.eq(i).addClass("display-year");
            forMonth.eq(i).removeClass("display-month");
        } else {
            forYear.eq(i).removeClass("display-year");
            forMonth.eq(i).addClass("display-month");
        }
    }
}
//Perfect Scrollbar
const ps = new PerfectScrollbar(".mobile-header-wrapper-inner");