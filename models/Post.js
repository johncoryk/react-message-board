const db = require('../db/config');

class Post {
  constructor(post) {
    this.id = post.id || null;
    this.created_at = post.created_at;
    this.created_on = post.created_on;
    this.text = post.text;
    this.user_id = post.user_id;
    this.topic_id = post.topic_id;
  }

  static getAll() {
    return db
      .manyOrNone(
        `SELECT * FROM posts
      ORDER BY created_on ASC`
      )
      .then(posts => {
        return posts.map(post => new this(post));
      });
  }

  static findById = (id) => {
    return db.oneOrNone(`
      SELECT * FROM posts
      WHERE id = $1
    `, [id]);
  }

  static create = (title, created_at) => {
    return db.one(`
    INSERT INTO posts
    (text, created_at)
    VALUES ($1, $2)
    RETURNING *
    `, [post.text, post.created_at]);
  }

  static update = (text) => {
    return db.one(`
    UPDATE posts SET
    text = $1
    WHERE id = $2
    RETURNING *
    `, [post.text, id]);
  }

  static delete = (id) => {
    return db.one(`
    DELETE FROM posts
    WHERE id = $1
    `, [id]);
  }
  //findbyid
  //create
  //update
  //delete
}

module.exports = Post;
