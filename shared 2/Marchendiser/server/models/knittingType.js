const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);


const KnittingTypeSchema = new mongoose.Schema({

    knittingType: {
        type: String,
        required: true
    }

})
KnittingTypeSchema.plugin(AutoIncrement, { inc_field: 'knitting_id' });
module.exports = mongoose.model('knittingType', KnittingTypeSchema);