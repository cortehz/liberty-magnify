import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { FiMenu } from "react-icons/fi";
import "../styles/custom.tachyons.css";
import logo from "../../../static/logo.svg";

const MultiLink = props => {
  const internal = /^\/(?!\/)/.test(props.to);
  let result;
  if (internal) {
    result = (
      <Link to={props.to} className={props.className}>
        {props.children}
      </Link>
    );
  } else {
    result = (
      <a href={props.to} className={props.className}>
        {props.children}
      </a>
    );
  }
  return result;
};

const SliderMenu = props => {
  // Prevents a flash of visible menu items when the entrance is triggered
  let extraClasses;
  if (props.active === null) {
    extraClasses = " dn";
  } else {
    extraClasses = props.active ? " fadeIn" : " fadeOut";
  }
  return (
    <div
      className={
        "flex flex-column justify-center items-center bg-gray fixed top z-max w-100 ease" +
        (props.active ? " vh-93" : " h0")
      }
    >
      {props.extraLinks.map(navLink => (
        <MultiLink
          to={navLink.to}
          activeClassName="c-main-nav__link--is"
          className={
            "sans-serif ttu white f5 no-underline menu__item pv3" + extraClasses
          }
        >
          {navLink.name}
        </MultiLink>
      ))}
      <Link
        to="/faqs"
        activeClassName="c-main-nav__link--is"
        className={
          "sans-serif ttu white f7 no-underline menu__item pv3" + extraClasses
        }
      >
        <em style={{ color: "red" }}>faqs</em>
      </Link>
    </div>
  );
};

export default class Navbar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // Null rather than false to check for initialization
      menuToggle: null
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event) {
    this.setState({
      menuToggle: !this.state.menuToggle
    });
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                navbarLinks {
                  to
                  name
                }
                siteTitle: title
                mailChimpUrl
              }
            }
          }
        `}
        render={data => (
          <React.Fragment>
            <div
              className="top-0 z-999 bg-white flex w-100"
              style={{ display: "flex", flex: 1, position: "sticky" }}
            >
              <button
                className="ttu tracked bg-white dark-gray f4 no-underline bn pointer"
                onClick={this.toggleMenu}
              >
                <FiMenu />
              </button>

              <div
                className="bg-white flex w-100 flex justify-between items-center top-0 z-999 bb b--light-gray"
                style={{ position: "sticky", justifyContent: "center" }}
              >
                <div
                  className="w-50 mw8 flex justify-between justify-around-l items-center ph4 pa2-ns"
                  style={{ flexDirection: "column" }}
                >
                  <Link
                    to="/"
                    className="display ttu tracked dark-gray f4 no-underline"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center"
                    }}
                  >
                    <div style={{ width: "60px", height: "60px" }}>
                      <img
                        src={logo}
                        alt="Liberty logo"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                    LIBERTY <br />
                    THERAPIES
                  </Link>
                  <div
                    className="w-100 mw8 flex justify-between justify-around-l items-center ph4 pa2-ns"
                    style={{ flexDirection: "row" }}
                  >
                    <Link
                      to="/"
                      activeClassName="c-main-nav__link--is-active"
                      className="sans-serif ttu mid-gray f5 no-underline dn dib-l"
                    >
                      HOME
                    </Link>
                    <Link
                      to="/services"
                      activeClassName="c-main-nav__link--is-active"
                      className="sans-serif ttu mid-gray f5 no-underline dn dib-l"
                    >
                      SERVICES
                    </Link>
                    <Link
                      to="/about"
                      activeClassName="c-main-nav__link--is-active"
                      className="sans-serif ttu mid-gray f5 no-underline dn dib-l"
                    >
                      ABOUT
                    </Link>
                    <Link
                      to="/blog"
                      activeClassName="c-main-nav__link--is-active"
                      className="sans-serif ttu mid-gray f5 no-underline dn dib-l"
                    >
                      BLOG
                    </Link>
                    <Link
                      to="/contact"
                      activeClassName="c-main-nav__link--is-active"
                      className="sans-serif ttu mid-gray f5 no-underline dn dib-l"
                    >
                      CONTACT
                    </Link>
                    <Link
                      to="/faqs"
                      activeClassName="c-main-nav__link--is-active"
                      className="sans-serif ttu mid-gray f7 no-underline dn dib-l"
                      style={{ color: "red" }}
                    >
                      <em>FAQS</em>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <SliderMenu
              active={this.state.menuToggle}
              extraLinks={data.site.siteMetadata.navbarLinks}
              siteTitle={data.site.siteMetadata.siteTitle}
            />
          </React.Fragment>
        )}
      />
    );
  }
}
