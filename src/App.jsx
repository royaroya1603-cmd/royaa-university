import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import LocationAdvantage from './components/LocationAdvantage'
import CampusPreview from './components/CampusPreview'
import Programs from './components/Programs'
import Collaboration from './components/Collaboration'
import FutureEducation from './components/FutureEducation'
import BoardMembers from './components/BoardMembers'
import Footer from './components/Footer'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <LocationAdvantage />
        <CampusPreview />
        <Programs />
        <Collaboration />
        <FutureEducation />
        <BoardMembers />
      </main>
      <Footer />
    </div>
  )
}

export default App
