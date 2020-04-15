const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

var playerSchema = new mongoose.Schema({
    name: String,
    avatar: String,
    password: String
})


playerSchema.statics.authenticate = async function (name, password) {
    const users = await Players.find({ name })
    if (!users.length){
        return false
    }
    const user = users[0]
    const match = await bcrypt.compare(password, user.password)
    if (match){
        return user
    }
    
    return {success: false, user: ""}
}

playerSchema.statics.create = async function (username, password, avatar) {
    const users = await Players.find({ name:username })
    
    if (users.length) {
        return "Username already used."
    }
    const player = new Players({
        name: username,
        password: await bcrypt.hash(password, 10),
        avatar: avatar
    })
    return player.save()
}

playerSchema.statics.get = async function (username) {
    const users = await Players.find({ name:username })
    if(users.length) {
        return users[0]
    }
}

playerSchema.statics.change = async function(username, avatar){
    const users = await Players.findOneAndUpdate(
        { 
            name:username 
        }, 
        {
            avatar:avatar
        },
        {
            new: true,
            useFindAndModify: false
        }
    )
    return users
}

const Players = mongoose.model('Players', playerSchema);
module.exports = Players;