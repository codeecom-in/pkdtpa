import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { eventsData } from '../data/membersData';
import './PastEvent.css';

const eventPhotos = {
  1: [
    '/images/football/a.jpg',
    '/images/football/2.jpg',
    '/images/football/3.jpg',
    '/images/football/4.jpg',
    '/images/football/5.jpg',
    '/images/football/6.jpg',
    '/images/football/7.jpg',
    '/images/football/8.jpg',
    '/images/football/9.jpg',
    '/images/football/10.jpg',
    '/images/football/11.jpg',
    '/images/football/12.jpg',
    '/images/football/13.jpg',
    '/images/football/14.jpg',
    '/images/football/15.jpg',
    '/images/football/16.jpg',
    '/images/football/17.jpg',
    '/images/football/18.jpg',
    '/images/football/19.jpg',
    '/images/football/20.jpg',
    '/images/football/21.jpg',
    '/images/football/22.jpg'

    
  ],
  2: [
    '/images/awards/1.jpg',
    '/images/awards/2.jpg',
    '/images/awards/3.jpg',
    '/images/awards/4.jpg',
    '/images/awards/5.jpg',
    '/images/awards/6.jpg',
    '/images/awards/7.jpg',
    '/images/awards/8.jpg',
    '/images/awards/9.jpg',
    '/images/awards/10.jpg',
    '/images/awards/11.jpg',
    '/images/awards/12.jpg',
    '/images/awards/13.jpg',
    '/images/awards/14.jpg',
    '/images/awards/15.jpg',
    '/images/awards/16.jpg',
    '/images/awards/17.jpg',
    '/images/awards/18.jpg',
    '/images/awards/19.jpg',
    '/images/awards/20.jpg',
    '/images/awards/21.jpg'
  ],
  3: [
    '/images/home/1.jpg',
    '/images/home/3.jpg',
    '/images/home/4.jpg',
    '/images/home/5.jpg',   
    '/images/home/6.jpg',
    '/images/home/7.jpg',
    '/images/home/8.jpg',       
    '/images/home/9.jpg',
    '/images/home/10.jpg',
    '/images/home/11.jpg',
    '/images/home/12.jpg',
    '/images/home/13.jpg'
]
};

const eventTitles = {
  1: 'Pravasi Football Tournament 2024',
  2: 'Academic Excellence Awards 2025',
  3: 'Charity Initiatives'
};

function PastEvent() {
  const { id } = useParams();
  const photos = eventPhotos[id] || [];
  const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation();
  const eventFromData = eventsData.find((e) => String(e.id) === String(id));
  const stateTitle = location.state && location.state.title;
  const title = stateTitle || (eventFromData && eventFromData.title) || eventTitles[id] || `Past Event ${id}`;

  return (
    <div className="past-event-page">
      <header className="past-event-header">
        <h1>{title}</h1>
        <p>Photos for {title}</p>
      </header>

      <div className="past-event-photos">
        {photos.length === 0 ? (
          <p>No photos available for this event.</p>
        ) : (
          <>
            <div className="photos-grid">
              {photos.map((src, idx) => (
                <div
                  key={idx}
                  className="photo-item"
                  role="button"
                  onClick={() => setSelectedImage(src)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={src} alt={`Event ${id} - ${idx + 1}`} />
                </div>
              ))}
            </div>
            {selectedImage && (
              <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
                  <div className="image-wrapper">
                    <img src={selectedImage} alt="Full view" />
                    <div className="share-buttons-overlay">
                      <a
                        href={`https://wa.me/?text=Check%20out%20this%20photo%20from%20${encodeURIComponent(title)}:%20${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-btn whatsapp-btn"
                        title="Share on WhatsApp"
                      >
                        <i className="fa-brands fa-whatsapp"></i>
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-btn facebook-btn"
                        title="Share on Facebook"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default PastEvent;
