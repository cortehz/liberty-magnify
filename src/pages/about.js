import React from "react";
import Layout from "../common/layouts";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Seo from "../common/seo";
import "./about.css";
import Avatar from "../../content/img/avatar.jpg";

export default ({ props, data }) => (
  <Layout>
    <Seo
      title={`About | ${data.site.siteMetadata.title}`}
      description={data.markdownRemark.frontmatter.title}
    />
    <div className="relative">
      <Img fluid={data.banner.childImageSharp.fluid} />
    </div>

    <div
      className="mw7 w-100 lh-copy serif pa2 flex flex-column justify-center f4"
      style={{ margin: "0 auto" }}
    >
      <div class="team-img">
        <img src={Avatar} alt="Dr Victoria Uwannah" />
        <div class="lisa">
          <h3 style={{ margin: 0, fontSize: "3rem", fontWeight: "bolder" }}>
            Dr Victoria Uwannah
          </h3>
          <p style={{ margin: 0 }}>
            <em>Counselling Psychologist</em>
          </p>
        </div>
      </div>
      <p
        style={{
          fontSize: "0.7rem",
          maxWidth: "200px",
          marginLeft: "auto"
        }}
      >
        Registered by the Health and Care Professions Council (HCPC) and the
        British Psychological Society (BPS)
      </p>
      <p>
        As a Counselling Psychologist, my aim is to come alongside you to bring
        clarity, compassion and understanding which will help propel you towards
        change. Having worked within the NHS and private sector for over 10
        years, I have a wealth of experience which includes working with adults,
        young people, families and couples. These settings have included
        Psychiatric hospitals, Forensics, Community Mental Health Teams, Talking
        Therapies, and a specialist Personality Disorder service. I also have
        experience of working in schools delivering therapy to young people,
        facilitating workshops and providing psychoeducational training for
        teachers. I have also delivered Parenting courses to private
        organisations.
      </p>
      <p>
        I’m passionate about bringing Psychology to the masses and connecting
        with prospective clients in a way that is completely down-to-earth and
        relatable, yet professional and effective. I like to bring the human
        nature to any therapeutic interaction; it doesn’t need to be all doom
        and gloom, therapy can be a time of curiosity and hilarity as well as
        deep revelation and sobriety. Therapy can take many approaches. As a
        Counselling Psychologist I am trained in several therapy modalities such
        as Cognitive Behavioural Therapy (CBT), Psychodynamic Therapy,
        Mentalisation Based Therapy (MBT) and Dialectical Behaviour Therapy
        (DBT). I also draw on Mindfulness and Relaxation techniques.
      </p>
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
        fluid(maxHeight: 520, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
