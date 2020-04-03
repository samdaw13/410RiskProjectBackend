const mongoose = require("mongoose");

const connection = "mongodb://mongo:27017/risk";

const connectDb = () => {
    return mongoose.connect(connection)
}

module.exports = connectDb;