import React, { useState } from 'react'
import '../styles/CampusPreview.css'
import campus1 from '../assets/campus1.png'
import campus2 from '../assets/campus2.png'
import campus3 from '../assets/campus3.png'
import campus4 from '../assets/campus4.png'
import campus5 from '../assets/campus5.png'
import campus6 from '../assets/campus6.png'
import campus7 from '../assets/campus7.png'

const campusImages = [
  { src: campus1, alt: 'Ro\'ya University campus exterior view' },
  { src: campus2, alt: 'Ro\'ya University campus architectural perspective' },
  { src: campus3, alt: 'Ro\'ya University academic building view' },
  { src: campus4, alt: 'Ro\'ya University campus landscape and buildings' },
  { src: campus5, alt: 'Ro\'ya University campus facilities view' },
  { src: campus6, alt: 'Ro\'ya University campus development render' },
  { src: campus7, alt: 'Ro\'ya University campus masterplan view' },
]

export default function CampusPreview() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedImage = campusImages[selectedIndex]

  return (
    <section className="campus-preview" id="campus">
      <div className="campus-inner">
        <div className="campus-copy">
          <div className="section-label">Campus Preview</div>
          <h2 className="section-title">
            A Campus Designed<br />for Tomorrow's Disciplines
          </h2>
          <div className="egyptian-divider"><span>RU</span></div>
          <p>
            Explore early visual previews of Ro'ya University's planned academic environment,
            from learning spaces and faculty buildings to the wider campus setting in New Beni
            Suef City.
          </p>
        </div>

        <div className="campus-stage" aria-label="Ro'ya University campus image preview">
          <div className="campus-feature">
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="campus-feature-caption">
              <span>{String(selectedIndex + 1).padStart(2, '0')}</span>
              <strong>Campus Perspective</strong>
            </div>
          </div>

          <div className="campus-cascade" aria-hidden="true">
            {campusImages.map((image, index) => (
              <img
                src={image.src}
                alt=""
                className={`cascade-image cascade-image-${index + 1}`}
                key={image.src}
              />
            ))}
          </div>
        </div>

        <div className="campus-thumbs" aria-label="Select campus image">
          {campusImages.map((image, index) => (
            <button
              className={`campus-thumb ${selectedIndex === index ? 'active' : ''}`}
              type="button"
              key={image.src}
              onClick={() => setSelectedIndex(index)}
              aria-label={`Show campus image ${index + 1}`}
            >
              <img src={image.src} alt="" />
              <span>{String(index + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
