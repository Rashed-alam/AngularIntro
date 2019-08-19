
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const sizeArchiveSchema=new Schema({
    size_name:{
        type: String,     
    },
    changeUser: {
        type: String
        
    },
    changeDate: {
        type: String
      
    },
    event: {
        type: String
    }
})
sizeArchiveSchema.plugin(AutoIncrement, { inc_field: 'track_id' });
//creating an object model of mongoose
module.exports  = mongoose.model('size_archive',sizeArchiveSchema);

//exporting the schema as model 'chips'
