import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { OutboundLink } from 'gatsby-plugin-gtag';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <OutboundLink
                  key={id}
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </OutboundLink>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          &copy;2021 Phil Gresham | GatsbyJS template developed by&nbsp;
          <OutboundLink
            href="https://github.com/cobidev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jacobo Martínez
          </OutboundLink>
        </p>

        {isEnabled && <GithubButtons />}
      </Container>
    </footer>
  );
};

export default Footer;
