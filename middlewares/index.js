const ContactModel = require("../models/contacts.model");

const getContact = async (req, res, next) => {
	let contact;
	try {
		contact = await ContactModel.findById(req.params.id);
		if (contact === null) {
			return res.status(404).json({ message: "cannot find contact" });
		}
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}

	res.contact = contact;
	next();
};

module.exports = {
	getContact,
};
