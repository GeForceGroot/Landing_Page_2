import React, { useEffect } from 'react';
import '../style/experinse.css';
import img from '../images/about.f759d21a49b78240c207.jpg';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-scroll';

const Experinse = () => {
    useEffect(() => {
        AOS.init({ once: false }); // Initialize AOS with once set to false
    }, []);

    useEffect(() => {
        AOS.refresh(); // Refresh AOS after initial load to ensure all animations work correctly
    });

    return (
        <>
            <section className="about-section" id="about">
                <div className="container">
                    <div className="grid-container" data-aos="fade-right" data-aos-duration="1000">
                        {/* <!-- Image Section --> */}
                        <div className="image-col">
                            <div className="image-wrapper">
                                <img
                                    src={img}
                                    className="profile-image"
                                    alt="About Us"
                                    data-aos="fade-right" data-aos-duration="1400"
                                />
                                <div className="experience-overlay">
                                    <div className="experience-content">
                                        <span className="experience-years">
                                            <span className="counter-value">15</span>+
                                        </span>
                                        <span className="experience-text">Years <br /> Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Text Section --> */}
                        <div className="text-col" data-aos="fade-left" data-aos-duration="1000" style={{ textAlign: 'start' }}>
                            <div className="text-wrapper">
                                <span className="font-outfit font-16 lineh-16 weight-500 color-h12 aroplan3 d-inline-block margin-b24">About Us</span>
                                <h1 style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: '#196C68' }} className="font-outfit font-40 lineh-52 weight-600 colorhp11 text-capitalize">Immense presence supported by years of experience</h1>
                                <h6 className="section-heading">
                                    Integrity, Trust, Partnership, Success
                                </h6>
                                <p className="section-description">
                                    Do you want to know us better before working with us? This is important as well. Cad Bookkeeping is a result of years of market research about how existing organisations work, and what is that they are lacking about client deliverers. We have summarised those customisation points that the majority of organisations do not provide. Customer relationship is the priority value that allows us to integrate and create the trust required for your business success.
                                </p>
                                <p className="section-description">
                                    <strong>Vision :- </strong>At Cad Bookkeeping we aim to become a complete operational solution provider for business operations across the globe. Our vision is to be the backbone of growing business across all industries.
                                </p>
                                <p className="section-description">
                                    <strong>Mission :-</strong>It is our vision to be the most prioritised business service provider in northern regions or a majority of business operation services.
                                </p>
                                <Link to="about-us" smooth={true} duration={600}>
                                    <button data-aos="fade-left" data-aos-duration="1000" id="btnAbout"><span>About Us</span></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experinse;
