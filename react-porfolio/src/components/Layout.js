import React from "react";
import Header from "../components/Header";
import BackgroundLines from "../components/BackgroundLines";

function Layout(props) {
  return (
    <div
      className="mi-wrapper"
      // className={darkMode ? "dark-mode mi-wrapper" : "light-mode mi-wrapper"}
    >
      <BackgroundLines />
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
