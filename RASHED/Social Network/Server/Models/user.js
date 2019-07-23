const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create an user Schema & model

const UserSchema = new Schema({
   
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    gender: {
        type: String,
    },
    contact: {
        type: Number,
    },
    password: {
        type: String,
    }
});

const UserInfo = mongoose.model('user', UserSchema);
module.exports = UserInfo;