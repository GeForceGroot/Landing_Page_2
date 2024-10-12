/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React from 'react';
import '../style/growth.css';
import img from '../images/gr.png';
import check from '../images/check1.png';

const Geowth = () => {
    return (
        <>
            <div className="company-section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" style={{ textAlign: 'start' }}>
                            <div className="company-progress-area">
                                <span className="maximum font-outfit font-16 lineh-16 color-12 weight-500 margin-b20 d-inline-block">Company Progress</span>
                                <h1 style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: '#196C68' }} className="font-outfit font-44 weight-600 lineh-52 color-17 margin-b20">Let's Watch Your KPIs Grow!</h1>
                                <div className="price-list">
                                    <ul>
                                        <li className="font-outfit font-16 weight-600 color37 ts">
                                            <span><img src={check} width={'13px'} height={'13px'} /></span> Setting accounting charts and customising them.
                                        </li>
                                        <li className="font-outfit font-16 weight-600 color37 ts">
                                            <span><img src={check} width={'13px'} height={'13px'} /></span> Payroll management and tracking
                                        </li>
                                        <li className="font-outfit font-16 weight-600 color37 ts">
                                            <span><img src={check} width={'13px'} height={'13px'} /></span> Ensure the best accounts payable and save more, always
                                        </li>
                                        <li className="font-outfit font-16 weight-600 color37 ts">
                                            <span><img src={check} width={'13px'} height={'13px'} /></span> Preparing financial statements in the locally approved formats
                                        </li>
                                        <li className="font-outfit font-16 weight-600 color37 ts">
                                            <span><img src={check} width={'13px'} height={'13px'} /></span> Custom report generation and delivery
                                        </li>
                                        <li className="font-outfit font-16 weight-600 color37 ts">
                                            <span><img src={check} width={'13px'} height={'13px'} /></span> Identify potential operational risks
                                        </li>
                                        <li className="font-outfit font-16 weight-600 color37 ts">
                                            <span><img src={check} width={'13px'} height={'13px'} /></span> Measure and manage performance
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="company-images">
                                <img src={img} alt="Growth Visualization" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Geowth;
