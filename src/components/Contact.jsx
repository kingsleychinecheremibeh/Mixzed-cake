import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // For now, just alert submission. Later can integrate Firebase or email API.
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* WhatsApp / Quick Contact */}
        <div className="contact-info">
          <h3>Quick Contact</h3>
          <p>Have a question or want to place an order quickly?</p>
          <a
            href="https://wa.me/2348101071898?text=Hi!%20I%20want%20to%20order%20this%20cake."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            Chat via WhatsApp
          </a>
          <h4>Location</h4>
          <p>Will be updated shortly</p>
          {/* Optional Map iframe placeholder */}
          <div className="map-placeholder">Map goes here</div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

