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

module.exports = router;
