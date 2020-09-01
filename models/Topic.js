const db = require('../db/config');

class Topic {
  constructor(topic) {
    this.id = topic.id || null;
    this.title = topic.title;
    this.user_id = topic.user_id;
    this.board_id = topic.board_id;
    this.posts_count = topic.posts_count;
    this.created_on = topic.created_on;
    this.created_at = topic.created_at;
  }

  static getAll() {
    return db
      .manyOrNone(
        `SELECT * FROM topics
      ORDER BY created_on ASC`
      )
      .then(topics => {
        return topics.map(topic => new this(topic));
      });
  }

  static findById = (id) => {
    return db.oneOrNone(`
      SELECT * FROM topics
      WHERE id = $1
    `, [id]);
  }

  static create = (title, created_at) => {
    return db.one(`
    INSERT INTO topics
    (text, created_at)
    VALUES ($1, $2)
    RETURNING *
    `, [topic.text, topic.created_at]);
  }

  static update = (title) => {
    return db.one(`
    UPDATE topics SET
    title = $1
    WHERE id = $2
    RETURNING *
    `, [title.text, id]);
  }

  static delete = (id) => {
    return db.one(`
    DELETE FROM topics
    WHERE id = $1
    `, [id]);
  }
  //findbyid
  //create
  //update **not user facing
  //delete **not user facing
}

module.exports =Topic;