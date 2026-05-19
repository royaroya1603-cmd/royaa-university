import React, { useState } from 'react'
import '../styles/About.css'
import aboutVideo from '../assets/about_roya_video.mp4'

const pillars = [
  { icon: 'AE', title: 'Academic Excellence', desc: 'Curricula designed by world-class faculty and international partners.' },
  { icon: 'RI', title: 'Research & Innovation', desc: 'State-of-the-art labs and research centers driving discovery.' },
  { icon: 'GP', title: 'Global Perspective', desc: 'International partnerships that prepare graduates for a connected world.' },
]

export default function About() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-text">
          <div className="section-label">About Ro'ya University</div>
          <h2 className="section-title">
            A New Vision for<br />Egyptian Higher Education
          </h2>

          <div className="egyptian-divider">
            <span>RU</span>
          </div>

          <p className="about-body">
            <strong>Ro'ya University for Science & Technology</strong> is a premier private
            institution dedicated to shaping the next generation of Egypt's leaders, scientists,
            and professionals. Founded on principles of intellectual rigor, cultural pride, and
            global aspiration, we bring together the best minds to create transformative
            educational experiences.
          </p>
          <p className="about-body">
            Rooted in Egypt's extraordinary legacy of civilization and scholarship, Ro'ya draws
            inspiration from millennia of human achievement while pioneering the educational
            models that will carry our region into a prosperous future.
          </p>

          <div className="about-pillars">
            {pillars.map((p, i) => (
              <div className="pillar" key={i}>
                <div className="pillar-icon">{p.icon}</div>
                <div className="pillar-content">
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-video-area">
          <div className="video-card" onClick={() => setModalOpen(true)}>
            <video className="video-thumbnail" muted playsInline preload="metadata">
              <source src={aboutVideo} type="video/mp4" />
            </video>

            <div className="video-play-btn">
              <div className="play-ring">
                <div className="play-triangle" />
              </div>
              <span className="video-play-label">Watch Our Story</span>
            </div>
          </div>

          <div className="video-caption">
            <div className="caption-dot" />
            <span className="video-caption-text">
              Watch this video to learn more about our university, our vision, and the community we are building.
            </span>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="video-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="video-modal" onClick={e => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setModalOpen(false)}>
              x Close
            </button>
            <div className="video-embed">
              <video className="video-player" controls autoPlay playsInline>
                <source src={aboutVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
