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



/** this will export all the routes we have written on top 
                                to another file which will be importing it */
module.exports = router; 