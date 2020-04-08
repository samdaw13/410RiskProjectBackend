const env = require('./env')
const cookieParser = require('cookie-parser')
const express = require('express')
const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const session = require('express-session')
const MongoSession = require('connect-mongodb-session')(session)
const Players = require('./models/players')

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
    let response = await Players.create(req.body.username, req.body.password)
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
    res.send(req.session.passport.user)
    
})