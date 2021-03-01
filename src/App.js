import "./App.scss";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer.js";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="mastHead">
        <h1>Woodrow Kromar</h1>
        <h2> Full Stack Software Developer</h2>
      </div>
      <div className="contentBody">
        <About />
        <Portfolio />
        {/* all items will above this line */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
