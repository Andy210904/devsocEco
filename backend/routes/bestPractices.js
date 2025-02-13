const express = require("express");
const router = express.Router();
// Routes setup
const recommendationController = require("../controllers/recommendations");
router.get("/", recommendationController.getRecommendations);
router.post(
  "/implement/:recommendationId",
  recommendationController.markImplemented
);
router.get(
  "/history",
  recommendationController.getImplementationHistory
);

module.exports = router;
