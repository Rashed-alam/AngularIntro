const express = require('express');
const router = express.Router();
const knittingNdyeingType = require('../models/knittingNdyeing');
var Promise = require('promise');


router.post('/new/:referenceId/:styleCode', (req, res, next) => {
  knittingNdyeingType.findOne({
    'referenceId': req.params.referenceId,
    'styleCode': req.params.styleCode
  }).then(function (a) {
    if (a == null) {
      knittingNdyeingType.create(req.body).then(function (a) {
        res.send(a);

      }).catch(next);

    } else {
      res.send(a);
      knittingNdyeingType.update({
          referenceId: req.params.referenceId,
          styleCode: req.params.styleCode
        },

        {
          $addToSet: {
            kintting: [{
              knittingType: req.body.kintting[0].knittingType,
              color: req.body.kintting[0].color,
              weight: req.body.kintting[0].weight,
              row: req.body.kintting[0].row,
              col: req.body.kintting[0].col,
            }],
          }
        }, {
          multi: true
        },
        function (err, result) {
          if (err) {
            //  console.log('ERROR: ' + err);
            res.send({
              'error': 'An error has occurred'
            });
          } else {
            res.send(result);
          }
        })

    }
  });
});
//get every object
router.post('/all/:referenceId/:styleCode', (req, res, next) => {
  knittingNdyeingType.findOne({
    'referenceId': req.params.referenceId,
    'styleCode': req.params.styleCode
  }).then(function (a) {
    res.send(a);
    // console.log(a.kintting);
  }).catch(next);
});
// get and delete then creates

router.post('/update/:referenceId/:styleCode', (req, res, next) => {
  knittingNdyeingType.findOne({
    'referenceId': req.params.referenceId,
    'styleCode': req.params.styleCode
  }).then(function (a) {
    if (a == null) {

      res.send("empty");
    } else {
      knittingNdyeingType.findOneAndDelete({
        'referenceId': req.params.referenceId,
        'styleCode': req.params.styleCode
      }).then(
        knittingNdyeingType.create(req.body).then(function (a) {
          console.log(a);
          res.send(a);
        }).catch(next)
      )
      //  res.send(a);
    }
  });
});

// delete api
router.delete('/delete/:referenceId/:styleCode', (req, res, next) => {
  knittingNdyeingType.findOneAndDelete({
    'referenceId': req.params.referenceId,
    'styleCode': req.params.styleCode
  }).then(function (a) {
    res.send(re)
  });
});

module.exports = router;
