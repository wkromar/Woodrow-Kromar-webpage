import React from "react";

import "./Nav.scss";

function Nav() {
  return (
    <div className="nav js-scroll-trigger">
      <a className="nav-title js-scroll-trigger" href="#About">
        About
      </a>
      <a className="nav-title js-scroll-trigger" href="#Portfolio">
        Portfolio
      </a>
      <a className="nav-title js-scroll-trigger" href="#Contact">
        Contact
      </a>
    </div>
  );
}

export default Nav;
