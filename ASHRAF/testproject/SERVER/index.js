const express = require('express'); //ekhane express require korar jonno i can use get/post/put/delete
const mongoose = require('mongoose'); //importing the mongoose
const bodyParser = require('body-parser');//setting up of body-parser
const cors = require('cors'); // for cross platform resource sharing

const user = require('./routes/userApi');
const app = express();


//connecting to mongodb
mongoose.connect('mongodb://localhost/Test');
mongoose.Promise = global.Promise;

//this will allow request from any port number or domain
app.use(cors());

//this will use body-parser object[middleware]
app.use(bodyParser.json());


app.use('/api/user', user);


//this is for error handling[middleware]
app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
});

//listening to requests
app.listen(4000, ()=>{
    console.log('Server has been started at port : 4000');
    });


    