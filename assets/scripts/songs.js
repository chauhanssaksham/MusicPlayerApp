/*The songs array, holds the list of songs. Every "song" is an object with the following properties:
	indexID: obv not needed, but this is for my ease during developing.
	songName, duration, artist are self explanatory.
	imgUrl is the name of the image in /images/thumbs/ which corresponds to that song.
	inQueue: If true, then that particular song will be in the queue on page load. As songs are added
	to the queue, their inQueue is changed to true.
	If the user tries to add a song to the queue, that is already in the queue, and hence, has its inQueue
	set to true, then the window will display an error message that the song is already in the queue.
	isFav: If set to true, then on page load, that songs' heart icon (int the queue) will be red. 
	A song-Id is just the indexID of the song in the songs[] array.
	So songs[song-Id] when song-Id = 2, get us the object (song) "Starboy" by "The weeknd"*/
/*The following arrays are list of song-Ids (or indexIDes) that are used to dynamically create
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