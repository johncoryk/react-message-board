const boardRouter = require('express').Router();
const boardController = require('../controllers/board-controller');

boardRouter.get('/', boardRouter.index);

module.exports = boardRouter;