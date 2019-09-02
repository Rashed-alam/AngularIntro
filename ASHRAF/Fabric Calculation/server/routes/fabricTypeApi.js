const express = require('express');
const router = express.Router();
const Fabrics = require('../models/fabrictype');

//GETTING THE LIST OF CHIPS FROM DB
router.get('/all',(req,res,next)=>{ 
    Fabrics.find({}).then(function(fabrics){
        res.send(fabrics);
    }).catch(next);
});
//POSTING THE CHIPS INTO THE DB
router.post('/new',(req,res,next)=>{ 
    Fabrics.create(req.body).then(function(fabrics){
        res.send(fabrics);
    }).catch(next);
   
});






/** this will export all the routes we have written on top 
                                to another file which will be importing it */
module.exports = router; 