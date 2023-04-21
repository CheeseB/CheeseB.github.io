module.exports = {
  siteMetadata: {
    title: `개발자맛 치즈볼`,
    description: `주니어 프론트엔드 개발자의 개발일기 입니다.`,
    author: `CheeseB`,
    siteUrl: 'https://cheeseb.github.io/',
  },
  plugins: [
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          quality: 100,
          placeholder: 'blurred',
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
          {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
              siteUrl: 'https://cheeseb.github.io/',
              stripQueryString: true,
            },
          },
          'gatsby-plugin-advanced-sitemap',
          {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
              host: 'https://cheeseb.github.io/',
              sitemap: 'https://cheeseb.github.io/sitemap.xml',
              policy: [{ userAgent: '*', allow: '/' }],
            },
          },
          {
            resolve: 'gatsby-plugin-manifest',
            options: {
              icon: 'static/favicon/favicon-96x96.png',
            },
          },
          {
            resolve: `gatsby-plugin-feed`,
            options: {
              query: `
								{
									site {
										siteMetadata {
											title
											description
											siteUrl
											author
										}
									}
								}
							`,
              feeds: [
                {
                  title: '개발자맛 치즈볼',
                  serialize: ({ query: { site, allMarkdownRemark } }) => {
                    return allMarkdownRemark.edges.map(edge => {
                      return Object.assign({}, edge.node.frontmatter, {
                        title: edge.node.frontmatter.title,
                        description: edge.node.frontmatter.summary,
                        date: edge.node.frontmatter.date,
                        url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                        guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                        custom_elements: [
                          { 'content:encoded': edge.node.html },
                        ],
                      });
                    });
                  },
                  query: `
										{
											allMarkdownRemark(
												sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
											) {
												edges {
													node {
														html
														fields {
															slug
														}
														frontmatter {
															title
															summary
															date(formatString: "YYYY.MM.DD.")
															categories
															thumbnail {
																childImageSharp {
																	gatsbyImageData
																}
															}
														}
													}
												}
											}
										}
									`,
                  output: '/rss.xml',
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
