import React, { useEffect } from 'react'
import '../style/team.css'
import img from '../images/kaushik.png'
import AOS from 'aos';

const TeamMember = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200,  // Default duration for all animations
            once: false,      // Whether animation should happen only once - while scrolling down
            mirror: true,     // Whether elements should animate out while scrolling past them
        });
    }, []);
    return (
        <>
            <div className="team-details-sectionarea section-padding5" style={{ marginTop: '25px' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="team-detailsimg">
                                <img
                                    data-aos="zoom-in"
                                    data-aos-offset="200"
                                    data-aos-duration="1200"
                                    src={img}
                                    style={{ borderRadius: '15px', boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2)' }}
                                    width={'400px'}
                                    height={'400px'}
                                    alt="Team Member"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6" style={{ textAlign: 'start', paddingTop: '50px' }}>
                            <div className="team-detailsarea">
                                <span
                                    id='team'
                                    className="font-16 font-outfit weight-500 lineh-16 color36 d-inline-block consultingspan margin-b20"
                                    data-aos="fade-right"
                                    data-aos-offset="200"
                                    data-aos-duration="1200"
                                >
                                    Team Members
                                </span>
                                <h1
                                    data-aos="fade-right"
                                    data-aos-offset="200"
                                    data-aos-duration="1200"
                                    className="font-lora font-48 lineh-54 weight-600 color-29 margin-b"
                                    style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: '#196C68', margin: '0px' }}
                                >
                                    Mr Kaushik Thakkar
                                </h1>
                                <p
                                    data-aos="fade-right"
                                    data-aos-offset="200"
                                    data-aos-duration="1200"
                                    className="font-16 lineh-26 weight-500 color-30 font-ks"
                                    style={{ marginTop: '20px', fontFamily: 'inherit' }}
                                >
                                    Mr Kaushik Thakkar is our managing director who has successfully managed and saved bookkeeping and other operations for several organisations. With more than 11 years of experience working in dynamic industries in the USA, Canada, UK, Australia and India. He has expertise in GST/HST, sales tax, bookkeeping, accounting, budgets, audits, payrolls and more. His alliance with various CPAs and CAs across these countries leads to excellent international law support and compliance with international standards. Mr Kaushik Never sets back from learning.
                                </p>
                                <button
                                    className='aos-init'
                                    data-aos="fade-left"
                                    data-aos-offset="100"
                                    data-aos-duration="1200"
                                    id="btnContact"
                                >
                                    <span>Get In Touch</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamMember
