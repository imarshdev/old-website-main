import { React, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "../styles/Hero.css";
import "../styles/Pages.css";
import "../styles/About.css";
import { Avatar } from "../components/Avatar";

function Hero() {
  const [discord_state, setStatus] = useState(false);
  const [statusBg, setStatusBg] = useState("grey");
  const [isDarkTheme, setDarkTheme] = useState(false);
  const statusCircle = useRef("");

  useEffect(() => {
    themeChange(false);
    if (localStorage.getItem("theme") == "dark") {
      setDarkTheme(true);
    }
    fetch("https://api.lanyard.rest/v1/users/1019641343875760350")
      .then((res) => res.json())
      .then((json) => {
        let data = json.data.discord_status;
        if (json.data.spotify != null) {
          setStatus(`Listening to ${json.data.spotify.song}`);
          statusCircle.current.style.display = "none";
          document.getElementById("intro").style.display = "flex";
          document.getElementById("spotify").style.display = "inline";
        } else if (data == "offline") {
          setStatus("Offline");
        } else if (data == "online") {
          setStatus("Online");
          setStatusBg("rgb(121, 214, 121)");
        } else if (data == "dnd") {
          setStatus("Busy");
          setStatusBg("rgb(212, 109, 109)");
        } else if (data == "idle") {
          setStatus("AFK");
          setStatusBg("rgb(209, 209, 116)");
        }
      });
  }, []);
  // Calculate age from D.O.B.
  var dob = new Date("09/02/2009");
  var month_diff = Date.now() - dob.getTime();
  var age_dt = new Date(month_diff);
  var year = age_dt.getUTCFullYear();
  var age = Math.abs(year - 1970);

  return (
    <>
      <title>Home | Walamin</title>
      {/* <Zoom> */}

      {/* pages1 section (work & anime)  */}
      <div className="pages1">
        <div id="first" className="page">
          <Link
            to="/work"
            style={{ textDecoration: "none" }}
            preventScrollReset={false}
          >
            <h3>Schedule Ride</h3>
            <p>
              Plan a daily commute.
            </p>
          </Link>
        </div>

        <div id="second" className="page">
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <h3>Order Ride</h3>{" "}
            <p>
              Get there faster, safer and smooth
            </p>
          </Link>
        </div>
      </div>

      {/* page2 secion */}
      <div className="pages2">
        {/* /donate  */}
        <div id="third" className="page">
          <Link to="/support" style={{ textDecoration: "none" }}>
            <h3>Delivery Services</h3>
            <p>
              Get it there faster, and safer
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
