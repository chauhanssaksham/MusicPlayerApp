var songs;
var songsInQueue = [];
$.ajax({
    type:'get',
    url: '/fetch/allSongs',
    success: function(data){
        songs = data.data.songs;
    }, error: function(err){
        console.log('error:', err.responseText)
;    }
});