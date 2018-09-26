// npm init
const fs = require("fs");
const express = require("express"); // npm install --save express
const bodyParser = require("body-parser"); // npm install --save body-parser
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());

// Adding cors to accept all origins
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// build an api that adds, edits, get, & deletes a product in the
// product.json file.

const products = JSON.parse(fs.readFileSync("./products.json", "utf-8"));

// GET:
// myendpointname.com/products = Json with information from all products.
// app.get("/products", (req, res) => {
//   // we want to return all products in the
//   // products.json file.
//   res.send(products);
// });




app.listen(3004);
