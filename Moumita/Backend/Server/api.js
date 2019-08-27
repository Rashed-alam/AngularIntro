const express = require ('express');
const router = express.Router();
const Ninja = require('./model/ninja');

router.get('/ninjas', function(req, res, next){
   // res.send({type: 'hlw'});
   Ninja.find().then(function(ninja){
    res.send(ninja);
}).catch(next);
});

router.post('/createninjas', function(req, res, next){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
       
});

router.put('/updateninjas/:id', function(req, res, next){
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
});
        })
    })
   


router.delete('/deleteninjas/:id', function(req, res, next){
   Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
    res.send(ninja);
   })
  
});

module.exports = router;   