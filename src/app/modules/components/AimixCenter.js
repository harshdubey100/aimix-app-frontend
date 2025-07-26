import React from 'react';
import { Link } from 'react-router-dom';

function AiMixCenter() {
  return (
    <div className="container mt-5 pt-4">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Welcome to AiMix Center</h1>
        <p className="lead">Your personal dashboard to manage your learning, profile, and more.</p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">My Courses</h5>
              <p className="card-text">Access all your enrolled courses in one place.</p>
              <Link to="/dashboard/courses" className="btn btn-outline-primary">Go to Courses</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Profile Settings</h5>
              <p className="card-text">Update your personal info and preferences.</p>
              <Link to="/dashboard/profile" className="btn btn-outline-primary">Edit Profile</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Support & Help</h5>
              <p className="card-text">Contact us for any issues or queries.</p>
              <Link to="/dashboard/contactus" className="btn btn-outline-primary">Get Help</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiMixCenter;
