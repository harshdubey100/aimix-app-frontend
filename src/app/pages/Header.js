import React from 'react';
import Logo from '../modules/components/assets/Logo.png';
function Header() {
  return (
    <header className="bg-light py-2 fixed-top" style={{ height: '80px', zIndex: 1050 }}>
      <div className="container d-flex flex-wrap justify-content-between align-items-center pt-3">
        <a
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <img
            src={Logo}
            alt="Logo"
            style={{ height: '40px', width: 'auto', marginRight: '10px' }}
          />
        </a>

        
        <div className="d-flex align-items-center gap-3">
          
          <form className="d-none d-lg-block" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          
        </div>
      </div>
    </header>
  );
}

export default Header;