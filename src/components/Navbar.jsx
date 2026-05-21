import React, { useState, useEffect } from 'react'
import '../styles/Navbar.css'
import royaLogo from '../assets/roya-logo.png'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Location', href: '#location' },
  { label: 'Campus Preview', href: '#campus' },
  { label: 'Programs', href: '#programs' },
  { label: 'Collaboration', href: '#collaboration' },
  { label: 'Board', href: '#board' },
  { label: 'Contact', href: '#footer' },
]

const contactMailto = 'mailto:info@roya-university.com?subject=Ro%27ya%20University%20Inquiry'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#hero" className="navbar-logo">
            <div className="logo-emblem">
              <img src={royaLogo} alt="Ro'ya University logo" />
            </div>
            <div className="logo-text">
              <span className="logo-name">Ro'ya University</span>
              <span className="logo-tagline">For Science & Technology</span>
            </div>
          </a>

          <ul className="navbar-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <a className="navbar-cta" href={contactMailto}>
            Inquire Now
          </a>

          <button
            className="navbar-toggle"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        </div>
      </nav>

      <div className={`navbar-mobile ${mobileOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a className="navbar-mobile-cta" href={contactMailto} onClick={() => setMobileOpen(false)}>
              Inquire Now
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
