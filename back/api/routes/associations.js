const express = require('express');
const router = express.Router();
const associationController = require('../controllers/associationController');
const capture = require('../util/capture');

router.post('/contact/:userId/add/:contactId', capture(associationController.addContact));

module.exports = router;
