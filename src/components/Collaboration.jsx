import React from 'react'
import '../styles/Collaboration.css'

const benefits = [
  { icon: '🎓', title: 'Joint Research', desc: 'Collaborative research programs connecting Egyptian and Malaysian scholars.' },
  { icon: '🌏', title: 'Student Exchange', desc: 'Exclusive mobility opportunities for Ro\'ya students at USM campuses.' },
  { icon: '📜', title: 'Dual Recognition', desc: 'Academically recognized credentials enhancing global career prospects.' },
  { icon: '💡', title: 'Innovation Labs', desc: 'Shared innovation initiatives across science, technology, and medicine.' },
]

export default function Collaboration() {
  return (
    <section className="collaboration" id="collaboration">
      <div className="collab-inner">
        <div className="collab-header">
          <div className="section-label">International Partnership</div>
          <h2 className="section-title">A Global Alliance for Excellence</h2>
          <div className="egyptian-divider"><span>◆</span></div>
          <p className="section-subtitle">
            Ro'ya University is proud to formalize a landmark Memorandum of Understanding with
            Universiti Sains Malaysia — a world-class research institution ranked among Asia's finest —
            opening new horizons for our students, faculty, and research community.
          </p>
        </div>

        {/* Partnership banner */}
        <div className="collab-banner">
          <div className="banner-pattern" />

          {/* Ro'ya side */}
          <div className="collab-side">
            <div className="collab-logo-box">
              <span className="collab-logo-letter">R</span>
            </div>
            <div className="collab-uni-name">Ro'ya University</div>
            <div className="collab-uni-tagline">For Science & Technology</div>
            <div className="collab-country">Egypt 🇪🇬</div>
          </div>

          {/* Center */}
          <div className="collab-center">
            <div className="mou-badge">
              <span>MOU</span>
              <span>Partner</span>
            </div>
            <div className="collab-x">×</div>
          </div>

          {/* USM side */}
          <div className="collab-side">
            <div className="usm-logo-placeholder">
              USM<br />Logo
            </div>
            <div className="collab-uni-name">Universiti Sains Malaysia</div>
            <div className="collab-uni-tagline">Transforming Higher Education</div>
            <div className="collab-country">Malaysia 🇲🇾</div>
          </div>
        </div>

        {/* Benefits */}
        <div className="collab-benefits">
          {benefits.map((b, i) => (
            <div className="benefit-item" key={i}>
              <span className="benefit-icon">{b.icon}</span>
              <div className="benefit-title">{b.title}</div>
              <p className="benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
