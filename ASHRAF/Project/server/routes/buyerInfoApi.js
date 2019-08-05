const express = require("express");
const router = express.Router();
const BuyerInfo = require("../models/buyerInfo");

// INSERT BuyerInfo

router.post('/insert', function (req, res) {

    const binfo = new BuyerInfo({

        buyerCode: req.body.buyerCode,
        name: req.body.name,
        mobileNo: req.body.mobileNo,
        email: req.body.email,
        house: req.body.house,
        road: req.body.road,
        sector: req.body.sector,
        vatRegNo: req.body.vatRegNo,
        binNo: req.body.binNo,
        eTin: req.body.eTin,
        // tds: req.body.tds,
        tds: req.body.tds== true?1:0,
        sisterConcern: req.body.sisterConcern,


    })

    binfo.save((err, aBuyer) => {
        if (err) return res.json(err);
        res.json(aBuyer)
    });
    // //res.send("insert buyer")

})

// GET all  BuyerInfo

router.get('/all', function (req, res) {
    BuyerInfo.find({}).sort({ _id: -1 }).exec(function (err, alldatas) {
        if (err) return res.json(err);
        res.send(alldatas);

    })
    //res.send("get all BuyerInfo")
});


// Get a BuyerInfo

router.get('/:id', function (req, res) {

    BuyerInfo.find({ buyerId: req.params.id }, (err, alldata) => {
        if (err) return res.json(err);
        res.send(alldata);
    })

    //res.send("get a buyer info")
});



// UPDATE 
router.put('/:id', function (req, res) {
    BuyerInfo.findOneAndUpdate({ buyerId: req.params.id }, { $set: req.body }, (err, BuyerInfo) => {
        if (err) return res.json(err);
        res.json(BuyerInfo);
    });

    //res.send("update BuyerInfo ")
})



// DELETE Buyer
router.delete('/:id', function (req, res) {

    BuyerInfo.deleteOne({ buyerId: req.params.id }, (err, data) => {
        if (err) return res.json(err);
        res.send(data);
    })
    //res.send("delete buyer")
})



module.exports = router;