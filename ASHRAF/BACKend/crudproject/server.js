const express = require('express'); //ekhane express require korar jonno i can use get/post/put/delete
const routes = require('./routes/api'); //importing the routes from api file
const mongoose = require('mongoose'); //importing the mongoose
const bodyParser = require('body-parser');//setting up of body-parser

//setting up of express app 
const app = express();

//connecting to mongodb
mongoose.connect('mongodb://localhost/ChipsDb');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());//this will use body-parser object

app.use('/chips', routes); //this will use all the routes 

//listening to requests
app.listen(3000, ()=>{
    console.log('Server has been started at port : 3000');
    });


    