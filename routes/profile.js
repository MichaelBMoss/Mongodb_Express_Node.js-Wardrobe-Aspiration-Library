const express = require('express');
const router = express.Router();

const ensureLoggedIn = require('../config/ensureLoggedIn');
	

const profileCtrl = require('../controllers/profile');

router.get('/:googleId', profileCtrl.profile);

module.exports = router;