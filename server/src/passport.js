const env = require('./env')
const cookieParser = require('cookie-parser')
const express = require('express')
const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const session = require('express-session')
const MongoSession = require('connect-mongodb-session')(session)
const Players = require('./models/players')
const Games = require('./models/games')
const axios = require("axios")

const router = express.Router()
module.exports = router

// set up the mongo sesion store
const sessionStore = new MongoSession({
  uri: env.dbConnString,
  collection: 'sessions'
})
sessionStore.on('error', err => {
  console.error(err)
  process.exit(1)
})

//tell passport to use a local strategy and tell it how to validate a username and password
passport.use(new LocalStrategy({ usernameField: 'name' }, async function (name, password, done){
    const success = await Players.authenticate(name, password)
    if (success){
        return done(null, success)
    }
    return done(null, false)
}));

passport.serializeUser(function(user, done) {
    done(null, user.name)
})
passport.deserializeUser(function(id, done) { 
    Players.find({name:id}, function(err, user){
        done(err, id)
    })
})
// tell the router to check for sessions and handle authentication
router.use(express.urlencoded({ extended: true }))
router.use(cookieParser())
router.use(session({
    secret: env.cookieSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false
    },
    store: sessionStore
  }));
router.use(passport.initialize())
router.use(passport.session());

router.post('/register', async (req, res) => {
    let response = await Players.create(req.body.username, req.body.password, req.body.avatar)
    if(response == "Username already used."){
        res.status(204).send(response)
    }
    else {
        res.send(req.body.username)
    }
    
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        
        if (!user.name) {
            return res.status(203).send([user.name, "Cannot log in", info])
        }

        req.logIn(user, (err) => {
            if (err) return next(err)
            res.status(200).end()
        })
    })(req, res, next)
})

router.get('/logout', (req, res) => {
    
    req.logOut()
    res.status(204).end()
})

router.get("/user", (req, res) => {
    try{
       
        res.send(req.session.passport.user)
    }
    catch {
        res.status(204).end()
    }
    
})

router.get("/user/avatar", async (req, res) => {
    try{
        let response = await Players.get(req.session.passport.user)
        res.send(response.avatar)
    }
    catch {
        res.status(204).end()
    }
})

router.post("/user/avatar", async (req, res) => {
    try{
        let response = await Players.change(req.body.username, req.body.avatar)
        res.send(response.avatar)
    }
    catch {
        res.status(204).end()
    }
})

router.get("/user/search/:players", async (req, res) => {
    if(req.session.passport.user){
        let response = await Players.get(req.params.players)
        if(response){
            res.send({
                name: response.name,
                avatar: response.avatar
            })
        }
        else{
            console.log("User not round")
            res.status(202).end()
        }
        
    }
    else {
        res.send("User not logged in")
    }
})

router.post("/game", async(req, res) => {
    if(req.session.passport.user){
        let response = await Games.create(req.body.name, req.body.players, req.body.owner);
        res.send(response)
    }
})

router.get("/game", async(req, res) => {
    if(req.session.passport.user){
        let response = await Games.get(req.query.gameId)
        res.send(response)
    }
})

router.get("/games", async(req, res) => {
    if(req.session.passport.user){
        let response = await Games.getAll()
        console.log(response)
        res.send(response)
    }
})

router.post("/games/delete", async(req, res) => {
    if(req.session.passport.user){
        console.log("Deleteing game " + req.body.id)
        let response = await Games.delete(req.body.id)
        res.send(response)
    }
})