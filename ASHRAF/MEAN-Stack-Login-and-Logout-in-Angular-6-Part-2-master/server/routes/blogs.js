const express = require("express");
const Blog = require("../models/blog.model");
const router = express.Router();
const User = require("../models/user.model");


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

router.put('/edit/:id/:name',(req,res,next)=>{ 
   //unique id wise khuje then seta k edit kore dibe
    Blog.findOne({_id:req.params.id}).then(function(blog){ //sei id wise abar khujbe...khuje user k dekhabe j eta edit korsi
          //res.send(blog.post_user);
        if(req.params.name == blog.post_user){
          res.send(blog);
        } else {
          res.send({'message':'not found any posts by you'});
        }

      }).catch(next);
  });



module.exports = router;
