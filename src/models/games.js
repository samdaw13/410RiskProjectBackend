const mongoose = require("mongoose");
const playerSchema = require("./players").playerSchema

var gameSchema = new mongoose.Schema({
    name: String,
    players: {
        type: [playerSchema]
    }
})

exports.Game = new mongoose.model('game', gameSchema);