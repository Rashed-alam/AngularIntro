const express = require('express'); // Fast, unopinionated, minimalist web framework for node.
const routes = require('./routes/authentication');
const mongoose = require('mongoose'); // Node Tool for MongoDB
const bodyParser = require('body-parser');


const app = express();

//connecting to mongodb
mongoose.connect('mongodb://localhost/socialnetworkDb');
mongoose.Promise = global.Promise;



//this will use body-parser object[middleware]
app.use(bodyParser.json());

 
//this will use all the routes [middleware]
app.use('/users', routes); 

//this is for error handling[middleware]
app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
});

//listening to requests
app.listen(3100, ()=>{
    console.log('Server has been started at port : 3100');
    });