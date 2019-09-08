const express = require('express');
const router = express.Router();
const UserSchema = require('../models/test-2');


//POST
router.post('/new/:firstName',(req,res,next)=>{ 
    UserSchema.findOne({firstName:req.params.firstName}).then(function(a){
        if(a.firstName == null){
            UserSchema.create(req.body).then(function(a){
                res.send(a);
            }).catch(next);
        }
        else{
            a.info.push({flat:req.body.flat,road:req.body.road});
            a.save().then(function(a){
             res.send(a);
         }).catch(next);
}
});
});

//GET
router.get('/get', function(req, res){
    // get by single stylecode
    UserSchema.aggregate([
        { $unwind :'$info'},
        { $match : {'info.flat': "c2" }},
    
        ]).then(data => {
            res.send(data)
        })
});

//DELETE
router.delete('/delete/:firstName',function(req,res,next){
UserSchema.findOne({firstName:req.params.firstName}).then(function(a){
    var array = a.info;
    var l = a.info.length;
    for(let i=0; i<array.length; i++){
        console.log('check='+ array[i].flat);
        if(a.info[i].flat == "900"){
           console.log('ok')
            array.splice(i,1);
        }
    }
    a.info = array;
    a.save().then(function(a){
        res.send(a);
    }).catch(next);
})
});

//EDIT
router.put('/update/:firstName/:flat',function(req,res,next){
 UserSchema.findOne({firstName:req.params.firstName}).then(function(a){
    // res.send(a);
  UserSchema.update(
        {   
            "firstName": req.params.firstName, 
            "info.flat": req.params.flat
        },
    {$set: 
        { "info.$.flat": req.body.flat}
    },
    function(err, result) {
    if (err) {
        console.log('ERROR: ' + err);
        res.send({'error':'An error has occurred'});
    } else {
        res.send(result);
    }
 });
});
});


module.exports = router; 