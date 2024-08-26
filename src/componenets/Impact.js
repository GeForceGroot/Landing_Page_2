import React from 'react'
import '../style/impact.css'
import img2 from '../images/co.png'
import img3 from '../images/ex.png'
import img5 from '../images/exp.png'
import img6 from '../images/pro.png'

const Impact = () => {
    return (
        <>
            <div className="servicebenefites8-section-area section-padding8">
                <div className="container">
                    <span className="about8 font-ks font-16 lineh-16 color39 weight-500 margin-b20 d-inline-block">Why not someone else?</span>
                    <h1 style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: '#196C68', marginTop:'15px' }} className="font-outfit font-40 lineh-52 weight-600 colorhp11 text-capitalize">Because Continuous Development<br/> And Adaptability Matters</h1>
                    <div className="row" style={{ textAlign: 'start', marginTop:'25px'}}>
                        <div className="col-lg-6" id='setExp'>
                            <div className="servicebrne8area margin-b30">
                                <div className="servicebene-icons ts">
                                    <img src={img5} width={'38px'} height={'38px'} alt="" className="ts" />
                                </div>
                                <a href="servicemiddle.html" style={{textDecoration:'none'}} className="font-20 lineh-20 weight-600 color39 d-inline-block margin-b14 font-lora ts">Experience</a>
                                <p className="font-16 weight-500 font-ks colorhp1 lineh-26 ts">Experimenting with quality could be harmful; when having professionals at your service. Our experiences leads to your success.</p>
                            </div>
                        </div>

                        <div className="col-lg-6" id='setExp'>
                            <div className="servicebrne8area margin-b30">
                                <div className="servicebene-icons ts">
                                    <img src={img2} width={'38px'} height={'38px'} alt="" className="ts" />
                                </div>
                                <a href="servicemiddle.html" style={{textDecoration:'none'}} className="font-20 lineh-20 weight-600 color39 d-inline-block margin-b14 font-lora ts">Tailored solutions</a>
                                <p className="font-16 weight-500 font-ks colorhp1 lineh-26 ts">Get the same service distributed differently as per your industry, operations, resources and client base.</p>
                            </div>
                        </div>

                        <div className="col-lg-6" id='setExp'>
                            <div className="servicebrne8area margin-b30">
                                <div className="servicebene-icons ts">
                                    <img src={img3} width={'38px'} height={'38px'} alt="" className="ts" />
                                </div>
                                <a href="servicemiddle.html" style={{textDecoration:'none'}} className="font-20 lineh-20 weight-600 color39 d-inline-block margin-b14 font-lora ts">Client relationship</a>
                                <p className="font-16 weight-500 font-ks colorhp1 lineh-26 ts">Our top priority is to maintain relations. We aim to grow in the northern region effectively growing our client base.</p>
                            </div>
                        </div>

                        <div className="col-lg-6" id='setExp'>
                            <div className="servicebrne8area margin-b30">
                                <div className="servicebene-icons ts">
                                    <img src={img6} width={'38px'} height={'38px'} alt="" className="ts" />
                                </div>
                                <a href="servicemiddle.html" style={{textDecoration:'none'}} className="font-20 lineh-20 weight-600 color39 d-inline-block margin-b14 font-lora ts">Streamline processes</a>
                                <p className="font-16 weight-500 font-ks colorhp1 lineh-26 ts">Procedures and policies need to be adapted to changing trends. At Cad Bookkeeping we upgrade it for you.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Impact
