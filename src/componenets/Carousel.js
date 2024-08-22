/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import logo from '../images/logo-new.png';
import '../style/contact.css';
import '../style/navbar.css';


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
                  <li className="nav-item" data-aos="fade-down" data-aos-duration="1000">
                    <Link className="nav-link" to="home" smooth={true} duration={600} style={{ color: scrolled ? '#015c91' : 'white', fontWeight: '500', fontSize: '16px' }}>Home</Link>
                  </li>
                  <li className="nav-item" data-aos="fade-down" data-aos-duration="1000">
                    <Link to="about-us" smooth={true} duration={600} className="nav-link" href="https://www.ascentwealth.in/#feature-22" target="_blank" style={{ color: scrolled ? '#015c91' : 'white', fontWeight: '500', fontSize: '16px' }}>
                      About&nbsp;Us
                    </Link>
                  </li>
                  <li className="nav-item" data-aos="fade-down" data-aos-duration="1000">
                    <Link to="services" smooth={true} duration={600} className="nav-link" href="https://www.ascentwealth.in/#title-7" target="_blank" style={{ color: scrolled ? '#015c91 ' : 'white', fontWeight: '500', fontSize: '16px' }}>
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 text-end" data-aos="fade-left" data-aos-duration="1000">
              </div>
            </div>
          </div>
        </section>

        <div className="container" style={{ marginTop: "150px", paddingBottom: "118px" }}>
          <div className="row">
            <div className="col-8" style={{ marginLeft: "190px", marginTop: '30px', textAlign: 'start' }}>
              <p data-aos="zoom-in" data-aos-duration="1200" style={{ marginTop: "25px", fontSize: '45px', fontWeight: "600", fontFamily: 'ui-sans-serif', color: 'whitesmoke' }}>Customized Financial<br /> Strategies For Sustainable Growth</p>
              <p data-aos="fade-right" data-aos-duration="1200" style={{ fontSize: '17px', color: "whitesmoke", textAlign: 'left', fontWeight: '500', textShadow: "4px 4px 5px rgba(0, 0, 0, 0.1)", marginBottom: "30px" }}>
                Standards for booking and accounting have been raised in Canada, and businesses have extra headaches to handle new taxation laws while handling increasing competition. This leads to hindered progress of your business. Why not allow us to handle your accounting, taxes, laws, payroll and more? You focus on making sales supported by our proven strategies. Get a helping hand to go that extra mile.
              </p>
              <Link>
                <button to="contactUs" smooth={true} duration={600} data-aos="fade-left" data-aos-duration="1200" id="btnSubmit"><span>Contact Us</span></button>
              </Link>
            </div>
            <div className="col-4">
              {/* <form ref={form} className="form" onSubmit={sendEmail} data-aos="fade-left" data-aos-duration="1200">
                <div className='row'>
                  <h4 style={{ display: 'flex', color: 'rgb(41 239 217 / 77%)', fontWeight: '700', textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', letterSpacing: '1px' }}> Request a free consult now!</h4>
                  <div className="col form-group" data-aos="fade-up" data-aos-duration="1000">
                    <label htmlFor="name" style={{ color: 'whitesmoke', display: 'flex', fontSize: '15px' }}>Your Name (Required)</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                  </div>
                  <div className="col form-group" data-aos="fade-up" data-aos-duration="1000">
                    <label htmlFor="email" style={{ color: 'whitesmoke', display: 'flex', fontSize: '15px' }}>Your Email (Required)</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                  </div>
                </div>
                <div className="form-group" data-aos="fade-up" data-aos-duration="1000" style={{ marginTop: '20px' }}>
                  <label htmlFor="phone" style={{ color: 'whitesmoke', display: 'flex', fontSize: '15px' }}>Phone (Optional)</label>
                  <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
                </div>
                <div className="form-group" data-aos="fade-up" data-aos-duration="1000" style={{ marginTop: '20px' }}>
                  <label htmlFor="requirement" style={{ color: 'whitesmoke', display: 'flex', fontSize: '15px' }}>Tell Us About Your Requirement</label>
                  <textarea id="requirement" name="requirement" rows="4" placeholder="Describe your needs in detail"></textarea>
                </div>
                <button data-aos="fade-left" data-aos-duration="1200" id="btnSubmit"><span>Contact Us</span></button>
              </form> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
