import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Blogs.css';

function Blogs() {
  const { t } = useLanguage();

  return (
    <div className="blogs">
      <section className="blogs-hero">
        <div className="blogs-hero-content">
          <h1>{t.blogs.title}</h1>
          <p className="blogs-subtitle">{t.blogs.subtitle}</p>
        </div>
      </section>

      <section className="blogs-content">
        <div className="blogs-container">
          <div className="no-blogs-message">
            <div className="no-blogs-icon">📝</div>
            <h2>{t.blogs.noBlogsMessage}</h2>
            <p className="submit-invite">{t.blogs.submitMessage}</p>
          </div>

          <div className="blogs-submission-section">
            <h3>{t.blogs.sendBlogs}</h3>
            
            <div className="contact-info">
              <p><strong>{t.blogs.contactInfo}</strong></p>
              <div className="contact-details">
                <a
                  href="mailto:roshan@codeecom.in"
                  className="contact-item"
                  title="Send email"
                >
                  <span className="contact-icon">📧</span>
                  <p>{t.blogs.email}</p>
                </a>
                <a
                  href="https://wa.me/919778256046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                  title="Open WhatsApp"
                >
                  <span className="contact-icon">💬</span>
                  <p>{t.blogs.whatsapp}</p>
                </a>
              </div>
            </div>

            <div className="guidelines-section">
              <h4>{t.blogs.guidelinesTitle}</h4>
              <p>{t.blogs.guidelinesText}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
