const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create geo location schema
const GeoSchema = new Schema({
    type: {                 // here type is a name
        default:'point',    
        type: String        //this type is data type of 'type'
    },
    coordinates: {
        type: [Number],     //array of number
        index: "2dsphere"
    }
});

//create ninja Schema and model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema     //Nested Schema
});

const Ninja = mongoose.model('ninja',NinjaSchema); //creating ninja model

//exporting the model
module.exports = Ninja;