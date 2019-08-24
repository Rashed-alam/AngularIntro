const express = require('express');
const Size = require('./Router/sizeapi');

const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

//set uo express app
const app = express();
mongoose.connect('mongodb://localhost/size', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
app.use(cors());
app.use(bodyparser.json());
app.use('/api', Size);
//error handling middleware
app.use(function (err, req, res, next) {
    // console.log(err);
    res.status(422).send({ error: err.message }); //to show message to client

});


app.listen(3000, function () {
    console.log('now listening for req');
});