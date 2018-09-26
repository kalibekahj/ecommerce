import React from "react";
import Hero from "../../components/Hero/Hero";
import "../../App.css";

class Home extends React.Component {
  render() {
    return (
      <div className="container-two">
        <Hero />
        <p className="opening-statement">Look the best. Smell the best.</p>
        {/* <div className="row">
          <div className="products-card">
            <img
              src="../../static/img/Womensimg/chanel3.jpg"
              alt=""
              className="card-image"
            />
            <div className="amount">
              <h2 className="title">Title of product</h2>
              <p>$0.00</p>
              <button className="btn price">BUY</button>
              <p className="add-to-cart">Add to cart</p>
            </div>
          </div>
          <div className="products-card">
            <img
              src="../../static/img/Womensimg/joydior.jpg"
              alt=""
              className="card-image"
            />
            <div className="amount">
              <h2 className="title">Title of product</h2>
              <p>$0.00</p>
              <button className="btn price">BUY</button>
              <p className="add-to-cart">Add to cart</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="products-card">
            <img
              src="../../static/img/Mensimg/pradalr.jpeg"
              alt=""
              className="card-image"
            />
            <div className="amount">
              <h2 className="title">Title of product</h2>
              <p>$0.00</p>
              <button className="btn price">BUY</button>
              <p className="add-to-cart">Add to cart</p>
            </div>
          </div>
          <div className="products-card">
            <img
              src="../../static/img/Mensimg/sauvage.jpg"
              alt=""
              className="card-image"
            />
            <div className="amount">
              <h2 className="title">Title of product</h2>
              <p>$0.00</p>
              <button className="btn price">BUY</button>
              <p className="add-to-cart">Add to cart</p>
            </div>
          </div>
        </div> */}

        <div id="slideshow">
          <div class="slide-wrapper">
            <div class="slide">
              <img
                src="../../static/img/Womensimg/chanel3.jpg"
                alt=""
                className="card-image"
              />{" "}
              <p className="slide-text">
                N°5 Eau De Parfum Spray 1.2oz - Chanel
              </p>
            </div>
            <div class="slide">
              <img
                src="../../static/img/Womensimg/joydior.jpg"
                alt=""
                className="card-image"
              />
              <p className="slide-text">
                Joy by Dior - Women's Perfume - Spray 1.0 oz
              </p>
            </div>
            <div class="slide">
              <img
                src="../../static/img/Mensimg/pradalr.jpeg"
                alt=""
                className="card-image"
              />
              <p className="slide-text">
                Prada Men's Luna Rossa Sport Eau de Toilette Spray, 3.4 oz
              </p>
            </div>
            <div class="slide">
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

        {/* <h1>Just a simple slideshow. CSS only, no JS</h1> */}

        <div>
          <p className="slogan">Can You Resist?</p>
        </div>
      </div>
    );
  }
}

export default Home;
