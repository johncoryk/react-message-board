const db = require('../db/config');

class Post {
  constructor(post) {
    this.id = post.id || null;
    this.created_at = post.created_at;
    this.text = post.text;
    this.user_id = post.user_id;
    this.topic_id = post.topic_id;
  }

  static getAll = id => {
    return db
      .manyOrNone(
        `SELECT * FROM posts
        WHERE topic_id = $1
      ORDER BY created_at ASC`,
        id
      )
      .then(posts => {
        return posts.map(post => new this(post));
      });
  };

  static findById = id => {
    return db
      .oneOrNone(
        `
      SELECT * FROM posts
      WHERE id = $1
    `,
        id
      )
      .then(post => {
        if (post) return new this(post);
        throw new Error(`Post ${id} not found`);
      });
  };

  save() {
    //save the userid, topics and need change to make sure entire thing works
    return db
      .one(
        `INSERT INTO posts
        (text, topic_id)
        VALUES ($/text/, $/topic_id/)
        RETURNING *`,
        this
      )
      .then(post => Object.assign(post));
  }

  static update(changes) {
    Object.assign(this, changes);
    return db
      .one(
        `
      UPDATE posts SET
      text = $/text/
      RETURNING *
      `,
        this
      )
      .then(post => Object.assign(post));
  }

  delete() {
    return db.none(
      `
    DELETE FROM posts
    WHERE id = $1
    `,
      this.id
    );
  }
}

module.exports = Post;
