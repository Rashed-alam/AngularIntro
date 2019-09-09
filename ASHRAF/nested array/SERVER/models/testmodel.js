const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    info: [{
        phone: String,
        address: String
    }]
});



module.exports = mongoose.model('user', UserSchema);