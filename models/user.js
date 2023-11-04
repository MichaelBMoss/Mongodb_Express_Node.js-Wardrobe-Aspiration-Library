const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: String,
  profilePicture: String,
  pieces: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Piece',
    },
  ],
}, {
  timestamps: true
});


module.exports = mongoose.model('User', userSchema);
