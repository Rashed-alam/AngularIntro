require('./config/config');
require('./models/db');
require('./config/passportConfig');
require('./models/location'); 

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');
const Location=require('./routes/location.router');
const blogpost=require('./routes/post.router');


var app = express();

// middleware
app.use(bodyParser.json()); 
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);
//location
app.use('/location',Location);
//post
app.use('/post',blogpost);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));