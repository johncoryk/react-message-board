const User = require('../models/User');
const bcrypt = require('bcryptjs')

const userController = {
  index(req, res, next) {
    res.json({
      message: 'put somethng worth while here',
      user,
    })
  },
  create(req, res, next) {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    new User({
      username: req.body.username,
      email: req.body.email,
      password_digest: hash,
    }).save()
    .then(user => {
      req.login(user, err => {
        if (err) return next(err);
        res.redirect('/user');
      })
    }).catch(next);
  }
};

userController.index = (req, res, next) => {
    User.getAll()
      .then((users) => {
        res.json({
          message: 'ok',
          data: { users },
        });
      })
      .catch(next);
  };
  
  userController.show = (req, res, next) => {
    User.getById(req.params.id)
      .then((user) => {
        res.json({
          message: 'ok',
          data: { user },
        });
      })
      .catch(next);
  };
  
  userController.create = (req, res, next) => {
    new Post({
      user_name: req.body.user_name,
      password_digest: req.body.password_digest,
      email: req.body.email,
    })
      .save()
      .then((user) => {
        res.json({
          message: 'User added successfully!',
          data: { user },
        });
      })
      .catch(next);
  };
  
  userController.update = (req, res, next) => {
    User.getById(req.params.id)
      .then((user) =>
        user.update({
          user_name: req.body.user_name
        })
      )
      .then((user) => {
        res.json({
          message: 'User updated successfully!',
          data: { user },
        });
      })
      .catch(next);
  };
  
  userController.delete = (req, res, next) => {
    User.getById(req.params.id)
      .then((user) => user.delete())
      .then(() => {
        res.json({
          message: 'User deleted successfully!',
        });
      })
      .catch(next);
  };

module.exports = userController;
