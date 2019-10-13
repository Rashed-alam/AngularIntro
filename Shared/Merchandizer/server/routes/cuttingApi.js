const express = require('express');
const router = express.Router();
const CuttingSchema = require('../models/cutting');

//POST
router.post('/new/:referenceId/:styleCode', (req, res, next) => {
    CuttingSchema.findOne({ 'referenceId': req.params.referenceId, 'styleCode': req.params.styleCode }).then(function(a) {
        if (a == null) {
            CuttingSchema.create(req.body).then(function(a) {
                // console.log(a);
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




module.exports = router;