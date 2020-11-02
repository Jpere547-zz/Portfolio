import React, { useState, useEffect } from "react";
import axios from "axios";
import TrackVisibility from "react-on-screen";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Resume from "../components/Resume";
import ParticlesEffects from "../components/ParticlesEffects";
import { DevicesOther, Build, Work, School } from "@material-ui/icons";

function Resumes() {
  const [skills, setSkills] = useState([]);
  const [tools, setTools] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);

  useEffect(() => {
    axios.get("/api/skills").then((response) => {
      setSkills(response.data);
    });

    axios.get("/api/tools").then((response) => {
      setTools(response.data);
    });

    axios.get("/api/experience").then((response) => {
      setWorkingExperience(response.data.workingExperience);
      setEducationExperience(response.data.educationExperience);
    });
  }, []);

  return (
    <Layout>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Skill & Tools" />
          <div className="mi-skills">
            <div className="mi-smalltitle">
              <span className="mi-smalltitle-icon">
                <DevicesOther fontSize="large" />
              </span>
              <h4>Languages & Frameworks</h4>
            </div>
            <div className="row mt-30-reverse">
              {skills.map((skill) => (
                <TrackVisibility
                  once
                  className="col-lg-6 mt-30"
                  key={skill.title}
                >
                  <Progress
                    title={skill.title}
                    icon={skill.icon}
                    percentage={skill.value}
                    variant="success"
                  />
                </TrackVisibility>
              ))}
            </div>
          </div>
          <p></p>
          <p></p>
          <div className="mi-skills">
            <ParticlesEffects
              class="mi-home-particle"
              opacity={0.4}
              linked={false}
              partValue={20}
            />
            <div className="mi-smalltitle">
              <span className="mi-smalltitle-icon">
                <Build fontSize="large" />
              </span>
              <h4>Development & Platform Tools</h4>
            </div>
            <div className="row mt-30-reverse">
              {tools.map((tool) => (
                <TrackVisibility
                  once
                  className="col-lg-6 mt-30"
                  key={tool.title}
                >
                  <Progress
                    title={tool.title}
                    icon={tool.icon}
                    percentage={tool.value}
                    variant="info"
                  />
                </TrackVisibility>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Background" />
          <div className="mi-smalltitle">
            <span className="mi-smalltitle-icon">
              <Work fontSize="large" />
            </span>
            <h4>Work Experience</h4>
          </div>
          <div className="mi-resume-wrapper">
            {workingExperience.map((workingExp) => (
              <Resume key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>
          <div className="mt-30"></div>
          <div className="mi-smalltitle">
            <span className="mi-smalltitle-icon">
              <School fontSize="large" />
            </span>
            <h4>Education</h4>
          </div>
          <div className="mi-resume-wrapper">
            {educationExperience.map((educatonExp) => (
              <Resume key={educatonExp.id} resumeData={educatonExp} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resumes;
