import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const SCROLL_DURATION = 700;

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

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <h1 className="hero-title">
          {title || 'Hi, my name is'}&nbsp;
          <span className="text-color-main">{name}</span>.
          <br />
          {subtitle}
        </h1>
        <p className="hero-cta">
          <span className="cta-btn cta-btn--hero">
            <Link to="about" smooth duration={SCROLL_DURATION}>
              {ctaAbout}
            </Link>
          </span>
        </p>
        <p className="hero-cta">
          <span className="cta-btn">
            <Link to="projects" smooth duration={SCROLL_DURATION}>
              {ctaProjects}
            </Link>
          </span>
        </p>
        <p className="hero-cta">
          <span className="cta-btn">
            <Link to="skills" smooth duration={SCROLL_DURATION}>
              {ctaSkills}
            </Link>
          </span>
        </p>
        <p className="hero-cta">
          <span className="cta-btn">
            <Link to="contact" smooth duration={SCROLL_DURATION}>
              {ctaContact}
            </Link>
          </span>
        </p>
      </Container>
    </section>
  );
};

export default Header;
