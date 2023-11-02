module.exports = {
    home,
  };

function home(req, res) {
res.render('home/home', { title: 'All Products', });
}
