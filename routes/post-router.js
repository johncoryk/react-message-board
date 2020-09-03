const postRouter = require('express').Router();
const postController = require('../controllers/post-controller');

postRouter.get('/topics/:id', postController.index);
postRouter.post('/new/:id', postController.create);

postRouter.get('/:id', postController.show);
postRouter.put('/:id', postController.update);
postRouter.delete('/:id', postController.delete);

module.exports = postRouter;
