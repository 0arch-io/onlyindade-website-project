import React from 'react'
import './BusinessGrid.css'

const BusinessGrid = () => {
  const businesses = Array(12).fill(null).map((_, index) => ({
    id: index + 1,
    name: "East Miami",
    description: "Stay More Save More",
    image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400",
    isNew: true
  }))

  return (
    <section className="business-grid">
      <div className="business-grid-container">
        <div className="section-header">
          <h2 className="section-title">Browse All Businesses</h2>
          <a href="#" className="view-all">View All</a>
        </div>
        
        <div className="grid">
          {businesses.map((business) => (
            <div key={business.id} className="business-card">
              {business.isNew && <div className="new-badge">NEW</div>}
              <div className="business-image">
                <img 
                  src={business.image}
                  onerror={`this.src='https://dummyimage.com/300x200/1a1a1a/666666?text=Business+${business.id}'`}
                  alt={business.name}
                  referrerpolicy="no-referrer"
                />
              </div>
              <div className="business-info">
                <h3 className="business-name">{business.name}</h3>
                <p className="business-description">{business.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BusinessGrid
