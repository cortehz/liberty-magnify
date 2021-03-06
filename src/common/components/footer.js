import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import "tachyons";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteTitle: title
            mailChimpUrl
            pinterest
            facebook
            twitter
          }
        }
      }
    `}
    render={data => (
      <footer
        className="pa2 bg-dark-gray near-white"
        style={{ paddingTop: "4rem" }}
      >
        <div className="flex flex-wrap justify-around w-100 mw9 center mb5">
          <div
            className="w-100 mw5 mb4"
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <span className="display f2">
              {data.site.siteMetadata.siteTitle}
            </span>
            <div className="w-100 flex justify-left items-center pv2">
              <a
                className="near-white"
                style={{ margin: "5px" }}
                href={data.site.siteMetadata.pinterest}
              >
                <FaInstagram size="1.5em" />
              </a>
            </div>
          </div>
          <div className="flex flex-column">
            <span className="near-white sans-serif f5 tracked mb3 db">
              ON OUR BLOG:
            </span>
            <Link
              to="/blog"
              className="near-white sans-serif f5 tracked pv1 db"
            >
              ALL POSTS
            </Link>
          </div>
          <div className="flex flex-column">
            <span className="near-white sans-serif f5 tracked mb3 db">
              MORE ON {data.site.siteMetadata.siteTitle}
            </span>
            <Link
              to="/about"
              className="near-white sans-serif f5 tracked pv1 db"
            >
              ABOUT
            </Link>
            <Link
              to="/services"
              className="near-white sans-serif f5 tracked pv1 db"
            >
              SERVICES
            </Link>
            <Link
              to="/services#faqs"
              className="near-white sans-serif f5 tracked pv1 db"
            >
              FAQS
            </Link>
            <a
              href={data.site.siteMetadata.mailChimpUrl}
              className="near-white sans-serif f5 tracked pv1 db"
            >
              NEWSLETTER
            </a>
          </div>
        </div>
        <div className="w-100 mw9 center silver mb3">
          <div className="w-100 bb b--mid-gray mv3" />
        </div>
        <div className="w-100 mw9 silver center sans-serif f6">
          <p>Liberty Therapies (C) 2019</p>
        </div>
      </footer>
    )}
  />
);
