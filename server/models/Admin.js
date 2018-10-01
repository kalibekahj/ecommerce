// Model
const mongoose = require('mongoose');
const schema = mongoose.Schema;

var Admin = new schema({
    image: { type: String },
    title: { type: String },
    productType: { type: String },
    price: { type: Number },
    productId: { type: Number }
});
module.exports = Admin = mongoose.model('admin',Admin)