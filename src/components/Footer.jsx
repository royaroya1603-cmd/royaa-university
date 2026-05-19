import React from 'react'
import '../styles/Footer.css'
import royaLogo from '../assets/roya-logo.jpg'

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
        <span>RO'YA UNIVERSITY</span>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-hex">
              <img src={royaLogo} alt="Ro'ya University logo" />
            </div>
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
            <div className="social-icon" title="Twitter/X">X</div>
            <div className="social-icon" title="Instagram">IG</div>
            <div className="social-icon" title="LinkedIn">in</div>
            <div className="social-icon" title="YouTube">YT</div>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Quick Links</div>
          <ul className="footer-links">
            {quickLinks.map((l, i) => (
              <li key={i}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Programs</div>
          <ul className="footer-links">
            {programLinks.map((l, i) => (
              <li key={i}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Contact Us</div>
          <div className="contact-item">
            <span className="contact-icon">Map</span>
            <span className="contact-text">Ro'ya University Campus<br />New Administrative Capital<br />Cairo, Egypt</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">Mail</span>
            <span className="contact-text">info@roya-university.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">Tel</span>
            <span className="contact-text">+20 (2) 0000 0000</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">Web</span>
            <span className="contact-text">www.roya-university.com</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copyright">
            Copyright {new Date().getFullYear()} Ro'ya University for Science & Technology. All rights reserved.
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
