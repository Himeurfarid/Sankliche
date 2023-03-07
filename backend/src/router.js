const express = require("express");

const router = express.Router();

const { hashPassword } = require("./auth");
const challengeControllers = require("./controllers/challengeControllers");
const categoryControllers = require("./controllers/categoryControllers");
const usersControllers = require("./controllers/userControllers");

router.get("/challenges", challengeControllers.getChallenges);
router.get("/challenges/:id", challengeControllers.getOneChallenge);

router.get("/categories", categoryControllers.getCategory);
router.get("/categories/:id", categoryControllers.getOneCategory);

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.post("/api/login", usersControllers.login);
router.post("/users/", hashPassword, usersControllers.add);
router.put("/users/:id", usersControllers.edit);
router.delete("/users/:id", usersControllers.destroy);

module.exports = router;
