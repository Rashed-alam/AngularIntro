const express = require('express');
const router = express.Router();
const Order= require('../models/order');


router.post('/api/v1/postOrder',(req,res,next)=>{ 
    Order.create(req.body).then(function(order){
       res.send(order);
    }).catch(next);
  });
  
  //for getting all the posts of user only(dashboard)
  router.get('/api/v1/getOrder',(req,res,next)=>{ 
    Order.find().then(function(order){
       res.send(order);
    }).catch(next);
  });
// get data using orderNo----------------------------------------------------------

  router.get('/api/v1/getOrder/:orderNo',(req,res,next)=>{
  Order.find({orderNo: req.params.orderNo}).then(function(order){
      res.send(order);
  }).catch(next);
  });


module.exports = router;