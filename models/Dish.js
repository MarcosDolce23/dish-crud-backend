const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let dishSchema = new Schema({
  esName: {
    type: String
  },
  enName: {
    type: String
  },
  esLabel: {
    type: String
  },
  enLabel: {
    type: String
  },
  cooktime: {
    type: Number
  }
}, {
    collection: 'dishes'
  })
  
module.exports = mongoose.model('Dish', dishSchema)