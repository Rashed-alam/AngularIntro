const express = require('express');
const router = express.Router();
const Currency = require('../models/Currency');

router.get('/all',(req,res,next)=>{
    Currency.find({}).then(function(Currency){
        res.send(Currency);
    }).catch(next);
});
router.post('/new',(req,res,next)=>{
    Currency.create(req.body).then(function(Currency){
        res.send(Currency);
    }).catch(next);
});

module.exports=router;