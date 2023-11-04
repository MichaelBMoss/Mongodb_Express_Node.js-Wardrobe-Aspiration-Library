module.exports = {
    profile,
  };

function profile(req, res) {
    if (req.isAuthenticated()) {
      const authenticatedUserId = req.user._id;
      const userIdBeingViewed = req.params.userId;  
      if (isUserMatching(authenticatedUserId, userIdBeingViewed)) {
        res.render('profile/myProfile', { title: 'My Profile' });
      } else {
        res.render('profile/profile', { title: 'Profile' });
      }
    } else { 
      res.render('profile/profile', { title: 'My Profile' });
    }
}
function isUserMatching(authenticatedUserId, userIdBeingViewed) {
    return authenticatedUserId == userIdBeingViewed;
}