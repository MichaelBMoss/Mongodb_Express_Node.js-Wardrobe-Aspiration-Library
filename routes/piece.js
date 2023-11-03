const express = require('express');
const router = express.Router();


const pieceCtrl = require('../controllers/piece');

router.post('/:googleId/new', pieceCtrl.new);


module.exports = router;