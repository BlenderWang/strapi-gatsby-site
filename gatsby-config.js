module.exports = {
  siteMetadata: {
    title: `Wangimation`,
    description: `This is a template I developed using Gatsby on the front combined with Strapi CMS.`,
    url: `https://strapi-gatsby-postgresql-temp.netlify.com/`,
    image: `src/images/favicon.png`,
    author: `@gatsbyjs @strapi @shirleywang`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://strapi-gatsby-postgresql-temp.herokuapp.com"
          : "http://localhost:1337",
        contentTypes: ["news", "jobs", "user"],
        queryLimit: 1000,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
