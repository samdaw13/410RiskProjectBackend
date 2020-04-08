require('./server')()
  .then(() => {
    console.log('Server ready and listening on port: ' + process.env.SERVER_PORT)
  })
  .catch(err => {
    console.error(err.stack)
    console.log("It didn't work")
    process.exit(1)
  })