import React from 'react';

function JobAssistance() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white">
      <div className="text-center p-5 rounded shadow-sm bg-light">
        <h1 className="display-5 fw-bold text-primary mb-3">💼 Job Assistance</h1>
        <p className="lead text-muted">Helping you land your dream job with confidence.</p>
        <h3 className="mt-4 text-success">Coming Soon!</h3>
        <p className="text-muted mt-2">We’re crafting career tools, mock interviews, resume reviews and more.</p>
        <button className="btn btn-outline-primary mt-3" disabled>
          Stay Tuned
        </button>
      </div>
    </div>
  );
}

export default JobAssistance;
