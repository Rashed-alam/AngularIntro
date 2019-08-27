const express = require('express');
const router = require('./api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');

//mongoose.connect('mongodb://localhost:27017/SocialNetwork', { useNewUrlParser: true }).then(() => {

   // console.log("Successfully connected to the database");
//}).catch(err => {
  //  console.log('Could not connect to the database. Exiting now...');
  //  process.exit();
//});

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

//set up express app
const app = express();

app.use(bodyParser.json());

app.use(cors());


//initialize routes
app.use('/api', require('./api'));


//error handling middleware
app.use(function(err, req, res, next){
    //console.log(err);
    res.status(422).send({error:err.message});

});

//listen for requests
app.listen(4000, function(){
    console.log('now listening for requests at http://localhost:4000/api/');
}); 

