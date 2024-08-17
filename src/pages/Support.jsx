import React from "react";
import "../styles/Donate.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function Support() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <>
      <meta
        name="description"
        content="Support me by donating some amount to help me awesome stuff."
      />

      <title>support | snipc</title>
      <div className="fade-in">
        <div id="hero-text">
          <h2 className="text_hero_text">Delivery Services</h2>
          <p>Get it there </p>
        </div>
      </div>
    </>
  );
}

export default Support;
