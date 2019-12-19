const Songs = require('../models/songs');        //Gets the 'songs' collection here
const Queue = require('../models/queue');        //Gets the 'Queues' collection here

//Action for Home Page
var songsArr, queueArr;

module.exports.home = function(req, res){
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
    return res.render('home', {
        songs: songsArr,
        queue: queueArr,
        title: 'Geet.com'
    });
}