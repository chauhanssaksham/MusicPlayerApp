This App is created on NodeJS,
                using Express,
        View Engine used: EJS,
            Database: MongoDB,

BUGS: 
 ====1:  Geet Specials thumb sizes glitch
 ====2:  setting a song as favorite or unfavorite in queue plays it / stops it as well

TODO:
    1. Implement the "songs.js" file on a database.
            --->Creat schema === DONE
            --->Populate the Database === DONE
            --->Implement getting the songs from the database

Thoughts:
    Implement already made Music Player First, then add Layouts.
        When implementing layouts: Put 
                                        "app.set('layout extractStyles', true);"
                                            and
                                        "app.set('layout extractScripts', true);"
                                            in index.js
                                    and
                                        Follow step 17 of Notes to set up Partials and Layouts

    Add Shuffle, Replay and Volume options 

    Implement the Databses
