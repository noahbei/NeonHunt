const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    
    currentPlayers: Number
})

const Room = mongoose.model('Room', roomSchema)

module.exports = Room