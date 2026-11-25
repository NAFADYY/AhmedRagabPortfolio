import Seo from '../../components/shared/Seo';
import Hero from '../../components/hero/Hero';
import ProjectsSection from '../../components/projects/ProjectsSection';
import About from '../../components/about/About';
import Skills from '../../components/skills/Skills';
import Experience from '../../components/experience/Experience';
import Certificates from '../../components/certificates/Certificates';
import FAQ from '../../components/faq/FAQ';
import Contact from '../../components/contact/Contact';
import { personSchema, profilePageSchema, websiteSchema } from '../../utils/seo';

const HomePage = () => (
  <>
    <Seo
      path="/"
      jsonLd={[personSchema(), websiteSchema(), profilePageSchema()]}
    />
    <Hero />
    <ProjectsSection />
    <About />
    <Skills />
    <Experience />
    <Certificates />
    <FAQ />
    <Contact />
  </>
);

export default HomePage;
