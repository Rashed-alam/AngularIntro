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
router.put('/edit/:machine_id', (req, res, next) => {
    MachineCapacityModelSchema.findOneAndUpdate({ machine_id: req.params.machine_id }, req.body).then(function() {
        MachineCapacityModelSchema.findOne({ machine_id: req.params.machine_id }).then(function(x) {
            res.send({ "message": "Machine Information Updated Sucessfully" });
        }).catch(next);
    });

});

//DELETE
router.delete('/delete/:machine_id', (req, res, next) => {
    MachineCapacityModelSchema.findOneAndDelete({ machine_id: req.params.machine_id }).then(function(fabricentry) {
        res.send({ "message": "Machine Information Deleted Sucessfully" });
    }).catch(next);

});

//GET ALL THE NAMES OF MACHINE
// router.get('/getAllMachineNames', (req, res, next) => {
//     MachineCapacityModelSchema.find({}).then(function(a) {
//         var allNames = [];
//         var l = a.length;
//         for (i = 0; i < l; i++) {
//             allNames.push(a[i].machineName);
//         }
//         res.send(allNames);
//     }).catch(next);
// });

//GET MACHINES INFO FROM MACHINE LIST
router.post('/all/:machine_id', (req, res, next) => {
    MachineCapacityModelSchema.find({ "machine_id": req.params.machine_id }).then(function(a) {
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

//GET AUTO_ID
router.get('/id', function(req, res, next) {
    MachineCapacityModelSchema.find({}, ('machine_id')).sort({ "machine_id": -1 }).limit(1)
        .then(data => {
            var l = data.length;
            if (l > 0) {
                const MachineID = Number(data[0].machine_id + 1);
                res.send({ MachineID });

            } else {
                const MachineID = Number(1); // can change 
                res.send({ MachineID });

            }
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error while getting Server Data"
            });
        });
});


module.exports = router;