const mongoose = require('mongoose'); //importing the mongoose
const Schema = mongoose.Schema; //creating an object schema of mongoose

//This is the Schema of chips
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

//creating an object model of mongoose
const Chips = mongoose.model('chips',ChipsSchema);


//exporting the schema as model 'chips'
module.exports = Chips; 