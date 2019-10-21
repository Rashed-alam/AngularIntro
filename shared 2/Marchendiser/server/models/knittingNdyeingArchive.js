const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const KnittingNdyeingArchive = new mongoose.Schema({

    referenceId: {
        type: String,
       
    },
    styleCode: {
        type: String,
       
    },
    changeUser: {
        type: String,
        default: null

    },
    changeDate: {
        type: Date,
        default: null

    },
    changeEvent: {
        type: String,
        default: null
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
        },
        row:{
            type: Number,
            default:null
        },
        col:{
            type: Number,
            default:null
        }
    }
] 

})
KnittingNdyeingArchive.plugin(AutoIncrement, { inc_field: 'trackId' });
module.exports = mongoose.model('KnittingNdyeingArchive', KnittingNdyeingArchive);