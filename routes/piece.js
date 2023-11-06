const express = require('express');
const router = express.Router();


const pieceCtrl = require('../controllers/piece');

router.post('/:userId/create', pieceCtrl.create);

router.get('/:ownerId/:pieceId', pieceCtrl.show);

router.get('/:ownerId/:pieceId/delete', pieceCtrl.delete);

router.post('/:ownerId/:pieceId/update', pieceCtrl.update);



module.exports = router;