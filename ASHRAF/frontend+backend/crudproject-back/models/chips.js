const mongoose = require('mongoose'); //importing the mongoose
const Schema = mongoose.Schema; //creating an object schema of mongoose

//This is the Schema of chips
const ChipsSchema = new Schema({
    
    fullname:{
        type: String,
        required: [true,"Name Field is required"]
    },
    email:{
        type: String,
        required: [true,"Email Field is required"]
    },
    department: {
        type: String,
        required: [true,"Department Field is required"]
    },
    contact:{
        type: Number,
        required: [true,"Contact Field is required"]
    },
    address:{
        type: String,
        required: [true,"Address Field is required"]
    }
    
});

//creating an object model of mongoose
const Chips = mongoose.model('chips',ChipsSchema);


//exporting the schema as model 'chips'
module.exports = Chips; 