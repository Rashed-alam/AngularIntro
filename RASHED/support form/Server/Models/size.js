const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const SIZESchema=new Schema({
    size_name:{
        type: String,
        required: true,
        unique: true
    }
})
SIZESchema.plugin(AutoIncrement, { inc_field: 'size_id' });
//creating an object model of mongoose
const Size = mongoose.model('size',SIZESchema);

//exporting the schema as model 'chips'
module.exports = Size;