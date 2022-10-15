import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../context/context';

const SCROLL_DURATION = 700;

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  if (!hero) return null;

  const { title, name, subtitle, sections } = hero;

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <h1 className="hero-title">
          {title}&nbsp;
          <span className="text-color-main">{name}</span>.
          <br />
          {subtitle}
        </h1>
        {Object.entries(sections).map(([id, { title }]) => (
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to={id} smooth duration={SCROLL_DURATION}>
                {title}
              </Link>
            </span>
          </p>
        ))}
      </Container>
    </section>
  );
};

export default Header;
