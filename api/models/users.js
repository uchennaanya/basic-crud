const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    "names": {
        type: String,
        required: true,
    },
    "email": {
        type: String,
        required: true,
    },
    "country": {
        type: String,
        required: true
    },
    "phone": {
        type: Number,
        required: true
    },
    "created_at": {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("user", userSchema)