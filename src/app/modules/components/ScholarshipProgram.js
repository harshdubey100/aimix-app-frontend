import React from 'react';

function ScholarshipProgram() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white">
      <div className="text-center p-5 rounded shadow-sm bg-light">
        <h1 className="display-5 fw-bold text-success mb-3">🎓 Scholarship Program</h1>
        <p className="lead text-muted">We're building opportunities for learners who dream big.</p>
        <h3 className="mt-4 text-primary">Coming Soon!</h3>
        <p className="text-muted mt-2">Launching soon with exciting benefits and financial support options.</p>
        <button className="btn btn-outline-success mt-3" disabled>
          Stay Tuned
        </button>
      </div>
    </div>
  );
}

export default ScholarshipProgram;
