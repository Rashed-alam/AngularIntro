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
        chestUom:{type: String},
        lengthSize:{type:String},
        lengthUom:{type:String},
        sleeveSize:{type:String},
        sleeveUom:{type:String},
        hoodSize:{type:String},
        bottomSize:{type:String},
        thighSize:{type:String},
        pocketSize:{type:String},
        fabricWeight:{type:Number,default:0},
        currency:{type:String},
        fabricUnitPrice:{type:Number,default:0},
        fabricTotalPrice:{type:Number,default:0
        },
        rimPrice:{type:Number,default:0},
        cmPrice:{type:Number,default:0},
        trimPrice:{type:Number,default:0},
        printPrice:{type:Number,default:0},
        docPrice:{type:Number,default:0},
        perDozenPrice:{type:Number,default:0},
        perUnitPrice:{type:Number,default:0},
        remarks:{type:String,default:null}
    }]
})

FabricPriceEntrySchema.plugin(AutoIncrement, { inc_field: 'auto_id' }); 
module.exports = mongoose.model('fabric-price-entry', FabricPriceEntrySchema);