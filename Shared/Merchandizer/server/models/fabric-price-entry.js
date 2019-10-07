const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const FabricPriceEntrySchema = new mongoose.Schema({
    referenceId: { type: String, required: true, unique: true },
    mailDate: { type: String, default: null },
    entryDate: { type: String, default: null },
    buyerName: { type: String, default: null },
    buyerCode: { type: Number, default: null },
    size: { type: String },
    season: { type: String },
    shipmentDone: { type: Boolean, default: false },
    fabricPriceInformation: [{
        styleCode: { type: String, default: null },
        fabricType: { type: Number, default: null },
        itemName: { type: String, default: null },
        wastePercentage: { type: Number, default: null },
        chestSize: { type: Number, default: null },
        lengthSize: { type: Number, default: null },
        sleeveSize: { type: Number, default: null },
        unitOfMeasurement: { type: String, default: null },
        hoodSize: { type: Number, default: null },
        bottomSize: { type: Number, default: null },
        thighSize: { type: Number, default: null },
        pocketSize: { type: Number, default: null },
        fabricWeight: { type: Number, default: null },
        currency: { type: String, default: null },
        fabricUnitPrice: { type: Number, default: null },
        fabricTotalPrice: { type: Number, default: null },
        rimPrice: { type: Number, default: null },
        cmPrice: { type: Number, default: null },
        trimPrice: { type: Number, default: null },
        printPrice: { type: Number, default: null },
        docPrice: { type: Number, default: null },
        perDozenPrice: { type: Number, default: null },
        perUnitPrice: { type: Number, default: null },
        Dremarks: { type: String, default: null },
        Mremarks: { type: String, default: null },
        approval: { type: Boolean, default: false }
    }]
})

FabricPriceEntrySchema.plugin(AutoIncrement, { inc_field: 'auto_id' });
module.exports = mongoose.model('fabric-price-entry', FabricPriceEntrySchema);