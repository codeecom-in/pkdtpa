import React, { lazy } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { committeeMembers } from '../data/membersData';
import Carousel from '../components/Carousel';
import LeadersCarousel from '../components/LeadersCarousel';
import './Home.css';
import h1 from '../assets/hero_1.jpg';
import ad from '../assets/ad.jpg';
import ad1 from '../assets/ad1.png';
import h2 from '../assets/hero_2.jpg';
import h3 from '../assets/hero_3.jpg';
import h4 from '../assets/hero_4.jpg';
import h5 from '../assets/hero_5.jpg';
import h6 from '../assets/hero_6.jpg';
import h7 from '../assets/hero_7.jpg';
import h8 from '../assets/hero_8.jpg';
import { useGSAPAnimations } from '../hooks/useGSAPAnimations';

function Home() {
  const scrollRef = useGSAPAnimations();
  const { t } = useLanguage();
  const navigate = useNavigate();
  // Simple CountUp Hook
  const useCountUp = (end, duration = 2000) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }, [end, duration]);

    return count;
  };

  const carouselImages = [
    h1,
    h2,
    ad,
    h3,
    h4,
    ad,
    h5,
    h6,
    ad,
    h7,
    h8
  ];

  // Get core leadership team (first 7 members: Chairman, 2 Vice Chairmen, Convener, 2 Joint Conveners, Treasurer)
  const leaders = committeeMembers.slice(0, 7);

  return (
    <div className="home" ref={scrollRef}>
      <section className="hero">
        <div className="hero-content">
          <h1>{t.home.title}</h1>
          <p className="subtitle">{t.home.subtitle}</p>
        </div>
      </section>

      <div className="wave-divider" style={{ background: '#FFE7E7' }}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" fill="#FFE7E7" fillOpacity="1"></path>
        </svg>
      </div>

      <Carousel images={carouselImages} loading={lazy} />

      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill" fill="#FFE7E7" fillOpacity="1"></path>
        </svg>
      </div>



      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card" onClick={() => navigate('/members')}>
            <div className="stat-icon"><i className="fa-solid fa-users"></i></div>
            <h3 className="stat-number">{useCountUp(238)}</h3>
            <p className="stat-label">{t.home.totalMembers}</p>
          </div>
          <div className="stat-card" onClick={() => navigate('/members', { state: { filter: 'Expatriates' } })}>
            <div className="stat-icon"><i className="fa-solid fa-plane-departure"></i></div>
            <h3 className="stat-number">{useCountUp(188)}</h3>
            <p className="stat-label">{t.home.workingAbroad}</p>
          </div>
          <div className="stat-card" onClick={() => navigate('/members', { state: { filter: 'Pandikkad' } })}>
            <div className="stat-icon"><i className="fa-solid fa-map-location-dot"></i></div>
            <h3 className="stat-number">{useCountUp(50)}</h3>
            <p className="stat-label">{t.home.inPandikkad}</p>
          </div>
          <div className="stat-card" onClick={() => navigate('/about')}>
            <div className="stat-icon"><i className="fa-solid fa-calendar-check"></i></div>
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

      <section className="map-section">
        <div className="section-header">
          <h2>Country Wise Member Distribution</h2>
          <p>Our community members are spread across the globe</p>
        </div>
        <div className="map-container">
          <div className="map-placeholder">
            <i className="fa-solid fa-earth-americas map-icon"></i>
            <p>Interactive Map Coming Soon!</p>
            <div className="distribution-list">
              <span>🇦🇪 UAE</span><span>🇸🇦 KSA</span><span>🇶🇦 Qatar</span><span>🇴🇲 Oman</span><span>🇰🇼 Kuwait</span><span>🇮🇳 India</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sponsors-section">
        <div className="section-header">
          <h2>Our Partners & Sponsors</h2>
        </div>
        <div className="sponsors-grid">
          <div className="codecom">
            <p>Website sponsored by</p>
            <img className='ad' alt="Codeecom Advertisement" src={ad1} onClick={()=>window.open('https://codeecom.in','_blank')}/>

          </div>
          <div className="sponsor-card">become a,<br />Gold Partner<br />place your ad here.</div>
          <div className="sponsor-card">Community Supporter</div>
          <div className="sponsor-card">Event Partner</div>
        </div>
        <div className="ad-banner" onClick={()=> window.open('https://wa.me/+919778256046')}>
          <h3>Advertise With Us</h3>
          <p>Reach our global community. Contact us for ad placements.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
