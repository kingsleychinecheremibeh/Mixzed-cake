import React from 'react';
import '../styles/Footer.css';
import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Mixzed Cakes & Treats. All rights reserved.</p>
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#menu">Menu</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-socials">
          <a
            href="https://wa.me/2348101071898?text=Hi!%20I%20want%20to%20order%20this%20cake."
              target="_blank"
              rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.tiktok.com/@mixzedcakesandtreats?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.instagram.com/mixzedcakesandtreats/?__pwa=1#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
