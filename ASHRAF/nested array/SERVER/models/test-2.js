const mongoose = require('mongoose'); //importing the mongoose
const Schema = mongoose.Schema; //creating an object schema of mongoose

const UserSchema = new Schema({ 
    firstName:{type: String},
    lastName:{type: String},
    info:  [
         {
              flat: {type: String, unique: true},
              road: {type: String, unique: true}
            }
        ]
    
});

const User = mongoose.model('users',UserSchema);
module.exports = User; 