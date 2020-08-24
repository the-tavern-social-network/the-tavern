const express = require('express');
const router = express.Router();
const { authController } = require('../controllers');
const capture = require('../util/capture');

router.post('/login', capture(authController.login));

router.post('/logout', capture(authController.logout));

// This route is going to check if the user is already connected
router.post('/is-logged-in', capture(authController.isLoggedIn));

router.post('/signup', capture(authController.signUp));

// router.post("/check-password", authController.postCheckPassword);

module.exports = router;
