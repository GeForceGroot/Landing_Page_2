import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import logo from '../images/logo-new.png';
import '../style/contact.css';
import '../style/navbar.css';
import ring from '../images/elementor61.png'
import home from '../images/homepagewelbg.png'
import middleSvg from '../images/export4.svg'
import img1 from '../images/homeImg1.png'
import img2 from '../images/homeImg2.png'
import img3 from '../images/imgHome@.svg'
import img4 from '../images/homeImg4.png'


const Carousel = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <>
      <section id="carousel">
        <section className={`Nav ${scrolled ? 'scrolled' : ''}`} id="NavId">
          <div className="container" style={{ marginTop: "25px" }}>
            <div className="row align-items-center">
              <div className="col-md-2">
                <img id="imgLogo" src={logo} alt="logo" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <ul className="nav justify-content-center">
                  <li className="nav-item" >
                    <Link to="home" smooth={true} duration={600} className="nav-link" style={{ color: scrolled ? '#015c91' : 'white', fontWeight: '500', fontSize: '16px' }}>Home</Link>
                  </li>
                  <li className="nav-item" >
                    <Link to="about-us" smooth={true} duration={600} className="nav-link" style={{ color: scrolled ? '#015c91' : 'white', fontWeight: '500', fontSize: '16px' }}>
                      About&nbsp;Us
                    </Link>
                  </li>
                  <li className="nav-item" >
                    <Link to="services" smooth={true} duration={600} className="nav-link" style={{ color: scrolled ? '#015c91 ' : 'white', fontWeight: '500', fontSize: '16px' }}>
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="container" style={{ marginTop: "150px" }}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="header10-textarea aos-init aos-animate" data-aos="zoom-out" data-aos-duration="1000">
                <span className="font-ks lineh-16 weight-500 color aboutspan font-16 d-inline-block margin-b24">Your Personalised Financial Solutions</span>
                <h1 style={{ color: 'white', fontWeight: '600', marginBottom: "24px" }} className="font-lora font-48 lineh-54 weight-600 color margin-b24 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">Customized Financial Strategies For Sustainable Growth</h1>
                <p style={{ marginTop: "0px", marginBottom: '1rem', color: 'white' }} className="font-ks font-16 weight-500 color opacity2 lineh-26">Why not allow us to handle your accounting, taxes, laws, payroll and more? You focus on making sales supported by our proven strategies. Get a helping hand to go that extra mile.</p>
                <div className="div aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
                  <Link to="contactUs" smooth={true} duration={600}>
                  <button id="btnSubmit" className="font-16 font-ks weight-700 color lineh-16 homepagebtn10 d-inline-block margin-t32 ts"><span>Contact Us</span><span><img src="assets/images/icons/arrowben.svg" alt="" className="ts" /></span></button>
                  </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5" >
            <div className="welcome-bgarea aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1000">
              <div className="welcome-ellips aos-init aos-animate" data-aos="zoom-out" data-aos-duration="1200">
                <img src={home} alt="" className="homewelbg keyframe3" />
                <div className="elips-icon">
                  <img src={middleSvg} alt="" />
                </div>
              </div>
              <div className="welcomeellips-icon">
                <div className="ellipsarea1">
                  <div className="exportellips">
                    <img src={img1} width={'50px'} height={'50px'} alt="" className="" />
                  </div>
                  <img src={ring} alt="" className="elementor60 keyframe3" />
                </div>
              </div>

              <div className="welcomeellips-icon1">
                <div className="ellipsarea2">
                  <div className="exportellips">
                    <img src={img2} width={'50px'} height={'50px'} alt="" className="" />
                  </div>
                  <img src={ring} alt="" className="elementor60 keyframe3" />
                </div>
              </div>


              <div className="welcomeellips-icon2">
                <div className="ellipsarea3">
                  <div className="exportellips">
                    <img src={img3} width={'50px'} height={'50px'} alt="" className="" />
                  </div>
                  <img src={ring} alt="" className="elementor60 keyframe3" />
                </div>
              </div>
              <div className="welcomeellips-icon3">
                <div className="ellipsarea4">
                  <div className="exportellips">
                    <img src={img4} width={'50px'} height={'50px'} alt="" className="" />
                  </div>
                  <img src={ring} alt="" className="elementor60 keyframe3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
    </>
  );
};

export default Carousel;
