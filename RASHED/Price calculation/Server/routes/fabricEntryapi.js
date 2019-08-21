const express = require('express');
const router = express.Router();
const FabricEntry = require('../models/fabricEntry');


//GETTING THE LIST OF CHIPS FROM DB
router.get('/',(req,res,next)=>{ 
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
router.post('/all/:refNo',(req,res,next)=>{ 
    FabricEntry.find({"refNo": req.params.refNo}).then(function(fabricentry){
       res.send(fabricentry);
    }).catch(next);
  });

module.exports = router;