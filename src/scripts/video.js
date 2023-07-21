import YouTubePlayer from "youtube-player";

const handleClickVideoButton = (button) => {
  if(!button) return;

  const videoUrl = button.getAttribute('data-video');
  const videoId = videoUrl.split('v=').pop();

  const videoPlayer = YouTubePlayer('video-player-button');
  videoPlayer.loadVideoById(videoId);
}

document.addEventListener('DOMContentLoaded', function () {
  const videoButton = document.getElementById('video-player-button');

  if(videoButton) {
    // Show reel video button
    videoButton.addEventListener('click', () => {
      handleClickVideoButton(videoButton);
    });
  }
});