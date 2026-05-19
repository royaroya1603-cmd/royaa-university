import React from 'react'
import '../styles/Collaboration.css'
import royaLogo from '../assets/roya-logo.jpg'
import USMlogo from '../assets/USM_logo.png'
import BSUlogo from '../assets/beni_suef_uni.png'

const partnerships = [
  {
    badge: 'MOU',
    partnerLogo: USMlogo,
    partnerAlt: 'Universiti Sains Malaysia logo',
    partnerName: 'Universiti Sains Malaysia',
    partnerTagline: 'Transforming Higher Education',
    partnerCountry: 'Malaysia',
    highlight: '#=134 QS World University Rankings 2026',
    description:
      'A landmark international partnership connecting Ro\'ya students and faculty with a globally ranked Malaysian research university.',
  },
  {
    badge: 'LOCAL',
    partnerLogo: BSUlogo,
    partnerAlt: 'Beni Suef University logo',
    partnerName: 'Beni Suef University',
    partnerTagline: 'Academic Collaboration',
    partnerCountry: 'Egypt',
    highlight: 'Egyptian academic and research cooperation',
    description:
      'A national collaboration strengthening academic exchange, applied research, and shared educational development within Egypt.',
  },
]

const benefits = [
  { icon: 'JR', title: 'Joint Research', desc: 'Collaborative research programs connecting Ro\'ya with Egyptian and international scholars.' },
  { icon: 'SE', title: 'Student Exchange', desc: 'Academic mobility opportunities shaped through regional and global university partners.' },
  { icon: 'DR', title: 'Academic Recognition', desc: 'Partnerships that strengthen program quality, credibility, and graduate opportunity.' },
  { icon: 'IL', title: 'Innovation Labs', desc: 'Shared innovation initiatives across science, technology, healthcare, and applied research.' },
]

export default function Collaboration() {
  return (
    <section className="collaboration" id="collaboration">
      <div className="collab-inner">
        <div className="collab-header">
          <div className="section-label">Academic Partnerships</div>
          <h2 className="section-title">Alliances for Regional and Global Excellence</h2>
          <div className="egyptian-divider"><span>RU</span></div>
          <p className="section-subtitle">
            Ro'ya University is building a partnership network that connects Egyptian academic
            strength with international research excellence, opening new horizons for students,
            faculty, and the wider community.
          </p>
        </div>

        <div className="collab-banners">
          {partnerships.map(partner => (
            <div className="collab-banner" key={partner.partnerName}>
              <div className="banner-pattern" />

              <div className="collab-side">
                <div className="collab-logo-box">
                  <img src={royaLogo} alt="Ro'ya University logo" />
                </div>
                <div className="collab-uni-name">Ro'ya University</div>
                <div className="collab-uni-tagline">For Science & Technology</div>
                <div className="collab-country">Egypt</div>
              </div>

              <div className="collab-center">
                <div className="mou-badge">
                  <span>{partner.badge}</span>
                  <span>Partner</span>
                </div>
                <div className="collab-x">x</div>
              </div>

              <div className="collab-side">
                <div className="partner-logo-box">
                  {partner.partnerLogo ? (
                    <img src={partner.partnerLogo} alt={partner.partnerAlt} />
                  ) : (
                    <span>BSU</span>
                  )}
                </div>
                <div className="collab-uni-name">{partner.partnerName}</div>
                <div className="collab-uni-tagline">{partner.partnerTagline}</div>
                <div className="collab-country">{partner.partnerCountry}</div>
                <div className="collab-highlight">{partner.highlight}</div>
                <p className="collab-description">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>

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
