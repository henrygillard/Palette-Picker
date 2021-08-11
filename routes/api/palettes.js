const express = require('express');
const router = express.Router();
const palettesCtrl = require('../../controllers/api/palettes');

// GET /api/palettes
router.get('/', palettesCtrl.index);
// GET /api/palettes/:id
router.get('/:id', palettesCtrl.show);
router.post('/', palettesCtrl.create);

module.exports = router;