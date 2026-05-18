import React from 'react'
import '../styles/FutureEducation.css'

const stats = [
  {
    icon: '📈',
    headline: 'Growing Demand for Quality Education',
    body: 'Egypt\'s rapidly expanding youth population drives unprecedented demand for world-class university education across all disciplines.',
  },
  {
    icon: '🌐',
    headline: 'Regional Access to Advanced Programs',
    body: 'Serving students from across the Middle East and North Africa with programs previously inaccessible without studying abroad.',
  },
  {
    icon: '🚀',
    headline: 'Future-Ready Graduates',
    body: 'Our graduates enter the workforce equipped with skills, networks, and the global perspective to lead in competitive industries.',
  },
  {
    icon: '🤝',
    headline: 'International Academic Partnerships',
    body: 'Strategic alliances with leading global institutions amplify research output, faculty development, and student opportunity.',
  },
]

const timeline = [
  { year: '2024 — Foundation', title: 'University Established', desc: 'Official founding of Ro\'ya University with its Board of Trustees.' },
  { year: '2024 — Partnership', title: 'MOU with USM', desc: 'Landmark agreement with Universiti Sains Malaysia signed.' },
  { year: '2025 — Launch', title: 'First Academic Year', desc: 'Six faculties open their doors to Egypt\'s next generation of scholars.' },
  { year: '2026 — Growth', title: 'Hospital Inauguration', desc: 'University Teaching Hospital begins serving the community.' },
  { year: '2030 — Vision', title: 'Regional Leadership', desc: 'Ro\'ya recognized as a premier research university in the Arab world.' },
]

export default function FutureEducation() {
  return (
    <section className="future-ed" id="future">
      <div className="future-inner">
        <div className="future-header">
          <div className="section-label">The Opportunity</div>
          <h2 className="section-title">Shaping the Future of<br />Regional Education</h2>
          <div className="egyptian-divider"><span>◆</span></div>
          <p className="section-subtitle">
            Where exceptional academic ambition meets the profound, unmet demand for quality higher
            education across Egypt and the wider region — Ro'ya University stands ready.
          </p>
        </div>

        {/* Stats cards */}
        <div className="future-stats">
          {stats.map((s, i) => (
            <div className="future-stat-card" key={i}>
              <span className="stat-icon-large">{s.icon}</span>
              <div className="stat-headline">{s.headline}</div>
              <p className="stat-body">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Vision + Timeline */}
        <div className="future-vision">
          <div className="vision-text">
            <h3 className="vision-heading">
              Top-Tier Education Meets<br />
              <em>Extraordinary Regional Demand</em>
            </h3>
            <p className="vision-body">
              Egypt has one of the largest youth populations in the world — and one of the greatest
              appetites for transformative university education. Ro'ya University is positioned to meet
              this moment, offering programs that blend academic rigor with professional relevance.
            </p>
            <p className="vision-body">
              From Cairo to the wider Arab world, our students will carry Ro'ya's vision forward —
              healing, building, computing, and leading in an era that demands nothing less than
              extraordinary preparation.
            </p>
          </div>

          <div className="vision-timeline">
            {timeline.map((t, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-year">{t.year}</div>
                <div className="timeline-title">{t.title}</div>
                <div className="timeline-desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
