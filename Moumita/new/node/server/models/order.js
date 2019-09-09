const mongoose = require('mongoose'); //importing the mongoose
const Schema = mongoose.Schema;

const OrderSchema = new Schema({

    refNo: {
        type: Number,
        required: "Fill up this block"
    },
    orderNo: {
        type: Number,
        required: "Fill up this block"
    },
    orQty:{
       type:Number
    },
    style: {
        type: String
    },
    knitting_type:{
        type: String
    },
    buyer:{
        type: String
        },
    ptarget:{
        type:Number
    },
    orderdate:{
        type: String
    
    },
    dDate:{
        type: String
    },
    leadDate:{
        type: String
    },
    description:{
        type: String
    }

 } )

 const Order = mongoose.model('order',OrderSchema);
module.exports = Order; 
