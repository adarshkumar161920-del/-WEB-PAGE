import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProgressSection from './components/ProgressSection'
import OffersSection from './components/OffersSection'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <ProgressSection />
      <OffersSection />
      <TestimonialSection />
      <Footer />
    </div>
  )
}

export default App
