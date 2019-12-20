//Song-player slider calculations:

function minToSec(songLength){
	var colonIndex = songLength.indexOf(":");
	var mins = Number(songLength.slice(0,colonIndex));
	var secs = Number(songLength.slice(colonIndex+1, colonIndex+3));
	return 60*mins + secs;
}; 
function secToMin(secsSongPlayed){
	var mins = Math.floor(secsSongPlayed/60);
	var secs = secsSongPlayed%60;
	if (secs < 10){
		secs = '0' + secs;
	}
	return mins + ":" + secs;
};
var timePlayed = document.getElementById('song_time_played'),
	slider = document.getElementById("songSlider");
function updateSlider(){
	var songLength = minToSec(document.getElementById('playerSongDuration').innerHTML);
	var secsSongPlayed = Math.round(((slider.value)*songLength) / slider.getAttribute('max'));
	var newText = secToMin(secsSongPlayed);
	timePlayed.innerText = newText; 
}
slider.addEventListener('change', function(){
	updateSlider();
});