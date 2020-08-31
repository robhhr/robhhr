module.exports = {
  siteMetadata: {
    title: `@robhhr `,
    description: `Personal portfolio site built with React, Gatsby and GraphQL`,
    author: `@robhhr`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
