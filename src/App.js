import "./App.scss";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer.js";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="mastHead">
        <h1 className="nameText">Woodrow Kromar</h1>
        <h2 className="titleText"> Full Stack Software Developer</h2>
      </div>
      <div className="contentBody">
        <About />
        <Portfolio />
        {/* all items will above this line */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
