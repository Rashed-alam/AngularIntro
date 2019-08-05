const express = require('express'); //ekhane express require korar jonno i can use get/post/put/delete
const routes = require('./routes/api'); //importing the routes from api file
const mongoose = require('mongoose'); //importing the mongoose
const bodyParser = require('body-parser');//setting up of body-parser
const cors = require('cors'); // for cross platform resource sharing

//setting up of express app 
const app = express();

//connecting to mongodb
mongoose.connect('mongodb://localhost/ChipsDb');
mongoose.Promise = global.Promise;

//this will allow request from any port number or domain
app.use(cors());

//this will use body-parser object[middleware]
app.use(bodyParser.json());

 
//this will use all the routes [middleware]
app.use('/chips', routes); 

//this is for error handling[middleware]
app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
});

//listening to requests
app.listen(3100, ()=>{
    console.log('Server has been started at port : 3100');
    });


    