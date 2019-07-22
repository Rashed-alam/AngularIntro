const mongoose = require('mongoose');

//schema defination
var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type:String
    },
    mobile: {
        type: String
    },
    city: {
        type:String
    }
});

//schema registration to mongoose
mongoose.model('Employee',employeeSchema);