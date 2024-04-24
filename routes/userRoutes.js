const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

userRouter.post('/signUp', userController.signUp);
userRouter.post('/signIn', userController.login);
  
module.exports = userRouter;
  