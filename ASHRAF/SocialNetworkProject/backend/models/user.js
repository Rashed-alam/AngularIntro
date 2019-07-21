const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    _id:  String,
    name: {
        type: String,
        required: [true,"Name Field is required"]
    },
    email: {
        type: String,
        required: [true,"Email Field is required"],
        unique: [true, "Email must be unique"],
        lowercase: true
    },
    phone: {
        type: String,
        required: [true,"Contact Field is required"],
        unique: [true, "Phone number must be unique"]
    },
    password: {
        type: String,
        required: [true,"Password Field is required"]
    }
  });

  //creating an object model of mongoose
const User = mongoose.model('user',UserSchema);


//exporting the schema as model 'User'
module.exports = User; 