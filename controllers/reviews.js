const Product = require('../models/product');

module.exports = {
  create,
  // Add this export
  delete: deleteReview
};

async function deleteReview(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  const product = await Product.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
  // Rogue user!
  if (!product) return res.redirect('/products');
  // Remove the review using the remove method available on Mongoose arrays
  product.reviews.remove(req.params.id);
  // Save the updated product doc
  await product.save();
  // Redirect back to the product's show view
  res.redirect(`/products/${product._id}`);
}

async function create(req, res) {
  const product = await Product.findById(req.params.id);

  // Add the user-centric info to req.body (the new review)
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  // We can push (or unshift) subdocs into Mongoose arrays
  product.reviews.push(req.body);
  try {
    // Save any changes made to the product doc
    await product.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/products/${product._id}`);
}