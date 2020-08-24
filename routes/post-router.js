const postRouter = require('express').Router();

postRouter.get('/', postController.index);

module.exports = postRouter;
