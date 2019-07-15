const express = require('express');
const router = express.Router();
const Chips = require('../models/chips');


/** req= request 
 *  res= response
 */


//GETTING THE LIST OF CHIPS FROM DB
router.get('/allchips',(req,res)=>{
    res.send({type: 'GET'});
});


//POSTING THE CHIPS INTO THE DB
router.post('/newchips',(req,res)=>{
    Chips.create(req.body).then(function(chips){
        res.send(chips);
    });
   
});


//UPDATING THE DATA IN DB
router.put('/editchips/:id',(req,res)=>{
    res.send({type: 'PUT'});
});

//DELETING THE DATA FROM DB 
router.delete('/deletechips/:id',(req,res)=>{
    res.send({type: 'DELETE'});
});

module.exports = router; /** this will export all the routes we have written on top 
                                to another file which will be importing it */