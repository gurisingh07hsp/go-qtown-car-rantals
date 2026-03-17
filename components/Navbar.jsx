import React from 'react'

const Navbar = () => {
  return (
            <header className="site-header header-style-1 mobile-sider-drawer-menu light-hdr">

            <div className="">     
                <div className="header-middle main-bar">
                    <div className="border bg-[#ff6100] px-2">
                        <div className="leading-0.5 text-black">
                         <p className='md:text-3xl text-lg font-bold' >Go Qtown</p>
                         <p className="md:text-3xl text-lg ms-4 font-bold">Car Rantals</p>
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
                
                                       
                                        <div className="nav-animation header-nav navbar-collapse d-flex justify-content-between">
                                    
                                            <ul className="nav navbar-nav">
                                                <li className="has-child"><a href="/">Home</a>
                                                    {/* <ul className="sub-menu">
                                                        <li><a href="/">Home 1</a></li>
                                                        <li><a href="/">Home 2</a></li>
                                                    </ul>                                                                  */}
                                                </li>
                                                <li><a href="about-us">About</a></li>
                                                <li className="has-child">
                                                    <a href="cars">Cars</a>
                                                    {/* <ul className="sub-menu">
                                                        <li><a href="cars">Cars</a></li>
                                                        <li><a href="cars-grid-1.html">Cars Grid 1</a></li>
                                                        <li><a href="cars-grid-2.html">Cars Grid 2</a></li>
                                                        <li><a href="cars-grid-3.html">Cars Grid 3</a></li>
                                                        <li><a href="cars-grid-4.html">Cars Grid 4</a></li> 
                                                        <li><a href="cars-detail.html">Cars Detail</a></li>                                              
                                                    </ul>                                 */}
                                                </li>
                                                <li><a href="services">Services</a></li>
                                                {/* <li className="has-child">
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
                                                </li> */}
                                                <li className="has-child">
                                                    <a href="javascript:;">Blog</a>
                                                    {/* <ul className="sub-menu">
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="blog-grid.html">Blog Grid</a></li>
                                                        <li><a href="blog-list.html">Blog List</a></li>
                                                        <li><a href="blog-detail.html">Blog Detail</a></li>
                                                    </ul>                            */}
                                                </li>
                                                <li><a href="contact-us">Contact</a></li>  
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
        </header>
  )
}

export default Navbar
