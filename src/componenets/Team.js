import React from 'react'
import '../style/team.css'
import img from '../images/kaushik.png'
import { Link } from 'react-scroll';

const TeamMember = () => {

    return (
        <>
            <div className="team-details-sectionarea section-padding5" style={{ marginTop: '25px' }}>
                <div className="container">
                    <div className="row align-items-center" id='temOClReverse'>
                        <div className="col-lg-6">
                            <div className="team-detailsimg">
                                <img
                                    btnAbout
                                    src={img}
                                    style={{ borderRadius: '15px', boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2)' }}
                                    width={'400px'}
                                    height={'400px'}
                                    alt="Team Member"
                                    id='setSize'
                                />
                            </div>
                        </div>
                        <div className="col-lg-6" id='textSet'>
                            <div className="team-detailsarea">
                                <span
                                    id='team'
                                    className="font-16 font-outfit weight-500 lineh-16 color36 d-inline-block consultingspan margin-b20"
                                    btnAbout
                                >
                                    Team Members
                                </span>
                                <h1
                                    btnAbout
                                    className="font-lora font-48 lineh-54 weight-600 color-29 margin-b"
                                    style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: '#196C68', margin: '0px' }}
                                    id='nameKau'
                                >
                                    Mr Kaushik Thakkar
                                </h1>
                                <p
                                    btnAbout
                                    className="font-16 lineh-26 weight-500 color-30 font-ks"
                                    style={{ marginTop: '20px', fontFamily: 'inherit' }}
                                >
                                    Mr Kaushik Thakkar is the backbone of Cad Bookkeeping. His vision to serve businesses to contribute to global development leads to the creation of Cad Bookkeeping. He has served lots of organisations and corporations throughout his successful career of 11+ years. He is been considered an expert in bookkeeping, accounting, payroll management, internal audits, and filing taxes at the international level. He has allied with CPAs and CAs in various nations to create a strong network of professionals to support you in peak seasons and for your international operations.
                                </p>
                                <Link to="contactUs" smooth={true} duration={600}>
                                    <button
                                        btnAbout
                                        id="btnContact"
                                    >
                                        <span>Get In Touch</span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamMember
