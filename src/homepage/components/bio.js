import React from "react";
import "./Bio.css";

const Bio = () => {
  return (
    <div id="parallax-world-of-ugg">
      <section>
        <div class="parallax-one">
          <div className="newsletter-form">
            <h1>
              Subscribe to receive monthly Newsletter - straight to your inbox
            </h1>
            <input className="news-input" placeholder="email" type="email" />
            <input className="news" type="submit" value="SUBSCRIBE" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bio;
