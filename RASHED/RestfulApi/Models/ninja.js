const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a ninja Schema & model

const NinjaSchema = new Schema({
    id: {
        type:Number,
        //required: [true, 'Name field is required']
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    designation: {
        type: String,
    },
    contact: {
        type: Number,
    },
    address: {
        type: String,
    }
    //add in geo location
});

const Ninja = mongoose.model('ninja', NinjaSchema);
module.exports = Ninja;