const mongoose = require('mongoose'); //importing the mongoose
const Schema = mongoose.Schema; //creating an object schema of mongoose

//This is the Schema of chips
const PostSchema = new Schema({
    
    location:{
        type: String,
        required: [true,"Name Field is required"]
    },
    privacy:{
        type: String,
        required: [true,"Email Field is required"]
    },
    blogger_name: {
        type: String,
        required: [true,"Department Field is required"]
    },
    contact:{
        type: Number,
        required: [true,"Contact Field is required"]
    }
    
});

//creating an object model of mongoose
const Posts = mongoose.model('posts',PostSchema);


//exporting the schema as model 'chips'
module.exports = Posts; 