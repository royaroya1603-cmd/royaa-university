import React from 'react'
import '../styles/BoardCard.css'

export default function BoardCard({ member, featured = false }) {
  const avatarBg = {
    background: `linear-gradient(135deg, ${member.accentColor}cc, ${member.accentColor}66)`,
    border: `1px solid ${member.accentColor}44`,
  }

  if (featured) {
    return (
      <div className="board-card featured">
        <div className="card-left">
          <div className="member-avatar" style={avatarBg}>
            {member.initials}
            <div className="avatar-ring" />
          </div>
          <div className="featured-badge">Board Chair</div>
        </div>

        <div className="card-right">
          <div className="member-role">{member.role}</div>
          <div className="member-name">{member.name}</div>
          <div className="member-background">{member.background}</div>
          <p className="member-description">{member.description}</p>

          <div className="member-quote">
            <span className="quote-mark">"</span>
            <p className="quote-text">{member.quote}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="board-card">
      <div className="member-avatar" style={avatarBg}>
        {member.initials}
        <div className="avatar-ring" />
      </div>
      <div className="member-role">{member.role}</div>
      <div className="member-name">{member.name}</div>
      <div className="member-background">{member.background}</div>
      <p className="member-description">{member.description}</p>

      <div className="member-quote">
        <span className="quote-mark">"</span>
        <p className="quote-text">{member.quote}</p>
      </div>
    </div>
  )
}
