const express = require('express');
const router = express.Router();
const FabricPriceEntrySchema = require('../models/fabric-price-entry');
const DirectorReportArchive =require('../models/directorReportArchives');
const MarchendiserReportArchive =require('../models/marchendiserReportArchives');
//POST
router.post('/new/:referenceId', (req, res, next) => {
    FabricPriceEntrySchema.findOne({ referenceId: req.params.referenceId }).then(function (a) {
        if (a == null) {
            FabricPriceEntrySchema.create(req.body).then(function (a) {
                res.send(a);
            }).catch(next);
        } 
        else {
            FabricPriceEntrySchema.update(
                { referenceId: req.params.referenceId },

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
                            approval: req.body.fabricPriceInformation[0].approval,
                          //  marchendizerFlag: req.body.fabricPriceInformation[0].marchendizerFlag
                          

                        }],
                    }
                }, { multi: true },
                function (err, result) {
                    if (err) {
                        //  console.log('ERROR: ' + err);
                        res.send({ 'error': 'An error has occurred' });
                    } else {
                        res.send(result);
                    }
                })

        }
    });
});

//GET any particular by style code
router.post('/get/:styleCode', (req, res, next) => {
    FabricPriceEntrySchema.aggregate([
        { $unwind: '$fabricPriceInformation' },
        { $match: { 'fabricPriceInformation.styleCode': req.params.styleCode } }
    ]).then(function (a) {
        res.send(a)
    })
});

//GET ALL
router.get('/all/:referenceId', (req, res, next) => {
    FabricPriceEntrySchema.findOne({ referenceId: req.params.referenceId }).then(function (a) {
        var alldata = JSON.parse(JSON.stringify(a.fabricPriceInformation));
       // console.log(alldata);
        //var buyerCode = JSON.parse(JSON.stringify(a.buyerCode));
        var buyerCode = a.buyerCode;
        var buyerName =a.buyerName;
        for (i = 0; i < alldata.length; i++) {
            alldata[i].buyerCode = buyerCode;
            alldata[i].buyerName = buyerName;
            alldata[i].referenceId = a.referenceId;
        }

      //   console.log(alldata);
        res.send(alldata);

    }).catch(next);
});
//get every object
router.get('/allData', (req, res, next) => {
    FabricPriceEntrySchema.find({}).then(function (a) {
        res.send(a);
      //  console.log(a);
    }).catch(next);
});
//get specific portion from the object
router.get('/allref', (req, res, next) => {
    FabricPriceEntrySchema.find({}).then(function (a) {
        var allref = [];
        var l = a.length;
        for (i = 0; i < l; i++) {
            //   console.log('check ' + a[i].referenceId);

            allref.push(a[i].referenceId);
        }
        //   console.log('check ' + allref);
        res.send(allref);
    }).catch(next);
});

// get object by reference id and style code
router.post('/review/:referenceId/:styleCode', function (req, res, next) {
    FabricPriceEntrySchema.findOne({ referenceId: req.params.referenceId }).then(function (a) {
        var array = a.fabricPriceInformation;
        var k = JSON.parse(JSON.stringify(a.fabricPriceInformation));
        //  var l = a.fabricPriceInformation.length;
        for (let i = 0; i < k.length; i++) {
            // console.log('check='+ array[i].styleCode);
            if (k[i].styleCode == req.params.styleCode) {

                var v = JSON.parse(JSON.stringify(k[i]));
                v.buyerName = a.buyerName;
                v.referenceId = a.referenceId;
                v.buyerCode = a.buyerCode;
                v.mailDate = a.mailDate;
                v.entryDate = a.entryDate;
                v.size = a.size;
                // console.log(v);
                res.send(v);
            }
            else {
                //   console.log('not found');
            }
        }

    })
});

//DELETE
router.delete('/delete/:referenceId/:styleCode', function (req, res, next) 
{
    FabricPriceEntrySchema.findOne({ referenceId: req.params.referenceId }).then(function (a) 
    {
        var array = a.fabricPriceInformation;
        var l = a.fabricPriceInformation.length;
        for (let i = 0; i < array.length; i++) 
        {
            //    console.log('check=' + array[i].styleCode);
            if (a.fabricPriceInformation[i].styleCode == req.params.styleCode) 
            {
                //     console.log('ok')
                array.splice(i, 1);
            }
        }
        a.fabricPriceInformation = array;
        a.save().then(function (a) 
        {
            res.send(a);
        }).catch(next);
    })
});

//EDIT
router.put('/update/:referenceId/:styleCode', function (req, res, next) 
{
    FabricPriceEntrySchema.findOne({ referenceId: req.params.referenceId }).then(function (a) 
    {
        // res.send(a);
        FabricPriceEntrySchema.update(
            {
                "referenceId": req.params.referenceId,
                "fabricPriceInformation.styleCode": req.params.styleCode
            },
            {
                $set:
                {
                    "mailDate": req.body.mailDate,
                    "entryDate": req.body.entryDate,
                    "buyerCode": req.body.buyerCode,
                    "buyerName": req.body.buyerName,
                    "season": req.body.season,
                    "shipmentDone": req.body.shipmentDone,
                    "size": req.body.size,
                    "fabricPriceInformation.$.styleCode": req.body.fabricPriceInformation[0].styleCode,
                    "fabricPriceInformation.$.fabricType": req.body.fabricPriceInformation[0].fabricType,
                    "fabricPriceInformation.$.itemName": req.body.fabricPriceInformation[0].itemName,
                    "fabricPriceInformation.$.wastePercentage": req.body.fabricPriceInformation[0].wastePercentage,
                    "fabricPriceInformation.$.chestSize": req.body.fabricPriceInformation[0].chestSize,
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
                    "fabricPriceInformation.$.approval": req.body.fabricPriceInformation[0].approval,
                    "fabricPriceInformation.$.marchendizerFlag": req.body.fabricPriceInformation[0].marchendizerFlag,

                }
            },
            function (err, result) {
                if (err) {
                    //    console.log('ERROR: ' + err);
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    res.send(result);
                }
            });
    });
});
//EDIT on checkbox
router.put('/update1/:referenceId/:styleCode', function (req, res, next) 
{
    FabricPriceEntrySchema.findOne({ referenceId: req.params.referenceId }).then(function (a) 
    {
        // res.send(a);
        FabricPriceEntrySchema.update(
            {
                "referenceId": req.params.referenceId,
                "fabricPriceInformation.styleCode": req.params.styleCode
            },
            {
                $set:
                {
                    "mailDate": req.body.mailDate,
                    "entryDate": req.body.entryDate,
                    "buyerCode": req.body.buyerCode,
                    "buyerName": req.body.buyerName,
                    "season": req.body.season,
                    "shipmentDone": req.body.shipmentDone,
                    "size": req.body.size,
                    "fabricPriceInformation.$.styleCode": req.body.fabricPriceInformation.styleCode,
                    "fabricPriceInformation.$.fabricType": req.body.fabricPriceInformation.fabricType,
                    "fabricPriceInformation.$.itemName": req.body.fabricPriceInformation.itemName,
                    "fabricPriceInformation.$.wastePercentage": req.body.fabricPriceInformation.wastePercentage,
                    "fabricPriceInformation.$.chestSize": req.body.fabricPriceInformation.chestSize,
                    "fabricPriceInformation.$.lengthSize": req.body.fabricPriceInformation.lengthSize,
                    "fabricPriceInformation.$.sleeveSize": req.body.fabricPriceInformation.sleeveSize,
                    "fabricPriceInformation.$.hoodSize": req.body.fabricPriceInformation.hoodSize,
                    "fabricPriceInformation.$.bottomSize": req.body.fabricPriceInformation.bottomSize,
                    "fabricPriceInformation.$.thighSize": req.body.fabricPriceInformation.thighSize,
                    "fabricPriceInformation.$.pocketSize": req.body.fabricPriceInformation.pocketSize,
                    "fabricPriceInformation.$.fabricWeight": req.body.fabricPriceInformation.fabricWeight,
                    "fabricPriceInformation.$.currency": req.body.fabricPriceInformation.currency,
                    "fabricPriceInformation.$.fabricUnitPrice": req.body.fabricPriceInformation.fabricUnitPrice,
                    "fabricPriceInformation.$.fabricTotalPrice": req.body.fabricPriceInformation.fabricTotalPrice,
                    "fabricPriceInformation.$.rimPrice": req.body.fabricPriceInformation.rimPrice,
                    "fabricPriceInformation.$.cmPrice": req.body.fabricPriceInformation.cmPrice,
                    "fabricPriceInformation.$.trimPrice": req.body.fabricPriceInformation.trimPrice,
                    "fabricPriceInformation.$.printPrice": req.body.fabricPriceInformation.printPrice,
                    "fabricPriceInformation.$.docPrice": req.body.fabricPriceInformation.docPrice,
                    "fabricPriceInformation.$.perDozenPrice": req.body.fabricPriceInformation.perDozenPrice,
                    "fabricPriceInformation.$.perUnitPrice": req.body.fabricPriceInformation.perUnitPrice,
                    "fabricPriceInformation.$.Dremarks": req.body.fabricPriceInformation.Dremarks,
                    "fabricPriceInformation.$.Mremarks": req.body.fabricPriceInformation.Mremarks,
                    "fabricPriceInformation.$.approval": req.body.fabricPriceInformation.approval,
                    "fabricPriceInformation.$.marchendizerFlag": req.body.fabricPriceInformation.marchendizerFlag,

                }
            },
            function (err, result) {
                if (err) {
                    //    console.log('ERROR: ' + err);
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    res.send(result);
                }
            });
    });
});

//this part is for fetching back the entry AUtoID from database
router.get('/', function (req, res, next) {
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

//fetching the list of reference IDs created
router.get('/allref', (req, res, next) => {
    FabricPriceEntrySchema.find({}).then(function (a) {
        var allref = [];
        var l = a.length;
        for (i = 0; i < l; i++) {
            // console.log('check ' + a[i].referenceId);

            allref.push(a[i].referenceId);
        }
        // console.log('check ' + allref);
        res.send(allref);
    }).catch(next);
});

//GET total weight under one order for knitting form
router.get('/fabricweight/:referenceId', (req, res, next) => {
    FabricPriceEntrySchema.findOne({ referenceId: req.params.referenceId }).then(function (a) {
       var alldata = JSON.parse(JSON.stringify(a.fabricPriceInformation));
       var x=alldata.length;
 //   console.log(x);
        //var buyerCode = JSON.parse(JSON.stringify(a.buyerCode));
         var totalweight = 0;
        for (var i = 0; i <x; i++) {
          //  console.log(alldata[i].fabricWeight);
           totalweight +=alldata[i].fabricWeight;
           
        }

         // console.log(totalweight);
        res.send({totalweight});

    }).catch(next);
});
// Director archive er jonno
router.post('/directorReportArchieve',(req,res,next)=>{
    DirectorReportArchive.create(req.body).then(function(f){
        res.send(f);
    }).catch(next);
});
// marchendiser archive er jonno
router.post('/marchendiserReportArchieve',(req,res,next)=>{
    MarchendiserReportArchive.create(req.body).then(function(f){
        res.send(f);
    }).catch(next);
});
// router.post('/directorReportArchieve/:referenceId', (req, res, next) => {
//     DirectorReportArchive.findOne({ referenceId: req.params.referenceId }).then(function (a) {
//         if (a == null) {
//             DirectorReportArchive.create(req.body).then(function (a) {
//                 res.send(a);
//             }).catch(next);
//         } 
//         else {
//             DirectorReportArchive.update(
//                 { referenceId: req.params.referenceId },

//                 {
//                     $addToSet: {
//                         fabricPriceInformation: [{
//                             styleCode: req.body.fabricPriceInformation[0].styleCode,
//                             fabricType: req.body.fabricPriceInformation[0].fabricType,
//                             itemName: req.body.fabricPriceInformation[0].itemName,
//                             wastePercentage: req.body.fabricPriceInformation[0].wastePercentage,
//                             chestSize: req.body.fabricPriceInformation[0].chestSize,
//                             lengthSize: req.body.fabricPriceInformation[0].lengthSize,
//                             sleeveSize: req.body.fabricPriceInformation[0].sleeveSize,
//                             hoodSize: req.body.fabricPriceInformation[0].hoodSize,
//                             bottomSize: req.body.fabricPriceInformation[0].bottomSize,
//                             thighSize: req.body.fabricPriceInformation[0].thighSize,
//                             pocketSize: req.body.fabricPriceInformation[0].pocketSize,
//                             fabricWeight: req.body.fabricPriceInformation[0].fabricWeight,
//                             currency: req.body.fabricPriceInformation[0].currency,
//                             fabricUnitPrice: req.body.fabricPriceInformation[0].fabricUnitPrice,
//                             fabricTotalPrice: req.body.fabricPriceInformation[0].fabricTotalPrice,
//                             rimPrice: req.body.fabricPriceInformation[0].rimPrice,
//                             cmPrice: req.body.fabricPriceInformation[0].cmPrice,
//                             trimPrice: req.body.fabricPriceInformation[0].trimPrice,
//                             printPrice: req.body.fabricPriceInformation[0].printPrice,
//                             docPrice: req.body.fabricPriceInformation[0].docPrice,
//                             perDozenPrice: req.body.fabricPriceInformation[0].perDozenPrice,
//                             perUnitPrice: req.body.fabricPriceInformation[0].perUnitPrice,
//                             Dremarks: req.body.fabricPriceInformation[0].Dremarks,
//                             Mremarks: req.body.fabricPriceInformation[0].Mremarks,
//                             approval: req.body.fabricPriceInformation[0].approval,
//                             marchendizerFlag: req.body.fabricPriceInformation[0].marchendizerFlag,
//                             track_Id: req.body.fabricPriceInformation[0].track_Id,
//                             changeUser: req.body.fabricPriceInformation[0].changeUser,
//                             changeDate: req.body.fabricPriceInformation[0].changeDate,
//                             event: req.body.fabricPriceInformation[0].event,
//                         }],
//                     }
//                 }, { multi: true },
//                 function (err, result) {
//                     if (err) {
//                         //  console.log('ERROR: ' + err);
//                         res.send({ 'error': 'An error has occurred' });
//                     } else {
//                         res.send(result);
//                     }
//                 })

//         }
//     });
// });

module.exports = router;