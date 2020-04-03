const mongoose = require("mongoose");

var playerSchema = new mongoose.Schema({
    name: String,
    avatar: String,
    password: String
})

exports.Player = new mongoose.model('player', playerSchema);
exports.playerSchema;