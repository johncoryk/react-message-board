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
}

module.exports =Topic;