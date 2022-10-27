import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
// import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';
import type { PortfolioContextType } from '../types';

import {
  aboutData as about,
  contactData as contact,
  footerData as footer,
  heroData as hero,
  projectsData as projects,
  skillsData as skills,
} from '../mock/data';

const App = () => {
  const contextValue: PortfolioContextType = { hero, about, projects, contact, footer, skills };
  return (
    <PortfolioProvider value={contextValue}>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      {/* <Footer /> */}
    </PortfolioProvider>
  );
};

export default App;
