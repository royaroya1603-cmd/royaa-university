import React from 'react'
import '../styles/Hero.css'
import royaLogo from '../assets/roya-logo.png'
import campus3 from '../assets/campus3.png'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img className="hero-campus-image" src={campus3} alt="" aria-hidden="true" />
        <div className="hero-gradient" />
        <div className="hero-rays" />
        <div className="hero-pattern" />
        <div className="hero-cartouche" />
        <div className="hero-geo-border" />
        <div className="hero-columns">
          <div className="column-left" />
          <div className="column-right" />
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-brand-mark">
          <img src={royaLogo} alt="Ro'ya University logo" />
        </div>

        <div className="hero-eyebrow">
          <span className="eyebrow-line" />
          <span>For Science & Technology</span>
        </div>

        <h1 className="hero-title">
          <span>Your Future</span>
          <span className="hero-title-accent">Starts With</span>
          <span className="hero-title-gold">Ro'ya</span>
        </h1>

        <p className="hero-subtitle">
          Ro'ya University stands at the crossroads of ancient wisdom and modern innovation,
          cultivating scholars, healers, and engineers who will define the next era of
          Egyptian and regional excellence.
        </p>

   
      </div>

      <div className="hero-stats">
        <div className="hero-stats-inner">
          <div className="hero-stat">
            <span className="stat-number">6+</span>
            <span className="stat-label">Academic Faculties</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">9</span>
            <span className="stat-label">Board Members</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">1</span>
            <span className="stat-label">MOU Partnership</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">∞</span>
            <span className="stat-label">Possibilities</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
