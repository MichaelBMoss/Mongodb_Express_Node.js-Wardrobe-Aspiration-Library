const Piece = require('../models/piece');


module.exports = {
    create,
  };


async function create(req, res) {
  console.log(req.user)
    // try {
    //   const newPiece = await Piece.create(req.body);
    //   res.redirect(`/profile/${req.user.id}`);
    // } catch (err) {
    //   console.log(err);
    //   res.redirect(`/profile/${req.user.id}`);
    // }
}
