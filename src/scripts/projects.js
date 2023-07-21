import YouTubePlayer from "youtube-player";

let player = YouTubePlayer('video-player-modal');

const handleClickModal = () => {
  const modal = document.getElementById('modal-container');

  if(!modal) return;

  modal.classList.add('none');

  if(player) {
    player.stopVideo();
  }
}

const handleEscapeModal = (e, modal) => {
  if(!modal) return;

  if(e.keyCode === 27){
    modal.classList.add('none');

    if(player) player.stopVideo();
  }
}

const handleClickProject = (project, modal) => {
  const videoUrl = project.getAttribute('data-video');

  if(videoUrl === null || !modal) return;

  const videoId = videoUrl.split('v=').pop();

  if(player) {
    player.loadVideoById(videoId);

    modal.classList.remove("none");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const projects = Array.from(document.getElementsByClassName('project-thumbnail'));
  const modal = document.getElementById('modal-container');
  const modalButton = Array.from(document.getElementsByClassName('modal-close'))[0];

  modal.addEventListener('click', handleClickModal);
  modalButton.addEventListener('click', handleClickModal);

  if(projects.length) {
    projects.forEach((project) => {
      project.addEventListener('click', () => {
        handleClickProject(project, modal);
      });
    });
  }

  if(modal && modalButton) {
    window.addEventListener('keydown', (e) => {
      handleEscapeModal(e, modal);
    });
  }
});