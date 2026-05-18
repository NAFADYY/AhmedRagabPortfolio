import React, { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Services from './components/Services';
import Tools from './components/Tools';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <MainLayout>
          <CursorGlow />
          <ScrollToTop />
          <div className="flex flex-col gap-24">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Resume />
            <Projects />
            <Certificates />
            <Services />
            <Tools />
            <FAQ />
            <Contact />
            <Footer />
          </div>
        </MainLayout>
      )}
    </>
  );
}

export default App;
