import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import { OutboundLink } from 'gatsby-plugin-gtag';
import { PopupWidget } from 'react-calendly';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <OutboundLink
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={
                email
                  ? `mailto:${email}`
                  : 'https://github.com/cobidev/react-simplefolio'
              }
            >
              {btn || "Let's Talk"}
            </OutboundLink>
            <PopupWidget
              url="https://calendly.com/phil-gresham"
              pageSettings={{
                backgroundColor: 'f1f7ed',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '6d98ba',
                textColor: '000080',
              }}
            />
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
