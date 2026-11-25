import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const AppContext = createContext(null);
const isBrowser = typeof window !== 'undefined';

const readStorage = (key) => {
  try {
    return isBrowser ? window.localStorage.getItem(key) : null;
  } catch {
    return null;
  }
};
const writeStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* storage unavailable (private mode) */
  }
};

/**
 * Theme + language state.
 * - First render always uses the server defaults (dark / en) so hydration matches
 *   the prerendered HTML. The real theme class is already applied to <html> by an
 *   inline script in index.html, so there is no flash.
 * - Saved preferences are synced right after mount.
 */
export const AppProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('en');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedTheme = readStorage('theme');
    const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync client-only preferences after hydration
    setTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : prefersLight ? 'light' : 'dark');
    const savedLang = readStorage('language');
    if (savedLang === 'ar' || savedLang === 'en') setLang(savedLang);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.classList.toggle('light', theme === 'light');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0B0D12' : '#F5F5F2');
    writeStorage('theme', theme);
  }, [theme, ready]);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    if (i18n.language !== lang) i18n.changeLanguage(lang);
    writeStorage('language', lang);
  }, [lang, ready, i18n]);

  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);
  const toggleLanguage = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'en' ? 'ar' : 'en';
      i18n.changeLanguage(next);
      document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = next;
      writeStorage('language', next);
      return next;
    });
  }, [i18n]);

  const value = useMemo(() => ({ theme, lang, isRTL: lang === 'ar', toggleTheme, toggleLanguage }), [theme, lang, toggleTheme, toggleLanguage]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside <AppProvider>');
  return ctx;
};

/** Pick the active-language value from a `{ en, ar }` object (falls back to English). */
// eslint-disable-next-line react-refresh/only-export-components
export const useLocalized = () => {
  const { lang } = useApp();
  return useCallback((field) => {
    if (field == null) return field;
    if (typeof field === 'string' || Array.isArray(field)) return field;
    return field[lang] ?? field.en;
  }, [lang]);
};
