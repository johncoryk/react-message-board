const db = require('../db/config');

class Post {
  constructor(post) {
    this.id = post.id || null;
    this.created_at = post.created_at;
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
    `, id)
    .then((post)=> {
      if (post) return new this (post);
      throw new Error (`Post ${id} not found`);
    });
  }

  save() {
    return db
      .one(
        `INSERT INTO posts
        (text, created_at)
        VALUES ($/text/, $/created_at/)
        RETURNING *`,
        this
      )
      .then((post) => Object.assign(this.post));
  }

  static update(changes) {
   Object.assign(this, changes);
   return db
    .one(
      `
      UPDATE posts SET
      text = $/text/
      created_at = $/created_at/
      RETURNING *
      `,
      this
    )
    .then((post) => Object.assign(this.post));
  }

  delete() {
    return db.none(`
    DELETE FROM posts
    WHERE id = $1
    `, this.id);
  }
  //findbyid
  //create
  //update
  //delete
}

module.exports = Post;
