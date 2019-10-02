const mongoose = require('mongoose'); //importing the mongoose
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema; //creating an object schema of mongoose

//This is the Schema of chips
const SleeveTypeSchema = new Schema({
    
    Sleeve_name:{
        type: String,
        required: true,
        unique: true
    }
    
});
SleeveTypeSchema.plugin(AutoIncrement, { inc_field: 'Sleeve_id' });
//creating an object model of mongoose
const sleeves = mongoose.model('sleeves',SleeveTypeSchema);
module.exports = sleeves; 