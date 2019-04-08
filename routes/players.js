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

router.get("/:id", async (req, res, next) => {
	try {
		const player = await Player.findOne({ID : req.params.id});
		res.json({ payload: { player } });
	} catch (err) {
		res.status(500).json({
			message: "Error finding player in database",
			error: err
		});
	}
});

router.post("/", async (req, res, next) => {
	try {
		const player = new Player(req.body)
		await player.save();
		res.json({ payload: { player} });
	} catch (err) {
		res.status(500).json({
			message: "Error saving player to database",
			error: err
		});
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
		const player = await Player.deleteOne({ID : req.params.id});
		res.json({ message: "player deleted" });
		
	} catch (err) {
		res.status(500).json({
			message: "Error deleting player from database",
			error: err
		});
	}
});

router.patch("/:id", async (req, res, next) => {
	try {
		const player = await Player.findOneAndUpdate({ID : req.params.id});
		res.json({ payload: { player } });
	} catch (err) {
		res.status(500).json({
			message: "Error updating player in database",
			error: err
		});
	}
});



module.exports = router;
