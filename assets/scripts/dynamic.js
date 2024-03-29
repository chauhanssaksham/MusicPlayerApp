/*----------To Add songs in the queue manually----------*/
var addSongButtons = document.querySelectorAll('.addSong');
for (var i=0; i<addSongButtons.length; i++){
	addSongButtons[i].addEventListener('click', function(){
		var songId = this.getAttribute('data-songId');
		if (songs[songId].inQueue){
			alert('Song already in the queue!');
		} else{
		addSongToQueue(songId);
		}
	});
}
/*----------Manually add songs to queue end----------*/
/*-----------TO SHOW ALL TOOLTIPS---------*/
var ellipsises = document.querySelectorAll('.fa-ellipsis-v');
for (var i=0; i<ellipsises.length; i++){
	ellipsises[i].addEventListener('click', function(){
		if (document.querySelector('.show-tooltip') != null && document.querySelector('.show-tooltip') != this.parentElement.querySelector('.tooltip')){

			document.querySelector('.show-tooltip').classList.remove('show-tooltip');
		}
		this.parentElement.querySelector('.tooltip').classList.toggle('show-tooltip');
	});
}
/*------------TOOLTIPS END----------*/
/*----------Code to hide Songs from top picks----------*/
var hideButtons = document.querySelectorAll('.removeSong');
var remGeetSpecials =0, remTopPicks = 0; 
for(var i=0; i<hideButtons.length; i++){
	hideButtons[i].addEventListener('click', function(){
		var toRemove = this.parentNode.parentNode.parentNode.parentNode;
		toRemove.classList.add('removedElem');
		if (toRemove.parentNode.parentNode.getAttribute('id') == "geet-specials"){
			remGeetSpecials++;
			if (remGeetSpecials == geetSpecialsArr.length){
				toRemove.parentNode.parentNode.classList.add('removedElem');
			}
		}
		else {
			remTopPicks++;
			if (remTopPicks == topPicksArr.length){
				toRemove.parentNode.parentNode.classList.add('removedElem');
			}
		}
	});
}
/*----------Top picks hide code end ------------*/
/*----------Code to Play a Song-----------------*/
var currentSong, lastSong;
var songPlayingCurrently = false;
var playerImg = document.getElementById('playerImg'),
	playerSongInfo = document.getElementById('playerSongInfo'),
	songDuration = document.getElementById('playerSongDuration');
var prevButton = document.getElementById('prev-button'),
	playPauseButton = document.getElementById('play-pause-button'),
	nextButton = document.getElementById('next-button');

function toggleSong(){
	if (songPlayingCurrently){
		playPauseButton.classList.remove('fa-pause');
		playPauseButton.classList.add('fa-play');
		currentSong.querySelector('img').classList.remove('cd-animation');
	} else {
		playPauseButton.classList.remove('fa-play');
		playPauseButton.classList.add('fa-pause');
		currentSong.querySelector('img').classList.add('cd-animation');
	}
	if(songPlayingCurrently){
		stopSlider();
	} else {
		moveSlider();
	}
	songPlayingCurrently = !songPlayingCurrently;
}
function nextSong(){
	var currentSongId = currentSong.getAttribute('data-songId');
	var indexInQueue = songsInQueue.indexOf(Number(currentSongId));
	if (indexInQueue == songsInQueue.length-1){
		playSong(Number(songsInQueue[0]));
	}
	else {
		playSong(Number(songsInQueue[indexInQueue+1]));
	}
}
function prevSong(){
	var currentSongId = currentSong.getAttribute('data-songId');
	var indexInQueue = songsInQueue.indexOf(Number(currentSongId));
	if (indexInQueue == 0){
		playSong(songsInQueue.length-1);
	}
	else {
		playSong(Number(songsInQueue[indexInQueue-1]));
	}
}

function playSong(songId){
	if(!songs[songId].inQueue){
		//Song is not in the queue, add it to the queue first.
		addSongToQueue(songId);
	}
	lastSong = currentSong;
	for (var i=0; i<queue.childElementCount; i++){
		if (queue.children[i].getAttribute('data-songId') == songId){
			currentSong = queue.children[i];
			break;
		}
	}
	if (lastSong != null){
		lastSong.querySelector('img').classList.remove('cd');
		if (songPlayingCurrently){
			lastSong.querySelector('img').classList.remove('cd-animation');
		}
	}
	currentSong.querySelector('img').classList.add('cd');
	currentSong.querySelector('img').classList.add('cd-animation');
	playerImg.setAttribute('src', '/images/thumbs/' + songs[songId].imgUrl);
	var toAddText = '<span>' + songs[songId].songName + '</span><br>' + songs[songId].artist;
	playerSongInfo.innerHTML = toAddText;
	songDuration.innerHTML = songs[songId].duration;
	slider.setAttribute('max', 100*minToSec(songs[songId].duration));
	slider.value = 0;
	timePlayed.innerHTML = "0:00";
	if (!songPlayingCurrently){
		playPauseButton.classList.remove('fa-play');
		playPauseButton.classList.add('fa-pause');
	}
	//at the end
	songPlayingCurrently = true;
	stopSlider();
	moveSlider();
};
playSong(songsInQueue[0]);

var playSongButtons = document.querySelectorAll('.playSong');
for (var i=0; i<playSongButtons.length; i++){
	playSongButtons[i].addEventListener('click', function(){
		playSong(this.getAttribute('data-songId'));
	});
}
/*-----------Code to play song ends------------*/

/*-----------Code for moving slider if song is playing---------*/
function moveSliderHelper(){
	if (slider.value == Number(slider.getAttribute('max'))){
		nextSong();
	} else {
	slider.value++;
	updateSlider();
	}
}
var id;
function moveSlider(){
	id = setInterval(moveSliderHelper, 10);
}
function stopSlider(){
	clearInterval(id);
}
/*--------------End moving slider code----------------------*/