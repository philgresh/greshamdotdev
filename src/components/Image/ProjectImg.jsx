import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const ProjectImg = ({ filename, alt, imgClassname }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                publicURL
                relativePath
                name
                childImageSharp {
                  fluid(maxWidth: 1366) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const image = data.images.edges.find((n) =>
          n.node.relativePath.includes(filename),
        );

        if (!image) return null;

        if (filename.includes('gif')) {
          const imagePublic = image.node.publicURL;
          return <img src={imagePublic} alt={alt} className={imgClassname} />;
        }

        const imageFluid = image.node.childImageSharp.fluid;
        return <Img alt={alt} fluid={imageFluid} className={imgClassname} />;
      }}
    />
  );
};

ProjectImg.propTypes = {
  filename: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imgClassname: PropTypes.string,
};

ProjectImg.defaultProps = {
  imgClassname: '',
};

export default ProjectImg;
