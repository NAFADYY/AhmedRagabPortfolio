import React from 'react';
import { useApp } from '../context/AppContext';
import { Sun, Moon, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const { theme, toggleTheme, lang, toggleLanguage } = useApp();

  return (
    <header className="sticky top-0 z-50 glass backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          className="text-2xl font-black tracking-tighter"
          whileHover={{ scale: 1.05 }}
        >
          AN<span className="text-primary">.</span>
        </motion.div>

        <nav className="flex items-center gap-4">
          <motion.button
            onClick={toggleLanguage}
            className="p-3 rounded-xl glass hover:border-primary/50 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Languages size={18} />
            <span className="text-xs font-bold uppercase">{lang === 'en' ? 'AR' : 'EN'}</span>
          </motion.button>

          <motion.button
            onClick={toggleTheme}
            className="p-3 rounded-xl glass hover:border-primary/50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
