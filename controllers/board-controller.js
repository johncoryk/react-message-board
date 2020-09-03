const Board = require('../models/Board');

const boardController = {};

boardController.index = (req, res, next) => {
    Board.getAll()
      .then((boards) => {
        res.json({
          message: 'ok',
          data: { boards },
        });
      })
      .catch(next);
  };
  
  boardController.show = (req, res, next) => {
    Board.getById(req.params.id)
      .then((board) => {
        res.json({
          message: 'ok',
          data: { board },
        });
      })
      .catch(next);
  };
  
  boardController.create = (req, res, next) => {
    new Board({
      title: req.body.title,
      created_at: req.body.created_at
    })
      .save()
      .then((board) => {
        res.json({
          message: 'Board added successfully!',
          data: { board },
        });
      })
      .catch(next);
  };
  
  boardController.update = (req, res, next) => {
    Board.getById(req.params.id)
      .then((board) =>
        board.update({
          title: req.body.title,
          created_at: req.body.created_at,
        })
      )
      .then((board) => {
        res.json({
          message: 'Board updated successfully!',
          data: { board },
        });
      })
      .catch(next);
  };

  boardController.delete = (req, res ,next) => {
      Board.getById(req.params.id)
      .then(board => board.delete())
      .then(()=> {
          res.json({
              message: 'Board deleted succesfully!',
          });
      })
      .catch(next);
  };
  
  


module.exports = boardController;
