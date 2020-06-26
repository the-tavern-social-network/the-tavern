const express = require('express');
const router = express.Router();
const { tavernController } = require('../controllers');
const capture = require('../util/capture');

router.post('/tavern', capture(tavernController.create));

router.delete('/tavern/:tavernId', capture(tavernController.delete));

module.exports = router;
