const express = require("express");
const Blog = require("../models/blog.model");
const router = express.Router();


//for getting the posts of the user(profile)
router.post('/all/:email',(req,res,next)=>{ 
  Blog.find({"post_user": req.params.email}).then(function(blog){
     res.send(blog);
  }).catch(next);
});

//for getting all the posts of user only(dashboard)
router.get('/all',(req,res,next)=>{ 
  Blog.find({ "post_privacy" : "public"}).then(function(blog){
     res.send(blog);
  }).catch(next);
});

// for creating new posts 
router.post('/new',(req,res,next)=>{ 
  Blog.create(req.body).then(function(blog){
      res.send(blog);
  }).catch(next);
 
});


//for editing existing posts
router.put('/edit/:id',(req,res,next)=>{ 
  Blog.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){ 
    Blog.findOne({_id:req.params.id}).then(function(blog){ 
          res.send({blog});
      }).catch(next);
  });

});

//for deleting post
router.delete('/delete/:id',(req,res,next)=>{
  Blog.findByIdAndRemove({_id: req.params.id}).then(function(blog){
     res.send(blog);  
  }).catch(next);

});

module.exports = router;
