const express = require('express');
const router = express.Router();
const Chips = require('../models/chips');


/** req= request 
 *  res= response
 */


//GETTING THE LIST OF CHIPS FROM DB
router.get('/allchips',(req,res,next)=>{ //http://localhost:3100/chips/allchips
    Chips.find({}).then(function(chips){
        res.send(chips);
    }).catch(next);
});


//POSTING THE CHIPS INTO THE DB
router.post('/newchips',(req,res,next)=>{ //http://localhost:3100/chips/newchips
    Chips.create(req.body).then(function(chips){
        res.send(chips);
    }).catch(next);
   
});


//UPDATING THE DATA IN DB
router.put('/editchips/:id',(req,res,next)=>{ //http://localhost:3100/chips/editchips/_id
    Chips.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){ //unique id wise khuje then seta k edit kore dibe
        Chips.findOne({_id:req.params.id}).then(function(chips){ //sei id wise abar khujbe...khuje user k dekhabe j eta edit korsi
            res.send(chips);
        }).catch(next);
    });
  
});



//DELETING THE DATA FROM DB 
router.delete('/deletechips/:id',(req,res,next)=>{//http://localhost:3100/chips/deletechips/_id
    Chips.findByIdAndRemove({_id: req.params.id}).then(function(chips){ //unique id wise khuje then seta k delete kore dibe
       res.send({chips});  //this is for showing the user j ei id te ei info ase + user k back dekhabe
    }).catch(next);
  
});


/** this will export all the routes we have written on top 
                                to another file which will be importing it */
module.exports = router; 