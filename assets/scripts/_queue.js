//CODE TO SHOW QUEUE AFTER BREAKPOINT 1
var queue_physical = document.getElementById('queue'),
	queue_head = document.getElementById('heading');
queue_head.addEventListener('click', function(){
	queue_physical.classList.toggle('show-queue');
});

/*--------Functions to toggle the Hearts between Red and empty when clicked, and li style effects---------*/
function toggleHeartsFunction(){
	this.classList.toggle('far');
	this.classList.toggle('fas');
	this.classList.toggle('red');
};
function queueMouseOver(){
	var div = this.getElementsByClassName('name-author');
	div[0].classList.remove('font-effect-3d-float');
	div[0].classList.add('font-effect-anaglyph');
};
function queueMouseOut(){
	var div = this.getElementsByClassName('name-author');
	div[0].classList.add('font-effect-3d-float');
	div[0].classList.remove('font-effect-anaglyph');
}
/*------------HEARTS AND LI STYLE EFFECTS FINISH-------------*/

/*---------------FUNCTION TO ADD A SONG TO the QUEUE-----------*/
var queue=document.getElementById('queue');				
function addSongToQueue(songId){
	songs[songId].inQueue = true;
	songsInQueue.push(songId);
	var node=document.createElement('li');
	var itemNum = songsInQueue.length;
	if (itemNum < 10){
		itemNum = '0' + itemNum;
	} 
	var toAdd = '<div class="ol-number">'+itemNum+'</div><div><img src="images/thumbs/'+songs[songId].imgUrl+'"><i class="fas fa-play"></i></div><div class="name-author font-effect-3d-float"><span>'+songs[songId].songName+'</span><br>'+songs[songId].artist+'</div><div class="ol-heart"><i class="far fa-heart"></i></div> </li>';
	var ourLi = queue.appendChild(node);
	ourLi.innerHTML = toAdd;
	ourLi.setAttribute('data-songId', songId);
	ourLi.addEventListener('click', function(){
		if (currentSong.getAttribute('data-songId') == songId){
			toggleSong();
		} else {
		playSong(songId);
	}
	});
	if(songs[songId].isFav){
		ourLi.querySelector('.fa-heart').classList.toggle('far');
		ourLi.querySelector('.fa-heart').classList.toggle('fas');
		ourLi.querySelector('.fa-heart').classList.toggle('red');
	}
	ourLi.querySelector('.fa-heart').addEventListener('click', toggleHeartsFunction);
	ourLi.addEventListener('mouseover', queueMouseOver);
	ourLi.addEventListener('mouseout', queueMouseOut);
	console.log("song with songId ", songId, " added to queue");
};
/*--------------GENERATES THE STARTING QUEUE, ON PAGE LOAD------------*/
for(var i=0; i<songs.length; i++){
	if (songs[i].inQueue){
		addSongToQueue(i);
	}
}
/*----------------Starting queue generator end--------------*/