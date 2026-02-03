import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { committeeMembers } from '../data/membersData';
import Carousel from '../components/Carousel';
import LeadersCarousel from '../components/LeadersCarousel';
import './Home.css';
import h1 from '../assets/hero_1.jpg';
import h2 from '../assets/hero_2.jpg';
import h3 from '../assets/hero_3.jpg';
import h4 from '../assets/hero_4.jpg'; 
import h5 from '../assets/hero_5.jpg';
import h6 from '../assets/hero_6.jpg';
import h7 from '../assets/hero_7.jpg';
import h8 from '../assets/hero_8.jpg';

function Home() {
  const { t } = useLanguage();
  const carouselImages = [
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7,
    h8
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

      <Carousel images={carouselImages} loading={lazy} />

    

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
          <Link to="/about" className="cta-button">{t.home.learnMore}</Link>
        </div>
      </section>

      <section className="quick-links">
        <div className="links-container">
          <Link to="/committee" className="link-card">
            <h3>{t.home.committee}</h3>
            <p>{t.home.committeeText}</p>
          </Link>
          <Link to="/members" className="link-card">
            <h3>{t.home.membersDir}</h3>
            <p>{t.home.membersDirText}</p>
          </Link>
          <Link to="/events" className="link-card">
            <h3>{t.home.eventsSection}</h3>
            <p>{t.home.eventsText}</p>
          </Link>
          <Link to="/gallery" className="link-card">
            <h3>{t.home.gallery}</h3>
            <p>{t.home.galleryText}</p>
          </Link>
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
