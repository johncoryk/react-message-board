const express = require('express');
const topicRouter = require('express').Router();
const topicController = require('../controllers/topic-controller');

topicRouter.get('/boards/:id', topicController.index);
topicRouter.post('/new/:id', topicController.create);

topicRouter.get('/:id', topicController.show);
topicRouter.put('/:id', topicController.update);
topicRouter.delete('/:id', topicController.delete);

module.exports = topicRouter;
