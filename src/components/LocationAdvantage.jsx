import React, { useState } from 'react'
import '../styles/LocationAdvantage.css'

const focusAreas = [
  {
    key: 'access',
    label: 'Access',
    eyebrow: 'Gateway to Upper Egypt',
    title: 'A central location connecting Cairo, Giza, Fayoum, Minya, Suez, and the Red Sea corridor.',
    body:
      'Ro\'ya University is located in New Beni Suef City, approximately 124 km from Cairo, with strong road access for students across neighboring governorates.',
    points: ['Direct regional accessibility', 'Strong road and transport networks', 'Positioned between Cairo and Minya'],
  },
  {
    key: 'demand',
    label: 'Demand',
    eyebrow: 'Student Catchment',
    title: 'Serving a large education-age population across Beni Suef and Upper Egypt.',
    body:
      'The governorate has around 3 million residents, with nearly half of the population in education age groups, creating sustained demand for private higher education.',
    points: ['Beni Suef, Fayoum, Minya, Cairo, and Giza', 'Reduces long-distance commuting burdens', 'Addresses a gap between graduates and seats'],
  },
  {
    key: 'industry',
    label: 'Industry',
    eyebrow: 'Applied Opportunity',
    title: 'Close to industrial, logistics, food manufacturing, and pharmaceutical activity.',
    body:
      'The surrounding economic environment creates natural pathways for training, internships, research partnerships, and graduate employment.',
    points: ['Engineering and AI applications', 'Healthcare and nursing pathways', 'Industry-linked graduate opportunities'],
  },
  {
    key: 'city',
    label: 'City',
    eyebrow: 'Planned Urban Growth',
    title: 'Part of a developed city with educational, healthcare, commercial, and industrial services.',
    body:
      'New Beni Suef City spans about 37,900 feddans, with an urbanized area of about 5,486 feddans and established city infrastructure.',
    points: ['277 km of road networks', '567 km of telecommunications networks', 'Residential, medical, commercial, and green zones'],
  },
]

const regionalNodes = [
  { name: 'Cairo & Giza', position: 'north' },
  { name: 'Fayoum', position: 'west' },
  { name: 'Ro\'ya University', position: 'center' },
  { name: 'Suez & Red Sea', position: 'east' },
  { name: 'Minya & Upper Egypt', position: 'south' },
]

const campusFacts = [
  { value: '124 km', label: 'from Cairo' },
  { value: '3M', label: 'governorate population' },
  { value: '5,200', label: 'planned student capacity' },
  { value: '4', label: 'future-focused faculties' },
]

const developmentPhases = [
  { phase: 'Phase One', percent: '61%', detail: 'Dentistry, Computer Science & AI, administration, library, research centers, and celebration hall.' },
  { phase: 'Phase Two', percent: '39%', detail: 'Engineering & Technology and Nursing complete the planned academic structure.' },
]

export default function LocationAdvantage() {
  const [activeKey, setActiveKey] = useState(focusAreas[0].key)
  const activeArea = focusAreas.find(area => area.key === activeKey)

  return (
    <section className="location-advantage" id="location">
      <div className="location-inner">
        <div className="location-header">
          <div>
            <div className="section-label">Prime Location</div>
            <h2 className="section-title">
              Built at the Gateway<br />to Upper Egypt
            </h2>
            <div className="egyptian-divider"><span>RU</span></div>
          </div>
          <p className="location-intro">
            Ro'ya University for Science & Technology is positioned in New Beni Suef City,
            an emerging educational and economic hub designed to serve students, families,
            and industries across Upper Egypt.
          </p>
        </div>

        <div className="location-grid">
          <div className="location-map-panel" aria-label="Regional connectivity map">
            <div className="map-river" />
            <div className="map-route map-route-vertical" />
            <div className="map-route map-route-horizontal" />

            {regionalNodes.map(node => (
              <div className={`map-node ${node.position}`} key={node.name}>
                <span className="node-pulse" />
                <span className="node-label">{node.name}</span>
              </div>
            ))}

            <div className="map-distance">
              <span>New Beni Suef City</span>
              <strong>Educational services zone near Nahda University</strong>
            </div>
          </div>

          <div className="location-content-panel">
            <div className="location-tabs" role="tablist" aria-label="Location advantages">
              {focusAreas.map(area => (
                <button
                  className={`location-tab ${activeKey === area.key ? 'active' : ''}`}
                  type="button"
                  role="tab"
                  aria-selected={activeKey === area.key}
                  key={area.key}
                  onClick={() => setActiveKey(area.key)}
                >
                  {area.label}
                </button>
              ))}
            </div>

            <div className="location-story" role="tabpanel">
              <span className="story-eyebrow">{activeArea.eyebrow}</span>
              <h3>{activeArea.title}</h3>
              <p>{activeArea.body}</p>
              <ul>
                {activeArea.points.map(point => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="location-facts">
          {campusFacts.map(fact => (
            <div className="location-fact" key={fact.label}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
        </div>

        <div className="development-strip">
          <div className="development-copy">
            <span>Campus Scale & Development</span>
            <h3>Planned to grow across two academic phases.</h3>
          </div>
          <div className="phase-list">
            {developmentPhases.map(item => (
              <div className="phase-item" key={item.phase}>
                <div className="phase-percent">{item.percent}</div>
                <div>
                  <h4>{item.phase}</h4>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
