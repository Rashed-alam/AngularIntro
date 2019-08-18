const express = require('express');
const router = express.Router();
const FabricEntry = require('../models/fabricEntry');
const FabricArchieve = require('../models/fabricArchieve');

//GETTING THE LIST OF CHIPS FROM DB
router.get('/all',(req,res,next)=>{ //http://localhost:3100/chips/allchips
    FabricEntry.find({}).then(function(fabricentry){
        res.send(fabricentry);
    }).catch(next);
});


//POSTING THE CHIPS INTO THE DB
router.post('/new',(req,res,next)=>{ 
    FabricEntry.create(req.body).then(function(fabricentry){
        res.send(fabricentry);
    }).catch(next);
   
});
//this part is for fetching back the AUtoID from database
router.get('/',function(req,res,next){
    FabricEntry.find({},('fabricEntry_id')).sort({"fabricEntry_id":-1}).limit(1)
    .then(data => {
        var l = data.length;
        if(l>0){
            const FabricID = Number( data[0].fabricEntry_id + 1);
            res.send({FabricID});
            
        } else {
            const FabricID = Number(1); // can change 
           res.send({FabricID});
          
        }
    }).catch(err => {
    res.status(500).send({
        message: err.message || "Error while getting Server Data"
    });
});
 });

 //for editing existing posts
router.put('/edit/:id',(req,res,next)=>{ 
    FabricEntry.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){ 
        FabricEntry.findOne({_id:req.params.id}).then(function(fabricentry){ 
            res.send(fabricentry);
        }).catch(next);
    });
  
  });
  
  //for deleting post
  router.delete('/delete/:id',(req,res,next)=>{
    FabricEntry.findByIdAndRemove({_id: req.params.id}).then(function(fabricentry){
       res.send(fabricentry);  
    }).catch(next);
  
  });


  // this is for archieve part
router.post('/fabricArchieve',(req,res,next)=>{
    FabricArchieve.create(req.body).then(function(f){
        res.send(f);
    }).catch(next);
   
});


/** this will export all the routes we have written on top 
                                to another file which will be importing it */
module.exports = router; 