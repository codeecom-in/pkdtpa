import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './AboutUs.css';

function AboutUs() {
  const { t } = useLanguage();
  return (
    <div className="about-us">
      <section className="about-header">
        <h1>{t.about.title}</h1>
        <p>{t.about.subtitle}</p>
      </section>

      <div className="about-container">
        <section className="about-section">
          <h2>{t.about.whoWeAre}</h2>
          <p>{t.about.whoWeAreText}</p>
        </section>

        <section className="about-section">
          <h2>Our Community</h2>
          <div className="community-stats">
            <div className="info-box">
              <h3>238</h3>
              <p>Total Members</p>
              <p className="description">Connected from all around the world</p>
            </div>
            <div className="info-box">
              <h3>188</h3>
              <p>Expatriate Members</p>
              <p className="description">Working and settled abroad</p>
            </div>
            <div className="info-box">
              <h3>50</h3>
              <p>Resident Members</p>
              <p className="description">In Pandikkad and nearby areas</p>
            </div>
            <div className="info-box">
              <h3>2019</h3>
              <p>Year Established</p>
              <p className="description">Founded to connect our diaspora</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>{t.about.ourMission}</h2>
          <p>{t.about.missionText}</p>
          <ul className="mission-list">
            {t.about.missionPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="about-section">
          <h2>{t.about.whatWeDo}</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <h3> {t.about.events}</h3>
              <p>{t.about.eventsDesc}</p>
            </div>
            <div className="activity-card">
              <h3> {t.about.support}</h3>
              <p>{t.about.supportDesc}</p>
            </div>
            <div className="activity-card">
              <h3> {t.about.global}</h3>
              <p>{t.about.globalDesc}</p>
            </div>
            <div className="activity-card">
              <h3>{t.about.memory}</h3>
              <p>{t.about.memoryDesc}</p>
            </div>
            <div className="activity-card">
              <h3> {t.about.professional}</h3>
              <p>{t.about.professionalDesc}</p>
            </div>
            <div className="activity-card">
              <h3> {t.about.knowledge}</h3>
              <p>{t.about.knowledgeDesc}</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>{t.about.whyJoin}</h2>
          <div className="benefits">
            <div className="benefit-item">
              <h3>{t.about.stayConnected}</h3>
              <p>{t.about.stayConnectedDesc}</p>
            </div>
            <div className="benefit-item">
              <h3>{t.about.cultural}</h3>
              <p>{t.about.culturalDesc}</p>
            </div>
            <div className="benefit-item">
              <h3>{t.about.supportNetwork}</h3>
              <p>{t.about.supportNetworkDesc}</p>
            </div>
            <div className="benefit-item">
              <h3>{t.about.exclusiveEvents}</h3>
              <p>{t.about.exclusiveEventsDesc}</p>
            </div>
            <div className="benefit-item">
              <h3>{t.about.growth}</h3>
              <p>{t.about.growthDesc}</p>
            </div>
            <div className="benefit-item">
              <h3>{t.about.shared}</h3>
              <p>{t.about.sharedDesc}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
