import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
                    <h1 style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: '#196C68', marginTop: '15px' }} className="font-outfit font-40 lineh-52 weight-600 colorhp11 text-capitalize">From Consultation To Delivery: One Stop Solution</h1>
                    <div className="row align-items-center" style={{ marginTop: '50px' }}>
                        <div className="col-lg-4" style={{ textAlign: 'start' }}>
                            <div className="works-servicearea margin-b30 equel" id='setColor' data-aos="fade-right" data-aos-duration="1000">
                                <div className="worksicons5">
                                    <img src={value1} width={'34px'} height={'34px'} alt="" />
                                </div>
                                <div className="workstext">
                                    <a id='setRang' href="servicemiddle.html" className="font-outfit font-24 weight-600 color37 margin-b14 lineh-26 d-inline-block ts">Initial Contact</a>
                                    <p className="font-outfit font-16 weight-400 lineh-26 color38 ts">When the meeting is scheduled, we communicate to know their expectations, objectives, budget and more. Suggestions are made for changes, new approaches are shown. Our service portfolio is shared.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" style={{ textAlign: 'start' }}>
                            <div className="works-servicearea margin-b30 equel" id='setColor' data-aos="fade-right" data-aos-duration="1000">
                                <div className="worksicons5">
                                    <img src={value1} width={'34px'} height={'34px'} alt="" />
                                </div>
                                <div className="workstext">
                                    <a href="servicemiddle.html" className="font-outfit font-24 weight-600 color37 margin-b14 lineh-26 d-inline-block ts">Data Collection</a>
                                    <p className="font-outfit font-16 weight-400 lineh-26 color38 ts">We collect all their information and records from different sources to have a 360° view of the organization. It’s the operating model and decision-making source and more. It allows us to know what changes to make.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" style={{ textAlign: 'start' }}>
                            <div className="works-servicearea margin-b30 equel" id='setColor' data-aos="fade-right" data-aos-duration="1000">
                                <div className="worksicons5">
                                    <img src={value1} width={'34px'} height={'34px'} alt="" />
                                </div>
                                <div className="workstext">
                                    <a href="servicemiddle.html" className="font-outfit font-24 weight-600 color37 margin-b14 lineh-26 d-inline-block ts">Setting Expectations</a>
                                    <p className="font-outfit font-16 weight-400 lineh-26 color38 ts">This is the time to contract services, tenure, quality, content, team allocation, fees and more. The share is communicated formally to avoid confusion.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center" style={{ marginTop: '25px' }}>
                        <div className="col-lg-4" style={{ textAlign: 'start' }}>
                            <div className="works-servicearea margin-b30 equel" id='setColor' data-aos="fade-right" data-aos-duration="1000">
                                <div className="worksicons5">
                                    <img src={value1} width={'34px'} height={'34px'} alt="" />
                                </div>
                                <div className="workstext">
                                    <a href="servicemiddle.html" className="font-outfit font-24 weight-600 color37 margin-b14 lineh-26 d-inline-block ts">Technical Implementation</a>
                                    <p className="font-outfit font-16 weight-400 lineh-26 color38 ts">We sync our tools, platforms and system with that of the client and ensure proper connection and transfer of data on our servers for secure management.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" style={{ textAlign: 'start' }}>
                            <div className="works-servicearea margin-b30 equel" id='setColor' data-aos="fade-right" data-aos-duration="1000">
                                <div className="worksicons5">
                                    <img src={value1} width={'34px'} height={'34px'} alt="" />
                                </div>
                                <div className="workstext">
                                    <a href="servicemiddle.html" className="font-outfit font-24 weight-600 color37 margin-b14 lineh-26 d-inline-block ts">Training and Awareness</a>
                                    <p className="font-outfit font-16 weight-400 lineh-26 color38 ts">Employees are made aware and trained on new software and platforms that need to be used by your business.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" style={{ textAlign: 'start' }}>
                            <div className="works-servicearea margin-b30 equel" id='setColor' data-aos="fade-right" data-aos-duration="1000">
                                <div className="worksicons5">
                                    <img src={value1} width={'34px'} height={'34px'} alt="" />
                                </div>
                                <div className="workstext">
                                    <a href="servicemiddle.html" className="font-outfit font-24 weight-600 color37 margin-b14 lineh-26 d-inline-block ts">Active Monitoring</a>
                                    <p className="font-outfit font-16 weight-400 lineh-26 color38 ts">After final delivery, active monitoring is done for changes to be made and to create more personalized services and smooth operations.</p>
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
