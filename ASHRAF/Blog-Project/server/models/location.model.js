const mongoose = require('mongoose'); //importing the mongoose
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    location_name: {
        type: String,
        required: [true,"Name Field is required"],
        unique: true
    }
});
const Location = mongoose.model('location',LocationSchema);
module.exports = Location; 