const userRouter = require('express').Router();
const userController = require('../controllers/user-controller');

userRouter.get('/', userRouter.index);

module.exports = userRouter;