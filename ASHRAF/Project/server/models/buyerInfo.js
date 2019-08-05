const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const BuyerInfoSchema = new mongoose.Schema({


    buyerCode: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        default: null
    },
    house: {
        type: String,
        default: null
    },
    road: {
        type: String,
        default: null
    },
    sector: {
        type: String,
        default: null
    },
    vatRegNo: {
        type: String,
        default: null
    },
    binNo: {
        type: Number,
        default: 0
    },
    eTin: {
        type: String,
        default: null
    },
    tds: {
        type: Number,
        default: 0
    },


    sisterConcern: {
        type: Number,
        default: 0
    },





})
BuyerInfoSchema.plugin(AutoIncrement, { inc_field: 'buyerId' });
module.exports = mongoose.model('BuyerInfo', BuyerInfoSchema);