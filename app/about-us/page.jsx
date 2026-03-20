import React from 'react'
import Loading from '../../components/Loading'
import '../../public/css/animate.min.css'
import '../../public/css/feather.css'
import '../../public/css/lc_lightbox.css'
import '../../public/css/font-awesome.min.css'
import '../../public/css/magnific-popup.min.css'
import '../../public/css/bootstrap.min.css'
import '../../public/css/style.css'
const page = () => {
  return (
    <div>
    <link rel="stylesheet" type="text/css" href="css/owl.carousel.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/swiper-bundle.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/bootstrap-datetimepicker.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/jquery.mCustomScrollbar.min.css"></link>

    {/* <Loading/> */}

	<div className="page-wraper">
        <div className="page-content">
            <div className="wt-bnr-inr site-bg-dark  twm-primary-overlay-wrap bg-[url('/images/banner/heroImageOfEveryPage.jpg')]">
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
            {/* <div className="section-full p-t150 p-b120 site-bg-white twm-testimonial-section-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
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
            </div> */}
            {/* <div className="section-full p-t150  p-b120 site-bg-dark twm-testimonial-section-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
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
            </div> */}
     
            <div className="section-full site-bg-light twm-abus-section-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className=" twm-abus-st2-section">
                        
                            <div className="section-head left">
                                <div className="twm-sm-title left">About Us</div>
                                <h2 className="twm-large-title site-text-dark">
                                    About Go Queenstown Car Rentals
                                </h2>
                                <div className="section-head-detail">
                                    <p>Go Queenstown Car Rentals was created to make car rentals simple, reliable, and affordable for travelers visiting Queenstown</p>
                                    <p>We understand that many visitors want the freedom to explore New Zealand at their own pace. Having the right vehicle makes that journey easier and more enjoyable.</p>
                                    <p>Our fleet includes reliable vehicles from trusted brands such as Toyota,suzuki ,  Subaru, and Mitsubishi. These vehicles are comfortable, easy to drive, and perfect for road trips across New Zealand.</p>
                                </div>
                            </div>
                          
                            <div className="twm-inline-list2">
                                <ul>
                                    <li>Reliable vehicles</li>
                                    <li>Transparent pricing</li>
                                    <li>Easy online booking</li>
                                    <li>Friendly customer service</li>
                                </ul>
                            </div>
                            <div>
                                <p>Whether you are visiting Queenstown for a holiday, a family trip, or an adventure tour, we aim to make your travel experience smooth and stress-free.</p>
                            </div>
                            {/* <div className="twm-btn-left">
                                <a href="about-us.html" className="site-button">
                                    <em>Read More</em>
                                </a>
                            </div> */}
                            <div className="twm-abus2-left">
                                <div className="twm-abus-video">
                                    <a href="https://vimeo.com/337649532" className="mfp-video ">
                                        <i className="icon fa fa-play"></i>
                                    </a>
                                </div>
                                {/* <div className="twm-abus2-year-section">
                                    <div className="tem-abus-year-content">
                                        <span>Since</span>
                                        <h2 className="year-title">2016</h2>
                                    </div>
                                </div> */}
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
