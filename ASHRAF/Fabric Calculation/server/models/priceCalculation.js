const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const PriceCalcSchema = new mongoose.Schema({
 
    fabric_weight: { //3
        type: String,
      // required: true,
       // required: "Reference No. cannot be Empty"
    },
    refNo: { //3
      type: String,
      required: true,
      unique: true
  },
    style_code: { //5
      type: String,
      default: null
  },
    fabric_unit_price: { //4
        type: String,
        default: null,
     //  required: true
    },
   
    fabric_total_price: { //5
        type: String,
      //  default: null,
        //required: true
    },
    rib: { //6
        type: String,
     //   default: null,
      //  required: "Item Name cannot be Empty"
    },
    cm: { //7
        type: String,
//default: null,
      //  required: "Sleeve Type cannot be Empty"
    },
    trim: {
        type: String, //8
      //  default: null,
      //  required: "Size cannot be Empty"
    },
   
    print: {
        type: String, //10
      //  default: null,
      //  required: "Chest Size cannot be Empty"
    },
    doc: {
        type: String, //11
       // default: 0,
        //required: "Length size cannot be Empty"
    },
    per_dozen_price: {
        type: String, //12
      //  default: 0,
      //  required: "Sleeve Type cannot be Empty"
    },
    per_unit_price:{ //13
        type: String,
      //  default: 0,
      //  required: "Length Unit of Measurement cannot be Empty"
    },
     fabricAmount_UOM:{ //23
        type: String,
        default: 0,
     //   required: "Chest Unit of Measurement cannot be Empty"
    },
    PriceCurrency_UOM:{ //24
        type: String,
        default: 0,
     //   required: "Chest Unit of Measurement cannot be Empty"
    },

})

PriceCalcSchema.plugin(AutoIncrement, { inc_field: 'calculation_id' }); //26
module.exports = mongoose.model('PriceCalculation', PriceCalcSchema);