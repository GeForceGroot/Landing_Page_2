import React, { useEffect } from 'react';
import '../style/experinse.css';
import img from '../images/about.f759d21a49b78240c207.jpg';
import 'aos/dist/aos.css';
import AOS from 'aos';

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
                                    data-aos="fade-up" data-aos-duration="1200"
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
                        <div className="text-col" data-aos="fade-left" data-aos-duration="800" style={{ textAlign: 'start' }}>
                            <div className="text-wrapper">
                                <span className="font-outfit font-16 lineh-16 weight-500 color-h12 aroplan3 d-inline-block margin-b24">Our Service</span>
                                <h1 style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: '#196C68' }} className="font-outfit font-40 lineh-52 weight-600 colorhp11 text-capitalize">Your Trusted Partner for Visa Success Stories</h1>
                                <h6 className="section-heading">
                                    We're a global stakeholder
                                    relations and partnership
                                    building consultancy.
                                </h6>
                                <p className="section-description">
                                    Get instant helpful resources about anything on the go,
                                    easily implement secure money transfer solutions, boost
                                    your daily efficiency, connect to other app users and create
                                    your own Techwind network, and much more with just a few
                                    taps. commodo consequat. Duis aute irure.
                                </p>

                                <button data-aos="fade-left" data-aos-duration="1000" id="btnAbout"><span>About Us</span></button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experinse;
