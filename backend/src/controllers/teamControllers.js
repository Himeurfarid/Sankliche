const models = require("../models");

const getTeams = (req, res) => {
  models.team
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const getOneTeam = (req, res) => {
  models.team
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const editTeam = (req, res) => {
  const team = req.body;

  // TODO validations (length, format...)

  team.id = parseInt(req.params.id, 10);

  models.team
    .update(team)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const addTeam = (req, res) => {
  const team = req.body;

  // TODO validations (length, format...)

  models.team
    .insert(team)
    .then(([result]) => {
      res.location(`/teams/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroyTeam = (req, res) => {
  models.team
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getTeams,
  getOneTeam,
  editTeam,
  addTeam,
  destroyTeam,
};
