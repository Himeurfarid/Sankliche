const AbstractManager = require("./AbstractManager");

class ChallengeManager extends AbstractManager {
  constructor() {
    super({ table: "challenge" });
  }

  insert(challenge) {
    return this.connection.query(
      `insert into ${this.table} (title, level_challenge, description_challenge, points, time_challenge, tips, category_id) values (?, ?, ?, ?, ?, ?)`,
      [
        challenge.title,
        challenge.level_challenge,
        challenge.description_challenge,
        challenge.points,
        challenge.time_challenge,
        challenge.tips,
        challenge.category_id,
      ]
    );
  }

  update(challenge) {
    return this.connection.query(
      `update ${this.table} set title = ?, level_challenge = ?, description_challenge = ?, points = ?, tips = ?, category_id = ? where id = ?`,
      [
        challenge.title,
        challenge.level_challenge,
        challenge.description_challenge,
        challenge.points,
        challenge.time_challenge,
        challenge.tips,
        challenge.category_id,
        challenge.id,
      ]
    );
  }
}

module.exports = ChallengeManager;
