const Post = require('../models/Post.js');

const postController = {
  index: (req, res) => {
    Post.getAll().then(posts => {
      res.send({
        message: 'ok',
        posts,
      });
    });
  },
};

module.exports = postController;
