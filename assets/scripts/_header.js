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