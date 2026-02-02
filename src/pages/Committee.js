import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { committeeMembers } from '../data/membersData';
import './Committee.css';

function Committee() {
  const { t } = useLanguage();
  return (
    <div className="committee">
      <section className="committee-header">
        <h1>{t.committee.title}</h1>
        <p>{t.committee.subtitle}</p>
      </section>

      <div className="committee-container">
        <div className="committee-grid">
          {committeeMembers.map((member) => (
            <div key={member.id} className="member-card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="committee-info">
        <div className="info-box">
          <h2>{t.committee.leadership}</h2>
          <p>{t.committee.leadershipText}</p>
          <ul>
            {t.committee.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Committee;
