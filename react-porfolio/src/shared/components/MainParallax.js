import React from "react";
import { Parallax } from "react-parallax";
import Typical from "react-typical";

import "./MainParallax.css";

class MainParallax extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Parallax
            blur={{ min: -5, max: 15 }}
            bgImage={require("../media/img1.jpg")}
            strength={200}
          >
            <div>
              <div className="center-text">JEANCARLOS PEREZ</div>
              <br />
              <div className="center-text-typed">
                <Typical
                  steps={[
                    "Masters of Science in Computer Engineering.",
                    1000,
                    "Senior Software Developer.",
                    1000,
                    "Full-Stack Engineer.",
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </div>
            </div>
            <div style={{ height: "400px" }} />
          </Parallax>
        </div>
      </div>
    );
  }
}

export default MainParallax;
