const Songs = require('../models/songs');

module.exports.allSongs = async function(req,res,next){
    let songs = await Songs.find({});
    res.locals.songsArr = songs;
    if(req.xhr){
        return res.status(200).json({
            data: {
                songs: songs
            },
        });
    }
    else{
        console.log("Error in fetching songs");
        return;
    }
}