const Topic = require('../models/Topic');

const topicController = {
  index: (req, res) => {
    Topic.getAll().then(topics => {
      res.send({
        message: 'ok',
        topics,
      });
    });
  },
};

module.exports = topicController;
