const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pieceSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 60,
  },
  imageURL: {
    type: String,
    required: true,
    maxlength: 2000,
  },
  brand: {
    type: String,
    maxlength: 60,
  },
  category: {
    type: String,
    enum: ['Top', 'Bottom', 'Dress', 'Outerwear', 'Accessory', 'Footwear',],
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
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
}, {
  timestamps: true
});


module.exports = mongoose.model('Piece', pieceSchema);