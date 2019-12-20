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
