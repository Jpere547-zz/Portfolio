import React from "react";
import {
  DiJavascript1,
  SiCplusplus,
  SiFirebase,
  FaReact,
  FaNodeJs,
  FaAngular,
  GrGraphQl,
  SiHeroku,
  DiMongodb,
  SiXcode,
  SiVisualstudiocode,
  SiAdobephotoshop,
  SiGit,
  SiDocker,
  SiAtom,
  SiIntellijidea,
  SiJava,
  DiSass,
  SiNotion,
  SiApollographql,
} from "react-icons/all";

function ProgressIcon(props) {
  const pickIcon = () => {
    if (props.icon === "React") {
      return <FaReact />;
    } else if (props.icon === "nodejs") {
      return <FaNodeJs />;
    } else if (props.icon === "javascript") {
      return <DiJavascript1 />;
    } else if (props.icon === "mongodb") {
      return <DiMongodb />;
    } else if (props.icon === "angular") {
      return <FaAngular />;
    } else if (props.icon === "java") {
      return <SiJava />;
    } else if (props.icon === "C++") {
      return <SiCplusplus />;
    } else if (props.icon === "firebase") {
      return <SiFirebase />;
    } else if (props.icon === "graphql") {
      return <GrGraphQl />;
    } else if (props.icon === "apollo") {
      return <SiApollographql />;
    } else if (props.icon === "sass") {
      return <DiSass />;
    } else if (props.icon === "heroku") {
      return <SiHeroku />;
    } else if (props.icon === "vsco") {
      return <SiVisualstudiocode />;
    } else if (props.icon === "xcode") {
      return <SiXcode />;
    } else if (props.icon === "intellijidea") {
      return <SiIntellijidea />;
    } else if (props.icon === "atom") {
      return <SiAtom />;
    } else if (props.icon === "docker") {
      return <SiDocker />;
    } else if (props.icon === "notion") {
      return <SiNotion />;
    } else if (props.icon === "photoshop") {
      return <SiAdobephotoshop />;
    } else if (props.icon === "git") {
      return <SiGit />;
    }
  };
  return (
    <h6 className="mi-progress-title">
      <span className="mi-progress-icon">{pickIcon()}</span>
      {props.title}
    </h6>
  );
}

export default ProgressIcon;
