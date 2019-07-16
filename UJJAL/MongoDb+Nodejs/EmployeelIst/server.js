//export dbconnection,employeController,express,path,express-handlebar

require('./models/db');
const express = require('express');
const handleres = require('express-handlebars')
const path = require('path');

const employeeController = require('./controllers/employeeController');

var app = express('hbs', handleres({}));

app.set('views',path.join(__dirname, '/views/')); //set view for employee
app.engine('hbs',handleres({extname: 'hbs', defaultLayout: 'mainLayout',layoutsDir: __dirname + '/views/layouts/'}));
app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

//configure routing for employee
app.use('/employee',employeeController);