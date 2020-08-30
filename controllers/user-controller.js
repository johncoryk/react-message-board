const User = require('../models/User');

const userController = {
  index: (req, res) => {
    User.getAll().then(users => {
      res.send({
        message: 'ok',
        users,
      });
    });
  },
};

module.exports = userController;
