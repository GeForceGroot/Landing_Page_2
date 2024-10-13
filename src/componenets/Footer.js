/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../style/footerStyle.css';
import img from '../images/logo 1 (2).png';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <>
            <div className="footer-section">
                <div className="container" style={{ paddingTop: '70px' }}>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-logo-text">
                                <img src={img} alt="Logo" className="footer-logo" />
                                <p className="footer-description">
                                    No matter what your business size or industry is, our one-stop solutions are designed to adapt to any situation. Once satisfied then we proceed with the final delivery process.
                                    <br />
                                    Schedule a meeting to discuss your technical issues and we will help you with our uniquely crafted solutions just for you. Mail us now.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-links">
                                <h2 className="footer-title">Links</h2>
                                <ul style={{ marginTop: '60px' }}>
                                    <li><Link to="about-us" smooth={true} duration={1000} className="footer-link" style={{ cursor: 'pointer' }}>About Us</Link></li>
                                    <li><Link to="services" smooth={true} duration={1000} className="footer-link">Service</Link></li>
                                    <li><Link to="home" smooth={true} duration={1000} className="footer-link">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-contact">
                                <h2 className="footer-title">Contact Us</h2>
                                <a href="mailto:Info@cadbookkeping.com" className="footer-contact-link">
                                    <div className="footer-contact-info" style={{ marginTop: "50px" }}>
                                        <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" className="footer-icon" />
                                        Info@cadbookkeping.com
                                    </div>
                                </a>
                                <a href='https://maps.app.goo.gl/pwddKZfh7rtbkmcUA'>
                                <div className="footer-contact-info">
                                    <img src="https://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-Home-icon.png" className="footer-icon" />
                                    <a href="https://maps.app.goo.gl/pwddKZfh7rtbkmcUA" className="footer-contact-link">2482 Yonge Street Toronto, ON M4P 2H5 Canada</a>
                                </div>
                                </a>
                                <div className="footer-contact-info">
                                    <img src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/256/Phone-icon.png" className="footer-icon" />
                                    <a href="tel:+13155576525" className="footer-contact-link">+1 (315)-557-6525</a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-divider"></div>
                        <div className="footer-copyright text-center">
                            <p>&copy; 2024 <a href="https://intqbooks.com/">Cad Bookkeeping</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
