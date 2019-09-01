const mongoose = require('mongoose'); //importing the mongoose
const Schema = mongoose.Schema;

const KnittingSchema = new Schema({

    refNo: {
        type: Number
    },
    orderNo: {
        type: Number
    },
    style: {
        type: String
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
    capacity:{
        type:Number
    },
    production:{
        type: Number
    },
    remarks:{
        type:String
    },
    roll:{
        type:Number
    },
    balance:{
        type:Number
    }


});
const Knitting = mongoose.model('knitting',KnittingSchema);
module.exports = Knitting; 