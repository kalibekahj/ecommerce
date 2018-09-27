import React from "react";
import "../../App.css";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <img className="hero-image" src="../../static/img/Background/background4.jpg" alt="hero img" />
        <h1 className="hero-text"> Women's perfume & Men's cologne</h1>
        <p className="hero-text-two">free shipping worldwide</p>
      </div>
    );
  }
}

export default Hero;
