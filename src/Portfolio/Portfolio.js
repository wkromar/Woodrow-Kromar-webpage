import "./Portfolio.scss";
import React from "react";
import Images from "../Images/Snackr.jpg";
import { useState } from "react";
import ReactGallery from "../Images/React_Gallery.jpg";

function Portfolio() {
  //   const [modal1, setModal1] = useState(false);
  //   const setModal = () => {
  //     setModal1(!modal1);
  //     console.log(modal1);
  //   };

  var modalBtn = document.querySelector(".modal-btn");
  var modalBg = document.querySelector(".modal-bg");
  var modalClose = document.querySelector("modal-close");

  //   modalBtn.addEventListener("click", function () {
  //     modalBg.classList.add("bg-active");
  //   });
  //   modalClose.addEventListener("click", function () {
  //     modalBg.classList.remove("bg-active");
  //   });
  // onClick={() => setModal("snackr")}
  return (
    <div id="portfolio" className="portfolio">
      <h2>Portfolio</h2>

      <div className="modal-bg">
        <div className="modal">
          <h2 className="portfolioText">Snackr</h2>
          <img className="headshot" src={Images}></img>
          <p className="portfolioText">
            Welcome To Snackr. The main advantage of this app is to discover new
            snack ideas, through a curated list, to minimize time spent in
            grocery and convenience stores. You may compile your own list of
            saved snacks to keep new and exciting snack ideas at your
            fingertips.
          </p>
          <p className="portfolioText">Sprint: Two Week Solo Project</p>
          <p className="portfolioText">
            Node Express React PostGres Redux Saga Github SASS
          </p>
          <a
            className="modal-btn"
            target="_blank"
            href="https://github.com/wkromar/prime-solo-project-2021"
          >
            GitHub
          </a>
        </div>
        <div className="modal">
          <h2>React Gallery</h2>
          <img className="headshot" src={ReactGallery}></img>
          <p>
            Welcome To Snackr. The main advantage of this app is to discover new
            snack ideas, through a curated list, to minimize time spent in
            grocery and convenience stores. You may compile your own list of
            saved snacks to keep new and exciting snack ideas at your
            fingertips.
          </p>
          <p>Sprint: Two Week Solo Project</p>
          <p>Node Express React PostGres Redux Saga Github SASS</p>
          <a
            className="modal-btn"
            target="_blank"
            href="https://github.com/wkromar/prime-solo-project-2021"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
