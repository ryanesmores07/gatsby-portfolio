/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `WebDev Porfolio`,
    description: `Awesome WebDev Portfolio built with Gatsby and Strapi`,
    titleTemplate: `%s | WebDev Portfolio`,
    url: `https://gatsby-strapi-portfolio-proj.netlify.app`,
    twitterUsername: `@ryanesmores07`,
    image: `/mainImg.png`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        collectionTypes: [`api/jobs`, `api/projects`],
        singleTypes: [`api/about`],
      },
    },
  ],
}
