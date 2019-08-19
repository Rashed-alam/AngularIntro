const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);


const FabricTypeSchema = new mongoose.Schema({

    fabric_name: {
        type: String,
        required: true
    }

})
FabricTypeSchema.plugin(AutoIncrement, { inc_field: 'fabric_id' });
module.exports = mongoose.model('fabrictype', FabricTypeSchema);