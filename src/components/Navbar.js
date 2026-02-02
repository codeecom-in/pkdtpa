import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <LanguageSwitcher />
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <span className="logo-text">PTPA</span>
          </Link>
        </div>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>{t.nav.home}</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>{t.nav.about}</Link>
          </li>
          <li className="nav-item">
            <Link to="/committee" className="nav-link" onClick={closeMenu}>{t.nav.committee}</Link>
          </li>
          <li className="nav-item">
            <Link to="/members" className="nav-link" onClick={closeMenu}>{t.nav.members}</Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link" onClick={closeMenu}>{t.nav.events}</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link" onClick={closeMenu}>{t.nav.gallery}</Link>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className="nav-link" onClick={closeMenu}>{t.nav.blogs}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
