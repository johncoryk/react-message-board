const Topic = require('../models/Topic');

const topicController = {};

topicController.index = (req, res, next) => {
  Topic.getAll()
    .then((topics) => {
      res.json({
        message: 'ok',
        data: { topics },
      });
    })
    .catch(next);
};

topicController.show = (req, res, next) => {
  Topic.getById(req.params.id)
    .then((topics) => {
      res.json({
        message: 'ok',
        data: { topics },
      });
    })
    .catch(next);
};

topicController.create = (req, res, next) => {
  new Topic({
    title: req.body.title,
    created_at: req.body.created_at
  })
    .save()
    .then((topic) => {
      res.json({
        message: 'Topic added successfully!',
        data: { topic },
      });
    })
    .catch(next);
};

topicController.update = (req, res, next) => {
  Topic.getById(req.params.id)
    .then((topic) =>
      topic.update({
        title: req.body.title,
        created_at: req.body.created_at,
      })
    )
    .then((topic) => {
      res.json({
        message: 'Topic updated successfully!',
        data: { topic },
      });
    })
    .catch(next);
};

topicController.delete = (req, res, next) => {
  Topic.getById(req.params.id)
    .then((topic) => topic.delete())
    .then(() => {
      res.json({
        message: 'Topic deleted successfully!',
      });
    })
    .catch(next);
};

module.exports = topicController;
