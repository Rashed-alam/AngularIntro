const express = require('express');
const router = express.Router();
const UoM = require('../models/UoM');


/** req= request 
 *  res= response
 */

//GETTING THE LIST OF CHIPS FROM DB
router.get('/all',(req,res,next)=>{ //http://localhost:3100/chips/allchips
    UoM.find({}).then(function(UoM){
        res.send(UoM);
    }).catch(next);
});


//POSTING THE CHIPS INTO THE DB
router.post('/new',(req,res,next)=>{ //http://localhost:3100/chips/newchips
    UoM.create(req.body).then(function(UoM){
        res.send(UoM);
    }).catch(next);
   
});







/** this will export all the routes we have written on top 
                                to another file which will be importing it */
module.exports = router; 