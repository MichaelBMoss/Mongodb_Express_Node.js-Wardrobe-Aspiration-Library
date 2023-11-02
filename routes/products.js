const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const productsCtrl = require('../controllers/products');
const ensureLoggedIn = require('../config/ensureLoggedIn');
	

router.get('/', productsCtrl.profile);
router.get('/new', ensureLoggedIn, productsCtrl.new);
router.get('/:id', productsCtrl.show);
router.post('/', ensureLoggedIn, productsCtrl.create);
	
module.exports = router;
