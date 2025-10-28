import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-circle">
              <span className="logo-text">305</span>
              <span className="logo-subtext">WAY</span>
            </div>
          </div>
          
          <nav className="footer-nav">
            <a href="#" className="footer-link">Home</a>
            <a href="#" className="footer-link">FamPass Holders</a>
            <a href="#" className="footer-link">OID Vendors</a>
            <a href="#" className="footer-link">Directory</a>
            <a href="#" className="footer-link">News</a>
            <a href="#" className="footer-link">Events</a>
            <a href="#" className="footer-link">Blogs</a>
          </nav>
          
          <div className="social-section">
            <span className="join-text">Join us</span>
            <a href="#" className="social-handle">@305Videos</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© 305videos 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
