const mongoose = require('mongoose');
const songSchema = new mongoose.Schema({
    indexID: {                  //In original Songs.js I had an Index attribute to each song for my own ease of use
        type: Number,            //This is nonsensical now, and must be removed later and instead the 'ID' supplied
        required: true          // by mongoDB should be used
    },
    songName: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    inQueue: {
        type: Boolean,
        required: true,
        default: false
    },
    isFav: {
        type: Boolean,
        required: true,
        default: false
    }
});
const Songs = mongoose.model('Songs', songSchema);
module.exports = Songs;