const express = require('express');
const router = express.Router();
const Location = require('../models/location.model');


/** req= request 
 *  res= response
 */


//getting all the locatin from database
router.get('/all',(req,res,next)=>{ 
    Location.find({}).then(function(location){
        res.send(location);
    }).catch(next);
});


//creating new location into database
router.post('/new',(req,res,next)=>{ 
    Location.create(req.body).then(function(location){
        res.send(location);
    }).catch(next);
   
});



/** this will export all the routes we have written on top 
                                to another file which will be importing it */
module.exports = router; 