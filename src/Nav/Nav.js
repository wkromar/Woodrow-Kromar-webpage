import React from "react";

import "./Nav.scss";

function Nav() {
  return (
    <div className="nav js-scroll-trigger">
      <a className="choices js-scroll-trigger" href="#About">
        About
      </a>
      <a className="choices js-scroll-trigger">Portfolio</a>
      <a className="choices js-scroll-trigger">Contact</a>
    </div>
  );
}

export default Nav;
