const db = require('../db/config');

class User {
  constructor(user) {
    this.id = user.id || null;
    this.user_name = user.user_name;
    this.password_digest = user.password_digest;
    this.email = user.email;
    this.created_on = user.created_on
    this.created_at = user.created_at;
  }

  static getAll() {
    return db
      .manyOrNone(
        `SELECT * FROM users
      ORDER BY created_on ASC`
      )
      .then(users => {
        return users.map(user => new this(user));
      });
  }

  //getbyid
  //create
  //**hold off on update */
  //delete
}

module.exports = User;