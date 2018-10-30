const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());

//products model
var ObjectID = require("mongodb").ObjectID;
const Products = require("./models/Products");
const Contact = require("./models/Contact");
// const Admin = require("./models/Admin");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    //For contact form info
    extended: true
  })
);
// GET:
mongoose
  .connect(
    // connects to the database with port 27017
    "mongodb://localhost:27017",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongo db connected ...."))
  .catch(err => console.log(err));
// myendpointname.com/products = Json with information from all products.
app.get("/products", (req, res) => {
  // we want to return all products in the
  // products.json file.
  // Products.find()
  Products.find()
    .then(results => res.json(results))
    .catch(err => res.status(404).json({ success: false }));
});
app.post("/products", (req, res) => {
  const {
    image,
    productId,
    title,
    price,
    productType,
    productCategory,
    brand
  } = req.body;
  const newProduct = new Products({
    image,
    productId,
    title,
    price,
    productType,
    productCategory,
    brand
  });
  newProduct.save().then(results => res.json(results));
});

// Contact form

app.get("/contact", (req, res) => {
  // we want to return all forms in the
  // contact form
  // Contact.find()
  Contact.find()
    .then(results => res.json(results))
    .catch(err => res.status(404).json({ success: false }));
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, comments } = req.body;
  console.log(req.body);
  const newContact = new Contact({
    firstName,
    lastName,
    email,
    comments
  });
  newContact.save().then(results => res.json(results));
});

app.post("/admin", (req, res) => {
  console.log(req.body);
  const { image, title, productType, price, productId } = req.body;
  const newProduct = new Products({
    image,
    title,
    productType,
    price,
    productId
  });
  newProduct.save().then(results => res.json(results));
});

app.put("/admin/:id", (req, res) => {
  console.log(req.body);
  const { image, title, productType, price, productId } = req.body;
  const newProduct = {
    image,
    title,
    productType,
    price
  };
  Products.findByIdAndUpdate(productId, newProduct, (err, product) => {
    if (err) return err;
    return product;
  })
    .then(product => res.json(product))
    .catch(err => res.sendStatus(500));
});

app.delete("/admin/:id", (req, res) => {
  Products.findByIdAndDelete(req.params.id, err => {
    if (err) return err;
  })
    .then(() => res.sendStatus(200))
    .catch(err => res.sendStatus(500));
});

app.listen(3004);
