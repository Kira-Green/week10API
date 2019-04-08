const express = require("express");
const Player = require("../models/players");

const router = express.Router();

/* GET users */
router.get("/", async (req, res, next) => {
	try {
		const players = await Player.find({});
		res.json({ payload: { players } });
	} catch (err) {
		res.status(500).json({
			message: "Error finding players in database",
			error: err
		});
	}
});
/* GET users listing. */

module.exports = router;
