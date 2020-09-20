import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  // const [hero, setHero] = useState({});
  // const [about, setAbout] = useState({});
  // const [projects, setProjects] = useState([]);
  // const [contact, setContact] = useState({});
  // const [footer, setFooter] = useState({});

  // useEffect(() => {
  //   setHero({ ...heroData });
  //   setAbout({ ...aboutData });
  //   setProjects([...projectsData]);
  //   setContact({ ...contactData });
  //   setFooter({ ...footerData });
  // }, []);

  const hero = heroData;
  const about = aboutData;
  const projects = projectsData;
  const contact = contactData;
  const footer = footerData;

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
