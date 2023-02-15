const models = require("../models");

const getChallenges = (req, res) => {
  models.challenge
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const getOneChallenge = (req, res) => {
  models.challenge
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
const editChallenge = (req, res) => {
  const challenge = req.body;

  // TODO validations (length, format...)

  challenge.id = parseInt(req.params.id, 10);

  models.challenge
    .update(challenge)
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
const addChallenge = (req, res) => {
  const challenge = req.body;

  // TODO validations (length, format...)

  models.challenge
    .insert(challenge)
    .then(([result]) => {
      res.location(`/challenges/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroyChallenge = (req, res) => {
  models.challenge
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
  getChallenges,
  getOneChallenge,
  editChallenge,
  addChallenge,
  destroyChallenge,
};
