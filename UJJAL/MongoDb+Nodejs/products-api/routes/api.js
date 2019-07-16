const express = require('express');
const router = express.Router(); //router object of express
const Product = require('../models/product'); // importing Product model

//get request for all products
router.get('/products', function(req,res,next){
    //return all ninjas in object manner
    Product.find().then(function(prds){
         res.send(prds);
     }); 
});

//get a specific product by id
router.get('/products/:id',function(req,res,next){
    Product.findById({_id: req.params.id},req.body).then(function(prd){
        res.send(prd);
        //console.log(prd['name']);
    }).catch(next);
});

//post request for adding new product
router.post('/products', function(req,res, next){
        //create and save instances of product in one command
        Product.create(req.body).then(function(prd){
            res.send(prd); //send data only after the req is recive fully
        }).catch(next); // send error message 
      
});

//update request for ninjas
router.put('/products/:id', function(req,res,next){
    Product.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){ //find id then update to db
        Product.findOne({_id: req.params.id}).then(function(prd){ //find the updated id and return
            res.send(prd);
        }).catch(next);    
    });
});

//Delete request for removing ninja
router.delete('/products/:id', function(req,res,next){
    //console.log(req.params.id); //return the id of request

    //compare the DB _id with input id and remove it
    Product.findByIdAndRemove({_id: req.params.id}).then(function(prd){
        res.send(prd); //sending the object that has been deleted
    }).catch(next);
});

//export routes for using routes in index and other file
module.exports = router;