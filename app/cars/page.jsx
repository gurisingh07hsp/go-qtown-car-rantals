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
                        		<h2 className="wt-title">Cars Style 1</h2>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             {/* <iframe style={{width: '100%', height: 900, border: 'none'}} src="https://rentsyst.com/settings/iframe-constructor/?token=ce0w13SfbpuhuRpJn1hJtQSZwb-LfLlH&id=9423"></iframe> */}
            <div className="section-full p-t150 p-b120 site-bg-white twm-cars-section-wrap">
                <div className="container">
                      
                    <div className="section-content">
                        <div className=" twm-cars-section m-b30">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 m-b30 wow fadeInDown" data-wow-delay="0.2">
                                    <div className="twm-vehicle-fleet-bx twm-custom-grid-2">
                                        <div className="twm-media">
                                            <div className="twm-media-pic">
                                                <img src="images/vehicle-2/car1.png" alt="image"/>
                                            </div>
                                            <div className="twm-price-section">
                                                <div className="v-price">NZ$875.00</div>
                                                <div className="v-duration">7 Days</div>
                                                <a href="booking" className="v-detail"><em>Book</em></a>
                                            </div>
                                        </div>
                                        <div className="twm-vehicle-fleet-content">
                                            <h3 className="twm-v-title">SUZUKI SWIFT</h3>
                                            <ul className="twm-vehicle-facility">
                                                <li><span><img src="images/icons/car-seat.png" alt="Image"/></span>4 Seat</li>
                                                {/* <li><span><img src="images/icons/bag.png" alt="Image"/></span>0 Bags</li>
                                                <li><span><img src="images/icons/car.png" alt="Image"/></span>4 Suv</li> */}
                                            </ul>
                                            {/* <ul className="twm-vehicle-fuel-type">
                                                <li>Petrol</li>
                                                <li><del>Diesel</del></li>
                                                <li><del>Electric</del></li>
                                            </ul> */}
                                        </div>
                                    </div> 
                                </div>

                                <div className="col-lg-6 col-md-6 m-b30 wow fadeInDown" data-wow-delay="0.2">
                                    <div className="twm-vehicle-fleet-bx twm-custom-grid-2">
                                        <div className="twm-media">
                                            <div className="twm-media-pic">
                                                <img src="images/vehicle-2/car2.png" alt="image"/>
                                            </div>
                                            <div className="twm-price-section">
                                                <div className="v-price">NZ$1050.00</div>
                                                <div className="v-duration">7 Days</div>
                                                <a href="booking" className="v-detail"><em>Book</em></a>
                                            </div>
                                        </div>
                                        <div className="twm-vehicle-fleet-content">
                                            <h3 className="twm-v-title"><a href="cars-detail.html">TOYOTA Prius Hybrid</a></h3>
                                            <ul className="twm-vehicle-facility">
                                                <li><span><img src="images/icons/car-seat.png" alt="Image"/></span>4 Seat</li>
                                                {/* <li><span><img src="images/icons/bag.png" alt="Image"/></span>4 Bags</li>
                                                <li><span><img src="images/icons/car.png" alt="Image"/></span>4 Suv</li> */}
                                            </ul>
                                            {/* <ul className="twm-vehicle-fuel-type">
                                                <li>Petrol</li>
                                                <li><del>Diesel</del></li>
                                                <li><del>Electric</del></li>
                                            </ul> */}
                                        </div>
                                    </div> 
                                </div>

                                <div className="col-lg-6 col-md-6 m-b30 wow fadeInDown" data-wow-delay="0.2">
                                    <div className="twm-vehicle-fleet-bx twm-custom-grid-2">
                                        <div className="twm-media">
                                            <div className="twm-media-pic">
                                                <img src="images/vehicle-2/car3.png" alt="image"/>
                                            </div>
                                            <div className="twm-price-section">
                                                <div className="v-price">NZ$1400.00</div>
                                                <div className="v-duration">7 Days</div>
                                                <a href="booking" className="v-detail"><em>Book</em></a>
                                            </div>
                                        </div>
                                        <div className="twm-vehicle-fleet-content">
                                            <h3 className="twm-v-title"><a href="cars-detail.html">SUBARU LEGACY</a></h3>
                                            <ul className="twm-vehicle-facility">
                                                <li><span><img src="images/icons/car-seat.png" alt="Image"/></span>4 Seat</li>
                                                {/* <li><span><img src="images/icons/bag.png" alt="Image"/></span>4 Bags</li>
                                                <li><span><img src="images/icons/car.png" alt="Image"/></span>4 Suv</li> */}
                                            </ul>
                                            {/* <ul className="twm-vehicle-fuel-type">
                                                <li>Petrol</li>
                                                <li><del>Diesel</del></li>
                                                <li><del>Electric</del></li>
                                            </ul> */}
                                        </div>
                                    </div> 
                                </div>                                
                            </div>
                        </div>
                    </div> 
                </div>
            </div>   
          

        </div>
		<a
            href="https://wa.me/642102720403"
            target="_blank"
            rel="noopener noreferrer"
            >
            <button className="scroltop1">
                <img src="/images/whatsapp.png" alt="" />
            </button>
        </a>

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
