import React from 'react'
import '../styles/ProgramCard.css'

export default function ProgramCard({ program }) {
  return (
    <div className="program-card">
      <div className="card-corner" />
      <div className="card-icon-wrap">{program.icon}</div>
      <h3 className="card-title">{program.title}</h3>
      <p className="card-desc">{program.description}</p>
      {/* <span className="card-learn-more">Learn More</span> */}
    </div>
  )
}
