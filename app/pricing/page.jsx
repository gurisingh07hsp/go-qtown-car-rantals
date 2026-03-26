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

    {/* <Loading/> */}

	<div className="page-wraper">
        <div className="page-content">
            <div className="wt-bnr-inr site-bg-dark  twm-primary-overlay-wrap bg-[url('/images/banner/heroImageOfEveryPage.jpg')]">
                <div className="twm-primary-overlay"></div>
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                    	<div className="banner-title-outer">
                        	<div className="banner-title-name">
                        		<h2 className="wt-title">Pricing</h2>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
            <div className="section-full p-t150 p-b120 site-bg-white twm-cars-section-wrap">
                <div className="container">
                      
                    <div className="section-content">
                        <div className=" twm-cars-section m-b30">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 m-b30 wow fadeInDown" data-wow-delay="0.2">
                                    <div className="twm-vehicle-fleet-bx twm-custom-grid-2">
                                        <div className="twm-media">
                                            <div className="twm-media-pic">
                                                <img src="images/vehicle-2/pic1.jpg" alt="image"/>
                                            </div>
                                            <div className="twm-price-section">
                                                <div className="v-price">$130-150</div>
                                                <div className="v-duration">/ Day</div>
                                                {/* <a href="cars-detail.html" className="v-detail"><em>Detail</em></a> */}
                                            </div>
                                        </div>
                                        <div className="twm-vehicle-fleet-content">
                                            <h3 className="twm-v-title"><a href="cars-detail.html">Small Cars</a></h3>
                                        </div>
                                    </div> 
                                </div>

                                <div className="col-lg-6 col-md-6 m-b30 wow fadeInDown" data-wow-delay="0.2">
                                    <div className="twm-vehicle-fleet-bx twm-custom-grid-2">
                                        <div className="twm-media">
                                            <div className="twm-media-pic">
                                                <img src="images/vehicle-2/pic2.jpg" alt="image"/>
                                            </div>
                                            <div className="twm-price-section">
                                                <div className="v-price">$250-300</div>
                                                <div className="v-duration">/ Day</div>
                                                {/* <a href="cars-detail.html" className="v-detail"><em>Detail</em></a> */}
                                            </div>
                                        </div>
                                        <div className="twm-vehicle-fleet-content">
                                            <h3 className="twm-v-title"><a href="cars-detail.html">Sedans</a></h3>
                                        </div>
                                    </div> 
                                </div>

                                <div className="col-lg-6 col-md-6 m-b30 wow fadeInDown" data-wow-delay="0.2">
                                    <div className="twm-vehicle-fleet-bx twm-custom-grid-2">
                                        <div className="twm-media">
                                            <div className="twm-media-pic">
                                                <img src="images/vehicle-2/pic3.jpg" alt="image"/>
                                            </div>
                                            <div className="twm-price-section">
                                                <div className="v-price">$300-400</div>
                                                <div className="v-duration">/ Day</div>
                                            </div>
                                        </div>
                                        <div className="twm-vehicle-fleet-content">
                                            <h3 className="twm-v-title"><a href="cars-detail.html">SUVs</a></h3>
                                        </div>
                                    </div> 
                                </div>
                                

                            </div>
                            <p className='text-xl'>Prices may vary depending on season and availability.</p>

                            <div className='mt-10'>
                                <h2 className='h2'>Long-Term Rental Discounts</h2>
                                <p>We offer discounts for longer bookings:</p>
                            </div>

                            <div className="twm-inline-list2">
                                <ul>
                                    <li>7 day rentals</li>
                                    <li>14 day rentals</li>
                                    <li>30 day rentals</li>
                                </ul>
                            </div>

                            <p className='text-xl'>Contact us for the best long-term rates.</p>

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
