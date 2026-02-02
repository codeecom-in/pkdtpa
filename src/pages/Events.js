import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { eventsData } from '../data/membersData';
import './Events.css';

function Events() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const openPastEvent = (id, title) => {
    navigate(`/past-event/${id}`, { state: { title } });
  };
  return (
    <div className="events">
      <section className="events-header">
        <h1>{t.events?.title || 'Events & Gatherings'}</h1>
        <p>{t.events?.subtitle || 'Join us for memorable celebrations and community gatherings'}</p>
      </section>

      <div className="events-container">
        <section className="upcoming-events">
          <h2>Latest Events</h2>
          <div className="events-list">
            {eventsData.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-date">
                  <div className="date-badge">{event.date}</div>
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p className="location">📍 {event.location}</p>
                  <p className="description">{event.description}</p>
                  <button className="register-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="past-events">
          <h2>{t.events?.pastHighlights || 'Past Events Highlights'}</h2>
          <div className="highlights-grid">
            <div
              className="highlight-card"
              role="button"
              onClick={() => openPastEvent(1, 'Pravasi Football Tournament 2024')}
              style={{ cursor: 'pointer' }}
            >
              <h3>Pravasi Football Tournament 2024</h3>
              <p>Successfully conducted football Tournament</p>
            </div>
            <div
              className="highlight-card"
              role="button"
              onClick={() => openPastEvent(2, 'Academic Excellence Awards 2025')}
              style={{ cursor: 'pointer' }}
            >
              <h3>Academic Excellence Awards 2025</h3>
              <p>Awarded recognition to outstanding students</p>
            </div>
            <div
              className="highlight-card"
              role="button"
              onClick={() => openPastEvent(3, 'A Home Being Built Together by Our Community')}
              style={{ cursor: 'pointer' }}
            >
              <h3>A Home Being Built Together by Our Community</h3>
            </div>
          </div>
        </section>

        <section className="event-types">
          <h2>{t.events?.types || 'Types of Events We Organize'}</h2>
          <div className="types-grid">
            <div className="type-card">
              <h3>🎉 {t.events?.celebrations || 'Celebrations'}</h3>
              <p>{t.events?.celebrationsDesc || 'Annual reunions, festivals, and milestone celebrations'}</p>
            </div>
            <div className="type-card">
              <h3>💼 {t.events?.professional || 'Professional Events'}</h3>
              <p>{t.events?.professionalDesc || 'Networking sessions and career development workshops'}</p>
            </div>
            <div className="type-card">
              <h3>🎓 {t.events?.educational || 'Educational Programs'}</h3>
              <p>{t.events?.educationalDesc || 'Seminars and training sessions for members and youth'}</p>
            </div>
            <div className="type-card">
              <h3>🤝 {t.events?.social || 'Social Gatherings'}</h3>
              <p>{t.events?.socialDesc || 'Casual meetups and family bonding activities'}</p>
            </div>
            <div className="type-card">
              <h3>🎗️ {t.events?.community || 'Community Service'}</h3>
              <p>{t.events?.communityDesc || 'Charity drives and welfare activities'}</p>
            </div>
            <div className="type-card">
              <h3>🌍 {t.events?.cultural || 'Cultural Programs'}</h3>
              <p>{t.events?.culturalDesc || 'Heritage preservation and cultural awareness activities'}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Events;
