import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const {
    title,
    name,
    subtitle,
    ctaAbout,
    ctaProjects,
    ctaContact,
    ctaSkills,
  } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <h1 className="hero-title">
            {title || 'Hi, my name is'}&nbsp;
            <span className="text-color-main">{name}</span>.
            <br />
            {subtitle}
          </h1>
        </Fade>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {ctaAbout}
              </Link>
            </span>
          </p>
          <p className="hero-cta">
            <span className="cta-btn">
              <Link to="projects" smooth duration={1000}>
                {ctaProjects}
              </Link>
            </span>
          </p>
          <p className="hero-cta">
            <span className="cta-btn">
              <Link to="skills" smooth duration={1000}>
                {ctaSkills}
              </Link>
            </span>
          </p>
          <p className="hero-cta">
            <span className="cta-btn">
              <Link to="contact" smooth duration={1000}>
                {ctaContact}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
