import type { FixedObject, FluidObject } from 'gatsby-image';

type ImageNode = {
  node: {
    publicURL: string;
    relativePath: string;
    name: string;
    childImageSharp: {
      fluid?: FluidObject;
      fixed?: FixedObject;
    };
  };
};

export type Images = {
  images: {
    edges: ImageNode[];
  };
};
