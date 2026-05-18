import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-[#0B0B0F] flex flex-col items-center justify-center gap-8"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative">
        <motion.div 
          className="text-8xl font-black text-white/5 select-none"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {count}%
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl font-black text-primary">AN.</div>
        </div>
      </div>

      <div className="w-64 h-[2px] bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${count}%` }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
