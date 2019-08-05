const mongoose = require('mongoose'); //importing the mongoose
const Schema = mongoose.Schema; //creating an object schema of mongoose

//This is the Schema of chips
const SleeveTypeSchema = new Schema({
    
    Sleeve_id:{
        type: Number
    },
    Sleeve_name:{
        type: String
    }
    
});

//creating an object model of mongoose
const sleeves = mongoose.model('sleeves',SleeveTypeSchema);
module.exports = sleeves; 