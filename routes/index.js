const express = require("express");

const router = express.Router();

const {
	getAllContacts,
	createContact,
	getOneContact,
	updateContact,
	deleteContact,
} = require("../services/contacts.service");
const { getContact } = require("../middlewares");

// getting all subcribers
router.get("/", getAllContacts);
// getting one subcriber
router.get("/:id", getContact, getOneContact);
// creating one subcriber
router.post("/", createContact);
// updating one subcriber
router.patch("/:id", getContact, updateContact);
// deleting one subcriber
router.delete("/:id", getContact, deleteContact);

module.exports = router;
