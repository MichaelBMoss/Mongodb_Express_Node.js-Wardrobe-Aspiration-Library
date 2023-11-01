const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const productsCtrl = require('../controllers/products');
const ensureLoggedIn = require('../config/ensureLoggedIn');
	
// GET /products
router.get('/', productsCtrl.profile);
// GET /products/new
router.get('/new', ensureLoggedIn, productsCtrl.new);
// GET /products/:id (show functionality) MUST be below new route
router.get('/:id', productsCtrl.show);
// POST /products
router.post('/', ensureLoggedIn, productsCtrl.create);
	
module.exports = router;
