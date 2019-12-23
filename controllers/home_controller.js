const Songs = require('../models/songs');        //Gets the 'songs' collection here
const Queue = require('../models/queue');        //Gets the 'Queues' collection here

//Action for Home Page
var songsArr, queueArr;
Songs.find({}, function(err, songs){
    if (err){
        console.log("Error in fetching Songs!");
    }
    else{
        songsArr = songs;
    }
});
Queue.find({}, function(err, queue){
    if (err){
        console.log("Error in fetching Songs!");
    }
    else{
        queueArr = queue;
    }
});
module.exports.home = function(req, res){
    return res.render('home', {
        songsArr: songsArr,
        queue: queueArr,
        title: 'Geet.com'
    });
}