const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const LocationSchema=new Schema({
    location_name:{
        type:String,
        required:[true,"Name field required"]
    }
});
const Location=mongoose.model('location',LocationSchema);
module.exports=Location;
