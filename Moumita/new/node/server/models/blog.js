const mongoose = require('mongoose'); //importing the mongoose
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    post_title: {
        type: String
       
    },

    post_detail: {
        type: String
    },
    post_privacy:{
         type: String
    },
    post_location:{
        type: String
    },
    post_user:{
        type: String
    }


});
const Blog = mongoose.model('blog',BlogSchema);
module.exports = Blog; 