import React from 'react';
import './css/global.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import LoginForm from './pages/LoginForm';
import backgroundImage from '../app/modules/components/assets/backgroundimg.png';

function Welcome() {
  return (
    <div>
      <Header />

      
      <div
        className="container-fluid"
        style={{
          marginTop: '80px',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '80vh',
          padding: '50px 0',
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-white">
              <h1 style={{ fontSize: '50px' }}>
                Bharat’s <span style={{ color: '#6a32e3' }}>Trusted & Affordable</span> Educational Platform
              </h1>
              <p>Please log in or register to continue...</p>
            </div>

            <div className="col-md-6 d-flex justify-content-center">
              <div style={{ width: '100%', maxWidth: '500px', marginTop: '150px' }}>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Quality Content</h5>
                <p className="card-text">Learn from expert educators through well-structured materials and live classes.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Affordable Pricing</h5>
                <p className="card-text">Access high-quality education without breaking the bank. Flexible plans available.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Trusted by Students</h5>
                <p className="card-text">Join thousands of satisfied students across Bharat who trust us for their education.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Welcome;
