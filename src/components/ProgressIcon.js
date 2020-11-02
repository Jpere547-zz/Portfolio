import React from "react";
import {
  DiJavascript1,
  SiCplusplus,
  SiFirebase,
  FaReact,
  FaNodeJs,
  SiRedux,
  SiKubernetes,
  SiTypescript,
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
  FaSketch,
  DiGoogleCloudPlatform,
  SiPostgresql,
  SiFlutter,
  DiDart,
  GrGolang,
} from "react-icons/all";

function ProgressIcon(props) {
  const pickIcon = () => {
    if (props.icon === "React") {
      return <FaReact />;
    } else if (props.icon === "nodejs") {
      return <FaNodeJs />;
    } else if (props.icon === "golang") {
      return <GrGolang />;
    } else if (props.icon === "dart") {
      return <DiDart />;
    } else if (props.icon === "flutter") {
      return <SiFlutter />;
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
    } else if (props.icon === "kubernetes") {
      return <SiKubernetes />;
    } else if (props.icon === "redux") {
      return <SiRedux />;
    } else if (props.icon === "typescript") {
      return <SiTypescript />;
    } else if (props.icon === "sketch") {
      return <FaSketch />;
    } else if (props.icon === "googlecloud") {
      return <DiGoogleCloudPlatform />;
    } else if (props.icon === "sql") {
      return <SiPostgresql />;
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
