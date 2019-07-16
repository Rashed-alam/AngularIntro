const express=require('express');

const router=express.Router();
const Ninja=require('../Models/ninja')
//get the list of ninjas from db
router.get('/ninjas',function(req,res,next){
 res.send({type:'GET'});
});

router.post('/ninjas',function(req,res,next){
 //console.log(req.body); 
 Ninja.create(req.body).then(function(ninja){
    res.send(ninja);
     
 }).catch(next);

});

//update a ninja in the db

router.put('/ninjas/:id',function(req,res,next){
   Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(ninja){
      res.send({ninja});
   });
 //res.send({type:'PUT'});
});

//delete

router.delete('/ninjas/:id',function(req,res,next){
//console .log(req.params.id);                                       //find and delete by id then send the req to user
Ninja.findByIdAndDelete({_id:req.params.id}).then(function(ninja){
   res.send(ninja);
});
   //res.send({type:'DELETE'});
});

module.exports=router;