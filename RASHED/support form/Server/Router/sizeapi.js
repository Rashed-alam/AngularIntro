const express = require('express');
const router = express.Router();
const Size = require('../Models/size');

router.get('/all', function (req, res, next) {
    Size.find({}).then(function (sizes) {
       res.send(sizes);
    });
});

router.post('/new', function (req, res, next) {
    //console.log(req.body); 
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
      
    }).catch(next);
 });

//error handling
// router.duplicateEntry = (req, res, next) => {
//    var size = new Size();
//    size.size_name = req.body.size_name;
//    size.inc_field = req.body.inc_field;
  
//    size.save((err, doc) => {
//        if (!err)
//            res.send(doc);
//        else {
//            if (err.code == 11000)
//                res.status(422).send(['Duplicate email adrress found.']);
//            else
//                return next(err);
//        }

//    });
// }

 module.exports = router;