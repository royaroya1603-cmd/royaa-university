import React from 'react'
import { programs } from '../data/programs'
import ProgramCard from './ProgramCard'
import '../styles/Programs.css'

export default function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="programs-inner">
        <div className="programs-header">
          <div className="section-label">Academic Excellence</div>
          <h2 className="section-title">Our Faculties & Programs</h2>
          <div className="egyptian-divider">
            <span>◆</span>
          </div>
          <p className="section-subtitle">
            Six distinguished faculties united by a shared commitment to transformative education,
            rigorous scholarship, and real-world impact across healthcare, technology, and engineering.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map(program => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  )
}
