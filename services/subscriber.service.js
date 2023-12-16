const SubcriberModel = require("../models/subcriber.model");

// get route service
const getAllSubcribers = async (req, res) => {
	try {
		const subscribers = await SubcriberModel.find();
		res.send(subscribers);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// post route service
const createSubscriber = async (req, res) => {
	const subscriber = new SubcriberModel({
		name: req.body.name,
		channels: req.body.channels,
	});

	try {
		const newSubscriber = await subscriber.save();
		res.status(201).json(newSubscriber);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// get(/:id) route service
const getOneSubscriber = (req, res) => {
	res.send(res.subscriber);
};

// patch route service
const updateSubscriber = async (req, res) => {
	if (req.body.name !== null) {
		res.subscriber.name = req.body.name;
	} 
	if (req.body.channels !== null) {
		res.subscriber.channels = req.body.channels;
	}
	try {
		const updatedSubscriber = await res.subscriber.save();
		res.json(updatedSubscriber);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// delete route service
const deleteSubscriber = async (req, res) => {
	try {
		await res.subscriber.deleteOne();
		res.json({ message: "subscriber deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	getAllSubcribers,
	createSubscriber,
	getOneSubscriber,
	deleteSubscriber,
	updateSubscriber,
};