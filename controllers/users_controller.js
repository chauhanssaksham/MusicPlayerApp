const Songs = require('../models/songs');        //Gets the 'songs' collection here

var songsArr, queueArr;
Songs.find({}, function(err, songs){
    if (err){
        console.log("Error in fetching Songs!");
    }
    else{
        songsArr = songs;
    }
});
module.exports.signIn = function(req,res){
    return res.render('users/sign-in', {
        title: "Sign In!",
        songsArr: songsArr
    });
}
module.exports.signUp = function(req,res){
    return res.render('users/sign-up', {
        title: "Sign",
        songsArr: songsArr
    });
}