import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="copyright">
            &copy; PTPA 2026 All rights reserved
          </p>
          <p className="credits">
            This website designed and developed by <a href="https://mrsn8095.github.io/myPersonalWebsite/" target="_blank" rel="noopener noreferrer">Muhammed Roshan</a> in association with <a href="https://www.codeecom.in" target="_blank" rel="noopener noreferrer">codeecom</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
