import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Admin from "./components/Admin/Admin";
import Footer from "./components/Footer/Footer";
import Callback from "./Callback";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      filterArray: [],
      price: []
    };
  }

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

  onChangeFilter = e => {
    console.log(e);
    let results = this.getFilteredByBrand(this.state.products);
    results = this.getFilteredByPrice(results);

    this.setState({
      filterArray: results
    });
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/ " component={Home} />
            <Route
              path="/products"
              render={() => (
                <Products
                  products={this.state.filterArray}
                  onChangeFilter={this.onChangeFilter}
                />
              )}
            />
            <Route path="/contact" component={Contact} />

            <Route
              path="/admin"
              render={() => (
                <Admin
                  products={this.state.products}
                  
                />
              )}
            />
            <Route exact path="/callback" component={Callback} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
