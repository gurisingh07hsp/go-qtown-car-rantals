import Loading from "../components/Loading";
import '../public/css/animate.min.css'
import '../public/css/feather.css'
import '../public/css/lc_lightbox.css'
import '../public/css/font-awesome.min.css'
import '../public/css/magnific-popup.min.css'
import '../public/css/bootstrap.min.css'
import '../public/css/style.css'

export default function Home() {
  return (
  <div>
    <link rel="stylesheet" type="text/css" href="css/owl.carousel.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/swiper-bundle.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/bootstrap-datetimepicker.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/jquery.mCustomScrollbar.min.css"/>
    {/* <Loading/> */}

	<div className="page-wraper">
       
        <div className="page-content">

         
            <div className="twm-home-1-banner-wrap">
                <div className="twm-home-1-banner bg-black bg-center">
                    <div className="twm-banner-LR-wrap">
                        <div className="twm-banner-left">
                            <div className="twm-banner-left-info">
                                <div className="twm-banner-left-content">

                                    {/* <div className="twm-sm-title left">Premium</div> */}
                                    <h2 className="twm-banner-title">
                                        <em data-wait="3000" data-words='["The Best Rental", "Wide Range of"]'></em>
                                        Explore Queenstown with a Reliable Rental Car
                                    </h2>

                                    <div className="twm-banner-search-tabs">

                                        <h3 className="twm-tabs-title">
                                            Find the perfect car for your Queenstown trip.
                                        </h3>

                                        <div className="twm-banner-tabs-filter">
                                            <nav>
                                                <div className="nav nav-tabs" id="nav-tab">
                                                    
                                                    <div className="nav-link active" data-bs-toggle="tab" data-bs-target="#nav-Car">
                                                        <div className="twm-tabs-bx">
                                                            <div className="tabs-media">
                                                                <img src="images/tabs-icon/car.png" alt="#"/>
                                                            </div>
                                                            <div className="tabs-title">Car</div>
                                                        </div>
                                                    </div>
                                                  
                                                    <div className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-Van">
                                                        <div className="twm-tabs-bx">
                                                            <div className="tabs-media">
                                                                <img src="images/tabs-icon/van.png" alt="#"/>
                                                            </div>
                                                            <div className="tabs-title">Van</div>
                                                        </div>
                                                    </div>
                                                
                                                    <div className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-Minibus">
                                                        <div className="twm-tabs-bx">
                                                            <div className="tabs-media">
                                                                <img src="images/tabs-icon/minibus.png" alt="#"/>
                                                            </div>
                                                            <div className="tabs-title">Minibus</div>
                                                        </div>
                                                    </div>
                                                   
                                                    <div className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-coupe">
                                                        <div className="twm-tabs-bx">
                                                            <div className="tabs-media">
                                                                <img src="images/tabs-icon/coupe.png" alt="#"/>
                                                            </div>
                                                            <div className="tabs-title">Coupe</div>
                                                        </div>
                                                    </div>
                                                  
                                                </div>
                                            </nav>
                                            <div className="tab-content" id="nav-tabContent">
                                            
                                                <div className="tab-pane fade show active" id="nav-Car">
                                                    <div className="twm-tabs-search-section">

                                                        <form>
                                                            <div className="row m-b20">
                                                                {/* <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Choose Vehicle type</label>
                                                                        <select className="form-select form-control" aria-label="Default select example">
                                                                            <option value=''>Model</option>
                                                                            <option value="1">Yamaha</option>
                                                                            <option value="2">Honda</option>
                                                                            <option value="3">Suzuki</option>
                                                                        </select>
                                                                    </div>
                                                                </div> */}
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Pick up Location</label>
                                                                        <input className="form-control" placeholder="Type..."/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Drop off Location</label>
                                                                        <input className="form-control" placeholder="Type..."/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                                                                        <label>Pick up date and time</label>
                                                                        <div className="form-group-2column">
                                                                            <div className="input-group date datepicker">
                                                                                <input className="form-control" placeholder="Date"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa fa-solid fa-calendar-days"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="input-group time timepicker">
                                                                                <input className="form-control" placeholder="Time"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa-regular fa-clock"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                                                                        <label>Return date and time</label>
                                                                        <div className="form-group-2column">
                                                                            <div className="input-group date datepicker">
                                                                                <input className="form-control" placeholder="Date"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa fa-solid fa-calendar-days"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="input-group time timepicker">
                                                                                <input className="form-control" placeholder="Time"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa-regular fa-clock"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
    
                                                            <div className="twm-tabs-search-btn">
                                                                <a href="cars-grid-4.html" className="site-button">
                                                                    <em>Book Your Car</em>
                                                                </a>
                                                            </div>
                                                        </form>
                                                            
                                                    </div>
                                                </div>
                  
                                                <div className="tab-pane fade" id="nav-Van">
                                                    <div className="twm-tabs-search-section">

                                                        <form>
                                                            <div className="row m-b20">
                                                                {/* <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Choose Vehicle type</label>
                                                                        <select className="form-select form-control" aria-label="Default select example">
                                                                            <option value=''>Model</option>
                                                                            <option value="1">Yamaha</option>
                                                                            <option value="2">Honda</option>
                                                                            <option value="3">Suzuki</option>
                                                                        </select>
                                                                    </div>
                                                                </div> */}
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Pick up Location</label>
                                                                        <input className="form-control" placeholder="Type..."/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Drop off Location</label>
                                                                        <input className="form-control" placeholder="Type..."/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                                                                        <label>Pick up date and time</label>
                                                                        <div className="form-group-2column">
                                                                            <div className="input-group date datepicker">
                                                                                <input className="form-control" placeholder="Date"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa fa-solid fa-calendar-days"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="input-group time timepicker">
                                                                                <input className="form-control" placeholder="Time"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa-regular fa-clock"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                                                                        <label>Return date and time</label>
                                                                        <div className="form-group-2column">
                                                                            <div className="input-group date datepicker">
                                                                                <input className="form-control" placeholder="Date"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa fa-solid fa-calendar-days"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="input-group time timepicker">
                                                                                <input className="form-control" placeholder="Time"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa-regular fa-clock"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
    
                                                            <div className="twm-tabs-search-btn">
                                                                <a href="cars-grid-4.html" className="site-button">
                                                                    <em>Book Your Car</em>
                                                                </a>
                                                            </div>
                                                        </form>
                                                            
                                                    </div>
                                                </div>
                                                
                                                <div className="tab-pane fade" id="nav-Minibus">
                                                    <div className="twm-tabs-search-section">

                                                        <form>
                                                            <div className="row m-b20">
                                                                {/* <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Choose Vehicle type</label>
                                                                        <select className="form-select form-control" aria-label="Default select example">
                                                                            <option value=''>Model</option>
                                                                            <option value="1">Yamaha</option>
                                                                            <option value="2">Honda</option>
                                                                            <option value="3">Suzuki</option>
                                                                        </select>
                                                                    </div>
                                                                </div> */}
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Pick up Location</label>
                                                                        <input className="form-control" placeholder="Type..."/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Drop off Location</label>
                                                                        <input className="form-control" placeholder="Type..."/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                                                                        <label>Pick up date and time</label>
                                                                        <div className="form-group-2column">
                                                                            <div className="input-group date datepicker">
                                                                                <input className="form-control" placeholder="Date"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa fa-solid fa-calendar-days"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="input-group time timepicker">
                                                                                <input className="form-control" placeholder="Time"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa-regular fa-clock"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                                                                        <label>Return date and time</label>
                                                                        <div className="form-group-2column">
                                                                            <div className="input-group date datepicker">
                                                                                <input className="form-control" placeholder="Date"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa fa-solid fa-calendar-days"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="input-group time timepicker">
                                                                                <input className="form-control" placeholder="Time"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa-regular fa-clock"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
    
                                                            <div className="twm-tabs-search-btn">
                                                                <a href="cars-grid-4.html" className="site-button">
                                                                    <em>Book Your Car</em>
                                                                </a>
                                                            </div>
                                                        </form>
                                                            
                                                    </div>
                                                </div>
                                               
                                                <div className="tab-pane fade" id="nav-coupe">
                                                    <div className="twm-tabs-search-section">

                                                        <form>
                                                            <div className="row m-b20">
                                                                {/* <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Choose Vehicle type</label>
                                                                        <select className="form-select form-control" aria-label="Default select example">
                                                                            <option value=''>Model</option>
                                                                            <option value="1">Yamaha</option>
                                                                            <option value="2">Honda</option>
                                                                            <option value="3">Suzuki</option>
                                                                        </select>
                                                                    </div>
                                                                </div> */}
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Pick up Location</label>
                                                                        <input className="form-control" placeholder="Type..."/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Drop off Location</label>
                                                                        <input className="form-control" placeholder="Type..."/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                                                                        <label>Pick up date and time</label>
                                                                        <div className="form-group-2column">
                                                                            <div className="input-group date datepicker">
                                                                                <input className="form-control" placeholder="Date"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa fa-solid fa-calendar-days"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="input-group time timepicker">
                                                                                <input className="form-control" placeholder="Time"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa-regular fa-clock"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                                                                        <label>Return date and time</label>
                                                                        <div className="form-group-2column">
                                                                            <div className="input-group date datepicker">
                                                                                <input className="form-control" placeholder="Date"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa fa-solid fa-calendar-days"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="input-group time timepicker">
                                                                                <input className="form-control" placeholder="Time"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa-regular fa-clock"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
    
                                                            <div className="twm-tabs-search-btn">
                                                                <a href="cars-grid-4.html" className="site-button">
                                                                    <em>Book Your Car</em>
                                                                </a>
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
                        <div className="twm-banner-right md:block hidden">
                            <div className="twm-banner-right-section">
                                <div className="twm-banner-r-content">
                                    <div className="twm-banner-r-bx">
                                        <h1 className="twm-bnr-title">Mercedes</h1>
                                        <div className="twm-banner-product-price">
                                            <div className="twm-product-name">Mercedes</div>
                                            <div className="twm-price-section">
                                                <div className="v-price" id="number_notification">$800</div>
                                                <div className="v-duration">/ Day</div>
                                            </div>
                                         </div>
                                    </div>
                                </div>
                                <div className="twm-banner-media">
                                    <img src="images/main-slider/slider1/car1.png" className="md:w-xl" alt="Car Pic"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
          

           
            <div className="section-full p-t150 p-b120 site-bg-white twm-w-range-section-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
                <div className="container">

                   
                    
                    <div className="section-head center">
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
  
            <div className="section-full twm-explore-section-wrap site-bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-12">
                            
                            <div className="section-head left">
                                <div className="twm-sm-title left site-text-white">Car Brands</div>
                                <h2 className="twm-large-title site-text-white">Explore Our Premium Brands</h2>
                            </div>
                           
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className="twm-mid-section-car">
                                <div className="twm-media">
                                    <img src="images/explore-sec-image1.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-12">
                            <div className="twm-mid-section-btn">
                                <a href="#" className="site-button">
                                    <em>View All Brands</em>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
            <div className="twm-client-slider1-wrap site-bg-white">
                <div className="twm-client-slider1">
                    <div className="owl-carousel home-client-carousel3 owl-btn-vertical-center">
                    
                        <div className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                <a href="#"><img src="images/client-logo/dark/w1.png" alt=""/></a></div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                <a href="#"><img src="images/client-logo/dark/w2.png" alt=""/></a></div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                <a href="#"><img src="images/client-logo/dark/w3.png" alt=""/></a></div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                <a href="#"><img src="images/client-logo/dark/w4.png" alt=""/></a></div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                <a href="#"><img src="images/client-logo/dark/w5.png" alt=""/></a></div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                <a href="#"><img src="images/client-logo/dark/w6.png" alt=""/></a></div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                <a href="#"><img src="images/client-logo/dark/w1.png" alt=""/></a></div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                <a href="#"><img src="images/client-logo/dark/w2.png" alt=""/></a></div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                <a href="#"><img src="images/client-logo/dark/w3.png" alt=""/></a></div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                <a href="#"><img src="images/client-logo/dark/w5.png" alt=""/></a></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
         
            <div className="section-full site-bg-white p-t150 p-b120 twm-abus-section-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
                <div className="container">
                    <div className="row twm-abus-section">

                        <div className="col-lg-7 col-md-12">
                            <div className="twm-abus-left">
                                <div className="twm-media">
                                    <img src="images/abus-pic1.png" alt="Image"/>
                                    {/* <div className="twm-abus-video">
                                        <a href="https://vimeo.com/337649532" className="mfp-video ">
                                            <i className="icon fa fa-play"></i>
                                        </a>
                                    </div> */}
                                    {/* <div className="twm-abus-year-section">
                                        <div className="tem-abus-year-content">
                                            <span>Since</span>
                                            <h2 className="year-title">2016</h2>
                                        </div>
                                    </div> */}
                                </div>
                                {/* <div className="twm-media2">
                                    <img src="images/car-pic.png" alt="Image"/>
                                </div> */}
                            </div>
                        </div>
                        
                        <div className="col-lg-5 col-md-12">
                          
                            <div className="section-head left aside-section">
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
                                <a href="about-us" className="site-button">
                                    <em>Read More</em>
                                </a>
                             </div>
                            
                        </div>
                    </div>
                </div>
            </div>
  
            <div className="section-full p-t150 p-b120 site-bg-dark twm-step-towards-section-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
            <div className="twm-half-bg-pic url(images/half-bg-pic.jpg)"></div>
            <div className="container">

              <div className="row">
                  <div className="col-lg-6 col-md-12">
                    
                      <div className="section-head left">
                          <div className="twm-sm-title left">One step towards you</div>
                          <h2 className="twm-large-title site-text-white">Let's Your Adventure Begin</h2>
                      </div>
                    
                  </div>
              </div>

              <div className="section-content">
                  <div className="row twm-step-towards-section">
                      
                      <div className="col-xl-4 col-lg-4 col-md-4 m-b30">
                          <div className="twm-icon-style-left large-set in-dark-area">
                              <div className="twm-media">
                                  <img src="images/icons/label.png" alt="image"/>
                              </div>
                              <div className="twm-content">
                                  <h3 className="twm-title">Deals For Every Budget</h3>
                                  <p>Incredible prices on every car, van, bike 
                                      and package worldwide Book vehicles at 
                                      incredible prices worldwide
                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className="col-xl-4 col-lg-4 col-md-4 m-b30">
                          <div className="twm-icon-style-left large-set in-dark-area">
                              <div className="twm-media">
                                  <img src="images/icons/customer-support.png" alt="image"/>
                              </div>
                              <div className="twm-content">
                                  <h3 className="twm-title">24/7 Road Assistance</h3>
                                  <p>
                                      We are ready to assist you and provide 
                                      reliable support. Who Will keep you moving 
                                      forward with confidence and mental peace.
                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className="col-xl-4 col-lg-4 col-md-4 m-b30">
                          <div className="twm-icon-style-left large-set in-dark-area">
                              <div className="twm-media">
                                  <img src="images/icons/parking-area.png" alt="image"/>
                              </div>
                              <div className="twm-content">
                                  <h3 className="twm-title">Free Pick-Up & Drop-Off</h3>
                                  <p>
                                      Enjoy free pickup and drop-off services,
                                      which adds an extra layer of ease to your 
                                      car rental experience.
                                  </p>
                              </div>
                          </div>
                      </div>

                  </div>

              </div>

            </div>
            </div>
           
            {/* <div className="section-full p-t150 p-b120 site-bg-white twm-blog-section-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
                <div className="container-fluid">

                   
                  
                    <div className="section-head center ">
                        <div className="twm-sm-title left">Choose your car</div>
                        <h2 className="twm-large-title site-text-dark">Our Vehicle Fleet</h2>
                    </div>
                   
                    

                    <div className="section-content">
                        <div className="twm-vehicle-fleet-carousel m-b30">
                            
                          
                            <div className="item">
                                <div className="twm-vehicle-fleet-bx">
                                    <div className="twm-media">
                                        <div className="twm-media-pic">
                                            <img src="images/banner/pic1.jpg" alt="image"/>
                                        </div>
                                        <div className="twm-price-section">
                                            <div className="v-price">$800</div>
                                            <div className="v-duration">/ Day</div>
                                            <a href="cars-detail.html" className="v-detail"><em>Detail</em></a>
                                        </div>
                                    </div>
                                    <div className="twm-vehicle-fleet-content">
                                        <h3 className="twm-v-title"><a href="cars-detail.html">Jeep Renegade</a></h3>
                                        <ul className="twm-vehicle-facility">
                                            <li><span><img src="images/icons/car-seat.png" alt="Image"/></span>4 Seat</li>
                                            <li><span><img src="images/icons/bag.png" alt="Image"/></span>4 Bags</li>
                                            <li><span><img src="images/icons/car.png" alt="Image"/></span>4 Suv</li>
                                        </ul>
                                        <ul className="twm-vehicle-fuel-type">
                                            <li>Petrol</li>
                                            <li><del>Diesel</del></li>
                                            <li><del>Electric</del></li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>
                            <div className="item">
                                <div className="twm-vehicle-fleet-bx">
                                    <div className="twm-media">
                                        <div className="twm-media-pic">
                                            <img src="images/vehicle-2/pic2.jpg" alt="image"/>
                                        </div>
                                        <div className="twm-price-section">
                                            <div className="v-price">$700</div>
                                            <div className="v-duration">/ Day</div>
                                            <a href="cars-detail.html" className="v-detail"><em>Detail</em></a>
                                        </div>
                                    </div>
                                    <div className="twm-vehicle-fleet-content">
                                        <h3 className="twm-v-title"><a href="cars-detail.html">Ferarri Enzo</a></h3>
                                        <ul className="twm-vehicle-facility">
                                            <li><span><img src="images/icons/car-seat.png" alt="Image"/></span>4 Seat</li>
                                            <li><span><img src="images/icons/bag.png" alt="Image"/></span>4 Bags</li>
                                            <li><span><img src="images/icons/car.png" alt="Image"/></span>4 Suv</li>
                                        </ul>
                                        <ul className="twm-vehicle-fuel-type">
                                            <li>Petrol</li>
                                            <li><del>Diesel</del></li>
                                            <li><del>Electric</del></li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>

                            <div className="item">
                                <div className="twm-vehicle-fleet-bx">
                                    <div className="twm-media">
                                        <div className="twm-media-pic">
                                            <img src="images/vehicle-2/pic3.jpg" alt="image"/>
                                        </div>
                                        <div className="twm-price-section">
                                            <div className="v-price">$900</div>
                                            <div className="v-duration">/ Day</div>
                                            <a href="cars-detail.html" className="v-detail"><em>Detail</em></a>
                                        </div>
                                    </div>
                                    <div className="twm-vehicle-fleet-content">
                                        <h3 className="twm-v-title"><a href="cars-detail.html">Mini Cooper</a></h3>
                                        <ul className="twm-vehicle-facility">
                                            <li><span><img src="images/icons/car-seat.png" alt="Image"/></span>4 Seat</li>
                                            <li><span><img src="images/icons/bag.png" alt="Image"/></span>4 Bags</li>
                                            <li><span><img src="images/icons/car.png" alt="Image"/></span>4 Suv</li>
                                        </ul>
                                        <ul className="twm-vehicle-fuel-type">
                                            <li>Petrol</li>
                                            <li><del>Diesel</del></li>
                                            <li><del>Electric</del></li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>

  
                            <div className="item">
                                <div className="twm-vehicle-fleet-bx">
                                    <div className="twm-media">
                                        <div className="twm-media-pic">
                                            <img src="images/vehicle-2/pic4.jpg" alt="image"/>
                                        </div>
                                        <div className="twm-price-section">
                                            <div className="v-price">$500</div>
                                            <div className="v-duration">/ Day</div>
                                            <a href="cars-detail.html" className="v-detail"><em>Detail</em></a>
                                        </div>
                                    </div>
                                    <div className="twm-vehicle-fleet-content">
                                        <h3 className="twm-v-title"><a href="cars-detail.html">Rolls Royce Cullinan</a></h3>
                                        <ul className="twm-vehicle-facility">
                                            <li><span><img src="images/icons/car-seat.png" alt="Image"/></span>4 Seat</li>
                                            <li><span><img src="images/icons/bag.png" alt="Image"/></span>4 Bags</li>
                                            <li><span><img src="images/icons/car.png" alt="Image"/></span>4 Suv</li>
                                        </ul>
                                        <ul className="twm-vehicle-fuel-type">
                                            <li>Petrol</li>
                                            <li><del>Diesel</del></li>
                                            <li><del>Electric</del></li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>

                           
                            <div className="item">
                                <div className="twm-vehicle-fleet-bx">
                                    <div className="twm-media">
                                        <div className="twm-media-pic">
                                            <img src="images/vehicle-2/pic5.jpg" alt="image"/>
                                        </div>
                                        <div className="twm-price-section">
                                            <div className="v-price">$800</div>
                                            <div className="v-duration">/ Day</div>
                                            <a href="cars-detail.html" className="v-detail"><em>Detail</em></a>
                                        </div>
                                    </div>
                                    <div className="twm-vehicle-fleet-content">
                                        <h3 className="twm-v-title"><a href="cars-detail.html">Porsche 911</a></h3>
                                        <ul className="twm-vehicle-facility">
                                            <li><span><img src="images/icons/car-seat.png" alt="Image"/></span>4 Seat</li>
                                            <li><span><img src="images/icons/bag.png" alt="Image"/></span>4 Bags</li>
                                            <li><span><img src="images/icons/car.png" alt="Image"/></span>4 Suv</li>
                                        </ul>
                                        <ul className="twm-vehicle-fuel-type">
                                            <li>Petrol</li>
                                            <li><del>Diesel</del></li>
                                            <li><del>Electric</del></li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>

                            
                            <div className="item">
                                <div className="twm-vehicle-fleet-bx">
                                    <div className="twm-media">
                                        <div className="twm-media-pic">
                                            <img src="images/vehicle-2/pic6.jpg" alt="image"/>
                                        </div>
                                        <div className="twm-price-section">
                                            <div className="v-price">$800</div>
                                            <div className="v-duration">/ Day</div>
                                            <a href="cars-detail.html" className="v-detail"><em>Detail</em></a>
                                        </div>
                                    </div>
                                    <div className="twm-vehicle-fleet-content">
                                        <h3 className="twm-v-title"><a href="cars-detail.html">Chevrolet Coupe</a></h3>
                                        <ul className="twm-vehicle-facility">
                                            <li><span><img src="images/icons/car-seat.png" alt="Image"/></span>4 Seat</li>
                                            <li><span><img src="images/icons/bag.png" alt="Image"/></span>4 Bags</li>
                                            <li><span><img src="images/icons/car.png" alt="Image"/></span>4 Suv</li>
                                        </ul>
                                        <ul className="twm-vehicle-fuel-type">
                                            <li>Petrol</li>
                                            <li><del>Diesel</del></li>
                                            <li><del>Electric</del></li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>

                           
                            <div className="item">
                                <div className="twm-vehicle-fleet-bx">
                                    <div className="twm-media">
                                        <div className="twm-media-pic">
                                            <img src="images/vehicle-2/pic7.jpg" alt="image"/>
                                        </div>
                                        <div className="twm-price-section">
                                            <div className="v-price">$800</div>
                                            <div className="v-duration">/ Day</div>
                                            <a href="cars-detail.html" className="v-detail"><em>Detail</em></a>
                                        </div>
                                    </div>
                                    <div className="twm-vehicle-fleet-content">
                                        <h3 className="twm-v-title"><a href="cars-detail.html">Ford White SUV</a></h3>
                                        <ul className="twm-vehicle-facility">
                                            <li><span><img src="images/icons/car-seat.png" alt="Image"/></span>4 Seat</li>
                                            <li><span><img src="images/icons/bag.png" alt="Image"/></span>4 Bags</li>
                                            <li><span><img src="images/icons/car.png" alt="Image"/></span>4 Suv</li>
                                        </ul>
                                        <ul className="twm-vehicle-fuel-type">
                                            <li>Petrol</li>
                                            <li><del>Diesel</del></li>
                                            <li><del>Electric</del></li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>

                           
                            <div className="item">
                                <div className="twm-vehicle-fleet-bx">
                                    <div className="twm-media">
                                        <div className="twm-media-pic">
                                            <img src="images/vehicle-2/pic8.jpg" alt="image"/>
                                        </div>
                                        <div className="twm-price-section">
                                            <div className="v-price">$800</div>
                                            <div className="v-duration">/ Day</div>
                                            <a href="cars-detail.html" className="v-detail"><em>Detail</em></a>
                                        </div>
                                    </div>
                                    <div className="twm-vehicle-fleet-content">
                                        <h3 className="twm-v-title"><a href="cars-detail.html">Toyota Crew Cab</a></h3>
                                        <ul className="twm-vehicle-facility">
                                            <li><span><img src="images/icons/car-seat.png" alt="Image"/></span>4 Seat</li>
                                            <li><span><img src="images/icons/bag.png" alt="Image"/></span>4 Bags</li>
                                            <li><span><img src="images/icons/car.png" alt="Image"/></span>4 Suv</li>
                                        </ul>
                                        <ul className="twm-vehicle-fuel-type">
                                            <li>Petrol</li>
                                            <li><del>Diesel</del></li>
                                            <li><del>Electric</del></li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>

                        </div>

                    </div>

                </div>
            </div> */}
   
            <div className="section-full site-bg-white twm-w-chooseus-section-wrap wow fadeInDown mt-20" data-wow-offset="100" data-wow-delay="0.2">
                <div className="container">
                    <div className="row twm-w-chooseus-section">
                        <div className="col-lg-5 col-md-12">
                         
                            <div className="section-head left ">
                                <div className="twm-sm-title left">Our Features</div>
                                <h2 className="twm-large-title site-text-dark">Why Choose Go Queenstown Car Rentals</h2>
                                <div className="section-head-detail">
                                    Discover a world of convenience, safety, and customization, paving the way for unforgettable adventures and seamless mobility solutions.
                                </div>
                            </div>

                            <div className="twm-list-icon-style1">
                                <ul>
                                    <li>
                                        <div className="twm-list-icon-style-bx">
                                            <div className="twm-icon-bx">
                                                <span>
                                                    <img src="images/w-choose-icon/icon-1.png" alt="image"/>
                                                </span>
                                            </div>
                                            <div className="twm-icon-bx-detail">
                                                <h3 className="twm-title">Reliable Vehicles</h3>
                                                <p>Our fleet includes trusted brands like Toyota, Suzuki, Subaru, and Mitsubishi to ensure a safe and comfortable journey.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="twm-list-icon-style-bx">
                                            <div className="twm-icon-bx">
                                                <span>
                                                    <img src="images/w-choose-icon/icon-2.png" alt="image"/>
                                                </span>
                                            </div>
                                            <div className="twm-icon-bx-detail">
                                                <h3 className="twm-title">Transparent Pricing</h3>
                                                <p>No hidden surprises. Clear pricing with basic insurance included.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="twm-list-icon-style-bx">
                                            <div className="twm-icon-bx">
                                                <span>
                                                    <img src="images/w-choose-icon/icon-3.png" alt="image"/>
                                                </span>
                                            </div>
                                            <div className="twm-icon-bx-detail">
                                                <h3 className="twm-title">Tourist-Friendly Service</h3>
                                                <p>Most of our vehicles are automatic, making them easy to drive for international travelers.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="twm-list-icon-style-bx">
                                            <div className="twm-icon-bx">
                                                <span>
                                                    <img src="images/w-choose-icon/icon-4.png" alt="image"/>
                                                </span>
                                            </div>
                                            <div className="twm-icon-bx-detail">
                                                <h3 className="twm-title">Easy Booking</h3>
                                                <p>Choose your dates, select a vehicle, and send a booking request online in minutes
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="twm-w-chooseus-media">
                                <div className="twm-media">
                                    <img src="images/banner/4.png" alt="Image"/>
                                </div>
                                <div className="twm-need-help-bx">
                                    <div className="twm-need-help-content">
                                        <span>Need any help ?</span>
                                        <h3 className="twm-title">+642102720403</h3>
                                    </div>
                                    <div className="twm-need-help-icon">
                                        <img src="images/24-clock.png" alt="icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="section-full p-t150 site-bg-white wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            
                            <div className="section-head left ">
                                <div className="twm-sm-title left">Categories</div>
                                <h2 className="twm-large-title site-text-dark">Our Vehicles</h2>
                            </div>
                          
                        </div>
                    </div>

                    <div className="section-content">
                        <div className="flex md:flex-row flex-col gap-4">
                           
                            <div className="item">
                                <div className="twm-categories-type relative">
                                    <div className="twm-media border">
                                        <img src="images/vehicle/pic13.jpg" alt="Image"/>
                                        <div className="absolute bottom-2 flex justify-center pt-1 h-10 rounded-tr-4xl bg-white w-[30%]">
                                            <p className="text-lg font-medium">Small Cars</p>
                                        </div>
                                    </div>
                                </div> 
                            </div>

                            
                            <div className="item">
                                <div className="twm-categories-type relative">
                                    <div className="twm-media border">
                                        <img src="images/vehicle/pic8.jpg" alt="Image"/>
                                        <div className="absolute bottom-2 flex justify-center pt-1 h-10 rounded-tr-4xl bg-white w-[30%]">
                                            <p className="text-lg font-medium">Sedans</p>
                                        </div>
                                    </div>
                                </div> 
                            </div>

                           
                            <div className="item">
                                <div className="twm-categories-type relative">
                                    <div className="twm-media border">
                                        <img src="images/vehicle/pic14.jpg" alt="Image"/>
                                        <div className="absolute bottom-2 flex justify-center pt-1 h-10 rounded-tr-4xl bg-white w-[30%]">
                                            <p className="text-lg font-medium">SUVs</p>
                                        </div>
                                    </div>
                                </div> 
                            </div>

                        </div>

                    </div>

                </div>
            </div>


            <div className="section-full p-t150 site-bg-white wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
                <div className="container">
                    <div className='mt-10'>
                        <h2>Perfect for Queenstown Road Trips</h2>
                        <p>Queenstown is the gateway to some of New Zealand’s most beautiful destinations.
                            With your own rental car, you can explore at your own pace</p>
                    </div>

                <div className="twm-inline-list2">
                    <h3>Popular drives include:</h3>
                    <ul>
                        <li>Glenorchy scenic drive</li>
                        <li>Wanaka day trip</li>
                        <li>Milford Sound adventure</li>
                        <li>Mount Cook journey</li>
                    </ul>
                </div>
                <p>Start your journey with a reliable rental car.</p>
                </div>
            </div>


            <div className="section-full p-t150 site-bg-white wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
                <div className="container">
                    <div className='mt-10'>
                        <h2>Customer Promise</h2>
                    </div>

                <div className="twm-inline-list2 mt-8">
                    <h3>At Go Queenstown Car Rentals, our goal is simple:</h3>
                    <ul className="mt-4">
                        <li>Provide reliable vehicles, transparent pricing, and a smooth rental experience for travelers exploring New Zealand.</li>
                    </ul>
                </div>
                </div>
            </div>


    
            <div className="section-full p-t150 site-bg-white twm-w-steps-section-wrap wow fadeInDown url(images/step-bg.jpg)">
                <div className="container">

                  
                    <div className="section-head center ">
                        <div className="twm-sm-title left">How it Work</div>
                        <h2 className="twm-large-title site-text-dark">Following Working Steps</h2>
                    </div>
                  
                     

                    <div className="section-content">
                        <div className="row twm-w-steps-section">
                            
                            <div className="col-lg-3 col-md-6 m-b30">
                                <div className="twm-w-steps">
                                    <div className="twm-w-step-count">
                                        <span>01</span>
                                    </div>
                                    <div className="twm-w-step-detail">
                                        <h3 className="twm-title">Choose A Car</h3>
                                        <p>Check out our range of cars and choose the car of your choice </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 m-b30">
                                <div className="twm-w-steps">
                                    <div className="twm-w-step-count">
                                        <span>02</span>
                                    </div>
                                    <div className="twm-w-step-detail">
                                        <h3 className="twm-title">Pick Up Date</h3>
                                        <p>Check out our range of cars and choose the car of your choice </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 m-b30">
                                <div className="twm-w-steps">
                                    <div className="twm-w-step-count">
                                        <span>03</span>
                                    </div>
                                    <div className="twm-w-step-detail">
                                        <h3 className="twm-title">Confirm Your Booking</h3>
                                        <p>Check out our range of cars and choose the car of your choice </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 m-b30">
                                <div className="twm-w-steps">
                                    <div className="twm-w-step-count">
                                        <span>04</span>
                                    </div>
                                    <div className="twm-w-step-detail">
                                        <h3 className="twm-title">Enjoy Driving</h3>
                                        <p>Check out our range of cars and choose the car of your choice </p>
                                    </div>
                                </div>
                            </div>
                            

                        </div>

                        {/* <div className="twm-adv-show">
                            <img src="images/adv-car.png" alt="Image"/>
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
  );
}
