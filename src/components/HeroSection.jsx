import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
          onerror="this.src='https://dummyimage.com/1920x1080/1a1a1a/666666?text=City+Background'"
          alt="City background"
          referrerpolicy="no-referrer"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          WELCOME TO<br />
          THE NETWORK
        </h1>
        <p className="hero-subtitle">
          The Good, The Bad, The Funny.
        </p>
      </div>
    </section>
  )
}

export default HeroSection
