import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `greshamdotdev2`,
    siteUrl: `https://gresham.dev`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Phil Gresham`,
        short_name: `Gresham.dev`,
        start_url: `/`,
        background_color: `#f1f7ed`,
        theme_color: `#146067`,
        display: `standalone`,
        icon: 'src/images/android-chrome-512x512.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    `gatsby-plugin-offline`,
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};

export default config;
