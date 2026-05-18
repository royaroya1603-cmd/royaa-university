import React from 'react'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Layered background */}
      <div className="hero-bg">
        <div className="hero-gradient" />
        <div className="hero-rays" />
        <div className="hero-pattern" />
        <div className="hero-geo-border" />
        <div className="hero-columns">
          <div className="column-left" />
          <div className="column-right" />
        </div>
      </div>

      {/* Main content */}
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow-line" />
          <span>Est. 2024 · Egypt · For Science & Technology</span>
        </div>

        <h1 className="hero-title">
          <span>Where Vision</span>
          <span className="hero-title-accent">Shapes</span>
          <span className="hero-title-gold">Tomorrow</span>
        </h1>

        <p className="hero-subtitle">
          Ro'ya University stands at the crossroads of ancient wisdom and modern innovation —
          cultivating scholars, healers, and engineers who will define the next era of
          Egyptian and regional excellence.
        </p>

        <div className="hero-cta-group">
          <a href="#programs" className="btn-gold">Explore Programs</a>
          <a href="#about" className="hero-watch-btn">
            <span className="play-circle">▶</span>
            Watch Our Story
          </a>
        </div>
      </div>

      {/* Stats bar */}
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

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
