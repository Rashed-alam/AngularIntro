const express = require('express');
const blogPost = express.Router();
const PostInfo = require('../models/post');


blogPost.post('/', function (req, res, next) {
    //console.log(req.body); 
    PostInfo.create(req.body).then(function (post) {
       res.send(post);
 
    }).catch(next);
 
 });
 blogPost.get('/',function(req,res,next){
    PostInfo.find({"security":"public"}).then(function(post){
      res.send(post);
      //console.log(post);
  }).catch(next);
 });

//  blogPost.post('/email',function(req,res,next){
//     PostInfo.find(req.body.email).then(function(){
//        res.send(post);
//     }).catch(next);
//  });
//  blogPost.post('/get/:email',(req,res,next)=>{
//    PostInfo.find({$or:[{"security":"public"},{"email":req.params.email}]}).then(function(post){
//      res.send(post);
//      //console.log(post);
//  }).catch(next);
// });

blogPost.post('/all/:email',(req,res,next)=>{ 
   PostInfo.find({"email": req.params.email}).then(function(post){
      res.send(post);
   }).catch(next);
 });

 blogPost.put('/edit/:id',(req,res,next)=>{
    //find by unique id then edit the blog
    PostInfo.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
       PostInfo.findOne({_id:req.params.id}).then(function(post){
          res.send(post);
        
       });
      
    }).catch(next);
 });
//  blogPost.delete('/delete/:id/:name',(req,res,next)=>{
    
//     PostInfo.findByIdAndRemove({_id:req.params.id}).then(function(){
//        PostInfo.findOne({_id:req.params.id}).then(function(post){
//          if(req.params.name==post.email){
//             res.send({'message':'deleted'});
//          }
//          else{
//             res.send({'message':'not found any post by you'});
//          }
//        });
      
//     }).catch(next);
//  });


 blogPost.delete('/delete/:id',(req,res,next)=>{
    
   PostInfo.findByIdAndRemove({_id:req.params.id}).then(function(post){
      res.send({post}); 
   }).catch(next);
});





 module.exports = blogPost;