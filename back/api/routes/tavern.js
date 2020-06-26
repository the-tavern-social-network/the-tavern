const express = require('express');
const router = express.Router();
const { tavernController } = require('../controllers');
const capture = require('../util/capture');

router.post('/tavern/:userId/invite/:participantId', capture(tavernController.create));

router.delete('/tavern/:id', capture(tavernController.delete));

module.exports = router;
