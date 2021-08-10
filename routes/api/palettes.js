const express = require('express');
const router = express.Router();
const palettesCtrl = require('../../controllers/api/palettes');

// GET /api/palettes
router.get('/', palettesCtrl.index);
router.post('/', palettesCtrl.create);
// GET /api/palettes/:id
router.get('/:id', palettesCtrl.show);

module.exports = router;