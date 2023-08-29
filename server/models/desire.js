const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 实例化模板
const DesireSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  descirption: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    default: 'exist'
  },
  date: {
    type: Date,
    default: Date.now
  }

  
})

module.exports = mongoose.model('desires', DesireSchema)