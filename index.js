//intialize Node.js
const express = require('express');
const app = express();
const port = 9000;
const db = require('./config/mongoose');        //Initialize the Database
const expressLayouts = require('express-ejs-layouts');        //Initialize Layouts
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);

app.use(express.urlencoded({extended:true}));

//Add the static Folder, '/assets'
app.use(express.static('./assets'));

//Express Layout Settings
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//Set up EJS as our View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    name: "GeetCookie",
    //Change before deployment
    secret: "lAIka",
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: (1000*60*100)
    },
    store: new MongoStore({
        mongooseConnection: db,
        autoRemove: 'disabled'
    }, function(err){
        console.log(err || "Connect-mongodb setup ok");
    })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

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