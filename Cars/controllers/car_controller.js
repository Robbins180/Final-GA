const express = require('express')
const cars = express.Router()

const Car = require('../models/car.js')

cars.get('/', (req, res) => {
  res.send('index')
})
// Routes


// Create
cars.post('/', (req,res) => {
  Car.create(req.body, (error, createdCars) => {
    Car.find({}, (error, foundCars) => {
      res.json(foundCars)
    })
  })
})

// // Read
// cars.get('/', (req, res) => {
//   Car.find({}, (error, foundCars) => {
//     res.json(foundCars)
//   })
// })
//
// // Update
//
// cars.put('/:id', (req,res) => {
//   Car.findByIdAndUpdate(
//     req.params.id,
//     req.body
//     {new: true},
//     (error, updatedCar) => {
//       if (error) {
//         res.send(error)
//       } else {
//         Car.find({}, (error, foundCars) => {
//
//         })
//       }
//     }
//   )
// })
//
//
// // Delete
//
// cars.delete('/:id', (req, res) => {
//   Car.findByIdAndRemove(req.params.id, (error, deletedCar) => {
//     Car.find({}, (error, foundCars) => {
//       res.json(foundCars)
//     })
//   })
// })

module.exports = cars
