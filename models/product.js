const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
    maxlength: 1000
  },
  brand: String,
  image: String,
  category: String,
  price: Number,
  link: String,
  rating: Number,
}, {
  timestamps: true
});


// Compile the schema into a model and export it
module.exports = mongoose.model('Product', productSchema);