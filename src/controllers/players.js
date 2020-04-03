const playerSchema = require('../models/players').Player
const url = require('url')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

exports.listPlayers = async function (req, res, next) {
    const players = await playerSchema.find();
    let response = []
    players.forEach(player => {
        let id = player._id.toHexString()
        let playerName = player.name
        let playerAvatar = player.avatar
        let playerPassword = player.password
        response.push({
            _id: id,
            name: playerName,
            avatar: playerAvatar,
            password: playerPassword
        })
    });
    res.send(response)
}

exports.createPlayer = async function (req, res, next) {
    let username = req.body.username
    let hashedPass = await bcrypt.hash(req.body.password, 10)
    let newPlayer = playerSchema({
        name: username,
        avatar: "",
        password: hashedPass
    })
    await newPlayer.save()
    res.send({
        id: newPlayer._id,
        name: newPlayer.name,
        avatar: newPlayer.avatar,
        password: newPlayer.password
    })
}

exports.loginPlayer = function (req, res, next) {
    res.send('OK')
}

exports.logoutPlayer = function (req, res, next) {
    res.send('OK')
}

exports.listPlayer = async function (req, res, next) {
    
    var urlPath = url.parse(req.url).pathname;
    var splitUrl = urlPath.split('/')
    var player = await playerSchema.findOne({name: splitUrl[2]})
    if (player == null){
        var player = await playerSchema.findById({_id: splitUrl[2]})
    }
    var response = {
        _id: player._id.toHexString(),
        name: player.name,
        avatar: player.avatar,
        password: player.password
    }
    res.send(response)

}

exports.editPlayer = function (req, res, next) {
    res.send('OK')
}

exports.deletePlayer = function (req, res, next) {
    res.send('OK')
}

exports.listPlayerGames = function (req, res, next) {
    res.send('OK')
}

exports.listPlayerGame = function (req, res, next) {
    res.send('OK')
}

exports.saveGame = function (req, res, next) {
    res.send('OK')
}

exports.deleteGame = function (req, res, next) {
    res.send('OK')
}
