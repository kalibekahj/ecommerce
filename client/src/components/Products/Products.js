import React from "react";
import "../../App.css";
import Select from "../Select.js";

const priceOptions = [
  {
    key: "Show all",
    value: "showAll"
  },
  {
    key: "$0-$30",
    value: 30
  },
  {
    key: "$30-$50",
    value: 50
  },
  {
    key: "$50-$100",
    value: 100
  },
  {
    key: "$100-$600",
    value: 600
  }
];

const brandOptions = [
  {
    key: "Show all",
    value: "showAll"
  },
  {
    key: "Armani",
    value: "Armani"
  },
  {
    key: "Bvlgari",
    value: "Bvlgari"   
  },
  {
    key: "Chanel",
    value: "Chanel"
  },
  {
    key: "Clive Christian",
    value: "Clive Christian"
  },
  {
    key: "Coach",
    value: "Coach"
  },
  {
    key: "Dior",
    value: "Dior"
  },
  {
    key: "Dolce &amp; Gabbana",
    value: "Dolce &amp; Gabbana"
  },
  {
    key: "Gucci",
    value: "Gucci"
  },
  {
    key: "Mont Blanc",
    value: "Mont Blanc"
  },
  {
    key: "Prada",
    value: "Prada"
  },
  {
    key: "Roberto Cavalli",
    value: "Roberto Cavalli"
  },
  {
    key: "Versace",
    value: "Versace"
  },
  {
    key: "Yves Saint Laurent",
    value: "Yves Saint Laurent"
  }
]

const Products = (props) => {

    return (
      <div>
        <div className="container-three">
          <h1 className="title-3">Products</h1>
          <div className="container-four">
            <div className="line">
              <h2>Shop by</h2>
              <hr />
              <div>
                <div>  
                  <span>Price</span>
                  <Select className="price-options" options={priceOptions} onChange={props.onChangeFilter} />
                </div>
                <Select className="brand-options" options={brandOptions} onChange={props.onChangeFilter} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {props.products.map((product, i) => {
            return (
              <div key={i} className="row__card">
                <img src={product.image} className="product-images" alt="" />
                <h2 className="title">{product.title}</h2>
                <p>${product.price}</p>
                <button className="btn price">BUY</button>
                <p className="add-to-cart">Add to cart</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

export default Products;
