const localtStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserByName, getUserById){
    const authenticateUser = async (username, password, done) => {
        const user = await getUserByName(username)
        if(user == null){
            return done(null, false, { message: "No user with that name"})
        }
        try {
            
            if(await bcrypt.compare(password, user.data.password)){
                return done(null, user)
            }
            else {
                return done(null, false, { message: "Password Incorrect" })
            }
        }
        catch (e){
            console.log("AN ERROR HAS HAPPENED!!!")
            return done(e)
        }
    }
    passport.use(new localtStrategy({ usernameField: 'username'}, authenticateUser))
    
    passport.serializeUser((user, done) => done(null, user.data._id))
    passport.deserializeUser((id, done) => { 
        return done(null, getUserById(id))
     })
}


module.exports = initialize