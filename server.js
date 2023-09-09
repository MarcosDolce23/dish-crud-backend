const express = require("express");
const mongoose = require("mongoose");
const dbConfig = require('./database/db');

const { Dish } = require("./models/Dish");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    return res.json({ message: "Hello, World" });
});

app.get("/dishes", async (req, res) => {
    const allDishes = await Dish.find();
    return res.status(200).json(allDishes);
});

app.get("/dishes/:id", async (req, res) => {
    const { id } = req.params;
    const dish = await Dish.findById(id);
    return res.status(200).json(dish);
});

app.post("/dishes", async (req, res) => {
    const newDish = new Dish({ ...req.body });
    const insertedDish = await newDish.save();
    return res.status(201).json(insertedDish);
});

app.put("/dishes/:id", async (req, res) => {
    const { id } = req.params;
    await Dish.updateOne({ id }, req.body);
    const updatedDish = await Dish.findById(id);
    return res.status(200).json(updatedDish);
});

app.delete("/dishes/:id", async (req, res) => {
    const { id } = req.params;
    const deletedDish = await Dish.findByIdAndDelete(id);
    return res.status(200).json(deletedDish);
});

const start = async () => {
    try {
        await mongoose.connect(dbConfig.db);
        app.listen(4000, () => console.log("Server started on port 4000"));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();