import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export type ProjectImgProps = {
  filename: string;
  alt: string;
  imgClassname?: string;
};

const ProjectImg = ({ filename, alt, imgClassname }: ProjectImgProps) => {
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
        const image = data.images.edges.find((n: any) => n.node.relativePath.includes(filename));

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

export default ProjectImg;
