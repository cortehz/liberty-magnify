module.exports = {
  siteMetadata: {
    navbarLinks: [{
        to: "/makeup",
        name: "Makeup"
      },
      {
        to: "/lifestyle",
        name: "Lifestyle"
      },
      {
        to: "/blog",
        name: "blog"
      },
    ],
    title: "Liberty Therapies",
    description: "Liberty Therapies is Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel est quis dolor tincidunt blandit. Quisque id justo ut sapien imperdiet mollis. Nunc efficitur condimentum facilisis. Nam sagittis, est et convallis pharetra, est massa laoreet nisi, vel porta arcu nunc sed ipsum. Nunc orci nisi, ultricies et leo at, bibendum consectetur lacus. Donec sodales urna a metus fermentum, nec porta arcu mattis. Vivamus quis nisl ac sem vulputate vulputate eu ut urna. In laoreet nunc molestie, euismod nulla id, vehicula leo. Donec suscipit nunc augue, at dignissim elit pulvinar a. pellentesque id orci vel, congue lacinia massa.",
    siteUrl: "https://tyra-starter.netlify.com",
    homepageHeader: "Welcome to Liberty Therapies",
    homepageAbout: "In nulla odio, finibus ac sapien at, vulputate elementum neque. Phasellus luctus tincidunt eleifend. Ut mattis massa nec justo dapibus convallis. Sed nisl arcu, egestas nec rutrum vitae, consectetur id nulla. Nulla ut facilisis felis. Quisque a pulvinar augue. Mauris consequat, quam id sodales pretium, urna ipsum tristique sem, eget pretium mi urna eget metus. Vestibulum ut nisi ac metus mollis luctus et vel felis. Donec id felis non dui venenatis eleifend ut sit amet nibh. Proin in quam ac urna tincidunt porttitor ut vitae leo. Pellentesque varius sollicitudin diam feugiat feugiat.",
    mailChimpUrl: "https://mailchimp.com",
    mailChimpToken: "MAILCHIMP TOKEN HERE",
    pinterest: "", // YOUR PINTEREST PROFILE HERE
    facebook: "", // YOUR FACEBOOK PROFILE HERE
    twitter: "", // YOUR TWITTER PROFILE HERE
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [{
          serialize: ({
            query: {
              site,
              allMarkdownRemark
            }
          }) => {
            return allMarkdownRemark.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                custom_elements: [{
                  "content:encoded": edge.node.html
                }],
              })
            })
          },
          query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: {frontmatter: {type: {eq: "post"}}}
              ) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      slug
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
          output: "/rss.xml",
          title: "Gatsby RSS Feed",
        }, ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1400,
            },
          },
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Karla', 'Playfair Display', 'Lora']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ['/success'],
        cookieDomain: "tyra-starter.netlify.com",
      }
    }
  ]
}