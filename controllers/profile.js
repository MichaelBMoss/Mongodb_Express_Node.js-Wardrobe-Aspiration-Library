module.exports = {
    profile,
  };

function profile(req, res) {
res.render('profile/profile', { title: 'All Products', });
}