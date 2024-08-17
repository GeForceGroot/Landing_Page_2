/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../style/footer.css'
import logo from '../images/logo-new.png';

const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className="container">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <p className="col-md-4 mb-0 text-muted">© 2024 CAD ACCOUNTING
                            <br />
                            Design & Develop with 🤍 by Shreyansh Tiwari
                        </p>

                        <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                            <img id="imgLogo" src={logo} alt="logo" className="img-fluid" />
                        </a>

                        <ul className="nav col-md-4 justify-content-end">
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Services</a></li>
                        </ul>
                    </footer>
                </div>
            </section>
        </>
    )
}

export default Footer
