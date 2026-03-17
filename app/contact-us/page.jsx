import React from 'react'
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
	<div className="page-wraper">

        <div className="page-content">
            <div className="wt-bnr-inr site-bg-dark  twm-primary-overlay-wrap bg-[url('/images/banner/banner-12.jpg')]">
                <div className="twm-primary-overlay"></div>
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                    	<div className="banner-title-outer">
                        	<div className="banner-title-name">
                        		<h2 className="wt-title">Contact Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
           <div className="section-full p-t150 p-b120 site-bg-white twm-contact-section-wrap">

                <div className="container">

                    <div className="section-content">
                        <div className="twm-contact-section">
                            <div className="row">
                                
                                <div className="col-xl-7 col-lg-6 col-md-12">
                                    <div className="twm-maskingtext m-b50">
                                        <h1>Get In Touch</h1>
                                        <img src="images/text-masking-pic.jpg" alt="Image"/>
                                    </div>
                                    <div className="twm-get-info-wrap">

                                        <ul>

                                            <li>
                                                <div className="twm-get-info">
                                                    <div className="twm-media">
                                                        <i className="feather feather-phone-call"></i>
                                                    </div>
                                                    <div className="twm-content">
                                                        <p>Phone</p>
                                                        <h3 className="twm-title"><a href="tel:456-789-1012">456 789 1012</a></h3>
                                                    </div>
                                                </div>
                                            </li>
            
                                            <li>
                                                <div className="twm-get-info">
                                                    <div className="twm-media">
                                                        <i className="feather feather-mail"></i>
                                                    </div>
                                                    <div className="twm-content">
                                                        <p>Email</p>
                                                        <h3 className="twm-title">carntelinfo@gmail.com</h3>
                                                    </div>
                                                </div>
                                            </li>
            
                                            <li>
                                                <div className="twm-get-info">
                                                    <div className="twm-media">
                                                        <i className="feather feather-home"></i>
                                                    </div>
                                                    <div className="twm-content">
                                                        <p>Address</p>
                                                        <h3 className="twm-title">55/11 ronin tower New York</h3>
                                                    </div>
                                                </div>
                                            </li>
            
                                        </ul>

                                        <div className="twm-social">
                                            <h3 className="twm-title">Follow Us</h3>
                                            <ul>
                                                <li><a href="https://www.facebook.com"><i className="fa-brands fa-x-twitter"></i></a></li>
                                                <li><a href="https://www.x.com"><i className="feather feather-facebook"></i></a></li>
                                                <li><a href="https://www.instagram.com"><i className="feather feather-instagram"></i></a></li>
                                                <li><a href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-5 col-lg-6 col-md-12">
                                    <div className="twm-contact-page-detail">
                                     
                                        <div className="section-head left ">
                                            <h2 className="twm-large-title">Contact Form</h2>
                                            <p className="p-text">Enter your details. And you can feel free to contact 
                                                us for any kind of information.
                                            </p>
                                        </div>
                

                                        <div className="twm-contact-page-form">
                                        
        
                                            <div className="contact-form-outer">
                                                <form className="cons-contact-form" method="post" action="phpmailer/mail.php">
                                        
                                                    <div className="row">
                
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="form-group mb-4">
                                                                <input name="username" type="text" required="" className="form-control" placeholder="First Name"/>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="form-group mb-4">
                                                                <input name="username" type="text" required="" className="form-control" placeholder="Last Name"/>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="form-group mb-4">
                                                            <input name="email" type="text" className="form-control" required="" placeholder="Email"/>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="form-group mb-4">
                                                                <input name="phone" type="text" className="form-control" required="" placeholder="Phone"/>
                                                            </div>
                                                        </div>
                                                        
                                                       
                                                        <div className="col-lg-12">
                                                            <div className="form-group mb-5">
                                                            <textarea name="message" className="form-control" rows="3" placeholder="Message"></textarea>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="col-md-12">
                                                            <button type="submit" className="site-button dark-bg"><em>Submit Now</em></button>
                                                        </div>
                                                        
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                        

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                
            </div>   
          

            <div className="gmap-outline">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6309.495304446196!2d-122.43885472228101!3d37.74906395235639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e12a1d66d03%3A0xb8c905ae4e81369b!2sQ-Architecture!5e0!3m2!1sen!2sin!4v1623689156327!5m2!1sen!2sin"  style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div> 

            <div className="section-full p-b120">
                <div className="container">
                    <div className="section-content">
                        <div className="twm-get-info-section">
                            <div className="row">
                                
                                <div className="col-lg-4 col-md-6">
                                    <div className="twm-get-info-wrap st02-small">
                                        <h3 className="wm-h-title">San Francisco</h3>
                                        <ul>
            
                                            <li>
                                                <div className="twm-get-info">
                                                    <div className="twm-media">
                                                        <i className="feather feather-phone-call"></i>
                                                    </div>
                                                    <div className="twm-content">
                                                        <p>Phone</p>
                                                        <h3 className="twm-title"><a href="tel:456-789-1012">456 789 1012</a></h3>
                                                    </div>
                                                </div>
                                            </li>
            
                                            <li>
                                                <div className="twm-get-info">
                                                    <div className="twm-media">
                                                        <i className="feather feather-mail"></i>
                                                    </div>
                                                    <div className="twm-content">
                                                        <p>Email</p>
                                                        <h3 className="twm-title">carntelinfo@gmail.com</h3>
                                                    </div>
                                                </div>
                                            </li>
            
                                            <li>
                                                <div className="twm-get-info">
                                                    <div className="twm-media">
                                                        <i className="feather feather-home"></i>
                                                    </div>
                                                    <div className="twm-content">
                                                        <p>Address</p>
                                                        <h3 className="twm-title">329 Queensberry Street San 
                                                            Francisco</h3>
                                                    </div>
                                                </div>
                                            </li>
            
                                        </ul>
                                    </div>
                                </div>
    
                                <div className="col-lg-4 col-md-6">
                                    <div className="twm-get-info-wrap st02-small">
                                        <h3 className="wm-h-title">London</h3>
                                        <ul>
            
                                            <li>
                                                <div className="twm-get-info">
                                                    <div className="twm-media">
                                                        <i className="feather feather-phone-call"></i>
                                                    </div>
                                                    <div className="twm-content">
                                                        <p>Phone</p>
                                                        <h3 className="twm-title"><a href="tel:456-789-1012">456 789 1012</a></h3>
                                                    </div>
                                                </div>
                                            </li>
            
                                            <li>
                                                <div className="twm-get-info">
                                                    <div className="twm-media">
                                                        <i className="feather feather-mail"></i>
                                                    </div>
                                                    <div className="twm-content">
                                                        <p>Email</p>
                                                        <h3 className="twm-title">carntelinfo@gmail.com</h3>
                                                    </div>
                                                </div>
                                            </li>
            
                                            <li>
                                                <div className="twm-get-info">
                                                    <div className="twm-media">
                                                        <i className="feather feather-home"></i>
                                                    </div>
                                                    <div className="twm-content">
                                                        <p>Address</p>
                                                        <h3 className="twm-title">25 Gordon Ave, London, ON N6J 2V8</h3>
                                                    </div>
                                                </div>
                                            </li>
            
                                        </ul>
                                    </div>
                                </div>
    
                                <div className="col-lg-4 col-md-6">
                                    <div className="twm-get-info-wrap st02-small">
                                        <h3 className="wm-h-title">Chicago</h3>
                                        <ul>
            
                                            <li>
                                                <div className="twm-get-info">
                                                    <div className="twm-media">
                                                        <i className="feather feather-phone-call"></i>
                                                    </div>
                                                    <div className="twm-content">
                                                        <p>Phone</p>
                                                        <h3 className="twm-title"><a href="tel:456-789-1012">456 789 1012</a></h3>
                                                    </div>
                                                </div>
                                            </li>
            
                                            <li>
                                                <div className="twm-get-info">
                                                    <div className="twm-media">
                                                        <i className="feather feather-mail"></i>
                                                    </div>
                                                    <div className="twm-content">
                                                        <p>Email</p>
                                                        <h3 className="twm-title">carntelinfo@gmail.com</h3>
                                                    </div>
                                                </div>
                                            </li>
            
                                            <li>
                                                <div className="twm-get-info">
                                                    <div className="twm-media">
                                                        <i className="feather feather-home"></i>
                                                    </div>
                                                    <div className="twm-content">
                                                        <p>Address</p>
                                                        <h3 className="twm-title">853 W Blackhawk St, Chicago, IL 60642</h3>
                                                    </div>
                                                </div>
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
