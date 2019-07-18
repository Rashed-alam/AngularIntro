const express = require('express');

const router = express.Router();
const Ninja = require('../Models/ninja')
//get the list of ninjas from db
router.get('/ninjas', function (req, res, next) {
   Ninja.find({}).then(function (ninjas) {
      res.send(ninjas);
   });

   //res.send({ type: 'GET' });
});

// router.get('/ninjas/:id', function (req, res, next) {
//    Ninja.findById({_id:req.params.id},req.body).then(function (ninjas) {
//       res.send({name:ninjas.name});
//    });

//    //res.send({ type: 'GET' });
// });

router.post('/ninjas', function (req, res, next) {
   //console.log(req.body); 
   Ninja.create(req.body).then(function (ninja) {
      res.send(ninja);

   }).catch(next);

});

//update a ninja in the db

router.put('/ninjas/:_id', function (req, res, next) {
   Ninja.findByIdAndUpdate({ _id: req.params._id }, req.body).then(function () {
      Ninja.findOne({ _id: req.params._id }).then(function (ninja) {
         res.send(ninja);
      });

   });
   //res.send({type:'PUT'});
});

//delete

router.delete('/ninjas/:_id', function (req, res, next) {
   //console .log(req.params.id);                                       //find and delete by id then send the req to user
   Ninja.findByIdAndRemove({ _id: req.params._id }).then(function (ninja) {
      res.send({ninja});
   }).catch(next);
   //res.send({type:'DELETE'});
});

module.exports = router;