const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    suhu: {
        type: String
    },
    kelembapan: {
        type: String
    },
});

module.exports = mongoose.model('api', UserSchema);