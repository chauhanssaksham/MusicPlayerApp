module.exports.SMW = function(req,res){
    return res.render('artists/SMW', {
        title: "Sidhu Moosewala",
        songsArr: songsArr
    });
}