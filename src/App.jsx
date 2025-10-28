import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ViralVideos from './components/ViralVideos'
import BusinessGrid from './components/BusinessGrid'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ViralVideos />
      <BusinessGrid />
      <Footer />
    </div>
  )
}

export default App
