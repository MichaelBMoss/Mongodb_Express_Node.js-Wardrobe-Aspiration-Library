const User = require('../models/user')


module.exports = {
    show,
  };


  async function show(req, res) {
    try {
      const viewedUserDoc = await User.findById(req.params.userId).populate('pieces');
      if (req.isAuthenticated()) {
        const curUserId = req.user._id;
        if (viewedUserDoc._id.toString() === curUserId.toString()) {
          res.render('profile/profile', { title: 'My Profile', viewedUserDoc, curUserId });
          console.log('1')
        } else {
          res.render('profile/profile', { title: viewedUserDoc.name + ' WAL', viewedUserDoc, curUserId });
          console.log('2')
        }
      } else {
        const curUserId = 'not logged in';
        res.render('profile/profile', { title: viewedUserDoc.name + ' WAL', viewedUserDoc, curUserId });
        console.log('3')
      }
    } catch (err) {
      console.log(err);
      res.redirect('/');
    }
  }
  