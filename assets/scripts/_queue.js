//CODE TO SHOW QUEUE AFTER BREAKPOINT 1
var queue_physical = document.getElementById('queue'),
	queue_head = document.getElementById('heading');
queue_head.addEventListener('click', function(){
	queue_physical.classList.toggle('show-queue');
});