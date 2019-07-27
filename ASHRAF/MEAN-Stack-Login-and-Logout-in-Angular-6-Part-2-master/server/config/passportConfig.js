//calling of all the packages from nodejs library
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
//importing user schema 
var User = mongoose.model('User');
//passport is a middleware for nodejs application
passport.use(
    new localStrategy({ usernameField: 'email' },
        (username, password, done) => {
            //email address diye age database theke khuje ber korbe 
            User.findOne({ email: username },
                //err= error and user = user records
                (err, user) => {
                    //if there is any errors, then etay dhukbe   
                    if (err)
                        return done(err);
                    // unknown user
                    else if (!user)
                        return done(null, false, { message: 'Email is not registered' });
                    // wrong password
                    else if (!user.verifyPassword(password)) // call to verifyPassword function
                        return done(null, false, { message: 'Wrong password.' });
                    // authentication succeeded
                    else
                        return done(null, user);
                });
        })
);