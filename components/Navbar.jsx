'use client'
import React, { useState } from 'react'

const Navbar = () => {
    const [isopen, setIsOpen] = useState(false);
  return (
            <header className="site-header header-style-1 mobile-sider-drawer-menu light-hdr sticky top-0 z-50 bg-white">

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
                                        
                                        <button onClick={()=> setIsOpen(true)} type="button" className="navbar-toggler collapsed">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar icon-bar-first"></span>
                                            <span className="icon-bar icon-bar-two"></span>
                                            <span className="icon-bar icon-bar-three"></span>
                                        </button> 
                
                                       
                                        <div className="nav-animation header-nav navbar-collapse d-flex justify-content-between">
                                    
                                            <ul className="nav navbar-nav">
                                                <li><a href="/">Home</a></li>
                                                <li><a href="about-us">About</a></li>
                                                <li><a href="cars">Cars</a></li>
                                                <li><a href="services">Services</a></li>
                                                <li><a href="pricing">Pricing</a></li>
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
                                    <a href="mailto:goqtowncarrentals@gmail.com">
                                        <span><i className="feather feather-mail"></i></span>goqtowncarrentals@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+642102720403">
                                        <span><i className="feather feather-phone-call"></i></span>+642102720403
                                    </a>
                                </li>
                            </ul>   
                        </div>
                                                        
                    </div>
                    
                </div>
            </div>

             {isopen && (
                <>
                    {/* Backdrop overlay */}
                    <div 
                        className='fixed inset-0 bg-black bg-opacity-40 z-40'
                        onClick={() => setIsOpen(false)}
                    />
                    
                    {/* Drawer */}
                    <div className='fixed top-0 left-0 h-screen w-full bg-white z-50 overflow-y-auto'>
                        <ul className='space-y-4 mt-2'>
                            <li className='p-2 border-b border-gray-300 flex justify-between'>
                                <a href="/">Home</a>
                                <button onClick={()=>setIsOpen(false)} className='me-4 font-semibold'>X</button>
                            </li>
                            <li className='p-2 border-b border-gray-300'><a href="about-us">About</a></li>
                            <li className='p-2 border-b border-gray-300'><a href="cars">Cars</a></li>
                            <li className='p-2 border-b border-gray-300'><a href="services">Services</a></li>
                            <li className='p-2 border-b border-gray-300'><a href="pricing">Pricing</a></li>
                            <li className='p-2 border-b border-gray-300'><a href="contact-us">Contact</a></li>  
                        </ul>
                    </div>
                </>
            )}
        </header>
  )
}

export default Navbar
