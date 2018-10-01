import React from "react";
import Hero from "../../components/Hero/Hero";
import "../../App.css";

class Home extends React.Component {
  render() {
    return (
      <div className="container-two">
        <Hero />
        <p className="opening-statement">Look the best. Smell the best.</p>

        <div id="slideshow">
          <div className="slide-wrapper">
            <div className="slide">
              <img
                src="../../static/img/Womensimg/chanel3.jpg"
                alt=""
                className="card-image"
              />{" "}
              <p className="slide-text">
                N°5 Eau De Parfum Spray 1.2oz - Chanel
              </p>
            </div>
            <div className="slide">
              <img
                src="../../static/img/Womensimg/joydior.jpg"
                alt=""
                className="card-image"
              />
              <p className="slide-text">
                Joy by Dior - Women's Perfume - Spray 1.0 oz
              </p>
            </div>
            <div className="slide">
              <img
                src="../../static/img/Mensimg/pradalr.jpeg"
                alt=""
                className="card-image"
              />
              <p className="slide-text">
                Prada Men's Luna Rossa Sport Eau de Toilette Spray, 3.4 oz
              </p>
            </div>
            <div className="slide">
              <img
                src="../../static/img/Mensimg/sauvage.jpg"
                alt=""
                className="card-image"
              />
              <p className="slide-text">
                Dior Men's Sauvage Eau de Toilette Spray, 2 oz.
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="slogan">Can You Resist?</p>
        </div>
      </div>
    );
  }
}

export default Home;
