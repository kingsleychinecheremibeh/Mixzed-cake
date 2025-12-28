import React from "react";
import '../styles/Hero.css'
import hero from '../assets/images/hero.png'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Welcome to Mixzed Cakes & Treats</h1>
        <p>Delicious cakes and treats made with love and passion.</p>
        <a href="https://wa.me/2348101071898?text=Hi!%20I%20want%20to%20order%20this%20cake."
              target="_blank"
              rel="noopener noreferrer"
              className="order-btn1"
              >Order Now
        </a>
      </div>
      <div className="hero-image">
        <img src={hero} alt="Hero Image" />
      </div>
    </section>
  )
}

export default Hero;