const db = require('../db/config');

class Post {
  constructor(post) {
    this.id = post.id || null;
    this.createdOn = post.createdOn;
    this.body = post.body;
  }

  static getAll() {
    return db
      .manyOrNone(
        `SELECT * FROM message-board
      ORDER BY createdOn ASC`
      )
      .then(posts => {
        return posts.map(post => new this(post));
      });
  }
}

module.exports = Post;
