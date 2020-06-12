const express = require('express');
const router = express.Router();
const genericController = require('../../controllers/genericController');
const capture = require('../util/capture');

router
  .route('/:entity')
  .get(capture(genericController.getAll))
  .post(capture(genericController.create));

router
  .route('/:entity/:id')
  .get(capture(genericController.getOne))
  .patch(capture(genericController.updateOne))
  .delete(capture(genericController.deleteOne));

module.exports = router;
