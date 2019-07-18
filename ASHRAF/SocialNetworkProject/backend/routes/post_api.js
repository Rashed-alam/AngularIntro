const express = require('express');
const router = express.Router();
const Posts = require('../models/post');


/** req= request 
 *  res= response
 */


//GETTING THE LIST OF CHIPS FROM DB
router.get('/allposts',(req,res,next)=>{ //http://localhost:3100/chips/allchips
    Posts.find({}).then(function(posts){
        res.send(posts);
    }).catch(next);
});


//POSTING THE CHIPS INTO THE DB
router.post('/newpost',(req,res,next)=>{ //http://localhost:3100/chips/newchips
    Posts.create(req.body).then(function(posts){
        res.send(posts);
    }).catch(next);
   
});


//UPDATING THE DATA IN DB
router.put('/editposts/:id',(req,res,next)=>{ //http://localhost:3100/chips/editchips/_id
    Posts.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){ //unique id wise khuje then seta k edit kore dibe
        Posts.findOne({_id:req.params.id}).then(function(posts){ //sei id wise abar khujbe...khuje user k dekhabe j eta edit korsi
            res.send(posts);
        }).catch(next);
    });
  
});



//DELETING THE DATA FROM DB 
router.delete('/deleteposts/:id',(req,res,next)=>{//http://localhost:3100/chips/deletechips/_id
    Posts.findByIdAndRemove({_id: req.params.id}).then(function(posts){ //unique id wise khuje then seta k delete kore dibe
       res.send({posts});  //this is for showing the user j ei id te ei info ase + user k back dekhabe
    }).catch(next);
  
});


/** this will export all the routes we have written on top 
                                to another file which will be importing it */
module.exports = router; 