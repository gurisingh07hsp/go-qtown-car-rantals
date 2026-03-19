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

      
            <div className="wt-bnr-inr site-bg-dark  twm-primary-overlay-wrap bg-[url('/images/banner/banner-4.jpg')]">
                <div className="twm-primary-overlay"></div>
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                    	<div className="banner-title-outer">
                        	<div className="banner-title-name">
                        		<h2 className="wt-title">Faq's</h2>
                            </div>
                        </div>
                    </div>
                </div>
             </div>

            <div className="section-full p-t150 p-b120 site-bg-white twm-faq-section-wrap">
                <div className="container">
                      
                    <div className="section-content">
                        
                        <div className="row twm-faq-section-1 m-b30">
                            <div className="col-lg-4 col-md-12 m-b30  wow fadeInDown" data-wow-delay="0.2">
                                <div className="video-section-outer">
                                    <div className="video-section">
                                        <img src="images/faq-pic1.jpg" alt="Video Bg Image"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12  wow fadeInDown" data-wow-delay="0.2">
                                <div className="twm-faq-info-wrap">
                                  
                                    <div className="section-head left">
                                        <h2 className="twm-large-title site-text-dark">Frequently Asked Questions</h2>
                                    </div>
                                    
                                    
                                    <div className="twm-faq-info">
                                        <div className="accordion twm-acdn" id="sf-faq-accordion">
                                            <div className="accordion-item">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ1" aria-expanded="true" >
                                                    What documents are required to rent a car?
                                                </button>
                                                <div id="FAQ1" className="accordion-collapse collapse show" data-bs-parent="#sf-faq-accordion">
                                                    <div className="accordion-body">
                                                        A valid driver’s license and identification are required
                                                    </div>
                                                </div>
                                            </div>
                    
                                       
                                            <div className="accordion-item">
                                            
                                                <button className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#FAQ2" aria-expanded="false">
                                                   Do you offer automatic vehicles?
                                                </button>
                    
                                                <div id="FAQ2" className="accordion-collapse collapse "  data-bs-parent="#sf-faq-accordion">
                                                    <div className="accordion-body">
                                                        Yes. Most of our vehicles are automatic and suitable for international drivers.
                                                    </div>
                                                </div>
                    
                                            </div>
                    
                                          
                                            <div className="accordion-item">
                                                
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ3" aria-expanded="false">
                                                    Is insurance included?
                                                </button>
                    
                                                <div id="FAQ3" className="accordion-collapse collapse"  data-bs-parent="#sf-faq-accordion">
                                                    <div className="accordion-body">
                                                        Yes, standard insurance is included in the rental price.
                                                    </div>
                                                </div>
                                            </div>
                    
                                        
                                            <div className="accordion-item">
                                                
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ4" aria-expanded="false">
                                                   Do I need to pay a security deposit?
                                                </button>
                    
                                                <div id="FAQ4" className="accordion-collapse collapse"  data-bs-parent="#sf-faq-accordion">
                                                    <div className="accordion-body">
                                                        Yes. A refundable security deposit may be required at the start of the rental.
                                                    </div>
                                                </div>
                                            </div>

                                           
                                            <div className="accordion-item">
                                                
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ5" aria-expanded="false">
                                                    Can I book a vehicle online?
                                                </button>
                    
                                                <div id="FAQ5" className="accordion-collapse collapse"  data-bs-parent="#sf-faq-accordion">
                                                    <div className="accordion-body">
                                                       Yes. You can send a booking request directly through our website.
                                                    </div>
                                                </div>
                                            </div>

                                          
                                            {/* <div className="accordion-item">
                                                
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ6" aria-expanded="false">
                                                    How do I know when I need a tune up?
                                                </button>
                    
                                                <div id="FAQ6" className="accordion-collapse collapse"  data-bs-parent="#sf-faq-accordion">
                                                    <div className="accordion-body">
                                                        Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion consesua the risus consequation the porttiton.
                                                    </div>
                                                </div>
                                            </div> */}
                    
                                            
                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="row twm-faq-section-2 m-b30">
                            <div className="col-lg-8 col-md-12  m-b30 wow fadeInDown" data-wow-delay="0.2">
                                <div className="twm-faq-info-wrap">
                                    <!-- TITLE START-->
                                    <div className="section-head left">
                                        <h2 className="twm-large-title site-text-dark">Payments Related</h2>
                                    </div>
                                    <!-- TITLE END-->
                                    
                                    <div className="twm-faq-info">
                                        <div className="accordion twm-acdn" id="sf-faq-accordion-2">
                                            <!--One-->
                                            <div className="accordion-item">
                    
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ1-1" aria-expanded="true" >
                                                    1. Age and responsibility
                                                </button>
                    
                                                <div id="FAQ1-1" className="accordion-collapse collapse show" data-bs-parent="#sf-faq-accordion-2">
                                                    <div className="accordion-body">
                                                        Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion consesua the risus consequation the porttiton.
                                                    </div>
                                                </div>
                    
                                            </div>
                    
                                            <!--Two-->
                                            <div className="accordion-item">
                                            
                                                <button className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#FAQ2-2" aria-expanded="false">
                                                    2. Payment Methodes
                                                </button>
                    
                                                <div id="FAQ2-2" className="accordion-collapse collapse "  data-bs-parent="#sf-faq-accordion-2">
                                                    <div className="accordion-body">
                                                        Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion consesua the risus consequation the porttiton.
                                                    </div>
                                                </div>
                    
                                            </div>
                    
                                            <!--Three-->
                                            <div className="accordion-item">
                                                
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ3-3" aria-expanded="false">
                                                    3. Enquire Now
                                                </button>
                    
                                                <div id="FAQ3-3" className="accordion-collapse collapse"  data-bs-parent="#sf-faq-accordion-2">
                                                    <div className="accordion-body">
                                                        Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion consesua the risus consequation the porttiton.
                                                    </div>
                                                </div>
                                            </div>
                    
                                            <!--Four-->
                                            <div className="accordion-item">
                                                
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ4-4" aria-expanded="false">
                                                    4. Car Delivery
                                                </button>
                    
                                                <div id="FAQ4-4" className="accordion-collapse collapse"  data-bs-parent="#sf-faq-accordion-2">
                                                    <div className="accordion-body">
                                                        Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion consesua the risus consequation the porttiton.
                                                    </div>
                                                </div>
                                            </div>

                                            <!--Five-->
                                            <div className="accordion-item">
                                                
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ5-5" aria-expanded="false">
                                                    5. Deposit
                                                </button>
                    
                                                <div id="FAQ5-5" className="accordion-collapse collapse"  data-bs-parent="#sf-faq-accordion-2">
                                                    <div className="accordion-body">
                                                        Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion consesua the risus consequation the porttiton.
                                                    </div>
                                                </div>
                                            </div>

                                            <!--Six-->
                                            <div className="accordion-item">
                                                
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ6-6" aria-expanded="false">
                                                    6. Documents
                                                </button>
                    
                                                <div id="FAQ6-6" className="accordion-collapse collapse"  data-bs-parent="#sf-faq-accordion-2">
                                                    <div className="accordion-body">
                                                        Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion consesua the risus consequation the porttiton.
                                                    </div>
                                                </div>
                                            </div>
                    
                                            
                    
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-12  wow fadeInDown" data-wow-delay="0.2">
                                <div className="video-section-outer">
                                    <div className="video-section">
                                        <img src="images/faq-pic2.jpg" alt="Video Bg Image">
                                        <a href="https://vimeo.com/337649532" className="mfp-video play-now-video">
                                            <i className="icon fa fa-play"></i>
                                            <span className="ripple"></span>
                                        </a>                                              
                                    </div>
                                </div>
                            </div>
                        </div> */}

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
