const db = require('../db/config');

const boards  = {};

class Board {
  constructor(board) {
    this.id = board.id || null;
    this.title = board.title;
    this.created_at = board.created_at;
    this.user_id = board.user_id;
  }

  static getAll() {
    return db
      .manyOrNone(
        `SELECT * FROM boards
      ORDER BY created_at ASC`
      )
      .then(boards => {
        return boards.map(board => new this(board));
      });
    }

   static findById = (id) => {
    return db.oneOrNone(`
      SELECT * FROM boards
      WHERE id = $1
    `, id)
    .then((board)=> {
      if (board) return new this (board);
      throw new Error (`Board ${id} not found`);
    });
  }
  
  save() {
    return db
      .one(
        `INSERT INTO boards
        (title, created_at)
        VALUES ($/title/, $/created_at/)
        RETURNING *`,
        this
      )
      .then((board) => Object.assign(board));
  }

  static update(changes) {
    Object.assign(this, changes);
    return db
     .one(
       `
       UPDATE boards SET
       title = $/title/
       created_at = $/created_at/
       RETURNING *
       `,
       this
     )
     .then((board) => Object.assign(board));
   }

   delete() {
     return db.none(
       `
       DELETE FROM boards
       WHERE id =$1
       `,
       this.id
     );
   }
}

module.exports = Board;
