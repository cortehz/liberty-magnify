import React from "react";
import Seo from "../common/seo";
import "./contact.css";
import Layout from "../common/layouts";

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact Liberty Therapies" />
      <div className="contact-form">
        <div style={{ display: "flex" }}>
          <div style={{ width: "100vw" }}>
            <div className="container">
              <form id="contact" action="" method="post">
                <h3>Contact</h3>
                <h4>
                  Please free free to leave me a message and I will get back to
                  you as soon as I can.
                </h4>
                <fieldset>
                  <input
                    placeholder="Your name"
                    type="text"
                    tabIndex="1"
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    placeholder="Email Address"
                    type="email"
                    tabIndex="2"
                    required
                  />
                </fieldset>
                <fieldset>
                  <textarea
                    placeholder="Type your message here..."
                    tabIndex="4"
                    required
                  />
                </fieldset>
                <fieldset>
                  <button
                    name="submit"
                    type="submit"
                    id="contact-submit"
                    data-submit="...Sending"
                  >
                    Submit
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
