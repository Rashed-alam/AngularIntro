const mongoose = require ('mongoose');
const Schema = mongoose.Schema;



//create geolocation Schema
const GeoSchema = new Schema(
    {
        type:{
            type:String,
            default: "Point"
        },
        coordinates:{
            type: [Number],
            index: "2dsphere"
        }
    });



// create ninja Schema & model
const NinjaSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Name field is required']
    },
    lastName:
     {type: String
    },
    Address:
    {
        type: String
      
    },
   
    email:
    {
        type: String
    },
    Phone:
    {
        type: Number
    },
    geometry: GeoSchema

    
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;