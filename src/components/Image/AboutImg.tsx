import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import type { Images } from './types';

const ABOUT_IMG_QUERY = graphql`
  query {
    images: allFile {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fixed(width: 350, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;

export type AboutImgProps = {
  filename: string;
  alt: string;
};

const AboutImg = ({ filename, alt }: AboutImgProps) => {
  const data = useStaticQuery<Images>(ABOUT_IMG_QUERY);

  const image = data.images.edges.find((n: any) => n.node.relativePath === filename);
  if (!image) return null;

  const imageFixed = image.node.childImageSharp?.fixed;
  const imagePublic = image.node.publicURL;
  if (imageFixed) return <Img alt={alt} fixed={imageFixed} className="rounded shadow-lg" />;

  return <img src={imagePublic} alt={alt} className="rounded shadow-lg" />;
};

export default AboutImg;
