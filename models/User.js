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

  static findById = (id) => {
    return db.oneOrNone(`
      SELECT * FROM users
      WHERE id = $1
    `, [id])
    .then((user) => {
      if (user) return new this (user);
      throw new Error (`User ${id} not found`);
    });
  }

  save () {
    return db
      .one(
        `INSERT INTO users
        (user_name, password_digest, email, created_at)
        VALUES ($/user_name/, $/password_digest/, $/email/, $/created_at/)
        RETURNING *`,
        this
      )
      .then((user)=> Object.assign(this.user));
  }

  static create = (user_name, password_digest, email, created_at) => {
    return db.one(`
    INSERT INTO users
    (user_name, password_digest, email, created_at)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `, [user_name, password_digest, email, created_at]);
  }

  static delete = () => {
    return db.one(`
    DELETE FROM users
    WHERE id = $1
    `, id);
  }
  //getbyid
  //create
  //**hold off on update */
  //delete
}

module.exports = User;