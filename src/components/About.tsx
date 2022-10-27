import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { OutboundLink } from 'gatsby-plugin-gtag';
import Title from './Title';
import PortfolioContext from '../context/context';
import AboutImg from './Image/AboutImg';

const About = () => {
  const {
    about: { img, resume, paragraphs },
  } = React.useContext(PortfolioContext);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <div className="about-wrapper__image">
              <AboutImg alt="profile picture" filename={img} />
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="about-wrapper__info">
              {paragraphs.map((paragraph) => (
                <p className="about-wrapper__info-text">{paragraph}</p>
              ))}
              <span className="d-flex mt-3">
                <OutboundLink
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--resume"
                  href={resume}
                >
                  Resume
                </OutboundLink>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
