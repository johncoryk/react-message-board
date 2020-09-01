const db = require('../db/config');

const boards  = {};

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
        return boards.map(board => new this(board));
      });
    }

   static findById = (id) => {
    return db.oneOrNone(`
      SELECT * FROM boards
      WHERE id = $1
    `, [id]);
  }

  static create = (title, created_at) => {
    return db.one(`
    INSERT INTO boards
    (title, created_at)
    VALUES ($1, $2)
    RETURNING *
    `, [board.title, board.created_at]);
  }

  static upddate
  
  //create
  //update** not user facing
  //delete** not user facing
}

module.exports = Board;
