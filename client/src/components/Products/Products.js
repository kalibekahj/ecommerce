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

class Products extends React.Component {
  state = {
    products: [],
    filterArray: [],
    price: []
  };

  componentDidMount() {
    fetch("http://localhost:3004/products")
      .then(response => response.json())
      .then(json =>
        this.setState({
          products: json,
          filterArray: json
        })
      );
  }
  // accept array of products & returns products filtered by brand
  getFilteredByBrand = products => {
    let brandValue = document.querySelector(".brand-options").value;

    return products.filter(product => {
      if (brandValue === "showAll") {
        return true;
      } else {
        return product.brand === brandValue;
      }
    });
  };
  // accept array of products & returns products filtered by price
  getFilteredByPrice = products => {
    let price = document.querySelector(".price-options").value;

    return products.filter(product => {
      if (Number(price) === 30) {
        return product.price <= price;
      } else if (Number(price) === 50) {
        return product.price >= 30 && product.price < price;
      } else if (Number(price) === 100) {
        return product.price > 50 && product.price <= 100;
      } else if (Number(price) === 600) {
        return product.price >= 100 && product.price <= price;
      } else {
        return true;
      }
    });
  };

  onChangeFilter = (e) => {
    console.log(e);
    let results = this.getFilteredByBrand(this.state.products);
    results = this.getFilteredByPrice(results);

    this.setState({
      filterArray: results
    });
  };

  render() {
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
                  <Select className="price-options" options={priceOptions} onChange={this.onChangeFilter} />
                </div>
                <Select className="brand-options" options={brandOptions} onChange={this.onChangeFilter} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {this.state.filterArray.map((product, i) => {
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
}

export default Products;
