const express = require("express");
const Blog = require("../models/blog.model");
const router = express.Router();
const User = require("../models/user.model");

//for getting the posts of the user(profile)
router.post('/all/:email',(req,res,next)=>{ 
  Blog.find({$or:[{ "post_privacy" : "public"}, {"post_user": req.params.email}]}).then(function(blog){
     res.send(blog);
  }).catch(next);
});


// router.post('/all/byemail',(req,res,next)=>{ 
//   Blog.find({$or:[{ "post_privacy" : "public"}, {"post_user": req.body.email}]}).then(function(blog){
//      res.send(blog);
//   }).catch(next);
// });

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
router.put('/edit/:id/:name',(req,res,next)=>{ 
  Blog.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
    Blog.findOne({_id:req.params.id}).then(function(blog){ 
        if(req.params.name == blog.post_user){
          res.send(blog);
        } else {
          res.send({'message':'not found any posts by you'});
        }
      }).catch(next);
  });
});


//for deleting post
router.delete('/delete/:id/:name',(req,res,next)=>{ 
  Blog.findByIdAndRemove({_id: req.params.id}).then(function(){
    Blog.find({_id:req.params.id}).then(function(blog){ 
        if(req.params.name == blog.post_user){
          res.send('Deleted');
        } else {
          res.send({'message':'not found any posts by you'});
        }
      }).catch(next);
  });
});

module.exports = router;
