import React from "react";
import "./App.css";
import AboutMe from "./shared/components/AboutMe";
import MainParallax from "./shared/components/MainParallax";
import NavBar from "./shared/components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainParallax />
      <AboutMe />
    </div>
  );
}

export default App;
