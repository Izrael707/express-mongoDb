const express = require("express");

const router = express.Router();

const {
	getAllSubcribers,
	createSubscriber,
	getOneSubscriber,
	deleteSubscriber,
  updateSubscriber
} = require("../services/subscriber.service");
const { getSubscriber } = require("../middlewares");

// getting all subcribers
router.get("/", getAllSubcribers);
// getting one subcriber
router.get("/:id", getSubscriber, getOneSubscriber);
// creating one subcriber
router.post("/", createSubscriber);
// updating one subcriber
router.patch("/:id", getSubscriber, updateSubscriber);
// deleting one subcriber
router.delete("/:id", getSubscriber, deleteSubscriber);

module.exports = router;
