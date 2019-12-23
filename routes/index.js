// Add Express and intialize Router
const express = require('express');
const router = express.Router();

//Require all the Controllers
const homeController = require('../controllers/home_controller');

//Get all actions or Controllers
router.get('/', homeController.home);
router.use('/artist', require('./artists'));

//Export the router
module.exports = router;