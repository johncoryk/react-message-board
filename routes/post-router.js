const postRouter = require('express').Router();
const postController = require('../controllers/post-controller');

postRouter.get('/', postController.index);

module.exports = postRouter;
