import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import DevIcon, { iconList } from 'devicon-react-svg';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
// import ProjectImg from '../Image/ProjectImg';

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

  const devIconStyle = {
    fill: '#d43f12',
    height: '80px',
  };

  return (
    <section id="skills">
      <Container>
        <div className="skills-wrapper">
          <Title title="Skills" />
          <Row>
            {skills.map((skill) => {
              const { id, faIcon, name, src, devIcon } = skill;

              return (
                <Col key={id} lg={4} sm={2}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={200}
                    distance="30px"
                  >
                    <div className="skills-wrapper" data-tooltip={name}>
                      <DevIcon
                        icon={devIcon}
                        style={devIconStyle}
                        viewBox="0 0 32 32"
                      />
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
