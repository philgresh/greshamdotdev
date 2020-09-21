import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

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
    <section id="skills">
      <Container>
        <div className="skills-wrapper">
          <Title title="Skills" />
          <Row>
            {skills.map((skill) => {
              const { id, faIcon, name, src } = skill;

              return (
                <Col key={id} lg={4} sm={2}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={200}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h5 className="project-wrapper__text-title">{name}</h5>
                      <div height="30px">
                        {faIcon ? (
                          <i
                            className={`fa fa-${
                              faIcon || 'refresh'
                            } fa-inverse`}
                          />
                        ) : (
                          <img src={src} alt={`${name} icon`} height="100%" />
                        )}
                      </div>
                    </div>
                  </Fade>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
