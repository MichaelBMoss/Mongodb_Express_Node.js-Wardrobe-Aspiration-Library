const User = require('../models/user')


module.exports = {
    profile,
  };


  async function profile(req, res) {
    try {
      const viewedUserDoc = await User.findById(req.params.userId).populate('pieces');
      if (req.isAuthenticated()) {
        let curUserId = req.user._id;
        if (viewedUserDoc._id.toString() === curUserId.toString()) {
          res.render('profile/profile', { title: 'My Profile', viewedUserDoc, curUserId });
        } else {
          res.render('profile/profile', { title: viewedUserDoc.name + ' WAL', viewedUserDoc, curUserId });
        }
      } else {
        const curUserId = 'not logged in';
        res.render('profile/profile', { title: viewedUserDoc.name + ' WAL', viewedUserDoc, curUserId });
      }
    } catch (err) {
      console.log(err);
      res.redirect('/');
    }
  }
  