const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const FabricArchieveSchema = new mongoose.Schema({

    fabricEntry_id:{
        type: String
    },
    mailDate: {
        type: Date
    },
    entryDate: {
        type: Date
    },
    refNo: {
        type: String
    },
    buyer_name: {
        type: String
    },
    style_code: {
        type: String
    },
    style_item_name: {
        type: String
    },
    style_sleeve_type: {
        type: String
    },
    size: {
        type: String
    },
    fabrics: {
        type: String
    },
    chest: {
        type: String
    },
    length: {
        type: String
    },
    sleeve: {
        type: String,
        default: 0
    },
    length_unit_of_measurement:{
        type: String
    },
    chest_unit_of_measurement:{
        type: String
    },
    sleeve_unit_of_measurement:{
        type: String
      
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
FabricArchieveSchema.plugin(AutoIncrement, { inc_field: 'track_Id' });
module.exports = mongoose.model('fabricarchieve', FabricArchieveSchema);