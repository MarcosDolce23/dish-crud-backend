let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Dish Model
let dishSchema = require("../models/Dish");

// CREATE Dish
router.post("/create-dish", (req, res, next) => {
dishSchema.create(req.body, (error, data) => {
	if (error) {
	return next(error);
	} else {
	console.log(data);
	res.json(data);
	}
});
});

// READ Students
router.get("/", (req, res) => {
dishSchema.find((error, data) => {
	if (error) {
	return next(error);
	} else {
	res.json(data);
	}
});
});

// UPDATE dish
router
.route("/update-dish/:id")
// Get Single Dish
.get((req, res) => {
	dishSchema.findById(
		req.params.id, (error, data) => {
	if (error) {
		return next(error);
	} else {
		res.json(data);
	}
	});
})

// Update Dish Data
.put((req, res, next) => {
	dishSchema.findByIdAndUpdate(
	req.params.id,
	{
		$set: req.body,
	},
	(error, data) => {
		if (error) {
		return next(error);
		console.log(error);
		} else {
		res.json(data);
		console.log("Dish updated successfully !");
		}
	}
	);
});

// Delete Dish
router.delete("/delete-dish/:id",
(req, res, next) => {
dishSchema.findByIdAndRemove(
	req.params.id, (error, data) => {
	if (error) {
	return next(error);
	} else {
	res.status(200).json({
		msg: data,
	});
	}
});
});

module.exports = router;
