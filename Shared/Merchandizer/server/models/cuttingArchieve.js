const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const CuttingArcheive = new mongoose.Schema({

    referenceId: {
        type: String,

    },
    styleCode: {
        type: String,

    },
    remarks: {
        type: String,
        default: null
    },
    cutting: [{
        size: {
            type: Number,
            default: null

        },
        color: {
            type: String,
            default: null
        },
        weight: {
            type: Number,
            default: null
        },
        row: {
            type: Number,
            default: null
        },
        col: {
            type: Number,
            default: null
        }

    }],
    changeUser: {
        type: String,
        default: null

    },
    changeDate: {
        type: Date,
        default: null

    },
    changeEvent: {
        type: String,
        default: null
    }

})

CuttingArcheive.plugin(AutoIncrement, { inc_field: 'trackId' });
module.exports = mongoose.model('cuttingArchieve', CuttingArcheive);