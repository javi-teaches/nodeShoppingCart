const express = require('express');
const router = express.Router();

// Controller
const controller = require('../controllers/mainController');

router.get('/', controller.index);
router.get('/cart', controller.showCart);
router.post('/cart', controller.addToCart);

module.exports = router;
