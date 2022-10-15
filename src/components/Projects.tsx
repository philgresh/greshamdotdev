import React from 'react';
import { OutboundLink } from 'gatsby-plugin-gtag';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../context/context';
import ProjectImg from './Image/ProjectImg';
import Title from './Title';

const Projects = () => {
  const { projects } = React.useContext(PortfolioContext);

  if (!projects) return null;

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <div className="project-wrapper__text">
                    <h3 className="project-wrapper__text-title">{title}</h3>
                    <div>
                      <p>{info}</p>
                      <p className="mb-4">{info2}</p>
                    </div>
                    {url && (
                      <OutboundLink
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url}
                      >
                        See Live
                      </OutboundLink>
                    )}
                    {repo && (
                      <OutboundLink
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={repo}
                      >
                        Source Code
                      </OutboundLink>
                    )}
                  </div>
                </Col>
                <Col lg={8} sm={12}>
                  <div className="project-wrapper__image">
                    <OutboundLink href={url} target="_blank" aria-label="Project Link" rel="noopener noreferrer">
                      {img && (
                        <div data-tilt className="thumbnail rounded">
                          <ProjectImg alt={title} filename={img} />
                        </div>
                      )}
                    </OutboundLink>
                  </div>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
