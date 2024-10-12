import React from 'react'
import '../style/service.css'
import logo from '../images/b.png'
import img1 from '../images/4720378.png'
import img2 from '../images/1.png'
import img3 from '../images/s.png'
import img4 from '../images/r.png'
import img5 from '../images/d.png'
import img6 from '../images/e.png'
import img7 from '../images/g.png'
import img8 from '../images/a.png'
import img9 from '../images/st.png'
import img10 from '../images/cs.svg'
import img11 from '../images/payroll.png'

const Service = () => {
    return (
        <>
            <div className="service2-section-areas section-padding8">
                <img src="assets/images/elementor/elementor9.png" alt="" className="elementoe5" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-haeder-text text-center margin-b60">
                                <span className="maximum font-outfit font-16 lineh-16 color-12 weight-500 margin-b20 d-inline-block">You’re Goals In Our Way</span>
                                <h1 className="font-outfit font-44 weight-600 lineh-52 color-17 margin-b20" style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: '#196C68' }}>Your Financial Clarity Is Our Top Priority</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="service-after-before">
                                <div className="service2-icon">
                                    <img src={img1} width={'38px'} height={'38px'} alt="Outsourcing" />
                                </div>
                                <h3 className="font-outfit font-22 weight-600 lineh-22 color-17 margin-b">Outsourcing</h3>
                                <ul className='listStyle'>
                                    <li>Bookkeeping and Year-end finalization</li>
                                    <li>Payroll preparation and filing</li>
                                    <li>Sales tax (GST/PST/HST) preparation and filing</li>
                                    <li>Accounts Receivable/Payable Management</li>
                                    <li>Tax return preparation, review and filing</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-after-before">
                                <div className="service2-icon">
                                    <img src={logo} width={'38px'} height={'38px'} alt="Bookkeeping" />
                                </div>
                                <h3 className="font-outfit font-22 weight-600 lineh-22 color-17 margin-b">Bookkeeping</h3>
                                <ul className='listStyle'>
                                    <li>Entry of Bills, Invoices and Payroll reports</li>
                                    <li>Record Bank and Credit Card tranactions</li>
                                    <li>Bank and credit card reconciliations</li>
                                    <li>Promptly address client Queries</li>
                                    <li>Bookkeeping Review and Management reports</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-after-before">
                                <div className="service2-icon">
                                    <img src={img2} width={'38px'} height={'38px'} alt="Financial Forecasting" />
                                </div>
                                <h3 className="font-outfit font-22 weight-600 lineh-22 color-17 margin-b"> GST/HST/PST</h3>
                                <ul className='listStyle'>
                                    <li>Record every transactions</li>
                                    <li>Cross-check transactions</li>
                                    <li>Verify credits and exemptions</li>
                                    <li>Ensure accurate, timely filing</li>
                                    <li>Stay compliant with regulations.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-after-before">
                                <div className="service2-icon">
                                    <img src={img3} width={'38px'} height={'38px'} alt="Virtual CFO Solutions" />
                                </div>
                                <h3 className="font-outfit font-22 weight-600 lineh-22 color-17 margin-b">Payroll - Canada</h3>
                                <ul className='listStyle'>
                                    <li>Time and Attendance verifying</li>
                                    <li>Paystub of hourly & salaried based staff</li>
                                    <li>Canada tax - T1, T2 and T3 tax return filings</li>
                                    <li>941, 940, Withholding Tax and Unemployement</li>
                                    <li>Payroll Reconiliation at year-end</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-after-before">
                                <div className="service2-icon">
                                    <img src={img4} width={'38px'} height={'38px'} alt="Virtual Accountants" />
                                </div>
                                <h3 className="font-outfit font-22 weight-600 lineh-22 color-17 margin-b">Accounts Payable/Receivable</h3>
                                <ul className='listStyle'>
                                    <li>Record Vendor bill and Customer Invoice</li>
                                    <li>Payment processing for Bill and Invoice</li>
                                    <li>Analyst AP Aging and AR Aging</li>
                                    <li>Vendor reconiliations and reports</li>
                                    <li>Automation and Technology Integration</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-after-before">
                                <div className="service2-icon">
                                    <img src={img5} width={'38px'} height={'38px'} alt="Compliance Management" />
                                </div>
                                <h3 className="font-outfit font-22 weight-600 lineh-22 color-17 margin-b">Tax -  Canada</h3>
                                <ul className='listStyle'>
                                    <li>Canada tax - T1, T2 and T3 tax return filings</li>
                                    <li>Tax Planning Strategies & Expert Advice</li>
                                    <li>Audit Representation</li>
                                    <li>Avoiding fines & interests</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-after-before">
                                <div className="service2-icon">
                                    <img src={img6} width={'38px'} height={'38px'} alt="Payroll Management" />
                                </div>
                                <h3 className="font-outfit font-22 weight-600 lineh-22 color-17 margin-b">Audit</h3>
                                <ul className='listStyle'>
                                    <li>Federal/State Tax Audit</li>
                                    <li>Payroll Audit</li>
                                    <li>GST/HST Audit</li>
                                    <li>Unemployment Tax Audit</li>
                                    <li>Complied Federal/State tax Law</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-after-before">
                                <div className="service2-icon">
                                    <img src={img7} width={'38px'} height={'38px'} alt="Data Processing" />
                                </div>
                                <h3 className="font-outfit font-22 weight-600 lineh-22 color-17 margin-b">Business consulting & CFO</h3>
                                <ul className='listStyle'>
                                    <li>Strategic Financial Planning & Analysis</li>
                                    <li>Cash Flow Management & Forecasting</li>
                                    <li>Budgeting & Financial Reporting</li>
                                    <li>Business Performance Improvement</li>
                                    <li>Risk Management & Compliance</li>
                                </ul>
                            </div>
                        </div> <div className="col-lg-4 col-md-6">
                            <div className="service-after-before">
                                <div className="service2-icon">
                                    <img src={img7} width={'38px'} height={'38px'} alt="Data Processing" />
                                </div>
                                <h3 className="font-outfit font-22 weight-600 lineh-22 color-17 margin-b">Financial planning and analysis</h3>
                                <ul className='listStyle'>
                                    <li>Budgeting & Forecasting</li>
                                    <li>Cash Flow Analysis</li>
                                    <li>Financial Modeling</li>
                                    <li>Performance Metrics & KPIs</li>
                                    <li>Cost-Benefit Analysis</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
