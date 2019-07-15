const mongoose = require('mongoose'); //importing the mongoose

const Schema = mongoose.Schema; //creating an object schema of mongoose

const ChipsSchema = new Schema({
    name:{
        type: String,
        required: [true,"Name Field is required"]
    },
    brand:{
        type: String
    },
    available:{
        type: Boolean,
        default: false
    }
    
});


const Chips = mongoose.model('chips',ChipsSchema);

module.exports = Chips; 