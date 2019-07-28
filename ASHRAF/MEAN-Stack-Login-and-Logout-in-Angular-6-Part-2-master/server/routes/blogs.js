const express = require("express");
const Blog = require("../models/blog.model");
const router = express.Router();

router.get('/all',(req,res,next)=>{ 
  
  Blog.find({ "post_privacy" : "public" }).then(function(blog){
      res.send(blog);
  }).catch(next);
});
router.post('/new',(req,res,next)=>{ 
  Blog.create(req.body).then(function(blog){
      res.send(blog);
  }).catch(next);
 
});




module.exports = router;
