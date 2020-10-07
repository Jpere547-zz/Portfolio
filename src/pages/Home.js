import React, { useState, useEffect } from "react";
import axios from "axios";
import Typical from "react-typical";
import ParticlesEffects from "../components/ParticlesEffects";
import Socialicons from "../components/Socialicons";
import Layout from "../components/Layout";

function Home() {
  const [information, setInformation] = useState("");

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
  }, []);

  return (
    <Layout>
      <ParticlesEffects
        class="mi-home-particle"
        opacity={0.6}
        linked={true}
        partValue={100}
      />
      <div className="mi-home-area mi-padding-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <img
                  className="mi-home-image"
                  src={information.homeImage}
                  alt="brandimage"
                />
                <h1>
                  Welcome! My Name is{" "}
                  <span className="color-theme">{information.name}</span>
                </h1>
                <Typical
                  steps={[
                    information.aboutContent,
                    5000,
                    information.aboutContentTwo,
                    5000,
                    information.aboutContentThree,
                    5000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
                <Socialicons bordered />
                <p></p>
                <a href={information.cvfile} className="mi-button">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
