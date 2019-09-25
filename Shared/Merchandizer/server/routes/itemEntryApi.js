const express = require("express");
const router = express.Router();
const resp = require('../models/Response');
const Item = require("../models/itemEntry");

// const Requisition = require("../models/requisitionEntry")
// const ProcDetails = require("../models/procDetailsEntry");
// const supplierChallanApp = require("../models/supplierChallanApprove")
var reqList = [];
var procDetrailsList = [];
var supplierChallanApproveList = [];

router.post('/insert', function(req, res) {
    Item.create(req.body).then(data => {
        var response = new resp(true, data, "Item Name Inserted successfully");
        res.status(200).json(response)
    }).catch(err => {
        if (err.code == 11000) {
            var response = new resp(false, '', "Duplicate Item Name. Please change the name.");
            res.status(200).json(response);
        } else {
            var response = new resp(false, '', "Server Error");
            res.status(200).json(response)
        }
    })
});

router.get('/all', function(req, res) {
    Item.find().sort({ "itemID": 1 })
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error while Retrieving Server Data"
            });
        });
});


router.delete('/item/delete/:itemID', function(req, res) {
    Item.findOneAndDelete({ 'itemID': req.params.itemID })
        .then(data => {
            var doc = {
                scount: 1
            };
            res.send(doc);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error while Updating Server Data"
            });
        });
});

router.put('/item/root/update/:itemID', function(req, res) {
    Item.findOneAndUpdate({ 'itemID': req.params.itemID }, {
            LR: "R",
        })
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error while Updating Server Data"
            });
        });
});

router.put('/item/edit/:itemID', function(req, res) {
    Item.findOneAndUpdate({ 'itemID': req.params.itemID }, {
            itemID: req.body.itemID,
            itemCode: req.body.itemCode,
            itemName: req.body.itemName,
            parent: req.body.parent,
            TopParent: req.body.TopParent,
            depth: req.body.depth,
            createDate: req.body.createDate,
            specification: req.body.specification,
            model: req.body.model,
            countryOfOrigin: req.body.countryOfOrigin,
            importance: req.body.importance,
            parts: req.body.parts,
            manufacturer: req.body.manufacturer,
            categorization: req.body.categorization,
            maxConsump: req.body.maxConsump,
            minConsump: req.body.minConsump,
            avgConsump: req.body.avgConsump,
            leadTime: req.body.leadTime,
            reOrderLevel: req.body.reOrderLevel,
            maxStockQty: req.body.maxStockQty,
            minStockQty: req.body.minStockQty,
            stafyStockQty: req.body.stafyStockQty,
            unitOfMeasurement: req.body.unitOfMeasurement,
            currency: req.body.currency,
            avgCostPUnit: req.body.avgCostPUnit,
            orderingCostPUnit: req.body.orderingCostPUnit,
            carryingCostPUnit: req.body.carryingCostPUnit,
            lastPurCostPUnit: req.body.lastPurCostPUnit,
            QUnit: req.body.QUnit,
            CUnit: req.body.CUnit
        })
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error while Updating Server Data"
            });
        });
});
// duplicate parent check
router.get('/item/parent/duplicate/:parent', function(req, res) {
    Item.find({ parent: req.params.parent }).then(data => {
        var l = data.length;
        var doc = {
            scount: 0
        }
        var doc2 = {
            scount: 1
        }
        if (l == 0) {
            res.send(doc);
        } else {
            res.send(doc2);
        }

    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error while Updating Server Data"
        });
    });
});

router.put('/item/lr/update/:itemID', function(req, res) {
    Item.findOneAndUpdate({ 'itemID': req.params.itemID }, {
            LR: "L",
        })
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error while Updating Server Data"
            });
        });
});

//get all information by delete id

router.get('/items/find/:itemID', function(req, res) {
    Item.find({ itemID: req.params.itemID }).then(function(Item) {
        res.send(Item);
    });
});

router.get('/item/id/max', function(req, res) {
    Item.find().sort({ "itemID": -1 }).limit(1)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error while Updating Server Data"
            });
        });
});

router.get('/API/v1/getInfoForItemDelete/:itemID', function(req, res) {
    var itemId = req.params.itemID;
    console.log('itemId=' + itemId);
    Requisition.find({ itemID: itemId })
        .then(data => {
            reqList = data;
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error while Updating Server Data"
            });
        });
    ProcDetails.find({ itemID: itemId })
        .then(data => {
            procDetrailsList = data;
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error while Updating Server Data"
            });
        });
    supplierChallanApp.find({ itemID: itemId })
        .then(data => {
            supplierChallanApproveList = data;
            const reqLength = reqList.length;
            const procLength = procDetrailsList.length;
            const supChallanLength = supplierChallanApproveList.length;
            console.log('reqLength=' + reqLength);
            console.log('procLength=' + procLength);
            console.log('supChallanLength=' + supChallanLength);
            if (reqLength > 0 || procLength > 0 || supChallanLength > 0) {

                var resp = 'false ';
                res.send(resp);

            } else {
                var resp = 'true';
                res.send(resp);
            }
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error while Updating Server Data"
            });
        });
    // voucher.find({'itemID': req.params.itemID})
    //     .then(data => {
    //         res.send(data);
    //         console.log(data);
    //     }).catch(err => {
    //     res.status(500).send({
    //         message: err.message || "Error while Updating Server Data"
    //     });
    // });
});
module.exports = router;