const express=require('express');

const router=express.Router();
const Ninja=require('../Models/ninja')
//get the list of ninjas from db
router.get('/ninjas',function(req,res){
 res.send({type:'GET'});
});

router.post('/ninjas',function(req,res){
 //console.log(req.body); 
 Ninja.create(req.body).then(function(ninja){
    res.send(ninja);
     
 });

});

//update a ninja in the db

router.put('/ninjas/:id',function(req,res){
 res.send({type:'PUT'});
});

//delete

router.delete('/ninjas/:id',function(req,res){
 res.send({type:'DELETE'});
});

module.exports=router;