const express = require('express');
const blogPost = express.Router();
const PostInfo = require('../models/post');


blogPost.post('/', function (req, res, next) {
    //console.log(req.body); 
    PostInfo.create(req.body).then(function (post) {
       res.send(post);
 
    }).catch(next);
 
 });
 module.exports = blogPost;