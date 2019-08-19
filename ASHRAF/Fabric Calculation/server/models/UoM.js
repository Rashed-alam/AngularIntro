const mongoose = require('mongoose'); //importing the mongoose
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema; //creating an object schema of mongoose

//This is the Schema of chips
const UoMSchema = new Schema({
    
   
    Uom_name:{
        type: String,
        required: true,
        unique: true
    }
    
});
UoMSchema.plugin(AutoIncrement, { inc_field: 'Uom_id' });
//creating an object model of mongoose
const UoM = mongoose.model('UoM',UoMSchema);

//exporting the schema as model 'chips'
module.exports = UoM; 