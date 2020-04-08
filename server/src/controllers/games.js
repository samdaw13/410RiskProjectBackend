const gameSchema  = require('../models/games').Game
const playerSchema = require('../models/players').Player
const url = require('url')
const mongoose = require('mongoose')





exports.getGames = async function (req, res, next) {
    const games = await gameSchema.find();
    let response = []
    games.forEach(game => {
        console.log(game)
        let id = game._id.toHexString()
        let gameName = game.name
        let gamePlayers = []
        
        game.players.forEach(player => {
            let playerid = player._id.toHexString()
            let playername = player.name
            let playeravatar = player.avatar
            let playerpassword = player.password
            gamePlayers.push({
                id: playerid,
                name: playername,
                avatar: playeravatar,
                password: playerpassword
            })
        });
        response.push({
            id: id,
            name: gameName,
            players: gamePlayers
        })
    });
    
    res.send(response)
    
}


exports.postGame = async function (req, res, next) {
    
    let gameFound;
    var query = url.parse(req.url, true)
    var queryData = query.query
    var gamename = queryData.gameName
    var game = gameSchema({
        name: gamename
    })
    await game.save()
    console.log("Game saved")
    gameFound = await gameSchema.findOne({name: gamename})
    console.log("Saved game: " + gameFound)
    res.send(
        {
            "id": gameFound._id.toHexString(),
            "name": gameFound.name,
            "players": gameFound.players
        }
    )
    
}

exports.deleteGame = async function(req, res, next) {
    var urlPath = url.parse(req.url).pathname;
    var splitUrl = urlPath.split('/')
    await gameSchema.deleteOne(
        { _id: splitUrl[2] }
    )
    res.send("OK")
}

exports.getGame = function (req, res, next) {
    res.send(
        {
            "gameID": 1,
            "name": "string",
            "players": 
            [
                {
                    "id": 1,
                    "name": "string",
                    "avatar": "string",
                    "password": "string"
                }
            ]
        }
    )
    
}

exports.getGamesPlayers = function (req, res, next) {
    res.send(
        [
            {
                "id": 1,
                "name": "string",
                "avatar": "string",
                "password": "string"
            }
        ]
    )
}

exports.addPlayerToGame = async function (req, res, next) {
    var urlPath = url.parse(req.url).pathname;
    var splitUrl = urlPath.split('/')
    console.log(splitUrl)
    var player = await playerSchema.findById(splitUrl[4])
    console.log(player)
    await gameSchema.updateOne(
        { _id: splitUrl[2] },
        { $push: {players: player }}
    )
    res.send({
        "id": player._id.toHexString(),
        "name": player.name,
        "avatar": player.avatar,
        "password": player.password
    })
}

exports.addCardToPlayer = function (req, res, next) {
    res.send({
        "id": 1,
        "name": "string",
        "cardType": "string",
        "owner": 0
      })
}

exports.removeCardFromPlayer = function (req, res, next) {
    res.send({
        "id": 1,
        "name": "string",
        "avatar": "string",
        "password": "string"
      })
}

exports.addTerritoryToPlayer = function (req, res, next) {
    res.send({
        "id": 1,
        "name": "string",
        "troopCont": 1,
        "owner": 1
      })
}

exports.removeTerritoryFromPlayer = function (req, res, next) {
    res.send({
        "id": 1,
        "name": "string",
        "avatar": "string",
        "password": "string"
      })
}


