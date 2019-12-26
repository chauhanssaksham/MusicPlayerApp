const Songs = require('../models/songs');
module.exports.fetchSongs = async function(req,res,next){
    let songs = await Songs.find({});
    res.locals.songsArr = songs;
    next();
}