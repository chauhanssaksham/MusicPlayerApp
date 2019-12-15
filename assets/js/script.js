//HUGE COMMENTED SECTION IS OLD CODE LOOOOL

// TO CREATE THE ADD TO QUEUE FUCTIONALITY
/*  var queue_length = 11;
var queue = document.getElementById('queue');
function addSongToQueue(imgSource, song, author){
	queue_length++;
	var node=document.createElement('li');
	var toAdd = '<div class="ol-number">'+queue_length+'</div><div><img src="'+imgSource+'"><i class="fas fa-play"></i></div><div class="name-author font-effect-3d-float"><span>'+song+'</span><br>'+author+'</div><div class="ol-heart"><i class="far fa-heart"></i></div> </li>';
	var ourLi = queue.appendChild(node);
	ourLi.innerHTML = toAdd;
	ourLi.querySelector('.fa-heart').addEventListener('click', toggleHeartsFunction);
	ourLi.addEventListener('mouseover', queueMouseOver);
	ourLi.addEventListener('mouseout', queueMouseOut);
	console.log(song, "added to queue");
};

*/

/*--------TEMPORARY CD-EFFECT ----> TO BE CHANGED ---------

//CD EFFECT
var songPlaying = false;
var currentSong;
var songThumbs = document.querySelectorAll('.playable');
for(var i=0; i<songThumbs.length; i++){
	songThumbs[i].addEventListener('click', function(){
		if (songPlaying){
			if (this == currentSong){
				songPlaying=false;
				this.classList.toggle('cd');
				currentSong = null;
			} else{
				currentSong.classList.toggle('cd');
				this.classList.toggle('cd');
				currentSong = this;
			}
		} else{
			this.classList.toggle('cd');
			currentSong = this;
			songPlaying = true;
		}
	});
}
window.alert("Hello TA, I hope you like this project as much as I did. I have been tirelessly working on it for the last 7 nights, improving it bit by bit and adding new things, as much as I could. During this, the documentation part of the project took a hit, and it's not very well documented (besides being a bit complex). So if you get stuck at understanding the code at any part of it, please feel free to whatsapp or call me at 783991160. -Saksham");

--------cd effect end----------*/

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

//CODE FOR CAROUSEL
var rightBoard = document.querySelector('.right-board'),
	leftBoard = document.querySelector('.left-board');
function moveCarouselRight(){
	var leftBoard = document.querySelector('.left-board'),
		centerBoard = document.querySelector('.center-board')
		rightBoard = document.querySelector('.right-board');
	leftBoard.removeEventListener('click', moveCarouselLeft);
	rightBoard.removeEventListener('click', moveCarouselRight);
	leftBoard.classList.remove('left-board');
	leftBoard.classList.add('center-board');
	centerBoard.classList.remove('center-board');
	centerBoard.classList.add('right-board');
	rightBoard.classList.remove('right-board');
	rightBoard.classList.add('left-board');
	//Resetting Right and left buttons
	rightBoard = document.querySelector('.right-board'),
	leftBoard = document.querySelector('.left-board');
	rightBoard.addEventListener('click',moveCarouselRight);
	leftBoard.addEventListener('click', moveCarouselLeft);
}
function moveCarouselLeft(){
	var leftBoard = document.querySelector('.left-board'),
		centerBoard = document.querySelector('.center-board')
		rightBoard = document.querySelector('.right-board');
	leftBoard.removeEventListener('click', moveCarouselLeft);
	rightBoard.removeEventListener('click', moveCarouselRight);
	leftBoard.classList.remove('left-board');
	leftBoard.classList.add('right-board');
	centerBoard.classList.remove('center-board');
	centerBoard.classList.add('left-board');
	rightBoard.classList.remove('right-board');
	rightBoard.classList.add('center-board');
	//Resetting right and left buttons
	rightBoard = document.querySelector('.right-board');
	leftBoard = document.querySelector('.left-board');
	rightBoard.addEventListener('click',moveCarouselRight);
	leftBoard.addEventListener('click', moveCarouselLeft);
}
rightBoard.addEventListener('click',moveCarouselRight);
leftBoard.addEventListener('click', moveCarouselLeft);

//CODE TO SHOW QUEUE AFTER BREAKPOINT 1
var queue_physical = document.getElementById('queue'),
	queue_head = document.getElementById('heading');
queue_head.addEventListener('click', function(){
	queue_physical.classList.toggle('show-queue');
});

//--------NOTIFICATIONS THING
var notifications_panel = document.getElementById('Notifications');
var seen = 0;
function changeToSeenNotifications(){
		notifications_panel.classList.add('seen-notifications');
};
document.getElementById('notification-bell').addEventListener('click', function(){
	notifications_panel.classList.toggle('show-notifications');
	if (seen == 1){
		window.setTimeout(changeToSeenNotifications, 2000);
	}
	if (seen == 0){
		seen = 1;
		document.getElementById('notif').style.opacity = 0;
	}
});

