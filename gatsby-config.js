module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `M4gie - Portfolio`,
        short_name: `m4gie`,
        start_url: `/`,
        background_color: `#224984`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
      },
    },
  ],
}
