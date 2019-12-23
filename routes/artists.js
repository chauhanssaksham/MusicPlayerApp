const express = require('express');
const router = express.Router();

const artistsController = require('../controllers/artists_controller');

router.get('/SMW', artistsController.SMW);

module.exports = router;
