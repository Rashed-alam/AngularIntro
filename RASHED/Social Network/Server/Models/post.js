const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create an user Schema & model

const PostSchema = new Schema({
   
    firstname: {
        type: String,
    },
    contact: {
        type: Number,
    },
    location: {
        type: String,
    },
    post:{
        type:String,
    },
    security:{
        type:Boolean
    }

});

const PostInfo = mongoose.model('Post', PostSchema);
module.exports = PostInfo;