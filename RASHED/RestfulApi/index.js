const express=require('express');
const routes=require('./routes/api');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');


//set uo express app
const app=express();
//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise=global.Promise;

app.use(bodyparser.json());
//initialize routes
app.use('/api',routes);
 
//listen for req.

app.listen(4000,function(){
    console.log('now listening for req');
});