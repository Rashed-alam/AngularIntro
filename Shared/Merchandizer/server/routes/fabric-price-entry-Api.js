const express = require('express');
const router = express.Router();
const FabricPriceEntrySchema = require('../models/fabric-price-entry');


//POSTING TO DATABASE
router.post('/new/:referenceId', (req, res, next) => {
    FabricPriceEntrySchema.findOne({ referenceId: req.params.referenceId }).then(function(a) {
        if (a == null) { //if there is no other styleCode under one reference number then create a new one
            FabricPriceEntrySchema.create(req.body).then(function(a) {
                res.send(a);
            }).catch(next);
        } else { //if there is already some entries under one reference number then add it to the end 
            FabricPriceEntrySchema.update({ referenceId: req.params.referenceId },

                {
                    $addToSet: {
                        fabricPriceInformation: [{
                            styleCode: req.body.fabricPriceInformation[0].styleCode,
                            fabricType: req.body.fabricPriceInformation[0].fabricType,
                            itemName: req.body.fabricPriceInformation[0].itemName,
                            wastePercentage: req.body.fabricPriceInformation[0].wastePercentage,
                            chestSize: req.body.fabricPriceInformation[0].chestSize,
                            lengthSize: req.body.fabricPriceInformation[0].lengthSize,
                            sleeveSize: req.body.fabricPriceInformation[0].sleeveSize,
                            unitOfMeasurement: req.body.fabricPriceInformation[0].unitOfMeasurement,
                            hoodSize: req.body.fabricPriceInformation[0].hoodSize,
                            bottomSize: req.body.fabricPriceInformation[0].bottomSize,
                            thighSize: req.body.fabricPriceInformation[0].thighSize,
                            pocketSize: req.body.fabricPriceInformation[0].pocketSize,
                            fabricWeight: req.body.fabricPriceInformation[0].fabricWeight,
                            currency: req.body.fabricPriceInformation[0].currency,
                            fabricUnitPrice: req.body.fabricPriceInformation[0].fabricUnitPrice,
                            fabricTotalPrice: req.body.fabricPriceInformation[0].fabricTotalPrice,
                            rimPrice: req.body.fabricPriceInformation[0].rimPrice,
                            cmPrice: req.body.fabricPriceInformation[0].cmPrice,
                            trimPrice: req.body.fabricPriceInformation[0].trimPrice,
                            printPrice: req.body.fabricPriceInformation[0].printPrice,
                            docPrice: req.body.fabricPriceInformation[0].docPrice,
                            perDozenPrice: req.body.fabricPriceInformation[0].perDozenPrice,
                            perUnitPrice: req.body.fabricPriceInformation[0].perUnitPrice,
                            Dremarks: req.body.fabricPriceInformation[0].Dremarks,
                            Mremarks: req.body.fabricPriceInformation[0].Mremarks,
                            approval: req.body.fabricPriceInformation[0].approval
                        }],
                    }
                }, { multi: true },
                function(err, result) {
                    if (err) {
                        console.log('ERROR: ' + err);
                        res.send({ 'error': 'An error has occurred' });
                    } else {
                        res.send(result);
                    }
                })

        }
    });
});

// //GET ALL entries INFORMATION  by reference
router.post('/all/:referenceId', (req, res, next) => {
    FabricPriceEntrySchema.findOne({ referenceId: req.params.referenceId }).then(function(a) {
        if (a != null) {
            var alldata = JSON.parse(JSON.stringify(a.fabricPriceInformation));
            var ref = a.referenceId;
            var bName = a.buyerName;
            var bCode = a.buyerCode;
            for (i = 0; i < alldata.length; i++) {
                alldata[i].referenceId = ref;
                alldata[i].buyerName = bName;
                alldata[i].buyerCode = bCode;

            }
            res.send(alldata);
        } else {
            var x = [];
            res.send(x);
        }
    }).catch(next);
});

//GET BY STYLECODE TO EDIT
router.post('/get/:styleCode', (req, res, next) => {
    FabricPriceEntrySchema.aggregate([
        { $unwind: '$fabricPriceInformation' },
        { $match: { 'fabricPriceInformation.styleCode': req.params.styleCode } }
    ]).then(function(a) {
        res.send(a)
    })
});

//DELETE
router.delete('/delete/:referenceId/:styleCode', function(req, res, next) {
    FabricPriceEntrySchema.findOne({ referenceId: req.params.referenceId }).then(function(a) {
        var lengthofA = a.fabricPriceInformation.length;
        if (lengthofA > 1) { //if there is more than one object under one reference number
            var array = a.fabricPriceInformation; // assigning the nested array into this variable
            var l = a.fabricPriceInformation.length;
            for (let i = 0; i < array.length; i++) {
                if (a.fabricPriceInformation[i].styleCode == req.params.styleCode) {
                    array.splice(i, 1);
                }
            }
            a.fabricPriceInformation = array;
            a.save().then(function(a) {
                res.send({ "message": "ENTRY SUCCESSFULLY DELETED" });
            }).catch(next);
        } else { //if there is only one object under one style code and reference number
            FabricPriceEntrySchema.findOneAndDelete({ referenceId: req.params.referenceId }).then(function(fabricentry) {
                res.send({ "message": "ENTRY SUCCESSFULLY DELETED" });
            }).catch(next);
        }
    });

});

//EDIT
router.put('/update/:referenceId/:styleCode', function(req, res, next) {
    FabricPriceEntrySchema.findOne({ referenceId: req.params.referenceId }).then(function(a) {
        // res.send(a);
        FabricPriceEntrySchema.update({
                "referenceId": req.params.referenceId,
                "fabricPriceInformation.styleCode": req.params.styleCode
            }, {
                $set: {
                    "mailDate": req.body.mailDate,
                    "entryDate": req.body.entryDate,
                    "buyerName": req.body.buyerName,
                    "buyerCode": req.body.buyerCode,
                    "size": req.body.size,
                    "season": req.body.season,
                    "shipmentDone": req.body.shipmentDone,
                    "fabricPriceInformation.$.styleCode": req.body.fabricPriceInformation[0].styleCode,
                    "fabricPriceInformation.$.fabricType": req.body.fabricPriceInformation[0].fabricType,
                    "fabricPriceInformation.$.itemName": req.body.fabricPriceInformation[0].itemName,
                    "fabricPriceInformation.$.wastePercentage": req.body.fabricPriceInformation[0].wastePercentage,
                    "fabricPriceInformation.$.chestSize": req.body.fabricPriceInformation[0].chestSize,
                    "fabricPriceInformation.$.unitOfMeasurement": req.body.fabricPriceInformation[0].unitOfMeasurement,
                    "fabricPriceInformation.$.lengthSize": req.body.fabricPriceInformation[0].lengthSize,
                    "fabricPriceInformation.$.sleeveSize": req.body.fabricPriceInformation[0].sleeveSize,
                    "fabricPriceInformation.$.hoodSize": req.body.fabricPriceInformation[0].hoodSize,
                    "fabricPriceInformation.$.bottomSize": req.body.fabricPriceInformation[0].bottomSize,
                    "fabricPriceInformation.$.thighSize": req.body.fabricPriceInformation[0].thighSize,
                    "fabricPriceInformation.$.pocketSize": req.body.fabricPriceInformation[0].pocketSize,
                    "fabricPriceInformation.$.fabricWeight": req.body.fabricPriceInformation[0].fabricWeight,
                    "fabricPriceInformation.$.currency": req.body.fabricPriceInformation[0].currency,
                    "fabricPriceInformation.$.fabricUnitPrice": req.body.fabricPriceInformation[0].fabricUnitPrice,
                    "fabricPriceInformation.$.fabricTotalPrice": req.body.fabricPriceInformation[0].fabricTotalPrice,
                    "fabricPriceInformation.$.rimPrice": req.body.fabricPriceInformation[0].rimPrice,
                    "fabricPriceInformation.$.cmPrice": req.body.fabricPriceInformation[0].cmPrice,
                    "fabricPriceInformation.$.trimPrice": req.body.fabricPriceInformation[0].trimPrice,
                    "fabricPriceInformation.$.printPrice": req.body.fabricPriceInformation[0].printPrice,
                    "fabricPriceInformation.$.docPrice": req.body.fabricPriceInformation[0].docPrice,
                    "fabricPriceInformation.$.perDozenPrice": req.body.fabricPriceInformation[0].perDozenPrice,
                    "fabricPriceInformation.$.perUnitPrice": req.body.fabricPriceInformation[0].perUnitPrice,
                    "fabricPriceInformation.$.Dremarks": req.body.fabricPriceInformation[0].Dremarks,
                    "fabricPriceInformation.$.Mremarks": req.body.fabricPriceInformation[0].Mremarks,
                    "fabricPriceInformation.$.approval": req.body.fabricPriceInformation[0].approval

                }
            },
            function(err, result) {
                if (err) {
                    console.log('ERROR: ' + err);
                    res.send({ 'error': 'An error has occurred.' });
                } else {
                    res.send(result);
                }
            });
    });
});

//this part is for fetching back the entry AUtoID from database
router.get('/', function(req, res, next) {
    FabricPriceEntrySchema.find({}, ('auto_id')).sort({ "auto_id": -1 }).limit(1)
        .then(data => {
            var l = data.length;
            if (l > 0) {
                const FabricID = Number(data[0].auto_id + 1);
                res.send({ FabricID });

            } else {
                const FabricID = Number(1); // can change 
                res.send({ FabricID });

            }
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error while getting Server Data"
            });
        });
});

//fetching the list of all reference IDs which are stored in the database
router.get('/allref', (req, res, next) => {
    FabricPriceEntrySchema.find({}).then(function(a) {
        var allref = [];
        var l = a.length;
        for (i = 0; i < l; i++) {
            allref.push(a[i].referenceId);
        }
        res.send(allref);
    }).catch(next);
});

//fetching the list of everything from database
router.get('/everything', (req, res, next) => {
    FabricPriceEntrySchema.find({}).then(function(a) {
        res.send(a);
    }).catch(next);
});



module.exports = router;