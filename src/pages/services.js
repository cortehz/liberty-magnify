import React from "react";
import Layout from "../common/layouts";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";
import Seo from "../common/seo";

export default ({ props, data }) => (
  <Layout>
    <Seo
      title={`Services ${data.site.siteMetadata.title}`}
      description={data.markdownRemark.frontmatter.title}
    />
    <div className="relative">
      <Img fluid={data.banner.childImageSharp.fluid} />
      <h1
        className="fwh1 fw1 tc f2 display absolute dn dib-ns"
        style={{
          bottom: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        {data.site.siteMetadata.title} | Services
      </h1>
    </div>
    <div className="mw9 center flex flex-column flex-wrap pv5-l w-100">
      <div
        className="mw7 w-100 lh-copy serif pa2 flex flex-column justify-center f4"
        style={{ margin: "0 auto" }}
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
      <div
        className="mw7 w-100 lh-copy serif pa2 flex flex-column justify-center f4"
        style={{ margin: "0 auto" }}
      >
        <p>
          Subscribe to the mailing list to be kept up to date with upcoming
          events and workshops:
        </p>
        <Link
          to="/blog"
          style={{ width: "190px" }}
          className="dib bg-dark-gray b near-white hover-bg-mid-gray pv3 ph4 ttu tracked sans-serif no-underline mv2"
        >
          Subscribe
        </Link>
      </div>
    </div>
  </Layout>
);

export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { name: { eq: "services__bio" } }) {
      html
      frontmatter {
        title
      }
    }
    banner: file(relativePath: { eq: "img/aachal.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 620, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
