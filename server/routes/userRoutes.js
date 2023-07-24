const express = require('express');
const userRouter = express.Router();
const authMiddleware = require ('../middlewares/authMiddleware');
const authController = require ('../controllers/authController');

userRouter.post("/signup", authMiddleware.signUpUser, authController.createAndStoreToken);

userRouter.post("/login", authMiddleware.checkEmailLogIn, authController.createAndStoreToken);

userRouter.post("/logout", authMiddleware.authCheck, authController.destroySessionAndClearCookies);

module.exports = userRouter