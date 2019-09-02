const express = require('express');
const router = express.Router();
const Knitting = require('../models/knitting');


router.post('/api/v1/postKnittingMachineTarget',(req,res,next)=>{ 
    Knitting.create(req.body).then(function(knitting){
       res.send(knitting);
    }).catch(next);
  });
  
  //for getting all the posts of user only(dashboard)
  router.get('/api/v1/getKnittingMachineTarget',(req,res,next)=>{ 
    Knitting.find().then(function(knitting){
       res.send(knitting);
    }).catch(next);
  });
  
  // for creating new posts 
//   router.post('/insert',(req,res,next)=>{ 
//     Knitting.create(req.body).then(function(knitting){
//         res.send(knitting);
//     }).catch(next);
   
//   });
  
  
  //for editing existing posts
  router.put('/editMachineTarget/:id',(req,res,next)=>{ 
    Knitting.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){ 
      Knitting.findOne({_id:req.params.id}).then(function(knitting){ 
            res.send({knitting});
        }).catch(next);
    });
  
  });
  
  //for deleting post
  router.delete('/deleteMachineTarget/:id',(req,res,next)=>{
    Knitting.findByIdAndRemove({_id: req.params.id}).then(function(knitting){
       res.send(knitting);  
    }).catch(next);
  
  });

module.exports = router;