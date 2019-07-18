const mongoose = require('mongoose'); //importing the mongoose
const Schema = mongoose.Schema; //creating an object schema of mongoose

//This is the Schema of chips
const UserSchema = new Schema({
    
    name:{
        type: String,
        required: [true,"Name Field is required"]
    },
    phone:{
        type: Number,
        required: [true,"Email Field is required"]
    },
    email: {
        type: String,
        required: [true,"Department Field is required"]
    },
    password:{
        type: String,
        required: [true,"Contact Field is required"]
    }
    
});

//creating an object model of mongoose
const User = mongoose.model('users',UserSchema);


//exporting the schema as model 'chips'
module.exports = User; 