// Model
const mongoose=require('mongoose');
const schema= mongoose.Schema;

var Contact = new schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    comments: { type: String },
});
module.exports = Contact = mongoose.model('contact',Contact)