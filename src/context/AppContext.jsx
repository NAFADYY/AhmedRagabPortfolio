import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AppContext = createContext();
const defaultTheme = 'dark';
const defaultLanguage = 'en';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return ['dark', 'light'].includes(savedTheme) ? savedTheme : defaultTheme;
};

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem('language');
  return ['en', 'ar'].includes(savedLanguage) ? savedLanguage : defaultLanguage;
};

export const AppProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState(getInitialTheme);
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.className = theme;
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  }, [i18n, lang]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  
  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, toggleLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
