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
/*------FUNCTIONS TO ADD SONGS DYNAMICALLY TO FORMAT 1 AND 2 TYPE SECTIONS OF THE HOME PAGE -------*/
function addSongToFormat1(songId, parentId){
	var parentElem = document.getElementById(parentId).querySelector('.flex');
	var node=document.createElement('div');
	var toAdd = '<div class="album-cover playable"><img src="/images/thumbs/'+songs[songId].imgUrl+'" alt="'+songs[songId].songName+'" class="playSong" data-songId="'+songId+'"><i class="fas fa-play playSong" data-songId="'+songId+'"></i></div><div class="name-auth font-effect-3d-float"><span>'+songs[songId].songName+'</span><br>'+songs[songId].artist+'<br>'+songs[songId].duration+'</div><div class="rightSide"><div class="relative"><i class="fas fa-ellipsis-v"></i><div class="tooltip"><div class="addSong" data-songId="'+songId+'">Add to queue <i class="fas fa-plus-circle"></i></div><div class="removeSong">Not interested <i class="fas fa-times-circle"></i></div></div></div></div>';
	var ourDiv = parentElem.appendChild(node);
	ourDiv.innerHTML = toAdd;
	console.log('song id '+songId+'added to '+ parentId);
};
function addSongToFormat2(songId, parentId){
	var parentElem = document.getElementById(parentId).querySelector('div');
	var node=document.createElement('div');
	var toAdd = '<img src="/images/thumbs/'+songs[songId].imgUrl+'" alt="'+songs[songId].songName+'" data-songId="'+songId+'" class="playSong"><i class="fas fa-play playSong" data-songId="'+songId+'"></i><div><span>'+songs[songId].songName+'</span>-'+songs[songId].artist+'</div>';
	var ourDiv = parentElem.appendChild(node);
	ourDiv.classList.add('thumb-image');
	ourDiv.classList.add('playable');
	ourDiv.innerHTML = toAdd;
	console.log('song id '+songId+'added to '+ parentId);
};
/*---------------FUNCTION END-----------*/
/*----------GENERATES TOP PICKS AND GEET SPEICALS ON PAGE LOAD-------------*/
for (var i=0; i<topPicksArr.length; i++){
	addSongToFormat1(topPicksArr[i], "top-picks");
}
for (var i=0; i<geetSpecialsArr.length; i++){
	addSongToFormat1(geetSpecialsArr[i], "geet-specials");
}
/*----------TOP PICKS GENERATOR END----------------------*/

/*----------GENERATES TOP CHARTS HOOLWOOD AND BOLLYWOOD ON PAGE LOAD-------------*/
for (var i=0; i<topChartsHollywood.length; i++){
	addSongToFormat2(topChartsHollywood[i], "top-charts-hollywood");
}
for (var i=0; i<topChartsBollywood.length; i++){
	addSongToFormat2(topChartsBollywood[i], "top-charts-bollywood");
}
/*----------TOP PICKS GENERATOR END----------------------*/
