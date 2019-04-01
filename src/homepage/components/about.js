import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            homepageHeader
            homepageAbout
          }
        }
      }
    `}
    render={data => (
      <div className="bg-white flex flex-column justify-center items-center pa2 pv5">
        <p className="f4 serif mw7 tc lh-copy">
          {data.site.siteMetadata.homepageAbout}
        </p>
        <Link
          to="/about"
          className="mt3 db no-underline ph5 pv3 sans-serif near-white bg-dark-gray ttu tracked b hover-bg-mid-gray"
        >
          Learn More...
        </Link>
      </div>
    )}
  />
);
