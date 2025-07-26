import React from 'react';

function BetaProgram() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center p-5 rounded shadow bg-white">
        <h1 className="display-5 mb-3">🚀 Beta Program</h1>
        <p className="lead text-muted">We're working hard on something exciting.</p>
        <h3 className="mt-4 fw-bold text-primary">Coming Soon!</h3>
        <p className="text-muted mt-3">Stay tuned for early access and exclusive features.</p>
        <button className="btn btn-outline-primary mt-3" disabled>
          Join Waitlist (Coming Soon)
        </button>
      </div>
    </div>
  );
}

export default BetaProgram;
