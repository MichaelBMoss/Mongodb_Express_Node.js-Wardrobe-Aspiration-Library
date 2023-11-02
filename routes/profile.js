const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const ensureLoggedIn = require('../config/ensureLoggedIn');
	

const profileCtrl = require('../controllers/profile');

router.get('/:googleID', profileCtrl.profile);

module.exports = router;