import React from 'react'
import { boardMembers } from '../data/boardMembers'
import BoardCard from './BoardCard'
import '../styles/BoardMembers.css'

export default function BoardMembers() {
  const [chair, ...rest] = boardMembers

  return (
    <section className="board-members" id="board">
      <div className="board-inner">
        <div className="board-header">
          <div className="section-label">Leadership</div>
          <h2 className="section-title">Board of Trustees</h2>
          <div className="egyptian-divider"><span>◆</span></div>
          <p className="board-intro">
            Ro'ya University is guided by an extraordinary council of leaders — spanning academic scholarship,
            medical excellence, engineering mastery, and strategic investment. Together, they bring the breadth
            of vision required to build an institution for the ages.
          </p>
        </div>

        <div className="board-grid">
          <BoardCard member={chair} featured={true} />
          {rest.map(member => (
            <BoardCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
