import React, { useEffect } from 'react';
import AOS from 'aos';
import '../style/solution.css'
import value1 from '../images/5213375.png';



const Solution = () => {

    useEffect(() => {
        AOS.init({
            once: false, // Animation will repeat when elements re-enter the viewport
            mirror: true, // Elements animate out when scrolling past them
        });
    }, []);

    return (
        <>
            <div className="company5-section-area section-padding5">
                <div className="container">
                    <span className="font-16 font-outfit weight-500 lineh-16 color36 d-inline-block consultingspan margin-b20">How We Works</span>
                    <h1 style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: '#196C68', marginTop:'15px' }} className="font-outfit font-40 lineh-52 weight-600 colorhp11 text-capitalize">Your Trusted Partner for Visa Success Stories</h1>
                    <div className="row align-items-centers" style={{ marginTop: '50px' }}>
                        <div className="col-lg-4" style={{ textAlign: 'start' }}>
                            <div className="works-servicearea margin-b30 equel" id='setColor' data-aos="fade-right" data-aos-duration="1000">
                                <div className="worksicons5">
                                    <img src={value1} width={'34px'} height={'34px'} alt="" />
                                </div>
                                <div className="workstext">
                                    <a id='setRang' href="servicemiddle.html" className="font-outfit font-24 weight-600 color37 margin-b14 lineh-26 d-inline-block ts">Quest</a>
                                    <p className="font-outfit font-16 weight-400 lineh-26 color38 ts">At Quick Accounting we always quest for technology, innovation and new ways to reduce service delivery time. Our unique culture is crafted to have curious employees for quality.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" style={{ textAlign: 'start' }}>
                            <div className="works-servicearea margin-b30 equel" id='setColor' data-aos="fade-right" data-aos-duration="1000">
                                <div className="worksicons5">
                                    <img src={value1} width={'34px'} height={'34px'} alt="" />
                                </div>
                                <div className="workstext">
                                    <a href="servicemiddle.html" className="font-outfit font-24 weight-600 color37 margin-b14 lineh-26 d-inline-block ts">Quest</a>
                                    <p className="font-outfit font-16 weight-400 lineh-26 color38 ts">At Quick Accounting we always quest for technology, innovation and new ways to reduce service delivery time. Our unique culture is crafted to have curious employees for quality.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" style={{ textAlign: 'start' }}>
                            <div className="works-servicearea margin-b30 equel" id='setColor' data-aos="fade-right" data-aos-duration="1000">
                                <div className="worksicons5">
                                    <img src={value1} width={'34px'} height={'34px'} alt="" />
                                </div>
                                <div className="workstext">
                                    <a href="servicemiddle.html" className="font-outfit font-24 weight-600 color37 margin-b14 lineh-26 d-inline-block ts">Quest</a>
                                    <p className="font-outfit font-16 weight-400 lineh-26 color38 ts">At Quick Accounting we always quest for technology, innovation and new ways to reduce service delivery time. Our unique culture is crafted to have curious employees for quality.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-centers" style={{ marginTop: '25px' }}>
                        <div className="col-lg-4" style={{ textAlign: 'start' }}>
                            <div className="works-servicearea margin-b30 equel" id='setColor' data-aos="fade-right" data-aos-duration="1000">
                                <div className="worksicons5">
                                    <img src={value1} width={'34px'} height={'34px'} alt="" />
                                </div>
                                <div className="workstext">
                                    <a href="servicemiddle.html" className="font-outfit font-24 weight-600 color37 margin-b14 lineh-26 d-inline-block ts">Quest</a>
                                    <p className="font-outfit font-16 weight-400 lineh-26 color38 ts">At Quick Accounting we always quest for technology, innovation and new ways to reduce service delivery time. Our unique culture is crafted to have curious employees for quality.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" style={{ textAlign: 'start' }}>
                            <div className="works-servicearea margin-b30 equel" id='setColor' data-aos="fade-right" data-aos-duration="1000">
                                <div className="worksicons5">
                                    <img src={value1} width={'34px'} height={'34px'} alt="" />
                                </div>
                                <div className="workstext">
                                    <a href="servicemiddle.html" className="font-outfit font-24 weight-600 color37 margin-b14 lineh-26 d-inline-block ts">Quest</a>
                                    <p className="font-outfit font-16 weight-400 lineh-26 color38 ts">At Quick Accounting we always quest for technology, innovation and new ways to reduce service delivery time. Our unique culture is crafted to have curious employees for quality.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" style={{ textAlign: 'start' }}>
                            <div className="works-servicearea margin-b30 equel" id='setColor' data-aos="fade-right" data-aos-duration="1000">
                                <div className="worksicons5">
                                    <img src={value1} width={'34px'} height={'34px'} alt="" />
                                </div>
                                <div className="workstext">
                                    <a href="servicemiddle.html" className="font-outfit font-24 weight-600 color37 margin-b14 lineh-26 d-inline-block ts">Quest</a>
                                    <p className="font-outfit font-16 weight-400 lineh-26 color38 ts">At Quick Accounting we always quest for technology, innovation and new ways to reduce service delivery time. Our unique culture is crafted to have curious employees for quality.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Solution
