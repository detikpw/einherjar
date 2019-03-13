module.exports = {
    siteMetadata: {
      title: `Catatan Detik`,
      description: 'Just a Note'
    },
    plugins: ['gatsby-plugin-flow', 'gatsby-plugin-styled-components', 'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-remark-prismjs`,
      options: {
        classPrefix: "language-",
        inlineCodeMarker: null,
        aliases: {},
        showLineNumbers: false,
        noInlineHighlight: false,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    'gatsby-plugin-twitter',
    'gatsby-plugin-react-helmet'
  ],
}
