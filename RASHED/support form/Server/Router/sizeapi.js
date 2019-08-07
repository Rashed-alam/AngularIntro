const express = require('express');
const router = express.Router();
const Size=require('../Models/size');

router.get('/all', function (req, res, next) {
    Size.find({}).then(function (sizes) {
       res.send(sizes);
    });
});

router.post('/new', function (req, res, next) {
    //console.log(req.body); 
    Size.create(req.body).then(function (sizes) {
       res.send(sizes);
 
    }).catch(next);
 
 });
 router.get('/',function(req,res,next){
    Size.find({},('size_id')).sort({"size_id":-1}).limit(1)
    .then(data => {
        var l = data.length;
        if(l>0){
            const x = Number( data[0].size_id + 1);
            res.send({'size_id':x});
            
        } else {
            const x = Number(1); // can change 
           res.send({'size_id':x});
          
        }
    }).catch(err => {
    res.status(500).send({
        message: err.message || "Error while getting Server Data"
    });
});
 });

 router.delete('/delete/:id',(req,res,next)=>{
    
    Size.findByIdAndRemove({_id:req.params.id}).then(function(size){
       res.send({size}); 
    }).catch(next);
 });

 router.put('/edit/:id',(req,res,next)=>{
    //find by unique id then edit the blog
    Size.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Size.findOne({_id:req.params.id}).then(function(size){
          res.send(size);
        
       });
      
    }).catch(next);
 });

 module.exports = router;