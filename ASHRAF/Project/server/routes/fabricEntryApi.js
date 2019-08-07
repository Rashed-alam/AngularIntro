const express = require('express');
const router = express.Router();
const FabricEntry = require('../models/fabricEntry');

//GETTING THE LIST OF CHIPS FROM DB
router.get('/all',(req,res,next)=>{ //http://localhost:3100/chips/allchips
    FabricEntry.find({}).then(function(fabricentry){
        res.send(fabricentry);
    }).catch(next);
});


//POSTING THE CHIPS INTO THE DB
router.post('/new',(req,res,next)=>{ //http://localhost:3100/chips/newchips
    FabricEntry.create(req.body).then(function(fabricentry){
        res.send(fabricentry);
    }).catch(next);
   
});

/** this will export all the routes we have written on top 
                                to another file which will be importing it */
module.exports = router; 