import React from "react";
import Layout from "../common/layouts";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";
import Seo from "../common/seo";
import "./about.css";

export default ({ props, data }) => (
  <Layout>
    <Seo
      title={`About ${data.site.siteMetadata.title}`}
      description={data.markdownRemark.frontmatter.title}
    />
    <div className="relative">
      <Img fluid={data.banner.childImageSharp.fluid} />
      <h1
        id="about-h1"
        className="fw1 tc f2 display absolute dn dib-ns"
        style={{
          bottom: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        About {data.site.siteMetadata.title}
      </h1>
    </div>
    <div
      className="mw9 center flex flex-wrap pv5-l w-100"
      style={{ justifyContent: "center" }}
    >
      <div className="mw7 w-100 pa2">
        <h1 className="display fw1 db lh-copy">
          {data.markdownRemark.frontmatter.title}
        </h1>
      </div>
      <div
        className="mw7 w-100 lh-copy serif pa2 flex flex-column justify-center f4"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
      <div className="mw7 w-100 pa2">
        <div className="mw7 w-100 lh-copy serif pa2 flex flex-column justify-center f4">
          <p>
            Once in a while we all need some direction. We write a few good
            tips:
          </p>
        </div>
        <Link
          to="/blog"
          className="dib bg-dark-gray b near-white hover-bg-mid-gray pv3 ph4 ttu tracked sans-serif no-underline mv2"
        >
          Read our blog
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
    markdownRemark(frontmatter: { name: { eq: "about__bio" } }) {
      html
      frontmatter {
        title
      }
    }
    banner: file(relativePath: { eq: "img/about__banner.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 620, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
