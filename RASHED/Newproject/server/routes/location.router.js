const express = require('express');
const router = express.Router();
const Location = require('../models/location');

router.get('/all',(req,res,next)=>{
    Location.find({}).then(function(location){
        res.send(location);
    }).catch(next);
});

router.post('/new',(req,res,next)=>{
    Location.create(req.body).then(function(location){
        res.send(location);
    }).catch(next);
});

module.exports=router;