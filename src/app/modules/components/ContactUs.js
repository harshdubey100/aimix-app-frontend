import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './assets/Logo.png';

function ContactUs() {
  return (
    <div className="container py-5" style={{ marginTop: '80px' }}>
      

      <div className="text-center mb-5">
        <img src={Logo} alt="Logo" width="80" className="mb-3" />
        <h2>Contact Us</h2>
        <p className="text-muted">We'd love to hear from you. Please fill out the form below.</p>
      </div>

      <div className="row">
        

        <div className="col-md-7 mb-4">
          <form>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" placeholder="John Doe" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="you@example.com" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input type="text" className="form-control" placeholder="Subject" />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" placeholder="Your message..." required></textarea>
            </div>

            <button type="submit" className="btn btn-primary px-4">Send Message</button>
          </form>
        </div>

        
        <div className="col-md-5">
          <div className="bg-light p-4 rounded shadow-sm">
            <h5>Our Office</h5>
            <p className="mb-2">123 Tech Street,<br />New Delhi, India 110001</p>

            <h6>Email</h6>
            <p className="mb-2">support@example.com</p>

            <h6>Phone</h6>
            <p>+91 9876543210</p>

            <h6>Working Hours</h6>
            <p>Mon – Fri: 9AM – 6PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
