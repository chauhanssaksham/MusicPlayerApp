const express = require('express');
const app = express();
const port = 9000;
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the Server: ${err}`);
    }
    else{
        console.log(`Server up and running on port: ${port}`);
    }
});