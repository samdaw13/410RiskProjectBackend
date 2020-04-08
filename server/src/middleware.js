const logger = (req, res, next) => {
    console.log('You used ' + req.method);
    console.log('The path was: ' + req.path)
    next()
}

const message = (req, res, next) => {
    req.wow = 'wow'
    res.send(req.wow)
    next()
}

module.exports = {logger, message}