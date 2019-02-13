const mongoose = require('mongoose')
const spotSchema = new mongoose.Schema({
  spotId: { type: String, required: true },
  userspots: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' }],
  spotname: String,
  lat: String,
  lng: String
}, { timestamps: true })

const Spot = mongoose.model('Spot', spotSchema)
module.exports = Spot
