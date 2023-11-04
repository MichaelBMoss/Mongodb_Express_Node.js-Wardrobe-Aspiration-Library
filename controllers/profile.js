const User = require('../models/user')


module.exports = {
    profile,
  };


async function profile(req, res) {
  const viewedUserDoc = await User.findById(req.params.userId).populate('pieces');

    if (req.isAuthenticated()) {
      const curUserId = req.user._id;
      const viewedUserId = req.params.userId;  
      if (isUserMatching(curUserId, viewedUserId)) {
        res.render('profile/myProfile', { title: 'My Profile', viewedUserDoc });
      } else {
        res.render('profile/profile', { title: 'Profile', viewedUserDoc });
      }
    } else { 
      res.render('profile/profile', { title: 'My Profile', viewedUserDoc });
    }
}

function isUserMatching(curUserId, viewedUserId) {
  return curUserId.toString() === viewedUserId.toString();
}