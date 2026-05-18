import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { motion } from 'framer-motion';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      <div className="noise-bg"></div>
      
      {/* Background Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full z-[-1] animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-secondary/20 blur-[120px] rounded-full z-[-1] animate-pulse delay-700"></div>

      <Header />

      <main className="max-w-[1400px] mx-auto px-6 py-8 lg:py-12 flex flex-col lg:flex-row gap-8 items-start">
        {/* Sticky Sidebar */}
        <div className="w-full lg:w-[350px] lg:sticky lg:top-24">
          <Sidebar />
        </div>

        {/* Content Area */}
        <div className="flex-1 w-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
