import React from 'react'
import '../styles/Footer.css'

const quickLinks = [
  { label: 'About the University', href: '#about' },
  { label: 'Board of Trustees', href: '#board' },
  { label: 'Academic Programs', href: '#programs' },
  { label: 'International Partners', href: '#collaboration' },
  { label: 'University Hospital', href: '#programs' },
  { label: 'Admissions', href: '#' },
]

const programLinks = [
  { label: 'Faculty of Dentistry', href: '#programs' },
  { label: 'Computer Science & AI', href: '#programs' },
  { label: 'Faculty of Medicine', href: '#programs' },
  { label: 'Faculty of Engineering', href: '#programs' },
  { label: 'Faculty of Nursing', href: '#programs' },
  { label: 'University Hospital', href: '#programs' },
]

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-ornament">
        <span>◆ ◇ ◆ ◇ ◆ ◇ ◆</span>
      </div>

      <div className="footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-hex">R</div>
            <div className="footer-logo-words">
              <span className="footer-logo-name">Ro'ya University</span>
              <span className="footer-logo-sub">For Science & Technology</span>
            </div>
          </div>
          <p className="footer-about">
            Ro'ya University is a premier private institution dedicated to academic excellence,
            scientific discovery, and the cultivation of Egypt's next generation of leaders.
            Rooted in heritage. Reaching toward the future.
          </p>
          <div className="footer-socials">
            <div className="social-icon" title="Facebook">f</div>
            <div className="social-icon" title="Twitter/X">𝕏</div>
            <div className="social-icon" title="Instagram">◎</div>
            <div className="social-icon" title="LinkedIn">in</div>
            <div className="social-icon" title="YouTube">▶</div>
          </div>
        </div>

        {/* Quick links */}
        <div className="footer-col">
          <div className="footer-col-title">Quick Links</div>
          <ul className="footer-links">
            {quickLinks.map((l, i) => (
              <li key={i}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div className="footer-col">
          <div className="footer-col-title">Programs</div>
          <ul className="footer-links">
            {programLinks.map((l, i) => (
              <li key={i}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <div className="footer-col-title">Contact Us</div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span className="contact-text">Ro'ya University Campus<br />New Administrative Capital<br />Cairo, Egypt</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <span className="contact-text">info@roya.edu.eg</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span className="contact-text">+20 (2) 0000 0000</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🌐</span>
            <span className="contact-text">www.roya.edu.eg</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Ro'ya University for Science & Technology. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
