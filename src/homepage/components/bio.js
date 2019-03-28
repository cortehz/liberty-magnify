import React from "react";
import { Link } from "gatsby";
import "./Bio.css";

const Bio = () => {
  return (
    <div id="parallax-world-of-ugg">
      <section>
        <div class="parallax-one">
          <div className="newsletter-form">
            <h1>Subscribe to our Newsletter</h1>
            <input className="news-input" placeholder="Your Name" type="text" />
            <input className="news-input" placeholder="email" type="email" />
            <input className="news" type="submit" value="SUBSCRIBE" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bio;
