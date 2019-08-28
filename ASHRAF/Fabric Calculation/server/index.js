const express = require('express'); //ekhane express require korar jonno i can use get/post/put/delete
const mongoose = require('mongoose'); //importing the mongoose
const bodyParser = require('body-parser');//setting up of body-parser
const cors = require('cors'); // for cross platform resource sharing
const buyer = require('./routes/buyerInfoApi');
const sleeves = require('./routes/sleeveTypeApi');
const fabrics = require('./routes/fabricTypeApi');
const items = require('./routes/itemEntryApi');
const fabricEntry = require('./routes/fabricEntryApi');
const uom = require('./routes/uomApi'); //importing the routes from api file
const size = require('./routes/SizeApi');
const priceCalculation =require('./routes/priceCalculationapi');
const Currency=require('./routes/currencyapi');
//setting up of express app 
const app = express();

//connecting to mongodb
mongoose.connect('mongodb://localhost/Project');
mongoose.Promise = global.Promise;

//this will allow request from any port number or domain
app.use(cors());

//this will use body-parser object[middleware]
app.use(bodyParser.json());

//this will use all the routes [middleware]
app.use('/api/v1/uom', uom); //for showing the Unit of measurement
app.use('/api/v1/buyer',buyer);// for showing the buyers 
app.use('/api/v1/sleevetype',sleeves);
app.use('/api/v1/fabrictype',fabrics);
app.use('/api/v1/item',items);
app.use('/api/v1/fabricEntry',fabricEntry);
app.use('/api/v1/sizelist',size);
app.use('/api/v1/priceCalculation',priceCalculation);
app.use('/api/v1/currency',Currency);



//this is for error handling[middleware]
app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
});

//listening to requests
app.listen(3000, ()=>{
    console.log('Server has been started at port : 3000');
    });


    