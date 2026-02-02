import React, { createContext, useState, useContext } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN');

  const changeLanguage = (lang) => {
    setLanguage(lang);
    // Save to localStorage to persist language preference
    localStorage.setItem('ptpa_language', lang);
  };

  // Load saved language preference on mount
  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('ptpa_language');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const t = translations[language] || translations['EN'];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
