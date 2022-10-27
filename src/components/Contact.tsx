import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { OutboundLink } from 'gatsby-plugin-gtag';
import PortfolioContext from '../context/context';
import Title from './Title';

const Contact = () => {
  const {
    contact: { cta, btn, email },
  } = useContext(PortfolioContext);

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <div className="contact-wrapper">
          <p className="contact-wrapper__text">{cta}</p>
          <OutboundLink
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn--resume"
            href={`mailto:${email}`}
          >
            {btn}
          </OutboundLink>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
