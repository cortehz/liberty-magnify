module.exports = {
  siteMetadata: {
    navbarLinks: [{
        to: "/about",
        name: "about"
      },
      {
        to: "/services",
        name: "services"
      },
      {
        to: "/blog",
        name: "blog"
      }, ,
      {
        to: "/contact",
        name: "contact"
      }
    ],
    title: "Liberty Therapies",
    description: "Liberty Therapies is a psychology service offering face-to-face and online therapy for individuals, couples and families..",
    siteUrl: "https://liberties.netlify.com",
    homepageHeader: "Welcome to Liberty Therapies",
    homepageAbout: "Liberty Therapies is run by Dr Victoria Uwannah - Counselling Psychologist. Registered by the Health and Care Professions Council (HCPC). As a Counselling Psychologist, my aim is to come alongside you to bring clarity, compassion and understanding which will help propel you towards change. Having worked within the NHS and private sector for over 10 years, I have a wealth of experience which includes working with adults, young people, families and couples. These settings have included Psychiatric hospitals, Forensics, Community Mental Health Teams, Talking Therapies, and a specialist Personality Disorder service. I also have experience of working in schools delivering therapy to young people, facilitating workshops and providing psychoeducational training for teachers. I have also delivered Parenting courses to private organisations.",
    mailChimpUrl: "https://mailchimp.com",
    mailChimpToken: "MAILCHIMP TOKEN HERE",
    pinterest: "https://twitter.com/cortehzz", // YOUR PINTEREST PROFILE HERE
    facebook: "https://twitter.com/cortehzz", // YOUR FACEBOOK PROFILE HERE
    twitter: "https://twitter.com/cortehzz", // YOUR TWITTER PROFILE HERE
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