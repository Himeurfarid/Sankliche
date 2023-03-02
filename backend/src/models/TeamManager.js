const AbstractManager = require("./AbstractManager");

class TeamManager extends AbstractManager {
  constructor() {
    super({ table: "team" });
  }

  insert(team) {
    return this.connection.query(
      `insert into ${this.table} (team_name) values (?)`,
      [team.team_name]
    );
  }

  update(team) {
    return this.connection.query(
      `update ${this.table} set team_name = ? where id = ?`,
      [team.team_name, team.id]
    );
  }
}

module.exports = TeamManager;
