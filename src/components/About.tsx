import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { OutboundLink } from 'gatsby-plugin-gtag';
import Title from './Title';
import PortfolioContext from '../context/context';
import AboutImg from './Image/AboutImg';

const About = () => {
  const { about, hero } = useContext(PortfolioContext);
  if (!about || !hero) return null;

  const { img, resume, paragraphs } = about;

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
