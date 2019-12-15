/*The songs array, holds the list of songs. Every "song" is an object with the following properties:
	indexID: obv not needed, but this is for my ease during developing.
	songName, duration, artist are self explanatory.
	imgUrl is the name of the image in images/thumbs/ which corresponds to that song.
	inQueue: If true, then that particular song will be in the queue on page load. As songs are added
	to the queue, their inQueue is changed to true.
	If the user tries to add a song to the queue, that is already in the queue, and hence, has its inQueue
	set to true, then the window will display an error message that the song is already in the queue.
	isFav: If set to true, then on page load, that songs' heart icon (int the queue) will be red. 
	A song-Id is just the indexID of the song in the songs[] array.
	So songs[song-Id] when song-Id = 2, get us the object (song) "Starboy" by "The weeknd"*/
var songs = [
	{indexID:0, songName:"Nothing without you", duration:"3:19", imgUrl:"starboy.jpg", artist: "The Weeknd", inQueue: true, isFav:true},
	{indexID:1, songName:"Stargirl Interlude", duration:"1:51", imgUrl:"starboy.jpg", artist: "The Weeknd", inQueue: true, isFav:false},
	{indexID:2, songName:"Starboy", duration:"3:50", imgUrl:"starboy.jpg", artist: "The Weeknd", inQueue: true, isFav:true},
	{indexID:3, songName:"Love to lay", duration:"3:43", imgUrl:"starboy.jpg", artist: "The Weeknd", inQueue: true, isFav:true},
	{indexID:4, songName:"Devil", duration:"4:07", imgUrl:"pbx1.jpg", artist: "Sidhu Moosewala", inQueue: true, isFav:false},
	{indexID:5, songName:"Selfmade", duration:"3:04", imgUrl:"pbx1.jpg", artist: "Sidhu Moosewala", inQueue: true, isFav:true},
	{indexID:6, songName:"Badfella", duration:"3:38", imgUrl:"pbx1.jpg", artist: "Sidhu Moosewala", inQueue: true, isFav:false},
	{indexID:7, songName:"Trend", duration:"3:44", imgUrl:"pbx1.jpg", artist: "Sidhu Moosewala", inQueue: true, isFav:true},
	{indexID:8, songName:"Mi Gente", duration:"3:30", imgUrl:"mi-gente.jpg", artist: "Mi Gente feat. Beyoncé- Willi Williams, Beyoncé, J Balvin", inQueue: true, isFav:true},
	{indexID:9, songName:"Sunflower", duration:"2:38", imgUrl:"sunflower.jpg", artist: "Post Malone, Swae Lee", inQueue: true, isFav:false},
	{indexID:10, songName:"Havana", duration:"3:37", imgUrl:"havana.png", artist: "Camila Cabelo, Young Thug", inQueue: true, isFav:false},
	{indexID:11, songName:"Killshot", duration:"4:14", imgUrl:"killshot.jpg", artist: "Marshall Mathers", inQueue: true, isFav:false},
	{indexID:12, songName:"Paagal", duration:"2:51", imgUrl:"badshah.jpg", artist: "Badshah", inQueue: false, isFav:false},
	{indexID:13, songName:"Putt Jatt Da", duration:"2:44", imgUrl:"putt-jatt-da.jpg", artist: "Diljit Dosanjh", inQueue: false, isFav:false},
	{indexID:14, songName:"Zamana Jali", duration:"5:41", imgUrl:"Zamana-Jali.jpg", artist: "Bohemia", inQueue: false, isFav:false},
	{indexID:15, songName:"Sucker for Pain (with Logic, Ty Dolla $ign & X Ambassadors)", duration:"4:04", imgUrl:"suicide-squad.jpg", artist: "Suicide Squad: the album- Lil Wayne, X Ambassadors, Ty Dolla $ign, Logic, Wiz Khalifa, Imagine Dragons", inQueue: false, isFav:false},
	{indexID:16, songName:"Believer", duration:"3:22", imgUrl:"evolve.jpg", artist: "Imagine Dragons", inQueue: false, isFav:false},
	{indexID:17, songName:"Love Dose", duration:"3:48", imgUrl:"Desi-Kalakaar.jpg", artist: "Yo Yo Honey Singh", inQueue: false, isFav:false},
	{indexID:18, songName:"Desi Kalakaar", duration:"3:18", imgUrl:"Desi-Kalakaar.jpg", artist: "Yo Yo Honey Singh", inQueue: false, isFav:false},
	{indexID:19, songName:"I feel it coming", duration:"4:29", imgUrl:"starboy.jpg", artist: "The Weeknd", inQueue: false, isFav:false},
	{indexID:20, songName:"Reminder", duration:"3:39", imgUrl:"starboy.jpg", artist: "The Weeknd", inQueue: false, isFav:true},
	{indexID:21, songName:"False Alarm", duration:"3:40", imgUrl:"starboy.jpg", artist: "The Weeknd", inQueue: false, isFav:false},
	{indexID:22, songName:"Party Monster", duration:"4:11", imgUrl:"starboy.jpg", artist: "The Weeknd", inQueue: false, isFav:false},
	{indexID:23, songName:"Attention", duration:"3:17", imgUrl:"starboy.jpg", artist: "The Weeknd", inQueue: false, isFav:false},
	{indexID:24, songName:"Six Feet under", duration:"3:57", imgUrl:"starboy.jpg", artist: "The Weeknd", inQueue: false, isFav:false},
	{indexID:25, songName:"Kaala Chashma - Skit", duration:"0:25", imgUrl:"pbx1.jpg", artist: "Sidhu Moosewala", inQueue: false, isFav:false},
	{indexID:26, songName:"Jatt Da Muqabla", duration:"3:25", imgUrl:"pbx1.jpg", artist: "Sidhu Moosewala", inQueue: false, isFav:false},
	{indexID:27, songName:"Deathroute", duration:"3:39", imgUrl:"pbx1.jpg", artist: "Sidhu Moosewala", inQueue: false, isFav:false},
	{indexID:28, songName:"Dawood", duration:"4:00", imgUrl:"pbx1.jpg", artist: "Sidhu Moosewala", inQueue: false, isFav:false},
	{indexID:29, songName:"IM better now", duration:"4:28", imgUrl:"pbx1.jpg", artist: "Sidhu Moosewala", inQueue: false, isFav:false},
	{indexID:30, songName:"Intro", duration:"0:31", imgUrl:"pbx1.jpg", artist: "Sidhu Moosewala", inQueue: false, isFav:false},
	{indexID:31, songName:"Thunder", duration:"3:07", imgUrl:"evolve.jpg", artist: "Imagine Dragons", inQueue: false, isFav:false},
	{indexID:32, songName:"Whatever it takes", duration:"3:20", imgUrl:"evolve.jpg", artist: "Imagine Dragons", inQueue: false, isFav:false},
	{indexID:33, songName:"Walking The Wire", duration:"3:53", imgUrl:"evolve.jpg", artist: "Imagine Dragons", inQueue: false, isFav:false},
	{indexID:34, songName:"I Don't know why", duration:"3:10", imgUrl:"evolve.jpg", artist: "Imagine Dragons", inQueue: false, isFav:false},
	{indexID:35, songName:"Rise up", duration:"3:52", imgUrl:"evolve.jpg", artist: "Imagine Dragons", inQueue: false, isFav:false},
	{indexID:36, songName:"All I know", duration:"5:21", imgUrl:"starboy.jpg", artist: "The Weeknd", inQueue: false, isFav:false},
	{indexID:37, songName:"Rockin", duration:"3:53", imgUrl:"starboy.jpg", artist: "The Weeknd", inQueue: false, isFav:false},
	{indexID:38, songName:"Sidewalks", duration:"3:51", imgUrl:"starboy.jpg", artist: "The Weeknd", inQueue: false, isFav:false},
	{indexID:39, songName:"True Colors", duration:"3:26", imgUrl:"starboy.jpg", artist: "The Weeknd", inQueue: false, isFav:false},
	{indexID:40, songName:"Die for you", duration:"4:20", imgUrl:"starboy.jpg", artist: "The Weeknd", inQueue: false, isFav:false},
	{indexID:41, songName:"A lonely Night", duration:"3:42", imgUrl:"starboy.jpg", artist: "The Weeknd", inQueue: false, isFav:false},
	{indexID:42, songName:"Ordinary Life", duration:"3:18", imgUrl:"starboy.jpg", artist: "The Weeknd", inQueue: false, isFav:false},
	
];
/*The following arrays are list of song-Ids (or indexIDes) that are used in dynamic.js, to dynamically create
their following sections.
songsInQueue Array is an array that holds the list of songs that are in the queue. Obv, if a song is 
in the queue, then it will have it's inQueue property as true as well, but using this array we know
what ORDER the songs are in the queue in. This is used when we hit the "next song" and "prev song" buttons and
when a song ends, and the next song is played. */
var songsInQueue = [],
	topPicksArr = [15,16,17,18], //The songs that show up in the top-picks section
	geetSpecialsArr = [19,20,21,22,23,24], // Geet specials section
	topChartsHollywood = [25,26,27,28,29,30,31,32,33,42], // Top charts hollywood
	topChartsBollywood = [34,35,36,37,38,39,40,41]; // Top charts topChartsBollywood
// Dear TA, to get a feel of what these arrays are about, try this: change the values of the song-Ids
//in the above arrays (add more, remove, change them, etc etc) and refresh the page to see the diff.
//You can also try and change the "inQueue" and "isFav" properteis of some songs and see the change.