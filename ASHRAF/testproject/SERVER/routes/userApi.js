const express = require('express');
const router = express.Router();
const UserSchema = require('../models/testmodel');

//GETTING THE LIST OF all Users FROM DB
router.get('/all',(req,res,next)=>{ 
    UserSchema.find({}).then(function(a){
        res.send(a);
    }).catch(next);
});


//POSTING THE new User input INTO THE DB
// router.post('/new',(req,res,next)=>{ 
//     UserSchema.create(req.body).then(function(a){
//         res.send(a);
//     }).catch(next);
   
// });

// router.post('/insertAnother',(req,res,next)=>{ 
//     UserSchema.findOne({firstName:'Abu'}).then(function(a){
//        a.info.push({phone:'12345',address:'malibagh'});
//        a.save().then(function(a){
//         res.send(a);
//        })
//     }).catch(next);
   
// });
//POST ER JONNO 
router.post('/insert/:firstName',(req,res,next)=>{ 
    UserSchema.findOne({firstName:req.params.firstName}).then(function(a){
        if(a == null){
            UserSchema.create(req.body).then(function(a){
                res.send("if part a ase akhon");
            }).catch(next);
        }
        else{
            a.info.push({phone:req.body.phone,address:req.body.address});
            a.save().then(function(a){
             res.send("else part a ase akhon");
         }).catch(next);
}
});
});

  //for deleting entries
  router.delete('/delete/:firstName/:phone',(req,res,next)=>{
    UserSchema.findOne({firstName:req.params.firstName}).then(function(a){
      a.info.pull({phone: req.params.phone});
      a.update({phone: req.params.phone});
    //   res.send(a);
    // UserSchema.deleteOne({a:req.params.phone}).then(function(){
    //     console.log(a);
    //    res.send(a);  
    // }).catch(next);
    });
  });

module.exports = router; 