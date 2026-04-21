import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer-dark">
            <div className="container"> 
                <div className="footer-top">
                    <div className="row">

                        <div className="col-xl-4 col-lg-4">
                            
                            <div className="widget widget_about">
                                <div className="flex items-center md:min-h-32">
                                    <a href="index.html"><img src="images/goqtownlogo.png" className='w-24' alt="Image"/></a>
                                </div>
                                <div className="f-about-info">
                                    We offer a range of the finest and most premium cars and bikes on rent.
                                </div>
                                <ul className="ftr-list">
                                    <li><i className="feather feather-phone-call"></i><a href="tel:+642102720403">+642102720403</a></li>
                                    <li><i className="feather feather-mail"></i>goqtowncarrentals@gmail.com</li>
                                    {/* <li><i className="feather feather-home"></i>55/11 ronin tower New York</li> */}
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
                                    <div className="col-lg-8 col-md-6 col-6 m-b20">
                                        
                                        <div className="widget widget_time-duraion">
                                            <h3 className="widget-title">Timing</h3>
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
                                                <li><a href="about-us">About us</a></li>
                                                <li><a href="faq">FAQ’s</a></li>
                                                <li><a href="service">Services</a></li>
                                                <li><a href="insurance">Insurance</a></li>
                                                <li><a href="contact-us">Contact</a></li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                    {/* <div className="col-lg-4 col-md-12 col-sm-12 m-b20">
                                        
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
                                        
                                    </div> */}
    
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
                        <span className="copyrights-text">© 2026<span className="site-text-primary">Go Qtown Car Rentals</span> All  rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
