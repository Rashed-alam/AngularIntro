const express = require('express');
const router = express.Router();
const CuttingSchema = require('../models/cutting');

//POST
router.post('/new/:referenceId/:styleCode', (req, res, next) => {
    CuttingSchema.findOne({ 'referenceId': req.params.referenceId, 'styleCode': req.params.styleCode }).then(function(a) {
        if (a == null) {
            CuttingSchema.create(req.body).then(function(a) {
                res.send(a);

            }).catch(next);
        } else {
            CuttingSchema.update({
                    referenceId: req.params.referenceId,
                    styleCode: req.params.styleCode
                },

                {
                    $addToSet: {
                        cutting: [{
                            knittingType: req.body.cutting[0].size,
                            color: req.body.cutting[0].color,
                            weight: req.body.cutting[0].weight,
                            row: req.body.cutting[0].row,
                            col: req.body.cutting[0].col
                        }],
                        remarks: req.body.remarks
                    }
                }, { multi: true },
                function(err, result) {
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

//GET
//fetching the list of everything from database
router.get('/everything', (req, res, next) => {
    CuttingSchema.find({}).then(function(a) {
        res.send(a);
    }).catch(next);
});

//GET ALL entries INFORMATION  by reference id and styleCode
router.post('/all/:referenceId/:styleCode', (req, res, next) => {
    CuttingSchema.findOne({ referenceId: req.params.referenceId, styleCode: req.params.styleCode }).then(function(a) {
        res.send(a);
    }).catch(next);
});

//EDIT by matching reference id and _id
// router.put('/update/:referenceId/:_id', function(req, res, next) {
//     CuttingSchema.findOne({ referenceId: req.params.referenceId }).then(function(a) {
//         // res.send(a);
//         CuttingSchema.update({
//                 "referenceId": req.params.referenceId,
//                 "cutting._id": req.params._id

//             }, {
//                 $set: {
//                     "remarks": req.body.remarks,
//                     "cutting.$.color": req.body.cutting[0].color,
//                     "cutting.$.size": req.body.cutting[0].size,
//                     "cutting.$.weight": req.body.cutting[0].weight
//                 }
//             },
//             function(err, result) {
//                 if (err) {
//                     console.log('ERROR: ' + err);
//                     res.send({ 'error': 'An error has occurred' });
//                 } else {
//                     res.send(result);
//                 }
//             });
//     });
// });
//EDIT item by their nested Id
// router.put('/update/:_id', function(req, res, next) {
//     CuttingSchema.findOne({ _id: req.params._id }).then(function(a) {
//         // res.send(a);
//         CuttingSchema.update({
//                 "cutting._id": req.params._id
//             }, {
//                 $set: {
//                     "remarks": req.body.remarks,
//                     "cutting.$.color": req.body.cutting[0].color,
//                     "cutting.$.size": req.body.cutting[0].size,
//                     "cutting.$.weight": req.body.cutting[0].weight
//                 }
//             },
//             function(err, result) {
//                 if (err) {
//                     console.log('ERROR: ' + err);
//                     res.send({ 'error': 'An error has occurred' });
//                 } else {
//                     res.send(result);
//                 }
//             });
//     });
// });


//DELETE nested items
// router.delete('/delete/:referenceId/:styleCode/:_id', function(req, res, next) {
//     CuttingSchema.findOne({ referenceId: req.params.referenceId, styleCode: req.params.styleCode }).then(function(a) {
//         var lengthofA = a.cutting.length;
//         if (lengthofA > 1) {
//             var array = a.cutting;
//             var l = a.cutting.length;
//             for (let i = 0; i < array.length; i++) {
//                 //  console.log('check='+ array[i].styleCode);
//                 if (a.cutting[i]._id == req.params._id) {
//                     // console.log('ok')
//                     array.splice(i, 1);
//                 }
//             }
//             a.cutting = array;
//             a.save().then(function(a) {
//                 res.send({ "message": "ENTRY SUCCESSFULLY DELETED 1" });
//             }).catch(next);
//         } else {
//             CuttingSchema.findOneAndDelete({ referenceId: req.params.referenceId }).then(function(fabricentry) {
//                 res.send({ "message": "ENTRY SUCCESSFULLY DELETED 2" });
//             }).catch(next);
//         }
//     });
// });

//DELETE WHOLE OBJECT
// router.delete('/delete/:_id', (req, res, next) => {
//     CuttingSchema.findOneAndDelete({ _id: req.params._id }).then(function(fabricentry) {
//         res.send({ "message": "Deleted Sucessfully" });
//     }).catch(next);

// });

module.exports = router;