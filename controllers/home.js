const Piece = require('../models/piece');

module.exports = {
    home,
  };


async function home(req, res) {
  try {
    const randomPieces = await Piece.aggregate([
      { $sample: { size: 18 } }
    ]);
    res.render('home/home', { title: 'All Products', randomPieces});
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
}
  