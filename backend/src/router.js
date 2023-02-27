const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const challengeControllers = require("./controllers/challengeControllers");

router.get("/challenges", challengeControllers.getChallenges);
router.get("/challenges/:id", challengeControllers.getOneChallenge);

const categoryControllers = require("./controllers/categoryControllers");

router.get("/categories", categoryControllers.getCategory);
router.get("/categories/:id", categoryControllers.getOneCategory);

const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.getUsers);
router.get("/users/:id", userControllers.getOneUser);

router.post("users", userControllers.addUser);
router.post("users/:id", userControllers.addUser);

router.put("users", userControllers.editUser);
router.put("users/:id", userControllers.editUser);

module.exports = router;
