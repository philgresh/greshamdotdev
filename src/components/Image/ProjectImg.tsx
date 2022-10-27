import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import type { Images } from './types';

const PROJECT_IMAGE_QUERY = graphql`
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
`;

export type ProjectImgProps = {
  filename: string;
  alt: string;
};

const ProjectImg = ({ filename, alt }: ProjectImgProps) => {
  const data = useStaticQuery<Images>(PROJECT_IMAGE_QUERY);

  const image = data.images.edges.find((n: any) => n.node.relativePath === filename);
  if (!image) return null;

  const imageFluid = image.node.childImageSharp?.fluid;
  const imagePublic = image.node.publicURL;
  if (imageFluid) return <Img alt={alt} fluid={imageFluid} />;

  return <img src={imagePublic} alt={alt} />;
};

export default ProjectImg;
