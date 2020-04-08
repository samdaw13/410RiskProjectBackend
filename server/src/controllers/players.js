const Player = require('../models/players')

const { baseUrl } = require('../env')

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
    console.log(response)
    res.send(response)
}

exports.createPlayer = async function (req, res, next) {
    let username = req.body.username
    let password = req.body.password
    
    try{
        await Player.create(username, password)
        res.status(201)
        res.set('location', baseUrl + '/api/players')
    }
    catch (err) {
        if (err.code === 'EUEXIST') {
            res.status(400).send('Email already registered')
        } 
        else {
            console.log(err)
            res.sendStatus(500)
        }
    }
}

exports.loginPlayer = function (req, res, next) {
    req.login(req, res, err => {
        if (err) return next(err)
        res.status(200).end()
    })
}

exports.logoutPlayer = function (req, res, next) {
    res.send('OK')
}

exports.listPlayer = async function (req, res, next) {
    
    res.send('ok')

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
