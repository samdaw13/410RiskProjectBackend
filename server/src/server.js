
// const connectDb = require("./db/connection");
// const passport = require('passport')
// const session = require('express-session');
// const mongoose = require('mongoose');
// const MongoStore = require('connect-mongo')(session)
// const flash = require('express-flash')
// const methodOverride = require('method-override')

var cors = require('cors');
const env = require('./env')

const express = require('express')
const Enforcer = require('openapi-enforcer-middleware')
const passport = require("./passport")
const path = require('path')
const mongoose = require('mongoose');

module.exports = function ({ hideWarnings = false } = {}) {
  // connect to mongoose
  const dbPromise = mongoose.connect(env.dbConnString, { useNewUrlParser: true, useUnifiedTopology: true })

  const app = express()
  app.use(express.json())
  app.use(cors())
  const controllerDirectory = path.resolve(__dirname, './controllers')
  const pathToOpenApiDoc = path.resolve(__dirname, '../openapi.yaml')

  // Create an enforcer middleware instance
  const enforcer = new Enforcer(pathToOpenApiDoc)

  // This middleware will handle explicit mock requests.
  enforcer.mocks(null, false).catch(err => {
    if (!hideWarnings) console.error(err)
  })

  // This middleware will handle requests for real data.
  enforcer.controllers(controllerDirectory).catch(err => {
    if (!hideWarnings) console.error(err)
  })

  // This middleware will automatically run mocking if the controller could not produce a response.
  enforcer.mocks(null, true).catch(() => {})

  // serve docs
  //app.use('/api/docs', express.static(path.resolve(__dirname, '..', 'docs')))


  // serve front end static files
  app.use(express.static(path.resolve(__dirname, '..', 'www')))

  // Add the enforcer middleware runner to the express app.
  app.use('/api', passport, enforcer.middleware())

  // handle HTML5 history routing
  const indexFilePath = path.resolve(__dirname, '..', 'www', 'index.html')
  app.use((req, res, next) => {
    const noFileExtension = req.path.split('/').pop().indexOf('.') === -1
    if (req.method === 'GET' && req.accepts('html') && noFileExtension) {
      res.sendFile(indexFilePath)
    } else {
      next()
    }
  })

  // Add error handling middleware
  app.use((err, req, res, next) => {
    // If the error was in the client's request then send back a detailed report
    if (err.statusCode >= 400 && err.statusCode < 500 && err.exception) {
      res.set('Content-Type', 'text/plain')
      res.status(err.statusCode)
      res.send(err.message)

    // If it's unsafe to send back detailed errors then send back limited error information
    } else {
      console.error(err.stack)
      res.sendStatus(err.statusCode || 500)
    }
  })

  

  

  const port = process.env.SERVER_PORT
  return new Promise((resolve, reject) => {
    const listener = app.listen(port, err => {
      if (err) return reject(err)
      dbPromise
        .then(() => {
          resolve(listener)
        })
        .catch(reject)
    })
  })

}



// const db = mongoose.connection
// const app = express()
// app.use(express.json())
// initializePassport(passport, 
//   username => axios.get('http://localhost:3000/players/' + username),
//   id => axios.get('http://localhost:3000/players/' + id),
// )

// app.set('view-engine', 'ejs')
// app.set('views', __dirname + '/views')

// const enforcer = Enforcer(__dirname + '/openapi.yaml')

// enforcer.controllers(__dirname + '/controllers')
//   .catch(console.error)

// app.use(enforcer.middleware())
// app.use(express.urlencoded({ extended: false }))
// app.use(flash())
// app.use(session({
//   secret: "secret",
//   resave: false,
//   saveUninitialized: true,
//   store: new MongoStore({ mongooseConnection: db  })
// }))
// app.use(passport.initialize())
// app.use(passport.session())
// app.use(methodOverride('_method'))




// // start the server listening
// app.listen(3000, function () {
//   console.log('Server listening on port 3000.');
// });
// connectDb().then(() => {
//   console.log("MongoDb connected");
// })


