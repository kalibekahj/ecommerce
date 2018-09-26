// Model
const mongoose=require('mongoose');
const schema= mongoose.Schema;
var Product = new schema({
    image: { type: String },
    productId: { type: Number },
    title: { type: String },
    price: { type: Number },
    productType: { type: String },
    productCategory: { type: String },
    brand: { type: String }
});
module.exports=Products=mongoose.model('product',Product)