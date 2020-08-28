const db = require('../db/config');

class Board {
  constructor(board) {
    this.id = board.id || null;
    this.title = board.title;
    this.topics_count = board.topics_count;
    this.created_on = board.created_on;
    this.created_at = board.created_at;
    this.user_id = board.user_id;
  }

  static getAll() {
    return db
      .manyOrNone(
        `SELECT * FROM boards
      ORDER BY created_on ASC`
      )
      .then(boards => {
        return boards.map(Board => new this(board));
      });
  }
}

module.exports = Board;