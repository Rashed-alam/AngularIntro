const express = require('express');
const router = express.Router();
const resp = require('../models/Response');
const MachineCapacityModelSchema = require('../models/machineCapacity');

//CREATE 
router.post('/post', (req, res, next) => {
    MachineCapacityModelSchema.create(req.body).then(data => {
        var response = new resp(true, data, "Machine Information Inserted successfully");
        res.status(200).json(response)
    }).catch(err => {
        if (err.code == 11000) {
            var response = new resp(false, '', "Duplicate Machine Name. Please change the name.");
            res.status(200).json(response);
        } else {
            var response = new resp(false, '', "Server Error");
            res.status(200).json(response)
        }
    })
});

//EDIT
router.put('/edit/:machineName', (req, res, next) => {
    MachineCapacityModelSchema.findOneAndUpdate({ machineName: req.params.machineName }, req.body).then(function() {
        MachineCapacityModelSchema.findOne({ machineName: req.params.machineName }).then(function(x) {
            res.send({ "message": "Machine Information Updated Sucessfully" });
        }).catch(next);
    });

});

//DELETE
router.delete('/delete/:machineName', (req, res, next) => {
    MachineCapacityModelSchema.findOneAndDelete({ machineName: req.params.machineName }).then(function(fabricentry) {
        res.send({ "message": "Machine Information Deleted Sucessfully" });
    }).catch(next);

});

//GET ALL THE NAMES OF MACHINE
router.get('/getAllMachineNames', (req, res, next) => {
    MachineCapacityModelSchema.find({}).then(function(a) {
        var allNames = [];
        var l = a.length;
        for (i = 0; i < l; i++) {
            allNames.push(a[i].machineName);
        }
        res.send(allNames);
    }).catch(next);
});

//GET MACHINES INFO FROM MACHINE LIST
router.post('/all/:machineName', (req, res, next) => {
    MachineCapacityModelSchema.find({ "machineName": req.params.machineName }).then(function(a) {
        if (a != null) {
            res.send(a);
        } else {
            var x = [];
            res.send(x);
        }
    }).catch(next);
});

//GET ALL MACHINES
router.get('/allMachineDetails', (req, res, next) => {
    MachineCapacityModelSchema.find({}).then(function(fabricentry) {
        res.send(fabricentry);
    }).catch(next);
});


module.exports = router;