const express = require('express');
const router = express.Router();
const Size = require('../models/size');


/** req= request 
 *  res= response
 */

//GETTING THE LIST OF CHIPS FROM DB
router.get('/all',(req,res,next)=>{ //http://localhost:3100/chips/allchips
    Size.find({}).then(function(a){
        res.send(a);
    }).catch(next);
});


//POSTING THE CHIPS INTO THE DB
router.post('/new',(req,res,next)=>{ //http://localhost:3100/chips/newchips
    Size.create(req.body).then(function(a){
        res.send(a);
    }).catch(next);
   
});
router.get('/',function(req,res,next){
    Size.find({},('size_id')).sort({"size_id":-1}).limit(1)
    .then(data => {
        var l = data.length;
        if(l>0){
            const x = Number( data[0].size_id + 1);
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