import React from "react";
import ReactDOM from "react-dom";
import Hero from "./HeroComponent";
import MyComponent2 from "./Method2";
import MyComponent3 from "./Method3";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Hero />
      <MyComponent2 />
      <MyComponent3 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
