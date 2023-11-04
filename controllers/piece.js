const Piece = require('../models/piece');


module.exports = {
    create,
  };


async function create(req, res) {
    // try {
    //     await Piece.create(req.body);
    //     await res.redirect(`/profile/${req.user._id}`);
    //   } catch (err) {
    //     console.log(err);
    //     res.redirect(`/profile/${req.user._id}`);
    //   }
    console.log('WWWWWWWWWWWWWWWWWWWWWWWWWW' + req.user._id + 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW')
}
