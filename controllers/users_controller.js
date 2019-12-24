const User = require('../models/users');        //Gets the 'songs' collection here
module.exports.signIn = function(req,res){
    return res.render('users/sign-in', {
        title: "Sign In!"
    });
}
module.exports.signUp = function(req,res){
    return res.render('users/sign-up', {
        title: "Sign"
    });
}
module.exports.create = function(req,res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('/');
    }
    User.findOne({$or :[{email:req.body.email}, {userName: req.body.userName}]}, function(err, user){
        if(err){console.log("Error in fetching from the database while creating a new user!"); return;}
        if (user){
            return res.redirect('back');
        }
        else{
            User.create(req.body, function(err,user){
                if(err){console.log("Error in creating the user!"); return;}
                return res.redirect('back');
            });
        }
    });
}

module.exports.createSession = function(req, res){
    return res.redirect('/');
}