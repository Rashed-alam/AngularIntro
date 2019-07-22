const express = require('express');
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.json());
const path = require('path');

const db = require("./db");
const collection = "todo";

//make connection with database
db.connect((err) => {
    if(!err){
        console.log('Unable to connect to database');
        process.exit(1);
    }
    else{
        app.listen(3000, () => {
           console.log('connected to database , app lisenting on port 3000'); 
        });
    }
});