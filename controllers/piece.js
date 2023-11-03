const Piece = require('../models/piece');


module.exports = {
    create,
  };


async function create(req, res) {
    // try {
    //     await Piece.create(req.body);
    //     await res.redirect(`/profile/${req.params.googleId}`);
    //   } catch (err) {
    //     console.log(err);
    //     res.redirect(`/profile/${req.params.googleId}`);
    //   }
    console.log('WWWWWWWWWWWWWWWWWWWWWWWWWW' + req.user.id + 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW')
}
