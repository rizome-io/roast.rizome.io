module.exports = {
  // pathPrefix: `/roast-pool`,
  siteMetadata: {
    siteUrl: 'https://roast.rizome.io',
    title: 'ROAST at Cardano',
    description: 'Low fee, high availability and secure stake pool',
    keywords: 'cardano, stake, stakepool, pool, delegate, secure, delegation, margin, mining, staking, bitcoin',
    image: '/fav.png',
    author: 'Andrej Novikov', // this one is take, choose another name
    twitter: false, // replace it, or set to 'false' to disable "Tweet this" button
    social: [ // again, replace thse with your own value, or set to empty array to disable them
      // { name: 'twitter', url: 'https://twitter.com/xiaoxinghu' },
      { name: 'website', url: 'https://shroomist.github.io/candy-pool/' },
      { name: 'github', url: 'https://github.com/shroomist' },
      { name: 'email', url: 'mailto:jazzaiman@gmail.com' },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-TRRWBDYE7F'],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /.*.svg/,
        },
          name: '',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sources`,
        path: `src`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-theme-blorg`,
      options: {
        // contentPath: 'content',
        // filter: () => true,
        // pagination: 5,
        // columns: 2,
        indexPath: '/blog',
        // imageMaxWidth: 1380,
        // categoryIndexPath: category => `/${category}`,
        // tagIndexPath: tag => `/:${tag}:`,
        // slug: ({ export_file_name }) => `/${export_file_name}`,
        // postRedirect: () => [],
      },
    },
  ],
}
