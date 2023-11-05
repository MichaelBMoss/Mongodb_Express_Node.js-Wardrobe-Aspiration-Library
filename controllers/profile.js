const User = require('../models/user');

module.exports = {
  show,
};

async function show(req, res) {
  try {
    const viewedUserDoc = await User.findById(req.params.userId).populate('pieces');
    console.log('viewedUserDoc = ', viewedUserDoc);

    if (req.isAuthenticated()) {
      const curUserId = req.user._id;
      console.log('curUserId = ', curUserId);

      if (viewedUserDoc._id.toString() === curUserId.toString()) {
        res.render('profile/profile', { title: 'My Profile', viewedUserDoc, curUserId });
      } else {
        res.render('profile/profile', { title: viewedUserDoc.name + ' WAL', viewedUserDoc, curUserId });
      }
    } else {
      const curUserId = 'not logged in';
      console.log('curUserId = ', curUserId);

      res.render('profile/profile', { title: viewedUserDoc.name + ' WAL', viewedUserDoc, curUserId });
    }
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
}
