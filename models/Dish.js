const mongoose = require('mongoose');

let DishSchema = new mongoose.Schema({
  esName: {
    type: String,
  },
  enName: {
    type: String,
  },
  esLabel: {
    type: String,
  },
  enLabel: {
    type: String,
  },
  vegan: {
    type: Boolean,
  },
  cookTime: {
    type: Number,
  }
});

const Dish = mongoose.model("Dish", DishSchema);

module.exports = { Dish }