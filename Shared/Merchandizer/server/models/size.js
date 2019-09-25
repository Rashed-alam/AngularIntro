const mongoose = require('mongoose'); //importing the mongoose
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema; //creating an object schema of mongoose

//This is the Schema of chips
const SizeSchema = new Schema({
    
   
    size_name:{
        type: String,
        required: true,
        unique: true
    }
    
});
SizeSchema.plugin(AutoIncrement, { inc_field: 'size_id' });
//creating an object model of mongoose
const Size = mongoose.model('size',SizeSchema);

//exporting the schema as model 'chips'
module.exports = Size; 