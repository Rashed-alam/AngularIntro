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
router.get('/',function(req,res,next){
    UoM.find({},('Uom_id')).sort({"Uom_id":-1}).limit(1)
    .then(data => {
        var l = data.length;
        if(l>0){
            const x = Number( data[0].Uom_id + 1);
            res.send({x});
            
        } else {
            const x = Number(1); // can change 
           res.send({x});
          
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