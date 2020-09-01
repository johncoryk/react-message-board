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

  //findbyid
  //create
  //update
  //delete
}

module.exports = Post;
