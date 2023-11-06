const express = require('express');
const router = express.Router();

const profileCtrl = require('../controllers/profile');

router.get('/:userId', profileCtrl.show);

router.get('/:userId/showEdit', profileCtrl.showEdit);

router.post('/:userId/update', profileCtrl.update);

module.exports = router;