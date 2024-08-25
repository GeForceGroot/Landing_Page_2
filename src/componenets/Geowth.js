/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React from 'react'
import '../style/growth.css'
import img from '../images/gr.png'
import check from '../images/check1.png'

const Geowth = () => {
    return (
        <>
            <div className="company-section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 aos-init aos-animate" data-aos="fade-left" data-aos-duration="800" style={{ textAlign: 'start' }}>
                            <div className="company-progress-area">
                                <span className="maximum font-outfit font-16 lineh-16 color-12 weight-500 margin-b20 d-inline-block">Company Progress</span>
                                <h1 style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: '#196C68' }} className="font-outfit font-44 weight-600 lineh-52 color-17 margin-b20">Let's Watch Your KPIs Grow!</h1>
                                <div class="price-list">
                                    <ul>
                                        <li class="font-outfit font-16 weight-600 color37 ts"><span><img src={check} width={'13px'} height={'13px'}></img></span> Business Planning</li>
                                        <li class="font-outfit font-16 weight-600 color37 ts"><span><img src={check} width={'13px'} height={'13px'}></img></span> Next Genaration Accounting</li>
                                        <li class="font-outfit font-16 weight-600 color37 ts"><span><img src={check} width={'13px'} height={'13px'}></img></span> Tax Prepration and Planning</li>
                                        <li class="font-outfit font-16 weight-600 color37 ts"><span><img src={check} width={'13px'} height={'13px'}></img></span> Financial Freedom Consulting</li>
                                        <li class="font-outfit font-16 weight-600 color37 ts"><span><img src={check} width={'13px'} height={'13px'}></img></span> Purposive Business Planning</li>
                                        <li class="font-outfit font-16 weight-600 color37 ts"><span><img src={check} width={'13px'} height={'13px'}></img></span> Corporate Finance</li>
                                        <li class="font-outfit font-16 weight-600 color37 ts"><span><img src={check} width={'13px'} height={'13px'}></img></span> International Business </li>
                                        <li class="font-outfit font-16 weight-600 color37 ts"><span><img src={check} width={'13px'} height={'13px'}></img></span> Business Finance Planning</li>
                                        <li class="font-outfit font-16 weight-600 color37 ts"><span><img src={check} width={'13px'} height={'13px'}></img></span> Business Strategy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 aos-init aos-animate" data-aos="zoom-out" data-aos-duration="800">
                            <div className="company-images">
                                <img src={img}  alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Geowth
