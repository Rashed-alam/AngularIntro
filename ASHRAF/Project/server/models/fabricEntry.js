const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const FabricEntrySchema = new mongoose.Schema({
    mailDate: {
        type: Date,
        required: true
    },
    entryDate: {
        type: Date,
        required: true
    },
    refNo: {
        type: String,
        required: true
    },
    buyer_name: {
        type: String,
        default: null
    },
    style_code: {
        type: String,
        default: null
    },
    style_item_name: {
        type: String,
        default: null
    },
    style_sleeve_type: {
        type: String,
        default: null
    },
    size: {
        type: String,
        default: null
    },
    fabrics: {
        type: String,
        default: 0
    },
    chest: {
        type: String,
        default: null
    },
    length: {
        type: String,
        default: 0
    },
    sleeve: {
        type: String,
        default: 0
    },


})
FabricEntrySchema.plugin(AutoIncrement, { inc_field: 'fabricEntry_id' });
module.exports = mongoose.model('fabricentry', FabricEntrySchema);