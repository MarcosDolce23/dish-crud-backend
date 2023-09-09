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