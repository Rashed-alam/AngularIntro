const express = require('express');
const router = express.Router();
const Sleeves = require('../models/sleevetype');

//GETTING THE LIST OF CHIPS FROM DB
router.get('/all',(req,res,next)=>{ //http://localhost:3100/chips/allchips
    Sleeves.find({}).then(function(sleeves){
        res.send(sleeves);
    }).catch(next);
});


//POSTING THE CHIPS INTO THE DB
router.post('/new',(req,res,next)=>{ //http://localhost:3100/chips/newchips
    Sleeves.create(req.body).then(function(sleeves){
        res.send(sleeves);
    }).catch(next);
   
});



/** this will export all the routes we have written on top 
                                to another file which will be importing it */
module.exports = router; 