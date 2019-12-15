//intialize Node.js
const express = require('express');
const app = express();
const port = 9000;

//Add Routes to the App
app.use('/', require('./routes'));

//The server listens and runs on PORT
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the Server: ${err}`);
    }
    else{
        console.log(`Server up and running on port: ${port}`);
    }
});