const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pieceSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 80,
  },
  imageURL: {
    type: String,
    required: true,
    maxlength: 2000,
  },
  brand: {
    type: String,
    maxlength: 80,
  },
  category: {
    type: String,
    maxlength: 80,
    enum: ['top', 'bottom', 'dress', 'outerwear', 'accessory', 'footwear',],
  },
  price: {
    type: Number,
    maxlength: 15,
    min: 0,
  },
  link: {
    type: String,
    maxlength: 2000,
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
  },
}, {
  timestamps: true
});


module.exports = mongoose.model('Piece', pieceSchema);