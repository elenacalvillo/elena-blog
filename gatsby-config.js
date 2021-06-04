module.exports = {
  siteMetadata: {
    title: `Elena Calvillo`,
    author: {
      name: `Elena Calvillo`,
      summary: `I'm a Product Manager and I help agile teams to build products using my UX, Quality Assurance and Development background.`,
    },
    description: `I'm a Product Manager and I help agile teams to build products using my UX, Quality Assurance and Development background.`,
    siteUrl: `https://elenacalvillo.com/`,
    social: {
      twitter: `elenahx`,
      instagram: `prdct.tips`,
      linkedin: `elena-calvillo-863542169`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts-with-attributes`,
      options: {
        fonts: [
          `source sans pro\:400,400i,600,700`,
          `source serif pro\:400,400i,600,700`,
          `open sans\:400,400i,600,700`,
          `caveat\:400,600,700`,
        ],
        display: "swap",
        attributes: {
          rel: "stylesheet preload prefetch",
        },
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1900,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
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
          `gatsby-remark-copy-images`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
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
      resolve: "gatsby-plugin-segment-analytics",
      options: {
        writeKey: "3B4o9vsmK7v9kXyZoGYSz2BE1GKFDO1j",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-2Q23H9D3GZ", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-heap",
      options: {
        appId: "4130300054",
        enableOnDevMode: true, // if 'false', heap will be fired on NODE_ENV=production only
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: 2169576,
        sv: 6,
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "/termly-cookie-banner.js",
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "/smartlook.js",
      },
    },
    {
      resolve: "gatsby-plugin-social9-socialshare",
      options: {
        id: "s9-sdk",
        async: true,
        defer: true,
        content: "5362c412a6c44db1a6148791c34f05bb",
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: "prdct.tips",
        access_token: "EAAJqdV3pP3QBAD0hm9ZCO1jrla1SDLOPmQmgZB9vw58XcZBtYvZC66MKTFaVGqoCYB2By1qXgBv8DVBrPL2mxiKy3eFYVlTwh4fLd97DA4Ha6PCUpnzD7NHP0tto8jSZALrWriBvMj9CKPaOB9ZC3gsO7kIbHaruyU6fHLBEHxZBmCaALPRtvZCo",
        instagram_id: "17841443564471825",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-advanced-sitemap`,
  ],
}
