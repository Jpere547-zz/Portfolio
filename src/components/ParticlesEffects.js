import React from "react";
import Particles from "react-particles-js";

class ParticlesEffects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: props.opacity,
      enable: props.linked,
      class: props.class,
      partValue: props.partValue,
    };
  }

  render() {
    let paramConfig = {
      fps_limit: 28,
      particles: {
        number: {
          value: this.props.partValue,
          density: {
            enable: true,
            value_area: 2000,
          },
        },
        color: {
          value: "#ed725c",
        },
        opacity: {
          value: this.state.opacity,
        },
        size: {
          value: 6,
          random: true,
          anim: {
            speed: 3,
            size_min: 1,
          },
        },
        line_linked: {
          enable: this.state.enable,
        },
        move: {
          random: true,
          speed: 1.2,
          direction: "bottom",
          out_mode: "out",
        },
      },
    };
    return <Particles className={this.state.class} params={paramConfig} />;
  }
}

export default ParticlesEffects;
