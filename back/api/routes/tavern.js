const express = require('express');
const router = express.Router();
const { tavernController } = require('../controllers');
const capture = require('../util/capture');

// Creates a tavern request
router.post('/tavern', capture(tavernController.create));

// Deletes a tavern request
router.delete('/tavern/:tavernId', capture(tavernController.delete));

module.exports = router;
