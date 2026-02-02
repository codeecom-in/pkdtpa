import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { sampleMembers } from '../data/membersData';
import './Members.css';

function Members() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLocation, setFilterLocation] = useState('');

  // Get unique locations for filter
  const locations = ['All', ...new Set(sampleMembers.map(m => m.location))];

  // Filter and search members
  const filteredMembers = useMemo(() => {
    return sampleMembers.filter(member => {
      const memberName = member.name || '';
      const memberProfession = member.profession || '';
      const matchesSearch = memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           memberProfession.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = !filterLocation || filterLocation === 'All' || member.location === filterLocation;
      return matchesSearch && matchesLocation;
    });
  }, [searchTerm, filterLocation]);

  return (
    <div className="members">
      <section className="members-header">
        <h1>{t.members.title}</h1>
        <p>{t.members.subtitle}</p>
      </section>

      <div className="members-container">
        <div className="filters-section">
          <div className="search-box">
            <input
              type="text"
              placeholder={t.members.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="location-filter">
            <label>{t.members.filterBy}</label>
            <select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="filter-select"
            >
              {locations.map(location => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-info">
            {filterLocation && filterLocation !== 'All' ? (
              <p>Showing <strong>{filterLocation}</strong> members</p>
            ) : (
              <p>{t.members.showing} {filteredMembers.length} {t.members.of} {sampleMembers.length} {t.members.members}</p>
            )}
          </div>
        </div>

        {filteredMembers.length > 0 ? (
          <div className="members-grid">
            {filteredMembers.map(member => (
              <div key={member.id} className="member-card">
                <div className="member-image">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} />
                  ) : (
                    <div className="placeholder-image">👤</div>
                  )}
                </div>
                <div className="member-details">
                  <h3>{member.name}</h3>
                  {member.profession && <p className="profession">{member.profession}</p>}
                  <p className="location">📍 {member.location}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>{t.members.noResults}</p>
            <button onClick={() => { setSearchTerm(''); setFilterLocation(''); }} className="reset-btn">
              {t.members.resetFilters}
            </button>
          </div>
        )}
      </div>

      <section className="members-info">
        <div className="info-box">
          <h2>{t.members.overview}</h2>
          <p>{t.members.overviewText}</p>
          <div className="info-grid">
            <div className="stat">
              <h4>238</h4>
              <p>{t.home.totalMembers}</p>
            </div>
            <div className="stat">
              <h4>188</h4>
              <p>{t.members.international}</p>
            </div>
            <div className="stat">
              <h4>50</h4>
              <p>{t.members.inIndia}</p>
            </div>
            <div className="stat">
              <h4>25+</h4>
              <p>{t.members.countries}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Members;
