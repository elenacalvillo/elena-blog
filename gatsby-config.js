module.exports = {
  siteMetadata: {
    title: `Elena Calvillo`,
    author: {
      name: `Elena Calvillo`,
      summary: `I'm a Product Owner/Manager. I help agile teams to build products using my UX, Quality Assurance and Development background.`,
    },
    description: `I'm a Product Owner/Manager. I help agile teams to build products using my UX, Quality Assurance and Development background.`,
    siteUrl: `https://elenacalvillo.com/`,
    social: {
      twitter: `elenahx`,
      instagram: `prdct.tips`,
      linkedin: `elena-calvillo-863542169`,
    },
  },
  plugins: [
    /* This is causing an error, haven't resolved it :(
    {
      resolve: "gatsby-plugin-mixpanel",
      options: {
        apiToken: "ffc50d7f8bebb41b84e4133c1af91276",
        enableOnDevMode: true,
        mixpanelConfig: null,
        pageViews: "all",
        getPageViewTransformerFn: null,
      },
    },
    */
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              // usePrefix defaults to false
              // usePrefix: true is the same as ["oembed"]
              usePrefix: false,
              providers: {
                // Important to exclude providers
                // that adds js to the page.
                // If you do not need them.
                Instagram: {
                  //url: "https://api.instagram.com/oembed",
                  access_token: "360251bb00188c3aeadf407105c6ebcc",
                },
                exclude: ["Reddit"],
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `source sans pro\:400,400i,600,700`,
          `source serif pro\:400,400i,600,700`,
          `open sans\:400,400i,600,700`,
          `caveat\:400,600,700`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              withWebp: true,
              showCaptions: true,
              quality: 100,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-WW42GL7N09`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/logo.png`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `43454604149`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
