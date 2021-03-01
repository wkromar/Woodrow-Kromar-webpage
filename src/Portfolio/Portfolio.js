import "./Portfolio.scss";
import React from "react";
import Images from "../Images/Snackr.jpg";
import { useState } from "react";
import ReactGallery from "../Images/React_Gallery.jpg";
import PetHotel from "../Images/OIP.jpg";

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
      <h1 className="portfolioHeader">Portfolio</h1>

      <div className="modal-bg">
        <div className="modal">
          <h2 className="portfolioText">Snackr</h2>
          <img className="portfolioImage" src={Images}></img>
          <p className="portfolioText">
            Snackr has the user read through a curated list of snacks, to
            minimize time spent in grocery and convenience stores. You may
            compile your own list of saved snacks.
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
            Repository
          </a>
        </div>
        {/* break */}
        <div className="modal">
          <h2>React Gallery</h2>
          <img className="portfolioImage" src={ReactGallery}></img>
          <p>
            Personal photos and photo descriptions are stored in a highly styled
            webpage where the user can like their images for a confidence boost.
          </p>
          <p>Sprint: Weekend project</p>
          <p>Node Express React Redux Github </p>
          <a
            className="modal-btn"
            target="_blank"
            href="https://github.com/wkromar/prime-solo-project-2021"
          >
            Repository
          </a>
        </div>
        {/* break */}
        <div className="modal">
          <h2>Pet Hotel</h2>
          <img className="portfolioImage" src={PetHotel}></img>
          <p>
            Testing our abilities to learn a new language quickly. Python
            backend and React frontend. Managing incoming and outgoing pets.
          </p>
          <p>Sprint: Week group project</p>
          <p>Node Express React Redux Github Material-ui Python</p>
          <a
            className="modal-btn"
            target="_blank"
            href="https://github.com/wkromar/pet-hotel-react"
          >
            React
          </a>
          <a
            className="modal-btn"
            target="_blank"
            href="https://github.com/wkromar/pet-hotel-python-backend"
          >
            Python
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
