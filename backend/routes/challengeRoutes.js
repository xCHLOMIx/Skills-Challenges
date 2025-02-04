const challengeController = require("../controllers/challengeController");
const express = require("express");
const router = express.Router();
const authanticate = require("../middleware/authMiddleware");

router.get(
  "/",
  authanticate.authenticateUser,
  challengeController.getChallenges
);
router.post(
  "/",
  // authanticate.authenticateAdmin,
  challengeController.createChallenge
);
router.get(
  "/:id",
  // authanticate.authenticateUser,
  challengeController.getChallenge
);
router.put(
  "/:id",
  authanticate.authenticateAdmin,
  challengeController.updateChallenge
);
router.delete(
  "/:id",
  authanticate.authenticateAdmin,
  challengeController.deleteChallenge
);
module.exports = router;
