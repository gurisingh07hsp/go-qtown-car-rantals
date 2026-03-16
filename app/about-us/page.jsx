import React from 'react'
import Loading from '../../components/Loading'
const page = () => {
  return (
    <div>

    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/animate.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/lc_lightbox.css"/>
    <link rel="stylesheet" type="text/css" href="css/feather.css"/>
    <link rel="stylesheet" type="text/css" href="css/owl.carousel.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/magnific-popup.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/swiper-bundle.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/bootstrap-datetimepicker.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <link rel="stylesheet" type="text/css" href="css/jquery.mCustomScrollbar.min.css"></link>

    <Loading/>

        {/* <div className="loading-area">
        <div className="loading-box"></div>
        <div className="loading-pic">
            <img className="loader-gif" src="images/loader-car.gif" alt="loader Image"/>
        </div>
    </div> */}

	<div className="page-wraper">
        {/* <header className="site-header header-style-1 mobile-sider-drawer-menu hdr-transparent">

            <div className="header-middle-wraper sticky-header ">     
                <div className="header-middle main-bar">
                    <div className="logo-header">
                        <div className="logo-header-inner logo-header-one">
                        </div>
                    </div>
                    
                    <div className="header-info-wraper">
                        <div className="main-bar-wraper  navbar-expand-lg">
            
                            <div className="header-bottom">
                                <div className="container-block clearfix">
    
                                    <div className="navigation-bar">
                                        <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggler collapsed">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar icon-bar-first"></span>
                                            <span className="icon-bar icon-bar-two"></span>
                                            <span className="icon-bar icon-bar-three"></span>
                                        </button> 
                                        <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-between">
                                    
                                            <ul className=" nav navbar-nav">
                                                <li className="has-child"><a href="javascript:;">Home</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="index.html">Home 1</a></li>
                                                        <li><a href="index-2.html">Home 2</a></li>
                                                    </ul>                                                                 
                                                </li>
                                                <li><a href="about-us.html">About</a></li>
                                                <li className="has-child">
                                                    <a href="javascript:;">Cars</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="cars.html">Cars</a></li>
                                                        <li><a href="cars-grid-1.html">Cars Grid 1</a></li>
                                                        <li><a href="cars-grid-2.html">Cars Grid 2</a></li>
                                                        <li><a href="cars-grid-3.html">Cars Grid 3</a></li>
                                                        <li><a href="cars-grid-4.html">Cars Grid 4</a></li> 
                                                        <li><a href="cars-detail.html">Cars Detail</a></li>                                              
                                                    </ul>                                
                                                </li>
                                                <li><a href="service.html">Services</a></li>
                                                <li className="has-child">
                                                    <a href="javascript:;">Pages</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="dealer-list.html">Dealers</a></li>
                                                        <li><a href="error-404.html">Error 404 </a></li>
                                                        <li><a href="faq.html">Faq</a></li>
                                                        <li><a href="gallery.html">Gallery</a></li>
                                                        <li><a href="plans.html">Plans</a></li> 
                                                        <li><a href="team.html">Team</a></li>
                                                        <li><a href="team-detail.html">Team Detail</a></li>
                                                        <li><a href="testimonial.html">Testimonials</a></li>                                             
                                                    </ul>                           
                                                </li>
                                                <li className="has-child">
                                                    <a href="javascript:;">Blog</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="blog-grid.html">Blog Grid</a></li>
                                                        <li><a href="blog-list.html">Blog List</a></li>
                                                        <li><a href="blog-detail.html">Blog Detail</a></li>
                                                    </ul>                           
                                                </li>
                                                <li><a href="contact-us.html">Contact</a></li>  
                                            </ul>
                
                                        </div>
                                    </div>
                                    
                                </div>   
                            </div>

                        </div>
                        
                    </div>
                    <div className="extra-nav header-1-nav">
                        <div className="extra-cell one">
                            <ul className="wt-topbar-left-info">
                                <li>
                                    <a href="tel:+712021022525">
                                        <span><i className="feather feather-mail"></i></span>+71 202 102 2525
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:someone@example.com">
                                        <span><i className="feather feather-phone-call"></i></span>carntelinfo@gmail.com
                                    </a>
                                </li>
                            </ul>   
                        </div>
                                                        
                    </div>
                    
                </div>
            </div>
            
        </header> */}
        <div className="page-content">
            <div className="wt-bnr-inr site-bg-dark  twm-primary-overlay-wrap url(images/banner/banner-10.jpg)">
                <div className="twm-primary-overlay"></div>
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                    	<div className="banner-title-outer">
                        	<div className="banner-title-name">
                        		<h2 className="wt-title">About us</h2>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
            <div className="section-full p-t150 p-b120 site-bg-white twm-w-range-section-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
                <div className="container">
                    <div className="section-head center ">
                        <div className="twm-sm-title left">Find your car by car brand</div>
                        <h2 className="twm-large-title site-text-dark">Wide Range Of Commercial 
                            And Luxury Cars
                        </h2>
                    </div>

                    <div className="section-content">
                        <div className="row twm-w-range-section">
                      
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="twm-cntr-with-icon">
                                    <div className="icon-media">
                                        <img src="images/icons/rental.png" alt=""/>
                                    </div>
                                    <span className="counter">4500</span> <em className="symble">+</em>
                                    <h3 className="icon-content-info">Client Served</h3>
                                </div> 
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="twm-cntr-with-icon">
                                    <div className="icon-media">
                                        <img src="images/icons/man.png" alt=""/>
                                    </div>
                                    <span className="counter">2750</span> <em className="symble">+</em>
                                    <h3 className="icon-content-info">Happy Customers</h3>
                                </div> 
                            </div>

                           
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="twm-cntr-with-icon">
                                    <div className="icon-media">
                                        <img src="images/icons/car-insurance.png" alt=""/>
                                    </div>
                                    <span className="counter">600</span> <em className="symble">+</em>
                                    <h3 className="icon-content-info">Vehicle In Stock Cars</h3>
                                </div> 
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="twm-cntr-with-icon">
                                    <div className="icon-media">
                                        <img src="images/icons/work-time.png" alt=""/>
                                    </div>
                                    <span className="counter">12</span> <em className="symble">+</em>
                                    <h3 className="icon-content-info">Years Experience</h3>
                                </div> 
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <div className="section-full site-bg-light twm-how-it-work-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
                 <div className="section-content">

                    <div className="twm-how-it-work-section container-fluid">
                        <div className="row">
                        
                            <div className="col-lg-6 col-md-12">
                               <div className="twm-how-it-work-media">
                                   <img src="images/h-it-work.jpg" alt="#"/>
                               </div> 
                            </div>
    
                            <div className="col-lg-6 col-md-12">

                                <div className="twm-how-it-work-content">
                                    <div className="section-head left">
                                        <div className="twm-sm-title left">How It Work</div>
                                        <h2 className="twm-large-title site-text-dark">Following Working Steps</h2>
                                    </div>
                                    <div className="row">

                                        <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                            <div className="twm-w-steps-st2">
                                                <div className="twm-w-step-count">
                                                    <span>01</span>
                                                </div>
                                                <div className="twm-w-step-detail">
                                                    <h3 className="twm-title">Choose A Car</h3>
                                                    <p>Check out our range of cars and choose the car of your choice </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                            <div className="twm-w-steps-st2">
                                                <div className="twm-w-step-count">
                                                    <span>02</span>
                                                </div>
                                                <div className="twm-w-step-detail">
                                                    <h3 className="twm-title">Pick Up Date</h3>
                                                    <p>Check out our range of cars and choose the car of your choice </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                            <div className="twm-w-steps-st2">
                                                <div className="twm-w-step-count">
                                                    <span>03</span>
                                                </div>
                                                <div className="twm-w-step-detail">
                                                    <h3 className="twm-title">Confirm Your Booking</h3>
                                                    <p>Confirm booking information related to your car </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                            <div className="twm-w-steps-st2">
                                                <div className="twm-w-step-count">
                                                    <span>04</span>
                                                </div>
                                                <div className="twm-w-step-detail">
                                                    <h3 className="twm-title">Enjoy Driving</h3>
                                                    <p>After confirmation, get the car keys and enjoy your car</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>
                     
    
                        </div>
                    </div>
                    

                </div>

                
            </div>
            <div className="section-full p-t150 p-b120 site-bg-white twm-testimonial-section-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                         
                            <div className="section-head left ">
                                <div className="twm-sm-title left">Testimonial</div>
                                <h2 className="twm-large-title site-text-dark">What Our Customers Say</h2>
                            </div>
                         
                        </div>
                    </div>

                    <div className="section-content">

                        <div className="owl-carousel twm-team-carousel next-prev-top-right m-b30">
                          
                            <div className="item">
                                <div className="twm-team-section">
                                    <div className="twm-team-info">
                                        <a className="twm-l-title" href="team-detail.html">
                                            <h2 className="twm-title">Kevin Martin</h2>
                                        </a>
                                        <div className="twm-s-title">Sales Consultant</div>
                                    </div>
                                    <div className="twm-team-media">
                                        <a href="team-detail.html">
                                            <img  src="images/team/1.jpg" alt="#"/>
                                        </a>
                                        <div className="twm-team-social">
                                            <ul>
                                                <li>
                                                    <a href="https://www.x.com">
                                                        <i className="fa-brands fa-x-twitter"></i>
                                                        <span>X</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com">
                                                        <i className="feather feather-facebook"></i>
                                                        <span>Facebook</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com">
                                                        <i className="feather feather-instagram"></i>
                                                        <span>Instagram</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.pinterest.com/">
                                                        <i className="fa-brands fa-pinterest-p"></i>
                                                        <span>Pinterest</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="item">
                                <div className="twm-team-section">
                                    <div className="twm-team-info">
                                        <a className="twm-l-title" href="team-detail.html">
                                            <h2 className="twm-title">Olivia</h2>
                                        </a>
                                        <div className="twm-s-title">Sales Consultant</div>
                                    </div>
                                    <div className="twm-team-media">
                                        <a href="team-detail.html">
                                            <img  src="images/team/2.jpg" alt="#"/>
                                        </a>
                                        <div className="twm-team-social">
                                            <ul>
                                                <li>
                                                    <a href="https://www.x.com">
                                                        <i className="fa-brands fa-x-twitter"></i>
                                                        <span>X</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com">
                                                        <i className="feather feather-facebook"></i>
                                                        <span>Facebook</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com">
                                                        <i className="feather feather-instagram"></i>
                                                        <span>Instagram</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.pinterest.com/">
                                                        <i className="fa-brands fa-pinterest-p"></i>
                                                        <span>Pinterest</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="item">
                                <div className="twm-team-section">
                                    <div className="twm-team-info">
                                        <a className="twm-l-title" href="team-detail.html">
                                            <h2 className="twm-title">William</h2>
                                        </a>
                                        <div className="twm-s-title">Sales Consultant</div>
                                    </div>
                                    <div className="twm-team-media">
                                        <a href="team-detail.html">
                                            <img  src="images/team/3.jpg" alt="#"/>
                                        </a>
                                        <div className="twm-team-social">
                                            <ul>
                                                <li>
                                                    <a href="https://www.x.com">
                                                        <i className="fa-brands fa-x-twitter"></i>
                                                        <span>X</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com">
                                                        <i className="feather feather-facebook"></i>
                                                        <span>Facebook</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com">
                                                        <i className="feather feather-instagram"></i>
                                                        <span>Instagram</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.pinterest.com/">
                                                        <i className="fa-brands fa-pinterest-p"></i>
                                                        <span>Pinterest</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="item">
                                <div className="twm-team-section">
                                    <div className="twm-team-info">
                                        <a className="twm-l-title" href="team-detail.html">
                                            <h2 className="twm-title">George</h2>
                                        </a>
                                        <div className="twm-s-title">Sales Consultant</div>
                                    </div>
                                    <div className="twm-team-media">
                                        <a href="team-detail.html">
                                            <img  src="images/team/4.jpg" alt="#"/>
                                        </a>
                                        <div className="twm-team-social">
                                            <ul>
                                                <li>
                                                    <a href="https://www.x.com">
                                                        <i className="fa-brands fa-x-twitter"></i>
                                                        <span>X</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com">
                                                        <i className="feather feather-facebook"></i>
                                                        <span>Facebook</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com">
                                                        <i className="feather feather-instagram"></i>
                                                        <span>Instagram</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.pinterest.com/">
                                                        <i className="fa-brands fa-pinterest-p"></i>
                                                        <span>Pinterest</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         
                            <div className="item">
                                <div className="twm-team-section">
                                    <div className="twm-team-info">
                                        <a className="twm-l-title" href="team-detail.html">
                                            <h2 className="twm-title">Dylan</h2>
                                        </a>
                                        <div className="twm-s-title">Sales Consultant</div>
                                    </div>
                                    <div className="twm-team-media">
                                        <a href="team-detail.html">
                                            <img  src="images/team/5.jpg" alt="#"/>
                                        </a>
                                        <div className="twm-team-social">
                                            <ul>
                                                <li>
                                                    <a href="https://www.x.com">
                                                        <i className="fa-brands fa-x-twitter"></i>
                                                        <span>X</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com">
                                                        <i className="feather feather-facebook"></i>
                                                        <span>Facebook</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com">
                                                        <i className="feather feather-instagram"></i>
                                                        <span>Instagram</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.pinterest.com/">
                                                        <i className="fa-brands fa-pinterest-p"></i>
                                                        <span>Pinterest</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="item">
                                <div className="twm-team-section">
                                    <div className="twm-team-info">
                                        <a className="twm-l-title" href="team-detail.html">
                                            <h2 className="twm-title">Antonio</h2>
                                        </a>
                                        <div className="twm-s-title">Sales Consultant</div>
                                    </div>
                                    <div className="twm-team-media">
                                        <a href="team-detail.html">
                                            <img  src="images/team/6.jpg" alt="#"/>
                                        </a>
                                        <div className="twm-team-social">
                                            <ul>
                                                <li>
                                                    <a href="https://www.x.com">
                                                        <i className="fa-brands fa-x-twitter"></i>
                                                        <span>X</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com">
                                                        <i className="feather feather-facebook"></i>
                                                        <span>Facebook</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com">
                                                        <i className="feather feather-instagram"></i>
                                                        <span>Instagram</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.pinterest.com/">
                                                        <i className="fa-brands fa-pinterest-p"></i>
                                                        <span>Pinterest</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         
                            <div className="item">
                                <div className="twm-team-section">
                                    <div className="twm-team-info">
                                        <a className="twm-l-title" href="team-detail.html">
                                            <h2 className="twm-title">Alexei</h2>
                                        </a>
                                        <div className="twm-s-title">Sales Consultant</div>
                                    </div>
                                    <div className="twm-team-media">
                                        <a href="team-detail.html">
                                            <img  src="images/team/7.jpg" alt="#"/>
                                        </a>
                                        <div className="twm-team-social">
                                            <ul>
                                                <li>
                                                    <a href="https://www.x.com">
                                                        <i className="fa-brands fa-x-twitter"></i>
                                                        <span>X</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com">
                                                        <i className="feather feather-facebook"></i>
                                                        <span>Facebook</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com">
                                                        <i className="feather feather-instagram"></i>
                                                        <span>Instagram</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.pinterest.com/">
                                                        <i className="fa-brands fa-pinterest-p"></i>
                                                        <span>Pinterest</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="twm-team-section">
                                    <div className="twm-team-info">
                                        <a className="twm-l-title" href="team-detail.html">
                                            <h2 className="twm-title">Brayden</h2>
                                        </a>
                                        <div className="twm-s-title">Sales Consultant</div>
                                    </div>
                                    <div className="twm-team-media">
                                        <a href="team-detail.html">
                                            <img  src="images/team/8.jpg" alt="#"/>
                                        </a>
                                        <div className="twm-team-social">
                                            <ul>
                                                <li>
                                                    <a href="https://www.x.com">
                                                        <i className="fa-brands fa-x-twitter"></i>
                                                        <span>X</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com">
                                                        <i className="feather feather-facebook"></i>
                                                        <span>Facebook</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com">
                                                        <i className="feather feather-instagram"></i>
                                                        <span>Instagram</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.pinterest.com/">
                                                        <i className="fa-brands fa-pinterest-p"></i>
                                                        <span>Pinterest</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="section-full p-t150  p-b120 site-bg-dark twm-testimonial-section-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="section-head left ">
                                <div className="twm-sm-title left">Testimonial</div>
                                <h2 className="twm-large-title site-text-white">What Our Customers Say</h2>
                            </div>
                        </div>
                    </div>

                    <div className="section-content">
                        <div className="owl-carousel twm-blog-carousel next-prev-top-right m-b30">
                            <div className="item">
                                <div className="twm-testimonial2 drk-view">
                                    <div className="twm-testimonial-head">
                                        <div className="media-pic">
                                            <img src="images/testimonial/pic1.jpg" alt="Image"/>
                                        </div>
                                        <div className="twm-author-detail">
                                            <h3 className="twm-title">Kevin Martin</h3>
                                            <div className="twm-position">Customer</div>
                                        </div>
                                    </div>
                                    
                                    <div className="twm-testimonial-detail">
                                        <p>I Was Very Impresed Lorem posuere in miss and drana 
                                            en the nisan semere sceriun amiss etiam ornare in 
                                            the miss drana is lorem fermen mauris.
                                        </p>
                                        <div className="twm-rating-wrap">
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                        </div> 
                                    </div>
                                        
                                    <div className="twm-quote-icon">
                                        <img src="images/quote.png" alt="#"/>
                                    </div>
                                    
                                </div> 
                            </div>

                            <div className="item">
                                <div className="twm-testimonial2 drk-view">
                                    <div className="twm-testimonial-head">
                                        <div className="media-pic">
                                            <img src="images/testimonial/pic2.jpg" alt="Image"/>
                                        </div>
                                        <div className="twm-author-detail">
                                            <h3 className="twm-title">Devid Cullen</h3>
                                            <div className="twm-position">Customer</div>
                                        </div>
                                    </div>
                                    
                                    <div className="twm-testimonial-detail">
                                        <p>I Was Very Impresed Lorem posuere in miss and drana 
                                            en the nisan semere sceriun amiss etiam ornare in 
                                            the miss drana is lorem fermen mauris.
                                        </p>
                                        <div className="twm-rating-wrap">
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                        </div> 
                                    </div>
                                        
                                    <div className="twm-quote-icon">
                                        <img src="images/quote.png" alt="#"/>
                                    </div>
                                    
                                </div> 
                            </div>

                            <div className="item">
                                <div className="twm-testimonial2 drk-view">
                                    <div className="twm-testimonial-head">
                                        <div className="media-pic">
                                            <img src="images/testimonial/pic3.jpg" alt="Image"/>
                                        </div>
                                        <div className="twm-author-detail">
                                            <h3 className="twm-title">Piter Has</h3>
                                            <div className="twm-position">Customer</div>
                                        </div>
                                    </div>
                                    
                                    <div className="twm-testimonial-detail">
                                        <p>I Was Very Impresed Lorem posuere in miss and drana 
                                            en the nisan semere sceriun amiss etiam ornare in 
                                            the miss drana is lorem fermen mauris.
                                        </p>
                                        <div className="twm-rating-wrap">
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                        </div> 
                                    </div>
                                        
                                    <div className="twm-quote-icon">
                                        <img src="images/quote.png" alt="#"/>
                                    </div>
                                    
                                </div> 
                            </div>

                            <div className="item">
                                <div className="twm-testimonial2 drk-view">
                                    <div className="twm-testimonial-head">
                                        <div className="media-pic">
                                            <img src="images/testimonial/pic1.jpg" alt="Image"/>
                                        </div>
                                        <div className="twm-author-detail">
                                            <h3 className="twm-title">Kevin Martin</h3>
                                            <div className="twm-position">Customer</div>
                                        </div>
                                    </div>
                                    
                                    <div className="twm-testimonial-detail">
                                        <p>I Was Very Impresed Lorem posuere in miss and drana 
                                            en the nisan semere sceriun amiss etiam ornare in 
                                            the miss drana is lorem fermen mauris.
                                        </p>
                                        <div className="twm-rating-wrap">
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                        </div> 
                                    </div>
                                        
                                    <div className="twm-quote-icon">
                                        <img src="images/quote.png" alt="#"/>
                                    </div>
                                    
                                </div> 
                            </div>

                            <div className="item">
                                <div className="twm-testimonial2 drk-view">
                                    <div className="twm-testimonial-head">
                                        <div className="media-pic">
                                            <img src="images/testimonial/pic2.jpg" alt="Image"/>
                                        </div>
                                        <div className="twm-author-detail">
                                            <h3 className="twm-title">Devid Cullen</h3>
                                            <div className="twm-position">Customer</div>
                                        </div>
                                    </div>
                                    
                                    <div className="twm-testimonial-detail">
                                        <p>I Was Very Impresed Lorem posuere in miss and drana 
                                            en the nisan semere sceriun amiss etiam ornare in 
                                            the miss drana is lorem fermen mauris.
                                        </p>
                                        <div className="twm-rating-wrap">
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                        </div> 
                                    </div>
                                        
                                    <div className="twm-quote-icon">
                                        <img src="images/quote.png" alt="#"/>
                                    </div>
                                    
                                </div> 
                            </div>

                            
                            <div className="item">
                                <div className="twm-testimonial2 drk-view">
                                    <div className="twm-testimonial-head">
                                        <div className="media-pic">
                                            <img src="images/testimonial/pic3.jpg" alt="Image"/>
                                        </div>
                                        <div className="twm-author-detail">
                                            <h3 className="twm-title">Piter Has</h3>
                                            <div className="twm-position">Customer</div>
                                        </div>
                                    </div>
                                    
                                    <div className="twm-testimonial-detail">
                                        <p>I Was Very Impresed Lorem posuere in miss and drana 
                                            en the nisan semere sceriun amiss etiam ornare in 
                                            the miss drana is lorem fermen mauris.
                                        </p>
                                        <div className="twm-rating-wrap">
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                        </div> 
                                    </div>
                                        
                                    <div className="twm-quote-icon">
                                        <img src="images/quote.png" alt="#"/>
                                    </div>
                                    
                                </div> 
                            </div>

                        </div>
                    </div>

                </div>
            </div>
     
            <div className="section-full site-bg-light twm-abus-section-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className=" twm-abus-st2-section">
                        
                            <div className="section-head left">
                                <div className="twm-sm-title left">About Us</div>
                                <h2 className="twm-large-title site-text-dark">
                                    We Have Many Provided 
                                    Assistance To People And 
                                    Companies In This Field
                                </h2>
                                <div className="section-head-detail">
                                    I must explain to you how all this mistaken idea of denouncing pleasure 
                                    and praising pain was born and I will give you a complete account of the 
                                    system, and expound the actual teachings of the great explorer of the 
                                    truth, the master-builder of human happiness. No one rejects, dislikes, 
                                    or avoids pleasure itself, because it is pleasure,
                                </div>
                            </div>
                          
                            <div className="twm-inline-list2">
                                <ul>
                                    <li>All Type Vehicle Available</li>
                                    <li>You Get 24/7 Roadside Assistance</li>
                                    <li>We Are The UK’s Largest Provider</li>
                                </ul>
                            </div>
                            <div className="twm-btn-left">
                                <a href="about-us.html" className="site-button">
                                    <em>Read More</em>
                                </a>
                            </div>
                            <div className="twm-abus2-left">
                                <div className="twm-abus-video">
                                    <a href="https://vimeo.com/337649532" className="mfp-video ">
                                        <i className="icon fa fa-play"></i>
                                    </a>
                                </div>
                                <div className="twm-abus2-year-section">
                                    <div className="tem-abus-year-content">
                                        <span>Since</span>
                                        <h2 className="year-title">2016</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 twm-abus2-right-pic url(images/ab-us.jpg) ">
                        <div className="abus2-right-pic">
                            <h2 className="twm-title">For Rental</h2>
                        </div>
                    </div>
                    
                </div>
            </div>
          
            

        </div>
     
        <footer className="footer-dark">
            <div className="container">
                
                <div className="footer-top">
                    <div className="row">

                        <div className="col-xl-4 col-lg-4">
                            
                            <div className="widget widget_about">
                                <div className="logo-footer clearfix">
                                    <a href="index.html"><img src="images/logo-f.png" alt="Image"/></a>
                                </div>
                                <div className="f-about-info">
                                    We offer a range of the finest and most premium cars and bikes on rent.
                                </div>
                                <ul className="ftr-list">
                                    <li><i className="feather feather-phone-call"></i><a href="tel:1236540214">123 654 0214</a></li>
                                    <li><i className="feather feather-mail"></i>carntelinfo@gmail.com</li>
                                    <li><i className="feather feather-home"></i>55/11 ronin tower New York</li>
                                </ul>
                                <div className="twm-social">
                                    <ul>
                                        <li><a href="https://www.facebook.com"><i className="fa-brands fa-x-twitter"></i></a></li>
                                        <li><a href="https://www.x.com"><i className="feather feather-facebook"></i></a></li>
                                        <li><a href="https://www.instagram.com"><i className="feather feather-instagram"></i></a></li>
                                        <li><a href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>                            
                            
                        </div> 

                        <div className="col-xl-8 col-lg-8">
                            <div className="ftr-right-section">
                                
                                <div className="row">
                                    <div className="col-lg-5 col-md-6 col-6 m-b20">
                                        
                                        <div className="widget widget_time-duraion">
                                            <h3 className="widget-title">Quick Links</h3>
                                            <ul>
                                                <li><span>Monday - Friday:</span>09:00 AM - 09:00 PM</li>
                                                <li><span>Saturday:</span>09:00 AM - 07:00PM </li>
                                                <li><span>Sunday:</span>Closed </li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                    <div className="col-lg-3 col-md-6 col-6 m-b20">
                                        
                                        <div className="widget widget_services">
                                            <h3 className="widget-title">Quick Links</h3>
                                            <ul>
                                                <li><a href="about-us.html">About us</a></li>
                                                <li><a href="faq.html">FAQ’s</a></li>
                                                <li><a href="service.html">Services</a></li>
                                                <li><a href="team.html">Team</a></li>
                                                <li><a href="contact-us.html">Contact</a></li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                    <div className="col-lg-4 col-md-12 col-sm-12 m-b20">
                                        
                                        <div className="widget widget_services">
                                            <h3 className="widget-title">Vehicles Type</h3>
                                            <ul className="gris-2-column">
                                                <li><a href="cars-detail.html">SUVs</a></li>
                                                <li><a href="cars-detail.html">Sport Coupe</a></li>
                                                <li><a href="cars-detail.html">Convertible</a></li>
                                                <li><a href="cars-detail.html">Wagon</a></li>
                                                <li><a href="cars-detail.html">Sedan</a></li>
                                                <li><a href="cars-detail.html">Yamaha R15</a></li>
                                                <li><a href="cars-detail.html">BMW S 1000 RR</a></li>
                                                <li><a href="cars-detail.html">Kawasaki</a></li>
                                                <li><a href="cars-detail.html">Hayabusa</a></li>
                                                <li><a href="cars-detail.html">Harley Davidson</a></li>
                                            </ul>
                                        </div>
                                        
                                    </div>
    
                                </div> 

                                <div className="twm-subscribe-nl">
                                    <div className="twm-nl-title">
                                        Subscribe To Our Newsletter Today! 
                                    </div>
                                    <div className="twm-nl-section">
                                        <form>
                                            <div className="ftr-nw-form">
                                                <input name="news-letter" className="form-control" placeholder="Email address..." type="text"/>
                                                <button className="ftr-nw-subcribe-btn"><i className="feather feather-arrow-up-right"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
         
            <div className="footer-bottom">
                <div className="footer-bottom-info">
                    <div className="footer-copy-right">
                        <span className="copyrights-text">© 2024<span className="site-text-primary">Carntel</span> All  rights reserved.</span>
                    </div>
                </div>
            </div>
    
        </footer>
		<button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate"></span></button>

 	</div>



<script src="js/jquery-3.7.1.min.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/magnific-popup.min.js"></script>
<script src="js/waypoints.min.js"></script>
<script src="js/waypoints-sticky.min.js"></script>
<script src="js/counterup.min.js"></script>
<script src="js/isotope.pkgd.min.js"></script>
<script src="js/imagesloaded.pkgd.min.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/theia-sticky-sidebar.js"></script>
<script src="js/lc_lightbox.lite.js" ></script>
<script src="js/swiper-bundle.min.js"></script>
<script src="js/wow.min.js"></script>
<script src="js/custom.js"></script>
<script src="js/tickerNews.min.js"></script>
<script src="js/moment.min.js"></script>
<script src="js/bootstrap-datetimepicker.min.js"></script>
<script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
    </div>
  )
}

export default page
