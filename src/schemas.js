const mongoose = require('mongoose')





var cardSchema = new mongoose.Schema({
    name: String,
    cardType: String,
    owner: Number
})

exports.Card = new mongoose.model('card', cardSchema);

var terrtorySchema = new mongoose.Schema({
    name: String,
    troopCount: Number,
    owner: Number
})

exports.Territory = new mongoose.model('territory', terrtorySchema);

