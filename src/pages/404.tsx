import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang="en" />
        <meta name="description" content="Page not found" />
      </Helmet>
      <section id="hero" className="jumbotron">
        <Container>
          <h1 className="hero-title text-center">
            Sorry, this path does not exist&nbsp;
            <span role="img" aria-label="emoji">
              😞
            </span>
          </h1>
          <p className="hero-cta justify-content-center">
            <Link className="cta-btn cta-btn--hero" to="/">
              Go back
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
};
