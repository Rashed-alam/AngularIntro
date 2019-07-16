const express = require('express');
const routes = require('./routes/api');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');


//set uo express app
const app = express();
//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyparser.json());
//initialize routes
app.use('/api', routes);
//error handling middleware
app.use(function (err, req, res, next) {
    // console.log(err);
    res.status(422).send({ error: err.message }); //to show message to client

});

//listen for req.

app.listen(3000, function () {
    console.log('now listening for req');
});