/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../style/footer.css'
import logo from '../images/logo-new.png';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className="container">
                    <footer className="d-flex flex-column flex-md-row flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <ul className="nav col-md-4 justify-content-center justify-content-md-end">
                            <Link to="home" smooth={true} duration={600}>
                                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                            </Link>
                            <Link to="about-us" smooth={true} duration={600}>
                                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                            </Link>
                            <Link to="services" smooth={true} duration={600}>
                                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Services</a></li>
                            </Link>
                        </ul>
                        <a href="/" className="col-md-4 d-flex align-items-center justify-content-center my-3 my-md-0 link-dark text-decoration-none">
                            <img id="imgLogo" src={logo} alt="logo" className="img-fluid" />
                        </a>
                        <p className="col-md-4 text-center text-md-start mb-0 text-muted">
                            © 2024 CAD ACCOUNTING
                            <br />
                            Design & Develop with 🤍 by Shreyansh Tiwari
                        </p>
                    </footer>
                </div>
            </section>

        </>
    )
}

export default Footer
