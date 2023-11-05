const Piece = require('../models/piece');
const User = require('../models/user');

module.exports = {
  create,
  show,
  update,
};

async function create(req, res) {
  if (req.isAuthenticated()) {
    try {
      const newPiece = await Piece.create(req.body);
      console.log('newPiece = ', newPiece);
      const curUserDoc = await User.findById(req.user._id);
      console.log('curUserDoc = ', curUserDoc);
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
    const piece = await Piece.findById(req.params.pieceId);
    console.log('piece = ', piece);

    const pieceOwner = req.params.userId;
    console.log('pieceOwner = ', pieceOwner)
    if (req.isAuthenticated()) {
      const curUserId = req.user._id;
      console.log('curUserId = ', curUserId);

      if (curUserId.toString() === pieceOwner.toString()) {
        res.render('piece/piece', { title: 'Piece', piece, curUserId, pieceOwner });
      } else {
        res.render('piece/piece', { title: 'Piece', piece, curUserId, pieceOwner });
      }
    } else {
      const curUserId = 'Not Logged In';
      console.log('curUserId = ', curUserId);

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
      console.log('curUserId = ', curUserId);

      const pieceOwner = req.params.userId;
      console.log('pieceOwner = ', pieceOwner);

      if (curUserId.toString() === pieceOwner.toString()) {
        const piece = await Piece.findByIdAndUpdate(
          req.params.pieceId,
          req.body,
          { new: true }
        );
        console.log('piece = ', piece);

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
