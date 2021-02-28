import "./Portfolio.scss";
import React from "react";
import Images from "../Images/headshot.jpg";
import { useState } from "react";

function Portfolio() {
  const [modal1, setModal1] = useState(false);
  const setModal = () => {
    setModal1(!modal1);
    console.log(modal1);
  };
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <h1>Choose an item to view the GitHub Repo</h1>

      {setModal1 ? (
        <button className="modal-btn" onClick={() => setModal()}>
          Snackr
        </button>
      ) : (
        <div className="modal-bg">
          <div className="modal">
            <h2>Snackr</h2>
            <p>
              Welcome To Snackr. The main advantage of this app is to discover
              new snack ideas, through a curated list, to minimize time spent in
              grocery and convenience stores. You may compile your own list of
              saved snacks to keep new and exciting snack ideas at your
              fingertips.
            </p>
            <p>Sprint: Two Week Solo Project</p>
            <p>Node Express React PostGres Redux Saga Github SASS</p>
            <a
              target="_blank"
              href="https://github.com/wkromar/prime-solo-project-2021"
            ></a>
            <button
              className="modal-btn"
              onClick={() => setModal(this.parent.parent)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
