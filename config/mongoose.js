const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MusicPlayer_development', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
const db = mongoose.connection;
db.on('error', console.error.bind('console', "Error in connecting to the Database"));
db.once('open', function(){
    console.log("Conntected to the Database :: Mongodb :: MusicPlayer_development");
});
module.exports = db;