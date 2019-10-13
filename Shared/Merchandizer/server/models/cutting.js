const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const CuttingSchema = new mongoose.Schema({

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
        }
    }]

})

CuttingSchema.plugin(AutoIncrement, { inc_field: 'cuttingId' });
module.exports = mongoose.model('cutting', CuttingSchema);