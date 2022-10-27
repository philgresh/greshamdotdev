import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../context/context';
import Title from './Title';

const devIconStyle = {
  fill: '#d43f12',
  height: '80px',
};

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

  return (
    <section id="skills">
      <Container>
        <div className="skills-wrapper">
          <Title title="Skills" />
          <Row>
            {skills.map(({ id, name, devIcon }) => (
              <Col key={id} lg={4} sm={2}>
                <div className="skills-wrapper" data-tooltip={name}>
                  {devIcon && <i className={devIcon} {...devIconStyle} />}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
