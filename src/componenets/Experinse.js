import React, { useEffect } from 'react'
import '../style/experinse.css'
import img1 from '../images/about3-img.png'
import img2 from '../images/about4-img.png'
import img3 from '../images/about5-img.png'
import AOS from 'aos';

const Experinse = () => {
    useEffect(() => {
        AOS.init({ once: true }); // Initialize AOS
    }, []);
    return (
        <>
            <div className="about8-section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                            <div className="about2-author-images">
                                <div className="about2-scetion-images aos-init aos-animate" data-aos="zoom-out" data-aos-duration="1200">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="row" style={{ marginTop: '20px' }}>
                                    <div className="col-lg-6 aos-init" data-aos="fade-up" data-aos-duration="1200">
                                        <div className="about-2-authr1">
                                            <img src={img2} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 aos-init" data-aos="fade-up" data-aos-duration="1400">
                                        <div className="about-2-authr1">
                                            <img src={img3} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 aos-init aos-animate" data-aos="fade-left" data-aos-duration="800" style={{ textAlign: 'start' }}>
                            <div className="about-2-textarea">
                                <span className=" about8 font-ks font-16 lineh-16 color39 weight-500 margin-b20 d-inline-block">About Us</span>
                                <h1 style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: '#196C68' }} className="font-lora font-44 weight-600 lineh-52 color39 margin-b20">Maximize your potential with expert consultation.</h1>
                                <div className="pera-background1 ts">
                                    <p className="font-ks font-16 lineh-26 color-17 weight-500 ts">Ready to experience the benefits of partnering with PAE Business Consulting? Schedule a free consultation with our experienced team today and discover how our expertise can drive growth, optimize operations, and unlock your business's full potential.</p>
                                </div>
                                <p className="font-ks font-16 lineh-26 colorhp1 weight-500">Experience: Our team brings years of experience across various industries, allowing us to offer insights and strategies that are tailored to your specific business needs. Results-Driven Approach: We are committed to delivering tangible results and measurable outcomes for our clients.</p>
                                <div className="theme-btn4 margin-t32 d-inline-block margn-left aos-init" data-aos="fade-left" data-aos-duration="1400">
                                    <button data-aos="fade-left" data-aos-duration="1200" id="btnAbout"><span>About Us</span></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Experinse
