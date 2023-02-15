const AbstractManager = require("./AbstractManager");

class ChallengeManager extends AbstractManager {
  constructor() {
    super({ table: "challenge" });
  }

  insert(challenge) {
    return this.connection.query(
      `insert into ${this.table} (title, description_challenge, points, tips, category_id) values (?, ?, ?, ?, ?, ?)`,
      [
        challenge.title,
        challenge.description_challenge,
        challenge.points,
        challenge.tips,
        challenge.category_id,
      ]
    );
  }

  update(challenge) {
    return this.connection.query(
      `update ${this.table} set title = ?, description_challenge = ?, points = ?, tips = ?, category_id = ? where id = ?`,
      [
        challenge.title,
        challenge.description_challenge,
        challenge.points,
        challenge.tips,
        challenge.category_id,
        challenge.id,
      ]
    );
  }
}

module.exports = ChallengeManager;
