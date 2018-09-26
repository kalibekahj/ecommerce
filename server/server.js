const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());

//products model
const Products = require("./models/Products");
const Contact = require("./models/Contact");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ //For contact form info
  extended: true
}));
app.get("/", (req, res) => res.send("hello"));
// // GET:
mongoose
  .connect(
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

app.listen(3004);
