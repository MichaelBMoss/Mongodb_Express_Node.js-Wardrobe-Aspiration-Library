module.exports = {
    new: newPiece,
  };

function newPiece(req, res) {
    res.redirect(`/profile/${req.params.googleId}`);
}
