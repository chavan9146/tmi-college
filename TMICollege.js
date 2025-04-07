 // Load YouTube API
 let tag = document.createElement('script');
 tag.src = "https://www.youtube.com/iframe_api";
 let firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 let player;
 let maxWatched = 0;

 function onYouTubeIframeAPIReady() {
   player = new YT.Player('ytVideo', {
     events: {
       'onReady': onPlayerReady,
       'onStateChange': onPlayerStateChange
     }
   });
 }

 function onPlayerReady(event) {
   setInterval(() => {
     if (player && player.getPlayerState() === YT.PlayerState.PLAYING) {
       let currentTime = player.getCurrentTime();
       if (currentTime > maxWatched) {
         maxWatched = currentTime;
       }
     }
   }, 1000);
 }

 function onPlayerStateChange(event) {
   if (event.data === YT.PlayerState.PLAYING) {
     setTimeout(() => {
       let currentTime = player.getCurrentTime();
       if (currentTime > maxWatched + 2) {
         player.seekTo(maxWatched, true); // Prevent skipping
       }
     }, 500);
   }

   if (event.data === YT.PlayerState.ENDED) {
     document.getElementById("code").style.display = "block";
   }
 }
 function copyToClipboard(id) {
    const code = document.getElementById(id).innerText;
    navigator.clipboard.writeText(code).then(() => {
      alert("Code copied to clipboard!");
    });
  }
  //second code for javascript
  