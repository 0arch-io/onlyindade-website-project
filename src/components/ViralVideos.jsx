import React, { useState } from 'react'
import './ViralVideos.css'

const ViralVideos = () => {
  const [currentIndex, setCurrentIndex] = useState(2)
  
  const videos = [
    {
      id: 1,
      thumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "City View 1"
    },
    {
      id: 2,
      thumbnail: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "City View 2"
    },
    {
      id: 3,
      thumbnail: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "City View 3"
    },
    {
      id: 4,
      thumbnail: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "City View 4"
    },
    {
      id: 5,
      thumbnail: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "City View 5"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  return (
    <section className="viral-videos">
      <div className="viral-videos-background">
        <img 
          src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920"
          onerror="this.src='https://dummyimage.com/1920x600/0a4d2a/22c55e?text=Tropical+Background'"
          alt="Tropical background"
          referrerpolicy="no-referrer"
        />
        <div className="viral-videos-overlay"></div>
      </div>
      
      <div className="viral-videos-content">
        <h2 className="viral-videos-title">
          VIRAL <span className="highlight">VIDEOS</span>
        </h2>
        
        <div className="video-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          
          <div className="video-container">
            {videos.map((video, index) => {
              let position = 'hidden'
              if (index === currentIndex) position = 'center'
              else if (index === (currentIndex - 1 + videos.length) % videos.length) position = 'left'
              else if (index === (currentIndex + 1) % videos.length) position = 'right'
              else if (index === (currentIndex - 2 + videos.length) % videos.length) position = 'far-left'
              else if (index === (currentIndex + 2) % videos.length) position = 'far-right'
              
              return (
                <div key={video.id} className={`video-slide ${position}`}>
                  <div className="video-frame">
                    <img 
                      src={video.thumbnail}
                      onerror={`this.src='https://dummyimage.com/300x400/1a1a1a/666666?text=Video+${video.id}'`}
                      alt={video.title}
                      referrerpolicy="no-referrer"
                    />
                    {index === currentIndex && (
                      <div className="play-button">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.8)"/>
                          <path d="M8 5v14l11-7z" fill="white"/>
                        </svg>
                      </div>
                    )}
                    <div className="video-controls">
                      <div className="control-icons">
                        <span className="control-icon">♡</span>
                        <span className="control-icon">💬</span>
                        <span className="control-icon">↗</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          
          <button className="carousel-btn next" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ViralVideos
