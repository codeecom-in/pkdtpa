import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { eventsData } from '../data/membersData';
import { eventPhotos, eventTitles } from '../utils/importImages';
import { useGSAPAnimations } from '../hooks/useGSAPAnimations';
import './PastEvent.css';

function PastEvent() {
  const scrollRef = useGSAPAnimations();
  const { id } = useParams();
  const photos = eventPhotos[id] || [];
  const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation();

  const eventFromData = eventsData.find((e) => String(e.id) === String(id));
  const stateTitle = location.state && location.state.title;
  const title = stateTitle || (eventFromData && eventFromData.title) || eventTitles[id] || `Past Event ${id}`;

  return (
    <div className="past-event-page" ref={scrollRef}>
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
