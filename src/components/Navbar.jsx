import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">Mixzed Cakes & Treats</div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
      </div>

      {/* Nav Links */}
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#menu" onClick={() => setIsOpen(false)}>Menu</a></li>
        <li><a href="#testimonials" onClick={() => setIsOpen(false)}>Reviews</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
