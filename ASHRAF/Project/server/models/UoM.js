const mongoose = require('mongoose'); //importing the mongoose
const Schema = mongoose.Schema; //creating an object schema of mongoose

//This is the Schema of chips
const UoMSchema = new Schema({
    
    Uom_id:{
        type: Number
    },
    Uom_name:{
        type: String
    }
    
});

//creating an object model of mongoose
const UoM = mongoose.model('UoM',UoMSchema);


//exporting the schema as model 'chips'
module.exports = UoM; 