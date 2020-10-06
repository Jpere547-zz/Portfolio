import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import ProgressIcon from "./ProgressIcon";

function Progress(props) {
  const winWidth = window.innerWidth;
  const progressQuery = () => {
    if (winWidth && winWidth > 67) {
      return (
        <span
          className="mi-progress-active"
          style={
            props.isVisible ? { width: `${props.percentage}%` } : { width: 30 }
          }
        >
          <ProgressBar
            animated
            variant={props.variant}
            now={100}
            style={{ minWidth: 30 }}
          />
        </span>
      );
    }
    return (
      <span
        className="mi-progress-active"
        style={{ width: `${props.percentage}%` }}
      ></span>
    );
  };
  return (
    <div className="mi-progress">
      <ProgressIcon icon={props.icon} title={props.title} />
      <div className="mi-progress-inner">
        <div className="mi-progress-percentage">{`${props.percentage}%`}</div>
        <div className="mi-progress-container">{progressQuery()}</div>
      </div>
    </div>
  );
}

export default Progress;
