import React from "react";
import Layout from "../common/layouts";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Seo from "../common/seo";
import MapContainer from "../homepage/components/MapContainer";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "./services.css";

export default ({ props, data }) => (
  <Layout>
    <Seo
      title={`Services | ${data.site.siteMetadata.title}`}
      description={data.markdownRemark.frontmatter.title}
    />
    <div className="relative">
      <Img fluid={data.banner.childImageSharp.fluid} />
    </div>
    <div className="mw9 center flex flex-column flex-wrap pv5-l w-100">
      <div
        className="mw7 w-100 lh-copy serif pa2 flex flex-column justify-center f4"
        style={{ margin: "0 auto" }}
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
      <div className="map-container">
        <div className="map">
          <MapContainer />
        </div>

        <div className="address-container">
          <ul>
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
          <ul className="address-ul">
            <li className="berkshire-li">
              <FaMapMarkerAlt style={{ marginRight: "10" }} />
              The Therapy Centre,
            </li>
            <li>6B Church Street, Reading RG1 2SB.</li>
            <li className="berkshire-li">
              <FaPhone style={{ marginRight: "10" }} />
              07775441157
            </li>
            <li className="berkshire-li">
              <FaMapMarkerAlt style={{ marginRight: "10" }} />
              London Office: To be Confirmed
            </li>
          </ul>
        </div>
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
        fluid(maxHeight: 420, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
