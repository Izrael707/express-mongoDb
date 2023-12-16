const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    minlength: 8
  },
  dateSaved: {
    type: Date,
    required: true,
    default: Date.now()
  }
})

module.exports = mongoose.model('Contact', contactSchema)