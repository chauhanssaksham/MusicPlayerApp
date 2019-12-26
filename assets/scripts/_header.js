//--------NOTIFICATIONS THING AND PROFILE- PICTURE MENU THING-------//
{
let notifications_panel = document.getElementById('Notifications');
let profileMenu = document.getElementById('profile-picture-menu');

function changeToSeenNotifications(){
	notifications_panel.classList.add('seen-notifications');
};
function toggleNotifications(){
	notifications_panel.classList.toggle('show-popup');
	if (profileMenu.classList.contains('show-popup')){
		profileMenu.classList.toggle('show-popup');
	}
}
function toggleProfileMenu(){
	profileMenu.classList.toggle('show-popup');
	if (notifications_panel.classList.contains('show-popup')){
		notifications_panel.classList.toggle('show-popup');
	}
}
var seen = 0;
document.getElementById('notification-bell').addEventListener('click', function(){
	toggleNotifications();
	if (seen == 1){
		window.setTimeout(changeToSeenNotifications, 2000);
	}
	if (seen == 0){
		seen = 1;
		document.getElementById('notif').style.opacity = 0;
	}
});
document.getElementById('profile-menu').addEventListener('click', function(){
	toggleProfileMenu();
});
}