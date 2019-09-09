const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const FabricPriceEntrySchema = new mongoose.Schema({
    referenceId: {type: String, required: true,unique: true},
    mailDate:{type: String, default:null},
    entryDate:{type: String, default:null},
    buyerName:{type: String, default: null},
    size:{type: String},
    fabricPriceInformation:[{
        styleCode: {type: String},
        fabricType:{type:String},
        itemName:{type:String},
        wastePercentage:{type: String},
        chestSize:{type:String},
        lengthSize:{type:String},
        sleeveSize:{type:String},
        hoodSize:{type:String},
        bottomSize:{type:String},
        thighSize:{type:String},
        pocketSize:{type:String},
        fabricWeight:{type:String},
        currency:{type:String},
        fabricUnitPrice:{type:String},
        fabricTotalPrice:{type:String},
        rimPrice:{type:String},
        cmPrice:{type:String},
        trimPrice:{type:String},
        printPrice:{type:String},
        docPrice:{type:String},
        perDozenPrice:{type:String},
        perUnitPrice:{type:String}
    }]
})

FabricPriceEntrySchema.plugin(AutoIncrement, { inc_field: 'auto_id' }); 
module.exports = mongoose.model('fabric-price-entry', FabricPriceEntrySchema);