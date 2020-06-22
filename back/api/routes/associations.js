const express = require('express');
const router = express.Router();
const associationController = require('../controllers/associationController');
const capture = require('../util/capture');

router.post('/contact/:contactOneId/add/:contactTwoId', capture(associationController.addContact));

module.exports = router;
