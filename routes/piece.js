const express = require('express');
const router = express.Router();


const pieceCtrl = require('../controllers/piece');

router.post('/:userId/create', pieceCtrl.create);

router.get('/:userId/:pieceId', pieceCtrl.show);


module.exports = router;