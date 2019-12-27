const express = require('express');
const router = express.Router();

const fetchController = require('../controllers/fetch_controller');

router.get('/allSongs', fetchController.allSongs);

module.exports = router;