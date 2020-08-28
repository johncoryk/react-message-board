const Board = require('../models/Board');

const boardController = {
  index: (req, res) => {
    Board.getAll().then(boards => {
      res.send({
        message: 'ok',
        boards,
      });
    });
  },
};

module.exports = boardController;
