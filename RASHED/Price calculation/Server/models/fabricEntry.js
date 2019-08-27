const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const FabricEntrySchema = new mongoose.Schema({
    mailDate: { //1
        type: Date,
        default: null,
     
    },
    entryDate: { //2
        type: Date,
        default: null,
       // required: "Entry Date cannot be Empty"
    },
    refNo: { //3
        type: String,
      //  required: true,
       // required: "Reference No. cannot be Empty"
    },
    buyer_name: { //4
        type: String,
      //  default: null,
       // required: "Buyer Name cannot be Empty"
    },
   
    style_code: { //5
        type: String,
      //  default: null,
       // required: "Style Code cannot be Empty"
    },
    style_item_name: { //6
        type: String,
     //   default: null,
      //  required: "Item Name cannot be Empty"
    },
    style_sleeve_type: { //7
        type: String,
//default: null,
      //  required: "Sleeve Type cannot be Empty"
    },
    size: {
        type: String, //8
      //  default: null,
      //  required: "Size cannot be Empty"
    },
    fabrics: {
        type: String, //9
       // default: 0,
       // required: "Fabric Type Date cannot be Empty"
    },
    chest: {
        type: String, //10
      //  default: null,
      //  required: "Chest Size cannot be Empty"
    },
    length: {
        type: String, //11
       // default: 0,
        //required: "Length size cannot be Empty"
    },
    sleeve: {
        type: String, //12
      //  default: 0,
      //  required: "Sleeve Type cannot be Empty"
    },
    length_unit_of_measurement:{ //13
        type: String,
      //  default: 0,
      //  required: "Length Unit of Measurement cannot be Empty"
    },
    chest_unit_of_measurement:{ //14
        type: String,
     //   default: 0,
      //  required: "Chest Unit of Measurement cannot be Empty"
    },
    sleeve_unit_of_measurement:{ //15
        type: String,
      //  default: 0,
       // required: "Sleeve Unit of Measurement cannot be Empty"
    },
    waste_percentage:{ //16
        type: Number,
      //  default: 0,
      //  required: "Sleeve Unit of Measurement cannot be Empty"
    },
    hood:{ //17
        type: String,
     //   default: 0,
       // required: "Sleeve Unit of Measurement cannot be Empty"
    },
    bottom:{ //18
        type: String,
        default: 0,
       // required: "Sleeve Unit of Measurement cannot be Empty"
    },
    thigh:{ //19
        type: String,
        default: 0,
      //  required: "Sleeve Unit of Measurement cannot be Empty"
    },
    pocket:{ //20
        type: String,
        default: 0,
     //   required: "Sleeve Unit of Measurement cannot be Empty"
    },
    pocket_unit_of_measurement:{ //21
        type: String,
        default: 0,
     //   required: "Chest Unit of Measurement cannot be Empty"
    },
    hood_unit_of_measurement:{ //22
        type: String,
        default: 0,
     //   required: "Chest Unit of Measurement cannot be Empty"
    },
    bottom_unit_of_measurement:{ //23
        type: String,
        default: 0,
     //   required: "Chest Unit of Measurement cannot be Empty"
    },
    thigh_unit_of_measurement:{ //24
        type: String,
        default: 0,
     //   required: "Chest Unit of Measurement cannot be Empty"
    },
    fabric_weigh:{ //25
        type: String,
        default: 0,
      //  required: "Chest Unit of Measurement cannot be Empty"
    },


})
FabricEntrySchema.plugin(AutoIncrement, { inc_field: 'fabricEntry_id' }); //26

module.exports = mongoose.model('fabricentry', FabricEntrySchema);