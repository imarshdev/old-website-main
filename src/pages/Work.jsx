import { React, useEffect } from "react";
import "../styles/Work.css";
import { themeChange } from "theme-change";

function Work() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <>
      <meta
        name="description"
        content="Projects I (Shaurya) have made and I'm working on."
      />
      <title>Schedule Ride | Walamin</title>
      <div id="hero_text">
        <h2 className="text_hero_text fade-in">Schedule Ride</h2>
        <p className="text_hero_text fade-in">
          Plan a daily commute
        </p>
      </div>

      <div id="repos_container fade-in">
      </div>
    </>
  );
}

export default Work;
