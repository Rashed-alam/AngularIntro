const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const itemEntrySchema=new Schema({
    
    itemID:{
        type:Number,
    },
    itemCode:{
        type:String
    },
    itemName:{
        type:String
    },
    parent:{
        type:Number
    },
    TopParent:{
        type:Number
    },
    LR:{
        type:String
    },
    depth:{
        type:Number
    },
    createDate:{
        type:String
    },
    specification:{
        type:String
    },
    model:{
        type:String
    },
    countryOfOrigin:{
        type:String
    },
    importance:{
        type:String
    },
    parts:{
        type:String
    },
    manufacturer:{
        type:String
    },
    categorization:{
        type:String
    },
    maxConsump:{
        type:String
    },
    minConsump:{
        type:String
    },
    avgConsump:{
        type:String
    },
    leadTime:{
        type:String
    },
    reOrderLevel:{
        type:String
    },
    maxStockQty:{
        type:String
    },
    minStockQty:{
        type:String
    },
    stafyStockQty:{
        type:String
    },
    unitOfMeasurement:{
        type:String
    },
    currency:{
        type:String
    },
    avgCostPUnit:{
        type:String
    },
    orderingCostPUnit:{
        type:String
    },
    carryingCostPUnit:{
        type:String
    },
    lastPurCostPUnit:{
        type:String
    },
    QUnit:{
        type:String
    },
    CUnit:{
        type:String
    }
});

const Item=mongoose.model("item_entry",itemEntrySchema);

module.exports=Item;





