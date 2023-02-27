const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (lastname, firstname, username, email, hashedPassword) values (?, ?, ?, ?, ?)`,
      [
        user.lastname,
        user.firstname,
        user.username,
        user.email,
        user.hashedPassword,
        user.id,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set lastname = ?, firstname = ?, username = ?, email = ?, hashedPassword = ? where id = ?`,
      [
        user.lastname,
        user.firstname,
        user.username,
        user.email,
        user.hashedPassword,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
