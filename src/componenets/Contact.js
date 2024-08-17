import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import img from '../images/contact.adff68c5dcc9005ceb1a5566aaf4440b.svg';
import '../style/contact.css';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            requirement: e.target.requirement.value,
        };

        const emailContent = `
          Name: ${formData.name}\n
          Email: ${formData.email}\n
          Phone: ${formData.phone}\n
          Requirement: ${formData.requirement}
        `;

        const emailParams = {
            to_name: 'Recipient Name',
            from_name: formData.name,
            from_email: formData.email,
            message: emailContent,
        };

        emailjs.send('service_s9yl39f', 'template_d1jwppl', emailParams, 'Ef5elHS0NNiPr2U6U')
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                form.current.reset(); // Reset the form fields
                alert('Thank you! I will get back to you as soon as possible!');
            })
            .catch((error) => {
                console.error('There was an error sending the email:', error);
                alert('Error during sending mail');
            });
    };
    return (
        <>
            <div className="company5-section-area section-padding5" style={{ background: '#F8FAFC' }}>
                <div className="container">
                    <span className="font-16 font-outfit weight-500 lineh-16 color36 d-inline-block consultingspan margin-b20">Get in touch</span>
                    <h1 style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: '#196C68', marginTop: '15px' }} className="font-outfit font-40 lineh-52 weight-600 colorhp11 text-capitalize">Your Trusted Partner for Visa Success Stories</h1>
                    <div className="row align-items-centers" style={{ marginTop: '25px' }}>
                        <div className="col-lg-6" style={{ textAlign: 'end' }}>
                            <div className="margin-b30 equel" data-aos="fade-right" data-aos-duration="1000">
                                <div className="contactImg">
                                    <img src={img} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" >
                            <div className="margin-b30 equel" id='setColor' data-aos="fade-right" data-aos-duration="1000" style={{marginTop:'70px'}}>
                                <form ref={form} className="form" onSubmit={sendEmail} data-aos="fade-left" data-aos-duration="1200">
                                    <div className='row'>
                                        <h4 style={{ display: 'flex', color: '#196C68', fontWeight: '700', textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', letterSpacing: '1px' }}> Request a free consult now!</h4>
                                        <div className="col form-group" data-aos="fade-up" data-aos-duration="1000">
                                            <label htmlFor="name" style={{ color: 'black', display: 'flex', fontSize: '15px' }}>Your Name (Required)</label>
                                            <input type="text" id="name" name="name" placeholder="Enter your name" required />
                                        </div>
                                        <div className="col form-group" data-aos="fade-up" data-aos-duration="1000">
                                            <label htmlFor="email" style={{ color: 'black', display: 'flex', fontSize: '15px' }}>Your Email (Required)</label>
                                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                                        </div>
                                    </div>
                                    <div className="form-group" data-aos="fade-up" data-aos-duration="1000" style={{ marginTop: '20px' }}>
                                        <label htmlFor="phone" style={{ color: 'black', display: 'flex', fontSize: '15px' }}>Phone (Optional)</label>
                                        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
                                    </div>
                                    <div className="form-group" data-aos="fade-up" data-aos-duration="1000" style={{ marginTop: '20px' }}>
                                        <label htmlFor="requirement" style={{ color: 'black', display: 'flex', fontSize: '15px' }}>Tell Us About Your Requirement</label>
                                        <textarea id="requirement" name="requirement" rows="4" placeholder="Describe your needs in detail"></textarea>
                                    </div>
                                    <button data-aos="fade-left" data-aos-duration="1200" id="btnSubmit"><span>Contact Us</span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
