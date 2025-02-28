const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: String,
    email : String,
    age : Number
})

const UserModel = mongoose.model("New Collection", UserSchema)
module.exports = UserModel