import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { OutboundLink } from 'gatsby-plugin-gtag';
import PortfolioContext from '../context/context';

const Footer = () => {
  const {
    footer: { networks },
  } = useContext(PortfolioContext);

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks.map(({ id, name, url }) => {
            return (
              <OutboundLink key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
                <i className={`fa fa-${name} fa-inverse`} />
              </OutboundLink>
            );
          })}
        </div>
        <hr />
        <p className="footer__text">
          &copy;2022 Phil Gresham | GatsbyJS template developed by&nbsp;
          <OutboundLink href="https://github.com/cobidev" target="_blank" rel="noopener noreferrer">
            Jacobo Martínez
          </OutboundLink>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
