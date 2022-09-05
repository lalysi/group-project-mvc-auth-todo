const mongoose = require('mongoose')
const { stringify } = require('nodemon/lib/utils')

const EntrySchema = new mongoose.Schema({
  entry: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  numOfDrinks: {
    type: Number,
    required: false,
  },
  mood: {
    type: Number,
    required: false,
  },
  exercise: {
    type: Boolean,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('Entry', EntrySchema)
