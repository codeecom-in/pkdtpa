import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <button
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        title="Select Language"
      >
        <span className="language-flag">
          {language === 'EN' ? '🇬🇧' : '🇮🇳'}
        </span>
        <span className="language-code">{language}</span>
        <span className="dropdown-arrow">▼</span>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          <button
            className={`language-option ${language === 'EN' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('EN')}
          >
            {/* <span className="option-flag">🇬🇧</span> */}
            <span className="option-text">English (EN)</span>
          </button>
          <button
            className={`language-option ${language === 'ML' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('ML')}
          >
            {/* <span className="option-flag">🇮🇳</span> */}
            <span className="option-text">മലയാളം (മ)</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
