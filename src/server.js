var cors = require('cors');
const express = require('express')
const Enforcer = require('openapi-enforcer-middleware')
const axios = require('axios');
const connectDb = require("./db/connection");
const passport = require('passport')
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const methodOverride = require('method-override')
const initializePassport = require("./passport-config")
const db = mongoose.connection
const app = express()
app.use(express.json())
app.use(cors())
initializePassport(passport, 
  username => axios.get('http://localhost:3000/players/' + username),
  id => axios.get('http://localhost:3000/players/' + id),
)

app.set('view-engine', 'ejs')
app.set('views', __dirname + '/views')

const enforcer = Enforcer(__dirname + '/openapi.yaml')

enforcer.controllers(__dirname + '/controllers')
  .catch(console.error)

app.use(enforcer.middleware())
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: db  })
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))


app.get('/', checkAuthenticated, (req, res) => {
  res.render('index.ejs');
  console.log(res)
})

app.get('/login', checkNotAuthenticated, (req, res) => {
  console.log("Logged in")
  console.log(res)
  res.render('login.ejs');
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs');
})

app.post('/register', checkNotAuthenticated, (req, res) => {
  axios.post('http://localhost:3000/players', {
    'username': req.body.username,
    'password': req.body.password
  })
  res.redirect('/login')
})

app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

// start the server listening
app.listen(3000, function () {
  console.log('Server listening on port 3000.');
});
connectDb().then(() => {
  console.log("MongoDb connected");
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next){
  if(req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}
