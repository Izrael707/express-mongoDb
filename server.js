require("dotenv").config();
const express = require("express");
const app = express();
const contactsRouter = require("./routes");

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.listen(3000, () =>
	console.log("server listening on port 3000, http://localhost:3000")
);
