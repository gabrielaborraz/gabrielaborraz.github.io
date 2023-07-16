import YouTubePlayer from "youtube-player";

import { DESKTOP_WIDTH } from "../constants";

let player = undefined;

const handleToggleMenu = (element) => {
  if(window.innerWidth < DESKTOP_WIDTH) return;

  element.classList.remove('nav-mobile-open');
}

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

  player.loadVideoById(videoId);

  modal.classList.remove("none");
}

const handleClickVideoButton = (button) => {
  if(!button) return;

  const videoUrl = button.getAttribute('data-video');
  const videoId = videoUrl.split('v=').pop();

  const player = YouTubePlayer('video-player-button');
  player.loadVideoById(videoId);
}

document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('nav');
  const burgerButton = document.getElementById('nav-burger');
  const closeButton = document.getElementById('nav-close');
  const projects = document.getElementsByClassName('project-thumbnail');
  const modal = document.getElementById('modal-container');
  const modalButton = Array.from(document.getElementsByClassName('modal-close'))[0];
  const videoButton = document.getElementById('video-player-button');

  // YouTube player
  player = YouTubePlayer('video-player');

  // Navigation
  window.addEventListener('resize', () => { handleToggleMenu(nav) });

  burgerButton.addEventListener('click', () => {
    nav.classList.add('nav-mobile-open');
  });

  closeButton.addEventListener('click', () => {
    nav.classList.remove('nav-mobile-open');
  });

  // Modal window
  window.addEventListener('keydown', (e) => {
    handleEscapeModal(e, modal);
  });

  modal.addEventListener('click', handleClickModal);
  modalButton.addEventListener('click', handleClickModal);

  Array.from(projects).forEach((project) => {
    project.addEventListener('click', () => {
      handleClickProject(project, modal);
    });
  });

  // Show reel video button
  videoButton.addEventListener('click', () => {
    handleClickVideoButton(videoButton);
  });
});