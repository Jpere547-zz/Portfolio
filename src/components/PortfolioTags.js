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
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJquery,
  SiFlutter,
  SiDart,
} from "react-icons/all";

function PortfolioTags(props) {
  const pickIcon = () => {
    if (props.tag === "react") {
      return <FaReact />;
    } else if (props.tag === "nodejs") {
      return <FaNodeJs />;
    } else if (props.tag === "javascript") {
      return <DiJavascript1 />;
    } else if (props.tag === "mongodb") {
      return <DiMongodb />;
    } else if (props.tag === "angular") {
      return <FaAngular />;
    } else if (props.tag === "java") {
      return <SiJava />;
    } else if (props.tag === "C++") {
      return <SiCplusplus />;
    } else if (props.tag === "firebase") {
      return <SiFirebase />;
    } else if (props.tag === "graphql") {
      return <GrGraphQl />;
    } else if (props.tag === "apollo") {
      return <SiApollographql />;
    } else if (props.tag === "sass") {
      return <DiSass />;
    } else if (props.tag === "heroku") {
      return <SiHeroku />;
    } else if (props.tag === "vsco") {
      return <SiVisualstudiocode />;
    } else if (props.tag === "xcode") {
      return <SiXcode />;
    } else if (props.tag === "intellijidea") {
      return <SiIntellijidea />;
    } else if (props.tag === "atom") {
      return <SiAtom />;
    } else if (props.tag === "docker") {
      return <SiDocker />;
    } else if (props.tag === "notion") {
      return <SiNotion />;
    } else if (props.tag === "photoshop") {
      return <SiAdobephotoshop />;
    } else if (props.tag === "git") {
      return <SiGit />;
    } else if (props.tag === "html") {
      return <SiHtml5 />;
    } else if (props.tag === "css") {
      return <SiCss3 />;
    } else if (props.tag === "bootstrap") {
      return <SiBootstrap />;
    } else if (props.tag === "jquery") {
      return <SiJquery />;
    } else if (props.tag === "flutter") {
      return <SiFlutter />;
    } else if (props.tag === "dart") {
      return <SiDart />;
    }
  };
  return <span className="mi-portfolio-tag">{pickIcon()}</span>;
}

export default PortfolioTags;
