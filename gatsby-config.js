module.exports = {
  siteMetadata: {
    title: `D.O.G. Antwerpen`,
    description: `Bij de dienst onthaalouders Gezinsbond Antwerpen kunt u terecht als u opvang zoekt voor uw kind in een opvanggezin of als u onthaalouder wilt worden.`,
    author: `rubenberna`,
    siteUrl: `https://dog-gezinsbondantwerpen.be/`,
    keywords: ['onthaalouders', 'antwerpen', 'gezinsbond', 'dienst opvanggezinnen']
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
        title: 'D.O.G Antwerpen',
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
     {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://dog-gezinsbondantwerpen.be',
        sitemap: 'https://dog-gezinsbondantwerpen.be/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
