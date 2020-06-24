const express = require('express');
const router = express.Router();
const { associationController } = require('../controllers');
const capture = require('../util/capture');

router.post('/contact/:userId/add/:contactId', capture(associationController.addContact));

router.patch('/contact/:userId/accept/:contactId', capture(associationController.acceptContact));

router.delete('/contact/:userId/delete/:contactId', capture(associationController.deleteContact));

module.exports = router;
