const boardRouter = require('express').Router();
const boardController = require('../controllers/board-controller');

boardRouter.get('/', boardController.index);
boardRouter.post('/', boardController.create);

boardRouter.get('/:id', boardController.show);
boardRouter.put('/:id', boardController.update);
// boardRouter.delete('/:id', boardController.delete);

module.exports = boardRouter;
