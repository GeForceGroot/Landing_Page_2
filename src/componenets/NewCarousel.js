import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import logo from '../images/logo-new.png';
import '../style/contact.css';
import '../style/navbar.css';
const NewCarousel = () => {
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

                <div className="container custom-container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12 custom-content">
                            <p data-aos="zoom-in" data-aos-duration="1200" className="custom-title">Customized Financial<br /> Strategies For Sustainable Growth</p>
                            <p data-aos="fade-right" data-aos-duration="1200" className="custom-description">
                                Standards for booking and accounting have been raised in Canada, and businesses have extra headaches to handle new taxation laws while handling increasing competition. This leads to hindered progress of your business. Why not allow us to handle your accounting, taxes, laws, payroll and more? You focus on making sales supported by our proven strategies. Get a helping hand to go that extra mile.
                            </p>
                            <Link>
                                <button to="contactUs" smooth={true} duration={600} data-aos="fade-left" data-aos-duration="1200" id="btnSubmit"><span>Contact Us</span></button>
                            </Link>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default NewCarousel
