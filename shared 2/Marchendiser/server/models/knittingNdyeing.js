const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const KnittingNdyeingTypeSchema = new mongoose.Schema({

    referenceId: {
        type: String,
       
    },
    styleCode: {
        type: String,
       
    },
    kintting:[
        {
        knittingType: {
            type: String,
            default:null
           
        },
        color: {
            type: String,
            default:null
        },
        weight: {
            type: String,
            default:null
        }
    }
] 

})
module.exports = mongoose.model('knittingNdyeingType', KnittingNdyeingTypeSchema);