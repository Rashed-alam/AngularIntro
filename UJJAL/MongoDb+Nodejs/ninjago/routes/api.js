const express = require('express');
const router = express.Router(); //router object of express
const Ninja = require('../models/ninjas'); // importing Ninja model

//get request for ninjas
router.get('/ninjas', function(req,res,next){
    res.send({type:'GET'}); //declaring type of request
});

//post request for adding new ninja
router.post('/ninjas', function(req,res, next){
        //create and save instances of ninja in one command
        Ninja.create(req.body).then(function(ninja){
            res.send(ninja); //send data only after the req is recive fully
        }).catch(next); // send error message 
      
});

//update request for ninjas
router.put('/ninjas/:id', function(req,res,next){
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){ //find id then update to db
        Ninja.findOne({_id: req.params.id}).then(function(ninja){ //find the updated id and return
            res.send(ninja);
        });    
    });
});

//Delete request for removing ninja
router.delete('/ninjas/:id', function(req,res,next){
    //console.log(req.params.id); //return the id of request

    //compare the DB _id with input id and remove it
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja); //sending the object that has been deleted
    }) ;
});

//export routes for using routes in index and other file
module.exports = router;