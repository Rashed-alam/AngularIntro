const express = require('express');
const router = express.Router();
const Size = require('../Models/size');
const size_archive=require('../Models/archive')

router.get('/all', function (req, res, next) {
    Size.find({}).then(function (sizes) {
       res.send(sizes);
    });
});

router.post('/new', function (req, res, next) {

    Size.create(req.body).then(function (sizes) {
       res.send(sizes);
 
    }).catch((err,doc) => { 
      if (!err)
      res.send(doc);
  else {
      if (err.code == 11000)
          res.status(422).send(['Can not add new size.Duplicate entry found.']);
      else
          return next(err);
  }
      });
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
      
    }).catch((err,doc) => { 
        if (!err)
        res.send(doc);
    else {
        if (err.code == 11000)
            res.status(422).send(['Can not add new size.Duplicate entry found here.']);
        else
            return next(err);
    }
        });
 });
 //get by id
 
//archive part
router.post('/sizeArchieve',(req,res,next)=>{
    size_archive.create(req.body).then(function(f){
        res.send(f);
    }).catch(next);
   
});


 module.exports = router;