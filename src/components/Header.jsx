import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-circle">
            <span className="logo-text">305</span>
            <span className="logo-subtext">WAY</span>
          </div>
        </div>
        
        <nav className="nav">
          <a href="#" className="nav-link active">Home</a>
          <a href="#" className="nav-link">News</a>
          <a href="#" className="nav-link">Events</a>
          <a href="#" className="nav-link">For Business</a>
          <a href="#" className="nav-link">Business Pricing</a>
          <a href="#" className="nav-link">Blog</a>
        </nav>
        
        <div className="auth-buttons">
          <button className="auth-btn user-login">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            User Login
          </button>
          <button className="auth-btn business-login">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
            </svg>
            Business Login
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
