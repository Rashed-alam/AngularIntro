const express = require('express');
const routes = require('./routes/api');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
//set up express app
const app = express();

//connect to mongDB
mongoose.connect('mongodb://localhost/productsList');
mongoose.Promise = global.Promise;

app.use(cors());
//initilize bodyparser middleware 
app.use(bodyparser.json()); //recive req in json format

//initialize routing mdiddleware
app.use('/api',routes); // each routes have prefix '/api'

//intilize errorhandling middleware
app.use(function(err, req, res, next){
    //console.log(err);
    //show error message to user with status code 422 and error message
    res.status(422).send({er: err.message}); 
});



//listen for request
app.listen(process.env.port || 3000, function(){
    console.log('Now listeting for request');
}); 