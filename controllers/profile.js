module.exports = {
    profile,
  };

function profile(req, res) {
    if (req.isAuthenticated()) {
      const authenticatedUserId = req.user.googleId;
      const userIdBeingViewed = req.params.googleId;      
  
      if (isUserMatching(authenticatedUserId, userIdBeingViewed)) {
        // Render the user's own profile page
        res.render('profile/myProfile', { title: 'My Profile' });
      } else {
        // Render another user's profile or handle other cases as needed
        console.log('mmmmmmmmmmmmmmmmmmmmmm')
        res.render('profile/profile', { title: 'Profile' });
      }
    } else { 
      // User is not authenticated, you can handle this case, e.g., redirect to login
      res.render('profile/profile', { title: 'My Profile' });
    }
}
  
  // Function to check if the user matches the page they are viewing
function isUserMatching(authenticatedUserId, userIdBeingViewed) {
    return authenticatedUserId === userIdBeingViewed;
}