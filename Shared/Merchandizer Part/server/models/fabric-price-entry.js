const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const FabricPriceEntrySchema = new mongoose.Schema({
    referenceId: {type: String, required: true,unique: true},
    mailDate:{type: String, default:null},
    entryDate:{type: String, default:null},
    buyerName:{type: String, default: null},
    size:{type: String},
    fabricPriceInformation:[{
        styleCode: {type: String, default:null},
        fabricType:{type:String, default:null},
        itemName:{type:String, default:null},
        wastePercentage:{type: String, default:null},
        chestSize:{type:String, default:null},
        chestUom:{type: String, default:null},
        lengthSize:{type:String, default:null},
        lengthUom:{type:String, default:null},
        sleeveSize:{type:String, default:null},
        sleeveUom:{type:String, default:null},
        hoodSize:{type:String, default:null},
        bottomSize:{type:String, default:null},
        thighSize:{type:String, default:null},
        pocketSize:{type:String, default:null},
        fabricWeight:{type:String, default:null},
        currency:{type:String, default:null},
        fabricUnitPrice:{type:String, default:null},
        fabricTotalPrice:{type:String, default:null},
        rimPrice:{type:String, default:null},
        cmPrice:{type:String, default:null},
        trimPrice:{type:String, default:null},
        printPrice:{type:String, default:null},
        docPrice:{type:String, default:null},
        perDozenPrice:{type:String, default:null},
        perUnitPrice:{type:String, default:null}
    }]
})

FabricPriceEntrySchema.plugin(AutoIncrement, { inc_field: 'auto_id' }); 
module.exports = mongoose.model('fabric-price-entry', FabricPriceEntrySchema);