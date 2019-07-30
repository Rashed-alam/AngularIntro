const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create an user Schema & model

const PostSchema = new Schema({
   
    fullName: {
        type: String,
    },
    location: {
        type: String,
    },
    post:{
        type:String,
    },
    security:{
        type:String
    },
    email:{
        type:String
    }

});

const PostInfo = mongoose.model('Post', PostSchema);
module.exports = PostInfo;