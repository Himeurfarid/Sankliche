const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (id, lastname, firstname, nickname, email, password) values (?, ?, ?, ?, ?)`,
      [
        user.id,
        user.lastname,
        user.firstname,
        user.nickname,
        user.email,
        user.password,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set id = ?, lastname = ?, firstname = ?, nickname = ?, email = ?, password = ? where id = ?`,
      [
        user.id,
        user.lastname,
        user.firstname,
        user.nickname,
        user.email,
        user.password,
      ]
    );
  }
}

module.exports = UserManager;
