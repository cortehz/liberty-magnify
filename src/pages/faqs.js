import React from "react";
import Layout from "../common/layouts";
import { graphql } from "gatsby";
import Seo from "../common/seo";
import faqList from "../../src/data/faqs.json";

export default ({ props, data }) => (
  <Layout>
    <Seo
      title={`FAQS ${data.site.siteMetadata.title}`}
      description={data.markdownRemark.frontmatter.title}
    />
    <div className="pv5 flex items-center justify-center bg-gray">
      <h1 className="fw1 tc f2 display" style={{ color: "white" }}>
        Frequently Asked Questions (FAQS)
      </h1>
    </div>
    <div className="mw9 center flex flex-wrap flex-column pv5-l w-100">
      <div className="mw7 w-100 pa2" style={{ margin: "0 auto" }}>
        {faqList.map(faq => {
          return (
            <div
              key={faq.question}
              className="mw7 w-100 lh-copy serif pa2 flex flex-column justify-center f4"
            >
              <p>
                <strong>
                  <em>{faq.question}</em>
                </strong>

                <br />
                {faq.answer}
              </p>
            </div>
          );
        })}
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
