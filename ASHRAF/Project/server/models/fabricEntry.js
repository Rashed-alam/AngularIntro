const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const FabricEntrySchema = new mongoose.Schema({
    mailDate: {
        type: Date,
        default: null,
        required: "Mail Date cannot be Empty"
    },
    entryDate: {
        type: Date,
        default: null,
        required: "Entry Date cannot be Empty"
    },
    refNo: {
        type: String,
        required: true,
        required: "Reference No. cannot be Empty"
    },
    buyer_name: {
        type: String,
        default: null,
        required: "Buyer Name cannot be Empty"
    },
    style_code: {
        type: String,
        default: null,
        required: "Style Code cannot be Empty"
    },
    style_item_name: {
        type: String,
        default: null,
        required: "Item Name cannot be Empty"
    },
    style_sleeve_type: {
        type: String,
        default: null,
        required: "Sleeve Type cannot be Empty"
    },
    size: {
        type: String,
        default: null,
        required: "Size cannot be Empty"
    },
    fabrics: {
        type: String,
        default: 0,
        required: "Fabric Type Date cannot be Empty"
    },
    chest: {
        type: String,
        default: null,
        required: "Chest Size cannot be Empty"
    },
    length: {
        type: String,
        default: 0,
        required: "Length size cannot be Empty"
    },
    sleeve: {
        type: String,
        default: 0,
        required: "Sleeve Type cannot be Empty"
    },
    length_unit_of_measurement:{
        type: String,
        default: 0,
        required: "Length Unit of Measurement cannot be Empty"
    },
    chest_unit_of_measurement:{
        type: String,
        default: 0,
        required: "Chest Unit of Measurement cannot be Empty"
    },
    sleeve_unit_of_measurement:{
        type: String,
        default: 0,
        required: "Sleeve Unit of Measurement cannot be Empty"
    }

})
FabricEntrySchema.plugin(AutoIncrement, { inc_field: 'fabricEntry_id' });
module.exports = mongoose.model('fabricentry', FabricEntrySchema);