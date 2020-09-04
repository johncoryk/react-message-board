const userRouter = require('express').Router();
const userController = require('../controllers/user-controller');
const authHelpers = require('../services/auth/auth-helpers');

userRouter.get('/', authHelpers.loginRequired, userController.index)

userRouter.get('/new', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/register');
})

userRouter.post('/', userController.create)


userRouter.get('/', userRouter.index);
userRouter.post('/', userController.create);

userRouter.get('/:id', userController.show);
userRouter.put('/:id', userController.update);
userRouter.delete('/:id', userController.delete);

module.exports = userRouter;