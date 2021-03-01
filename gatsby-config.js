/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // [GitHub Pages](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/)
  pathPrefix: `/gatsby-blog-typescript-jest-tailwind`,
  siteMetadata: {
    title: `Gatsby Blog Starter`,
    description: `Gatsby Blog TypeScript with esLint, prettier, Jest and Tailwind`,
    author: `markfknight`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Blog Starter`,
        short_name: `Blog`,
        start_url: `/`,
        background_color: `#2cbdff`,
        theme_color: `#2cbdff`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: 'Monokai Operator', // Or install your favorite theme from GitHub
              extensions: ['monokai-operator-theme'],
              inlineCode: {
                marker: '•',
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 620,
              withWebp: true,
              wrapperStyle: `margin-bottom: 1.0725rem;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem;`,
            },
          },
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
          `gatsby-remark-external-links`,
        ],
      },
    },
    // add your brave token and domain to enable [Brave Rewards](https://publishers.basicattentiontoken.org/)
    // {
    //   resolve: 'gatsby-plugin-verify-brave',
    //   options: {
    //     token: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
    //     domain: 'test.dev',
    //   },
    // },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-catch-links`,
  ],
};
