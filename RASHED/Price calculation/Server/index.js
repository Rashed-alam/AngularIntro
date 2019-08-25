const express = require('express'); //ekhane express require korar jonno i can use get/post/put/delete
const mongoose = require('mongoose'); //importing the mongoose
const bodyParser = require('body-parser');//setting up of body-parser
const cors = require('cors'); // for cross platform resource sharing
const fabricEntry = require('./routes/fabricEntryApi');
const priceCalculation =require('./routes/priceCalculationapi');

//setting up of express app 
const app = express();

//connecting to mongodb
mongoose.connect('mongodb://localhost/Project');
mongoose.Promise = global.Promise;

//this will allow request from any port number or domain
app.use(cors());

//this will use body-parser object[middleware]
app.use(bodyParser.json());
app.use('/api/v1/fabricEntry',fabricEntry);
app.use('/api/v1/priceCalculation',priceCalculation);




//this is for error handling[middleware]
app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
});

//listening to requests
app.listen(3000, ()=>{
    console.log('Server has been started at port : 3000');
    });
