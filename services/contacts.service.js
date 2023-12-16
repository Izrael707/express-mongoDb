const ContactModel = require("../models/contacts.model");

// get route service
const getAllContacts = async (req, res) => {
	try {
		const contacts = await ContactModel.find();
		res.send(contacts);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// post route service
const createContact = async (req, res) => {
	const contact = new ContactModel({
		name: req.body.name,
		phone: req.body.phone,
	});

	try {
		const newContact = await contact.save();
		res.status(201).json(newContact);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// get(/:id) route service
const getOneContact = (req, res) => {
	res.send(res.contact);
};

// patch route service
const updateContact = async (req, res) => {
	const updateData = req.body;

	try {
		let id = res.contact.id;
		await ContactModel.updateOne({ _id: id }, { $set: updateData });
		res.json({ message: "document updated successfully" });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// delete route service
const deleteContact = async (req, res) => {
	try {
		await res.contact.deleteOne();
		res.json({ message: "contact deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	getAllContacts,
	createContact,
	getOneContact,
	updateContact,
	deleteContact,
};
