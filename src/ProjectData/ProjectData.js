import Snackr from "../Images/Snackr.jpg";
import ReactGallery from "../Images/React_Gallery.jpg";
import PetHotel from "../Images/OIP.jpg";
import SnowSwaps from "../Images/Snowswaps.jpg";

const projectData = [
  {
    title: "Snackr",
    description: `Snackr has the user read through a curated list of snacks, to
            minimize time spent in grocery and convenience stores. You may
            compile your own list of saved snacks.`,
    gitHub: "https://github.com/wkromar/prime-solo-project-2021",
    techUsed: "Node Express React PostGres Redux Saga Github SASS",
    sprint: "Two Week Solo Project",
    liveSite: "none",
    image: { Snackr },
  },
  {
    title: "SnowSwaps",
    description: `SnowSwaps is an application meant to tap into the used snow sport equipment market. 
    Swap users can create a meeting location(Swap) and determine a date to meet and trade goods. 
    Average users can add data about their own equipment and view others equipment as well as contact 
    sellers by email. Because of this app, users can save money by buying used equipment from other users.`,
    sprint: "One month project and current employment",
    techUsed:
      "CSS, JavaScript, React, HTML, Postgres, Redux, VS Code, Express, Node, Heroku, AWS",
    gitHub: "https://github.com/wkromar/SnowSwap-Group-Project",
    liveSite: `https://snow-swaps.herokuapp.com/`,
    image: { SnowSwaps },
  },
  {
    title: "React Gallery",
    description: ` Personal photos and photo descriptions are stored in a highly styled
            webpage where the user can like their images for a confidence boost.`,
    sprint: "Weekend project",
    techUsed: "Node Express React Redux Github",
    gitHub: "https://github.com/wkromar/prime-solo-project-2021",
    liveSite: "none",
    image: { ReactGallery },
  },
  {
    title: "Pet Hotel",
    description: `Testing our abilities to learn a new language quickly. Python
            backend and React frontend. Managing incoming and outgoing pets.`,
    sprint: "Week group project",
    techUsed: "Node Express React Redux Github Material-ui Python",
    gitHub: "https://github.com/wkromar/prime-solo-project-2021",
    liveSite: "none",
    image: { PetHotel },
  },
];
export default projectData;
