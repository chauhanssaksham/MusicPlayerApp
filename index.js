//intialize Node.js
const express = require('express');
const app = express();
const port = 9000;
const Songs = require('./models/songs');

//Initialize the Database:
const db = require('./config/mongoose');

//Add the static Folder, '/assets'
app.use(express.static('./assets'));

//Add Routes to the App
app.use('/', require('./routes'));

//Set up EJS as our View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

//The server listens and runs on PORT
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the Server: ${err}`);
    }
    else{
        console.log(`Server up and running on port: ${port}`);
    }
});