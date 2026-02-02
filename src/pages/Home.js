import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { committeeMembers } from '../data/membersData';
import Carousel from '../components/Carousel';
import LeadersCarousel from '../components/LeadersCarousel';
import './Home.css';

function Home() {
  const { t } = useLanguage();
  const carouselImages = [
    'images/hero/1.jpg',
    'images/hero/2.jpg',
    'images/hero/3.jpg',
    'images/hero/4.jpg',
    'images/hero/5.jpg',
    'images/hero/6.jpg',
    'images/hero/7.jpg',
    'images/hero/11.jpg',
  ];

  // Get core leadership team (first 7 members: Chairman, 2 Vice Chairmen, Convener, 2 Joint Conveners, Treasurer)
  const leaders = committeeMembers.slice(0, 7);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>{t.home.title}</h1>
          <p className="subtitle">{t.home.subtitle}</p>
        </div>
      </section>

      <Carousel images={carouselImages} />

    

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <h3 className="stat-number">238</h3>
            <p className="stat-label">{t.home.totalMembers}</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">188</h3>
            <p className="stat-label">{t.home.workingAbroad}</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">50</h3>
            <p className="stat-label">{t.home.inPandikkad}</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">2019</h3>
            <p className="stat-label">{t.home.founded}</p>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="about-content">
          <h2>{t.home.aboutTitle}</h2>
          <p>{t.home.aboutText1}</p>
          <p>{t.home.aboutText2}</p>
          <a href="/about" className="cta-button">{t.home.learnMore}</a>
        </div>
      </section>

      <section className="quick-links">
        <div className="links-container">
          <a href="/committee" className="link-card">
            <h3>{t.home.committee}</h3>
            <p>{t.home.committeeText}</p>
          </a>
          <a href="/members" className="link-card">
            <h3>{t.home.membersDir}</h3>
            <p>{t.home.membersDirText}</p>
          </a>
          <a href="/events" className="link-card">
            <h3>{t.home.eventsSection}</h3>
            <p>{t.home.eventsText}</p>
          </a>
          <a href="/gallery" className="link-card">
            <h3>{t.home.gallery}</h3>
            <p>{t.home.galleryText}</p>
          </a>
        </div>
      </section>
        <section className="leaders-section">
        <div className="leaders-header">
          <h2>{t.home.meetLeaders}</h2>
          <p>{t.home.meetLeadersText}</p>
        </div>
        <LeadersCarousel leaders={leaders} />
      </section>
    </div>
  );
}

export default Home;
