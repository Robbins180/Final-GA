// Dependencies

const express = require('express')
const mognoose = require('mongoose')
const app = express()


// Configuration

const PORT = process.env.PORT
require('dotenv').config()


// MiddleWare

app.use(express.json())

// Controller links

const carController = require('./controllers/car_controller.js')
app.use('/cars', carController)

// Mongoose

const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

// Error / success

mongoose.connection.on('error', err =>
  console.log(
    err.message,
    ' is Mongod not running?/Problem with Atlas Connection?'
  )
)
mongoose.connection.on('connected', () =>
  console.log('mongo connected: ', MONGODB_URI)
)
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))


// Listener

app.listen(PORT, () => {
  console.log(`listening on port${PORT}`);
})
