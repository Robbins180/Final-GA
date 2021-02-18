const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  brand: String,
  model: String,
  price: String,
  year: String,
  color: String,
  image: String
})

const Car = mongoose.model('Car', carSchema)

module.exports = Car
