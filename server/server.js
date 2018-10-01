const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());

//products model
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
// app.get("/", (req, res) => res.send("hello"));

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

// EditModel

// app.post("/products", (req, res) => {
//   const {
//     image,
//     productId,
//     title,
//     price,
//     productType,
//     productCategory,
//     brand
//   } = req.body;
//   const newEdit = new Edit({
//     image,
//     productId,
//     title,
//     price,
//     productType,
//     productCategory,
//     brand
//   });
//   newEdit.save().then(results => res.json(results));
// });

// app.get("/admin", (req, res) => {
//   // we want to return all forms in the
//   // admin form
//   // Admin.find()
//   Products.find()
//     .then(results => res.json(results))
//     .catch(err => res.status(404).json({ success: false }));
// });
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
  newProduct.save().then(() => res.sendStatus(201));
});

app.put("/admin", (req, res) => {
  console.log(req.body);
  const { image, title, productType, price, productId } = req.body;
  const newProduct = new Products({
    image,
    title,
    productType,
    price,
    productId
  });
  newProduct.save().then(() => res.sendStatus(200));
});

app.delete("/admin/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const filteredProducts = products.filter(admin => products.id !== id);
  if (filteredProducts.length === products.length) {
    return res.status(404).send("Unable to find ID");
  }

});

app.listen(3004);
