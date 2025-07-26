import React from 'react';
import { FaUserCircle, FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AiMixCoin() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="card p-5 shadow" style={{ maxWidth: '600px', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)', borderRadius: '12px' }}>
        <h2 className="mb-3 text-center">🚀 AiMix Coin - Coming Soon</h2>

        <p className="text-muted">
          <strong>AiMix Coin</strong> is a cryptocurrency token built on the <strong>ERC-20 standard</strong> and currently deployed on the <strong>Sepolia Testnet</strong>.
        </p>

        <p className="text-muted">
          While AiMix Coin holds <strong>no monetary value</strong> at the moment, users will be able to engage with it through our platform’s upcoming reward system.
        </p>

        <p className="text-muted">
          The planned process will work like this:
          <ul>
            <li>Users can claim <strong>1 AiMix Coin</strong> once every 24 hours.</li>
            <li>If you have already claimed within 24 hours, the claim will be disabled until the timer resets.</li>
            <li>If you miss a day, your claim window remains open until you claim next time.</li>
          </ul>
        </p>

        <p className="text-primary text-center mt-4">
          This feature is under development. Stay tuned!
        </p>

        <div className="mt-4 text-center">
          <Link className="nav-link text-dark d-flex justify-content-center align-items-center" to="#">
            
            AiMix
            <FaCoins className="ms-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AiMixCoin;
