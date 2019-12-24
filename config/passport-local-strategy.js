const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/users');

passport.use(new localStrategy({
    usernameField: 'userName'
}, function(userName, password, done){
    User.findOne({userName: userName}, function(err, user){
        if (err){
            console.log("Error in finding User --> Passport!");
            done(err);
        }
        if (!user || user.password != password){
            console.log("Invalid Password!");
            done(null, false);
        }
        else{
            done(null, user);
        }
    });
}));

//Serialize the user:
passport.serializeUser(function(user, done){
    done(null, user.id);
});

//deSerialize the user:
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if (err){
            console.log("Error in finding the user --> Deserializing --> Passport");
            return done(err);
        }
        return done(null, user);
    });
});

//Check if the user is authenticated:
passport.checkAuthentication = function(req,res, next){
    //if the user is signed in, pass on the control to the next function (controllers' action)
    if(req.isAuthenticated()){
        return next();
    }
    //if the user is not signed in
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function(req,res, next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;