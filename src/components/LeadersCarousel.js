import React, { useState, useEffect } from 'react';
import './LeadersCarousel.css';

function LeadersCarousel({ leaders }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % leaders.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [leaders.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? leaders.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % leaders.length);
  };

  // Show up to 3 cards at a time
  const getVisibleLeaders = () => {
    const visibleCount = 3;
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(leaders[(currentIndex + i) % leaders.length]);
    }
    return result;
  };

  return (
    <div className="leaders-carousel">
      <div className="leaders-container">
        <div className="leaders-track">
          {getVisibleLeaders().map((leader, index) => (
            <div key={index} className="leader-card">
              <div className="leader-image">
                <div className="leader-placeholder">👤</div>
              </div>
              <div className="leader-info">
                <h3 className="leader-name">{leader.name}</h3>
                <p className="leader-position">{leader.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="leaders-button prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="leaders-button next" onClick={goToNext}>
        &#10095;
      </button>

      <div className="leaders-indicators">
        {leaders.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default LeadersCarousel;
