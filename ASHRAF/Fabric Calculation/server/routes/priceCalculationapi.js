const express = require('express');
const router = express.Router();
const PriceCalc =require('../models/priceCalculation');
const priceArchive= require('../models/priceArchive')


//GETTING THE LIST OF CHIPS FROM DB
router.get('/',(req,res,next)=>{ 
    PriceCalc.find({}).then(function(priceCalculation){
        res.send(priceCalculation);
    }).catch(next);
});


//POSTING THE CHIPS INTO THE DB
router.post('/new',(req,res,next)=>{ 
    PriceCalc.create(req.body).then(function(priceCalculation){
        res.send(priceCalculation);
    }).catch(next);
   
});

//get id

router.get('/id',function(req,res,next){
    PriceCalc.find({},('calculation_id')).sort({"calculation_id":-1}).limit(1)
    .then(data => {
        var l = data.length;
        if(l>0){
            const x = Number( data[0].calculation_id + 1);
            res.send({'calculation_id':x});
            
        } else {
            const x = Number(1); // can change 
           res.send({'calculation_id':x});
          
        }
    }).catch(err => {
    res.status(500).send({
        message: err.message || "Error while getting Server Data"
    });
});
 });
 router.delete('/delete/:id',(req,res,next)=>{
    
    PriceCalc.findByIdAndRemove({_id:req.params.id}).then(function(priceCalculation){
       res.send({priceCalculation}); 
    }).catch(next);
 });


 router.put('/edit/:id',(req,res,next)=>{
    //find by unique id then edit the blog
    PriceCalc.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        PriceCalc.findOne({_id:req.params.id}).then(function(priceCalculation){
          res.send(priceCalculation);
       });
      
    }).catch((err,doc) => { 
        if (!err)
        res.send(doc);
    else {
        if (err.code == 11000)
            res.status(422).send(['Can not add new size.Duplicate entry found here.']);
        else
            return next(err);
    }
        });
 });

 router.post('/priceArchieve',(req,res,next)=>{
    priceArchive.create(req.body).then(function(f){
        res.send(f);
    }).catch(next);
   
});
module.exports = router;