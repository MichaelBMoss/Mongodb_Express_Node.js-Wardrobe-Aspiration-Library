const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 1000
  },
  releaseYear: {
    type: Number,
    default: function() {
      return new Date().getFullYear();
    },
    min: 1888,
    max: new Date().getFullYear()  // Set the maximum value to the current year
  },
  mpaaRating: {
    type: String,
    enum: ['G', 'PG', 'PG-13', 'R']
  },
  cast: [{
    type: Schema.Types.ObjectId,
    ref: 'Performer'
  }],
  nowShowing: { type: Boolean, default: true },
  reviews: [reviewSchema]
}, {
  timestamps: true
});


// Compile the schema into a model and export it
module.exports = mongoose.model('Product', productSchema);