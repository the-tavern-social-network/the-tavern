const express = require('express');
const router = express.Router();
const { genericController, userController } = require('../controllers');
const capture = require('../util/capture');

router.patch('/user/:id', capture(userController.updateOne));

// Generic route (see /controllers/genericController)
router
  .route('/:entity')
  .get(capture(genericController.getAll))
  .post(capture(genericController.create));

// Generic route by id (see /controllers/genericController)
router
  .route('/:entity/:id')
  .get(capture(genericController.getOne))
  .patch(capture(genericController.updateOne))
  .delete(capture(genericController.deleteOne));

module.exports = router;
