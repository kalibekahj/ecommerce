import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact"
import Footer from './components/Footer/Footer';

class App extends Component {
  
  render() {
    return (
      <Router>
      <React.Fragment>
        <Header />
        <Switch>
              <Route exact path="/ " component={Home} />
              <Route path="/products" component={Products} />
              <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
