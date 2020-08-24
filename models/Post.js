const db = require('../db/config');

class Post {
  constructor(post) {
    this.id = post.id || null;
    this.created_at = post.created_at;
    this.created_on = post.created_on;
    this.body = post.body;
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
}

module.exports = Post;
