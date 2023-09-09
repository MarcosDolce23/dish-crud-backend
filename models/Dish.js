const mongoose = require('mongoose');

let DishSchema = new mongoose.Schema({
  esName: {
    type: String,
    required: true,
  },
  enName: {
    type: String,
    required: true,
  },
  esLabel: {
    type: String,
    required: true,
  },
  enLabel: {
    type: String,
    required: true
  },
  cooktime: {
    type: Number,
    required:  true
  }
});

const Dish = mongoose.model("Dish", DishSchema);

module.exports = { Dish }