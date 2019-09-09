const mongoose = require('mongoose'); //importing the mongoose
const Schema = mongoose.Schema;

const KnittingSchema = new Schema({

    refNo: {
        type: Number,
        required: "Fill up this block"
    },
    orderNo: {
        type: Number,
        required: "Fill up this block"
    },
    style: {
        type: String
    },
    buyer:{
        type: String,
        required: "input buyer name"
    },
    machineName:{
        type: String
    },
    operatorName:{
        type: String
    },
    date:{
        type: String
    },
    shift:{
        type: String
    },
    ptarget:{
        type:Number,
    
    },
    production:{
        type: Number,
    
    },
    remarks:{
        type:String
    },
    roll:{
        type:Number
    },
    balance:{
        type:Number
    },
    extra:{
        type:Number
    }


});
const Knitting = mongoose.model('knitting',KnittingSchema);
module.exports = Knitting; 