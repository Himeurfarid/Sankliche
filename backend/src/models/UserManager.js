const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (lastname, firstname, nickname, email) values (?, ?, ?, ?, ?)`,
      [
        user.lastname,
        user.firstname,
        user.nickname,
        user.email,
        user.hashedPassword,
        user.id,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set lastname = ?, firstname = ?, nickname = ?, hashedPassword = ?, email = ? where id = ?`,
      [
        user.lastname,
        user.firstname,
        user.nickname,
        user.email,
        user.hashedPassword,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
