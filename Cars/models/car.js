const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  brand: String,
  model: String,
  price: Intiger,
  year: String,
  color: String,
  image: { type: String, default: ''}
})

const Car = mongoose.model('Car', carSchema)

module.exports = Car
