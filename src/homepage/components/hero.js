import React from "react";
import Img from "gatsby-image";
import { Link, graphql } from "gatsby";
import "../../common/styles/custom.tachyons.css";
import "tachyons";

export default props => (
  <React.Fragment>
    <div className="z-9999 vh-50" style={{ background: "black" }}>
      <Img
        className="w-100 vh-50 mw9 center z-999"
        fluid={props.image}
        alt={props.description}
      />
    </div>
    <div className="h-auto bg-near-white mw9 w-100 flex flex-column items-center justify-center pv5 ph2 center">
      <span className="fw1 display dark-gray db tc w-100 mw7 f3 f2-ns">
        {props.title}
      </span>
      <p className="serif mw6 tc f5 dn dib-l mb4 db">{props.description}</p>
      <Link
        className="db pv3 ph5 tracked ttu b bg-white dark-gray sans-serif no-underline hover-gray"
        to={props.to}
        style={{ border: "1px solid #666" }}
      >
        Read again
      </Link>
    </div>
  </React.Fragment>
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
        fluid(maxHeight: 720, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
