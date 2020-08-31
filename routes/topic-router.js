const topicRouter = require('express').Router();
const topicController = require('../controllers/topic-controller');

topicRouter.get('/', topicRouter.index);

module.exports = topicRouter;