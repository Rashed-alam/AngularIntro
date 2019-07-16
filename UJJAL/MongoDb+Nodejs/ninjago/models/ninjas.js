const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create ninja Schema and model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
    //add in geo loacation 
});

const Ninja = mongoose.model('ninja',NinjaSchema); //creating ninja model

//exporting the model
module.exports = Ninja;