const express = require('express');
const router = express.Router();
const UserSchema = require('../models/testmodel');

//GETTING THE LIST OF all Users FROM DB
router.get('/all',(req,res,next)=>{ 
    UserSchema.find({}).then(function(a){
        res.send(a);
    }).catch(next);
});
router.get('/get/single', function(req, res){
    // get by single stylecode
    UserSchema.aggregate([
        { $unwind :'$info'},
        { $match : {'info.phone': "1" }},
    
        ]).then(data => {
            res.send(data)
        })

//remove data from array by stylecode
// UserSchema.update({_id : '5d70d86212b3d3289c57081a'}, {$pull : {  info : {phone: '1'}}});

})

//POST ER JONNO 
router.post('/insert/:firstName',(req,res,next)=>{ 
    UserSchema.findOne({firstName:req.params.firstName}).then(function(a){
        if(a == null){
            UserSchema.create(req.body).then(function(a){
                res.send("New User");
            }).catch(next);
        }
        else{
            a.info.push({phone:req.body.phone,address:req.body.address});
            a.save().then(function(a){
             res.send("Old User");
         }).catch(next);
}
});
});

  //for deleting entries
router.delete('/delete/:firstName/:phone',(req,res,next)=>{
    UserSchema.findOne({firstName: req.params.firstName}).then(function(a){
        console.log(a.info);
      // UserSchema.update({_id : '5d70cd353ce91035504e1e87'}, {$pull : {  info : {phone: '1'}}});
        UserSchema.findOneAndDelete([{phone:req.params.phone}]).then(function(x){
         console.log(x);
            // UserSchema.deleteOne(x).then(function(b){
            //     res.send("deleted");
            // })
        })
    }).catch(next);
});

module.exports = router; 