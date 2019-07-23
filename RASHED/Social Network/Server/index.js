const express = require('express');
const registration = require('./Routes/Userapi');
const blogpost = require('./Routes/postapi');

const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/tangerineWeb', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
app.use(cors());
app.use(bodyparser.json());
//initialize routes
app.use('/Userapi', registration);
app.use('/postapi',blogpost);
//error handling middleware
app.use(function (err, req, res, next) {
    // console.log(err);
    res.status(422).send({ error: err.message }); //to show message to client
});
//initialize cors
//app.use(cors({origin:'http://localhost:4200'}));





//listen for req.

app.listen(3000, function () {
    console.log('now listening for req');
});