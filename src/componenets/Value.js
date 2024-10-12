import React from 'react';
import '../style/value.css';
import img1 from '../images/service11-img1.png';
import img2 from '../images/service11-img2.png';
import img3 from '../images/service11-img3.png';
import svg from '../images/servicevector4.svg';
import { Link } from 'react-scroll';

const Value = () => {
    return (
        <div className="service11-section-area section-padding8">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-10 m-auto">
                        <div className="service11-header text-center margin-b60">
                            <span className="font-outfit font-16 lineh-16 weight-500 color-h12 aroplan3 d-inline-block margin-b24">Our Values</span>
                            <h1 className="header-title font-outfit font-40 lineh-52 weight-600 colorhp11 text-capitalize">Your Trusted Partner for Visa Success Stories</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service11-boxarea text-center">
                            <div className="service11-img">
                                <img src={img1} width={'27px'} height={'40px'} alt="" />
                            </div>
                            <div className="service11-boxtext service12box text-center">
                                <h5 className="font-outfit font-20 lineh-30 weight-600 colorhp11 d-inline-block margin-b ts">Expertise and Knowledge</h5>
                                <p className="font-16 font-outfit weight-400 colorhp12 margin-b24 ts">Our team is comprised of experienced professionals with deep knowledge of visa regulations and processes. <br />We leverage our expertise to navigate complex immigration landscapes effectively.</p>
                            </div>
                            <div className="service-vectorarea servicevector ts">
                                <img src={svg} alt="" className="ts" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service11-boxarea text-center">
                            <div className="service11-img">
                                <img src={img2} alt="" />
                            </div>
                            <div className="service11-boxtext service12box text-center">
                                <h5 className="font-outfit font-20 lineh-30 weight-600 colorhp11 d-inline-block margin-b ts">Collaboration</h5>
                                <p className="font-16 font-outfit weight-400 colorhp12 margin-b24 ts">We work closely with clients, legal experts, and governmental bodies to ensure the best outcomes. <br />Building strong relationships with stakeholders enhances our effectiveness.</p>
                            </div>
                            <div className="service-vectorarea servicevector ts">
                                <img src={svg} alt="" className="ts" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service11-boxarea text-center">
                            <div className="service11-img">
                                <img src={img3} alt="" />
                            </div>
                            <div className="service11-boxtext service12box text-center">
                                <h5 className="font-outfit font-20 lineh-30 weight-600 colorhp11 d-inline-block margin-b ts">Client-Centric Approach</h5>
                                <p className="font-16 font-outfit weight-400 colorhp12 margin-b24 ts">We prioritize understanding our clients’ unique needs and goals.<br />Personalized support is provided throughout the visa process, ensuring a smooth experience.</p>
                            </div>
                            <div className="service-vectorarea servicevector ts">
                                <img src={svg} alt="" className="ts" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 m-auto" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="about-three__content-btn text-center">
                            <Link to="services" smooth={true} duration={600}>
                                <button id='btnKnow' className="thm-btn thmbtn12 font-16 lineh-16 font-outfit weight-500 color" data-text="View More Services"><span>View More Services</span></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Value;
