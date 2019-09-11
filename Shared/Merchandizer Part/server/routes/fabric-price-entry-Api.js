const express = require('express');
const router = express.Router();
const FabricPriceEntrySchema = require('../models/fabric-price-entry');


//POST
router.post('/new/:referenceId',(req,res,next)=>{ 
    FabricPriceEntrySchema.findOne({referenceId:req.params.referenceId}).then(function(a){
        if(a == null){
            FabricPriceEntrySchema.create(req.body).then(function(a){
                res.send(a);
            }).catch(next);
        }
        else{
            FabricPriceEntrySchema.update(
             {referenceId: req.params.referenceId},
         
            {$addToSet : {
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
                    perUnitPrice: req.body.fabricPriceInformation[0].perUnitPrice
                }],
                }
            }, {multi: true},
            function(err, result) {
                if (err) {
                    console.log('ERROR: ' + err);
                    res.send({'error':'An error has occurred'});
                } else {
                    res.send(result);
                }
             })
       
}
});
});

//GET any particular 
router.get('/get', function(req, res){
    // get by single stylecode
    FabricPriceEntrySchema.aggregate([
        { $unwind :'$info'},
        { $match : {'info.flat': "c2" }},
    
        ]).then(data => {
            res.send(data)
        })
});

//GET ALL
router.get('/all',(req,res,next)=>{ 
    FabricPriceEntrySchema.find({}).then(function(fabricentry){
        res.send(fabricentry);
    }).catch(next);
});

//DELETE
router.delete('/delete/:referenceId/:styleCode',function(req,res,next){
    FabricPriceEntrySchema.findOne({referenceId:req.params.referenceId}).then(function(a){
    var array = a.fabricPriceInformation;
    var l = a.fabricPriceInformation.length;
    for(let i=0; i<array.length; i++){
        console.log('check='+ array[i].styleCode);
        if(a.fabricPriceInformation[i].styleCode == req.params.styleCode){
           console.log('ok')
            array.splice(i,1);
        }
    }
    a.fabricPriceInformation = array;
    a.save().then(function(a){
        res.send(a);
    }).catch(next);
})
});

//EDIT
router.put('/update/:referenceId/:styleCode',function(req,res,next){
    FabricPriceEntrySchema.findOne({referenceId:req.params.referenceId}).then(function(a){
    // res.send(a);
    FabricPriceEntrySchema.update(
        {   
            "referenceId": req.params.referenceId, 
            "fabricPriceInformation.styleCode": req.params.styleCode
        },
    {$set: 
        { 
            "mailDate":req.body.mailDate,
            "entryDate":req.body.entryDate,
            "buyerName":req.body.buyerName,
            "size":req.body.size,
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
                "fabricPriceInformation.$.perUnitPrice": req.body.fabricPriceInformation[0].perUnitPrice
        
        }
    },
    function(err, result) {
    if (err) {
        console.log('ERROR: ' + err);
        res.send({'error':'An error has occurred'});
    } else {
        res.send(result);
    }
 });
});
});

//this part is for fetching back the entry AUtoID from database
router.get('/',function(req,res,next){
    FabricPriceEntrySchema.find({},('auto_id')).sort({"auto_id":-1}).limit(1)
    .then(data => {
        var l = data.length;
        if(l>0){
            const FabricID = Number( data[0].auto_id + 1);
            res.send({FabricID});
            
        } else {
            const FabricID = Number(1); // can change 
           res.send({FabricID});
          
        }
    }).catch(err => {
    res.status(500).send({
        message: err.message || "Error while getting Server Data"
    });
});
 });





module.exports = router; 