import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-dark pt-4" style={{ borderTop: '1px solid #e0e0e0', borderBottom: '1px solid #e0e0e0' ,marginTop: '100px' }}>
      <div className="container text-center">
        <h5 className="mb-2">AiMix</h5>
        <p className="mb-3" style={{ fontStyle: 'italic', color: '#555' }}>
          Empowering learners, one step at a time.
        </p>
        <div style={{ fontSize: '18px' }}>
          Made with ❤️ in India
        </div>
        <div className="mt-3 text-muted" style={{ fontSize: '14px' }}>
          © 2025 Aimix. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
