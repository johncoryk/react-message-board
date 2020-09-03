const Post = require('../models/Post.js');

const postController = {};

postController.index = (req, res, next) => {
  Post.getAll(req.params.id)
    .then(posts => {
      res.status(200).json({
        message: 'ok',
        data: { posts },
      });
    })
    .catch(next);
};

postController.show = (req, res, next) => {
  Post.getById(req.params.id)
    .then(post => {
      res.json({
        message: 'ok',
        data: { post },
      });
    })
    .catch(next);
};

postController.create = (req, res, next) => {
  try {
    new Post({
      text: req.body.data,
      topic_id: req.params.id,
    })
      .save()
      .then(post => {
        res.status(201).json({
          message: 'Post added!',
          data: {
            post,
          },
        });
      })
      .catch(next);
  } catch (err) {
    return next(err);
  }
};

postController.update = (req, res, next) => {
  Post.getById(req.params.id)
    .then(post =>
      post.update({
        text: req.body.text,
        created_at: req.body.created_at,
      })
    )
    .then(post => {
      res.json({
        message: 'Post updated successfully!',
        data: { post },
      });
    })
    .catch(next);
};

postController.delete = (req, res, next) => {
  Post.getById(req.params.id)
    .then(post => post.delete())
    .then(() => {
      res.json({
        message: 'Post deleted successfully!',
      });
    })
    .catch(next);
};

module.exports = postController;
