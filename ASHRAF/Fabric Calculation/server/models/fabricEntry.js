const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const FabricEntrySchema = new mongoose.Schema({
    mailDate: { //1
        type: Date,
        default: null
    },
    entryDate: { //2
        type: Date,
        default: null
    },
    refNo: { //3
        type: String,
        required: true
    },
    buyer_name: { //4
        type: String,
        default: null
       
    },
   
    style_code: { //5
        type: String,
        default: null
    },
    style_item_name: { //6
        type: String,
        default: null
    },
    style_sleeve_type: { //7
        type: String,
        default: null
    },
    size: {
        type: String, //8
        default: null
    },
    fabrics: {
        type: String, //9
        default: 0
    },
    chest: {
        type: String, //10
        default: null
    },
    length: {
        type: String, //11
        default: 0
    },
    sleeve: {
        type: String, //12
        default: 0
    },
    length_unit_of_measurement:{ //13
        type: String,
        default: 0
    },
    chest_unit_of_measurement:{ //14
        type: String,
        default: 0
    },
    sleeve_unit_of_measurement:{ //15
        type: String,
        default: 0
    },
    waste_percentage:{ //16
        type: Number,
        default: 0
    },
    hood:{ //17
        type: String,
        default: 0
    },
    bottom:{ //18
        type: String,
        default: 0
    },
    thigh:{ //19
        type: String,
        default: 0
    },
    pocket:{ //20
        type: String,
        default: 0
    },
    pocket_unit_of_measurement:{ //21
        type: String,
        default: 0
    },
    hood_unit_of_measurement:{ //22
        type: String,
        default: 0
    },
    bottom_unit_of_measurement:{ //23
        type: String,
        default: 0
    },
    thigh_unit_of_measurement:{ //24
        type: String,
        default: 0
    },
    fabric_weight:{ //25
        type: String,
        default: 0
    },


})
FabricEntrySchema.plugin(AutoIncrement, { inc_field: 'fabricEntry_id' }); //26
module.exports = mongoose.model('fabricentry', FabricEntrySchema);