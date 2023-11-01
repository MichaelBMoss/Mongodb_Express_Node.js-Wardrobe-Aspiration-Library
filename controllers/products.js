const Product = require('../models/product');
const Performer = require('../models/performer');

module.exports = {
  profile,
  show,
  new: newProduct,
  create
};

async function profile(req, res) {
  const products = await Product.find({});
  res.render('products/profile', { title: 'All Products', products });
}

async function show(req, res) {
  // Populate the cast array with performer docs instead of ObjectIds
  const product = await Product.findById(req.params.id).populate('cast');
  // Mongoose query builder approach to retrieve performers not the product:
    // Performer.find({}).where('_id').nin(product.cast)
  // The native MongoDB approach uses a query object to find 
  // performer docs whose _ids are not in the product.cast array like this:
  const performers = await Performer.find({ _id: { $nin: product.cast } }).sort('name');
  res.render('products/show', { title: 'Product Detail', product, performers });
}

function newProduct(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('products/new', { errorGuidance: '',title: 'My Profile', errorMsg: '' });
}

async function create(req, res) {
  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    // Update this line because now we need the _id of the new product
    const product = await Product.create(req.body);
    // Redirect to the new product's show functionality 
    res.redirect(`/products/${product._id}`);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('products/new', { errorGuidance: 'Your input was not acceptable', title: 'My Profile', errorMsg: err.message });
  }
}