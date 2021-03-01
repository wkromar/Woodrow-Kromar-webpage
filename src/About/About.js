import "./About.scss";
import Images from "../Images/headshot.jpg";

function About() {
  return (
    <div className="about" id="About">
      <h2>About</h2>
      <div className="aboutText">
        <span>
          I am an Environmental Scientist turned software developer ready to
          launch my programming career. In the environmental science field, I
          felt that the areas that I was most excited about involved technology.
          I have brought my passion, attention to detail, and teamwork mentality
          to increase the performance of your web designs.
          <p></p>
          <p className="secondaryText">
            I have worked primarily in JavaScript, React, jQuery, SCSS, Node,
            and Express.
          </p>
        </span>

        <img className="headshot" src={Images}></img>
      </div>
    </div>
  );
}

export default About;
