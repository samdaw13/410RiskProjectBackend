const result = require('dotenv').config()

if (result.error) {
    throw result.error
}
const env = process.env;
   
console.log(result.parsed)

exports.baseUrl = `${env.SERVER_PROTOCOL}://${env.SERVER_HOST}:${env.SERVER_PORT}`

exports.cookieSecret = env.COOKIE_SECRET || 'this is a cookie secret'

exports.db = {
    host: env.DB_HOST,
    name: env.DB_NAME,
    port: env.DB_PORT
}

const db = exports.db
Object.defineProperty(exports, 'dbConnString', {
    get () {
        return `mongodb://${db.host}:${db.port}/${db.name}` 
    }
})