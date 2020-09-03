const db = require('../db/config');

class Topic {
  constructor(topic) {
    this.id = topic.id || null;
    this.title = topic.title;
    this.user_id = topic.user_id;
    this.board_id = topic.board_id;
    this.created_at = topic.created_at;
  }

  static getAll() {
    return db
      .manyOrNone(
        `SELECT * FROM topics
      ORDER BY created_at ASC`
      )
      .then(topics => {
        return topics.map(topic => new this(topic));
      });
  }

  static findById = id => {
    return db
      .oneOrNone(
        `
      SELECT * FROM topics
      WHERE id = $1
    `,
        id
      )
      .then(topic => {
        if (topic) return new this(topic);
        throw new Error(`Topic ${id} not found`);
      });
  };

  save() {
    return db
      .one(
        `INSERT INTO topics
        (title, board_id)
        VALUES ($/title/, $/board_id/)
        RETURNING *`,
        this
      )
      .then(topic => Object.assign(topic));
  }

  static update(changes) {
    Object.assign(this, changes);
    return db
      .one(
        `
       UPDATE topics SET
       text = $/title/
       created_at = $/created_at/
       RETURNING *
       `,
        this
      )
      .then(topic => Object.assign(topic));
  }

  delete() {
    return db.none(
      `
    DELETE FROM topics
    WHERE id = $1
    `,
      this.id
    );
  }
}

module.exports = Topic;
