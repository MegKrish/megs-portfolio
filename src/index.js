import React from "react";
import ReactDOM from "react-dom";
import Hero from "./HeroComponent";
import About from "./AboutComponent";
import MyComponent3 from "./Method3";

import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* <Hero /> */}
      <About />
      {/* <MyComponent3 /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
