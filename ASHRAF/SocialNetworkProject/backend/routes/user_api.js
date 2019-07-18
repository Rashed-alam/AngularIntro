const express = require('express');
const router = express.Router();
const User = require('../models/user');


/** req= request 
 *  res= response
 */


//GETTING THE LIST OF CHIPS FROM DB
router.get('/alluser',(req,res,next)=>{ //http://localhost:3100/chips/allchips
    User.find({}).then(function(users){
        res.send(users);
    }).catch(next);
});


//POSTING THE CHIPS INTO THE DB
router.post('/newuser',(req,res,next)=>{ //http://localhost:3100/chips/newchips
    User.create(req.body).then(function(users){
        res.send(users);
    }).catch(next);
   
});


//UPDATING THE DATA IN DB
router.put('/edituser/:id',(req,res,next)=>{ //http://localhost:3100/chips/editchips/_id
    User.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){ //unique id wise khuje then seta k edit kore dibe
        User.findOne({_id:req.params.id}).then(function(users){ //sei id wise abar khujbe...khuje user k dekhabe j eta edit korsi
            res.send(users);
        }).catch(next);
    });
  
});



//DELETING THE DATA FROM DB 
router.delete('/deleteuser/:id',(req,res,next)=>{//http://localhost:3100/chips/deletechips/_id
    User.findByIdAndRemove({_id: req.params.id}).then(function(users){ //unique id wise khuje then seta k delete kore dibe
       res.send({users});  //this is for showing the user j ei id te ei info ase + user k back dekhabe
    }).catch(next);
  
});


/** this will export all the routes we have written on top 
                                to another file which will be importing it */
module.exports = router; 