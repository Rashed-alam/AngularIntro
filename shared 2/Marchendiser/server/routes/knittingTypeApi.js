const express = require('express');
const router = express.Router();
const knittingType = require('../models/knittingType');
const machine =require('../models/MachineCapacityModel');

router.get('/all',(req,res,next)=>{
    knittingType.find({}).then(function(knittingType){
        res.send(knittingType);
    }).catch(next);
});
router.post('/new',(req,res,next)=>{
    knittingType.create(req.body).then(function(knittingType){
        res.send(knittingType);
    }).catch(next);
});
router.get('/allMachine',(req,res,next)=>{
    machine.find({}).then(function(machine){
        res.send(machine);
    }).catch(next);
});

module.exports=router;