const express = require('express');
const router = express.Router();
const FabricEntry = require('../models/fabricEntry');
const FabricArchieve = require('../models/fabricArchieve');

//GETTING THE LIST OF entries FROM DB
router.get('/all',(req,res,next)=>{ 
    FabricEntry.find({}).then(function(fabricentry){
        res.send(fabricentry);
    }).catch(next);
});


//POSTING THE entries INTO THE DB
router.post('/new',(req,res,next)=>{ 
    FabricEntry.create(req.body).then(function(fabricentry){
        res.send(fabricentry);
    }).catch(next);
   
});
//this part is for fetching back the entry AUtoID from database
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

 //for editing existing entries
router.put('/edit/:id',(req,res,next)=>{ 
    FabricEntry.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){ 
        FabricEntry.findOne({_id:req.params.id}).then(function(fabricentry){ 
            res.send(fabricentry);
        }).catch(next);
    });
  
  });
  
  //for deleting entries
  router.delete('/delete/:refNo/:style_code',(req,res,next)=>{
    FabricEntry.findOneAndDelete({refNo:req.params.refNo}&&{style_code:req.params.style_code}).then(function(fabricentry){
       res.send(fabricentry);  
    }).catch(next);
  
  });


  // this is for archieve part
router.post('/fabricArchieve',(req,res,next)=>{
    FabricArchieve.create(req.body).then(function(f){
        res.send(f);
    }).catch(next);
   
});
//for showing all the archieve data from db
router.get('/allFabricArchieve',(req,res,next)=>{ 
    FabricArchieve.find({}).then(function(f){
        res.send(f);
    }).catch(next);
});

router.post('/all/:refNo',(req,res,next)=>{ 
    FabricEntry.find({"refNo": req.params.refNo}).then(function(fabricentry){
       res.send(fabricentry);
    }).catch(next);
  });


/** this will export all the routes we have written on top 
                                to another file which will be importing it */
module.exports = router; 