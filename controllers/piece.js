const Piece = require('../models/piece');
const User = require('../models/user');

module.exports = {
  create,
  show,
  update,
  delete: pieceDelete,
};

async function create(req, res) {
  if (req.isAuthenticated()) {
    try {
      const newPiece = await Piece.create(req.body);
      const curUserDoc = await User.findById(req.user._id);
      curUserDoc.pieces.push(newPiece._id);
      await curUserDoc.save();
      res.redirect(`/profile/${req.user._id}`);
    } catch (err) {
      console.log(err);
      res.redirect(`/profile/${req.user._id}`);
    }
  } else {
    res.redirect('/login');
  }
}

async function show(req, res) {
  try {
    console.log('1')
    const piece = await Piece.findById(req.params.pieceId).populate('owner');
    const pieceOwner = req.params.ownerId;
    if (req.isAuthenticated()) {
      const curUserId = req.user._id;
      if (curUserId.toString() === pieceOwner.toString()) {
        res.render('piece/piece', { title: 'Piece', piece, curUserId, pieceOwner });
      } else {
        res.render('piece/piece', { title: 'Piece', piece, curUserId, pieceOwner });
      }
    } else {
      const curUserId = 'Not Logged In';
      res.render('piece/piece', { title: 'Piece', piece, curUserId, pieceOwner });
    }
  } catch (err) {
    console.log(err);
    res.redirect(`/`);
  }
}

async function update(req, res) {
  try {
    if (req.isAuthenticated()) {
      const curUserId = req.user._id;
      const pieceOwner = req.params.ownerId;
      if (curUserId.toString() === pieceOwner.toString()) {
        const updateFields = {};
        for (const key in req.body) {
          if (key in req.body && req.body[key]) {
            updateFields[key] = req.body[key];
          }
        }
        const piece = await Piece.findByIdAndUpdate(
          req.params.pieceId,
          updateFields,
          { new: true }
        );
        res.render('piece/piece', { title: 'Piece', piece, curUserId, pieceOwner });
      } else {
        res.redirect('/');
      }
    } else {
      res.redirect('/');
    }
  } catch (err) {
    console.log(err);
    res.redirect(`/`);
  }
}

async function pieceDelete(req, res) {
  if (req.isAuthenticated()) {
    try {
      await Piece.deleteOne({ _id: req.params.pieceId });
      res.redirect(`/profile/${req.user._id}`);
    } catch (err) {
      console.log(err);
      res.redirect(`/`);
    }
  } else {
    res.redirect('/login');
  }
}