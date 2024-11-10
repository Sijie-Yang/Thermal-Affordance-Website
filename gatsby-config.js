/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "Thermal-Affrodance_website",
  siteMetadata: {
    title: `Thermal Affordance`,
    siteUrl: `https://ta.sijie-yang.com`
  },
  plugins: [
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    "gatsby-transformer-remark", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "data",
        path: `${__dirname}/data`
      }
    }
  ]
};