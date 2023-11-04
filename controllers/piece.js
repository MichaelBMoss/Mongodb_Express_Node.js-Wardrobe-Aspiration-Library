const Piece = require('../models/piece');
const User = require('../models/user')


module.exports = {
    create,
  };


async function create(req, res) {
  if (req.isAuthenticated()) {
    try {
      const newPiece = await Piece.create(req.body);
      newPiece.users.push(req.user._id);
      res.redirect(`/profile/${req.user._id}`);
      await newPiece.save();
      const curUserDoc = await User.findById(req.user._id);
      curUserDoc.pieces.push(newPiece._id);
      await curUserDoc.save();
    } catch (err) {
      console.log(err);
      res.redirect(`/profile/${req.user._id}`);
    }
  } else { 
    res.redirect('/login');
  }
}
