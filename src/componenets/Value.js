import React from 'react'
import '../style/value.css'
import img1 from '../images/service11-img1.png'
import img2 from '../images/service11-img2.png'
import img3 from '../images/service11-img3.png'
import svg from '../images/servicevector4.svg'
const Value = () => {
    return (
        <>

            <div className="service11-section-area section-padding8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="service11-header text-center margin-b60">
                                <span className="font-outfit font-16 lineh-16 weight-500 color-h12 aroplan3 d-inline-block margin-b24">Our Service</span>
                                <h1 style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: '#196C68' }} className="font-outfit font-40 lineh-52 weight-600 colorhp11 text-capitalize">Your Trusted Partner for Visa Success Stories</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1200" data-aos-easing="linear">
                            <div className="service11-boxarea text-center">
                                <div className="service11-img">
                                    <img src={img1} width={'27px'} height={'40px'} alt="" />
                                </div>
                                <div className="service11-boxtext service12box text-center">
                                    <h5 href="servicemiddle.html" className="font-outfit font-20 lineh-30 weight-600 colorhp11 d-inline-block margin-b ts">Visa Sage Consultancy</h5>
                                    <p className="font-16 font-outfit weight-400 colorhp12 margin-b24 ts">Our dedicated team of experienced to  immigration experts is here to guide in so you through every step of the process.</p>
                                </div>
                                <div className="service-vectorarea servicevector ts">
                                    <img src={svg} alt="" className="ts" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-right" data-aos-duration="800" data-aos-easing="linear">
                            <div className="service11-boxarea text-center">
                                <div className="service11-img">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="service11-boxtext service12box text-center">
                                    <h5 href="servicemiddle.html" className="font-outfit font-20 lineh-30 weight-600 colorhp11 d-inline-block margin-b ts">Visa Link Solutions</h5>
                                    <p className="font-16 font-outfit weight-400 colorhp12 margin-b24 ts">Our dedicated team of experienced to  immigration experts is here to guide in so you through every step of the process.</p>
                                </div>
                                <div className="service-vectorarea servicevector ts">
                                    <img src={svg} alt="" className="ts" />
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-right" data-aos-duration="600" data-aos-easing="linear">
                            <div className="service11-boxarea text-center">
                                <div className="service11-img">
                                    <img src={img3} alt="" />
                                </div>
                                <div className="service11-boxtext service12box text-center">
                                    <h5 href="servicemiddle.html" className="font-outfit font-20 lineh-30 weight-600 colorhp11 d-inline-block margin-b ts">Immigration Expertise</h5>
                                    <p className="font-16 font-outfit weight-400 colorhp12 margin-b24 ts">Our dedicated team of experienced to  immigration experts is here to guide in so you through every step of the process.</p>
                                </div>
                                <div className="service-vectorarea servicevector ts">
                                    <img src={svg} alt="" className="ts" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 m-auto" style={{display:'flex', justifyContent:'center'}}>
                            <div className="about-three__content-btn text-center aos-init" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                                <a href="servicev2.html" id='btnKnow' className="thm-btn thmbtn12 font-16 lineh-16 font-outfit weight-500 color" data-text="View More Services"><span>View More Services</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Value
