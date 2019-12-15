const mongoose = require('mongoose');
const queueSchema = new mongoose.Schema({
    song_id : {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});
const Queue = mongoose.model('Queue', queueSchema);
module.exports = Queue;