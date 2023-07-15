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

const handleEscapeModal = (e) => {
  const modal = document.getElementById('modal-container');

  if(!modal) return;

  if(e.keyCode === 27){
    modal.classList.add('none');

    if(player) player.stopVideo();
  }
}

const handleClickProject = (project) => {
  const videoUrl = project.getAttribute('data-video');

  if(videoUrl === null) return;

  const videoId = videoUrl.split('v=').pop();
  console.log(`Video URL: ${videoUrl}`);
  console.log(`Video ID: ${videoId}`)

  const modal = document.getElementById('modal-container');
  modal.classList.remove("none");

  player.loadVideoById(videoId);
}

document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('nav');
  const burgerButton = document.getElementById('nav-burger');
  const closeButton = document.getElementById('nav-close');
  const projects = document.getElementsByClassName('project-thumbnail');
  const modal = document.getElementById('modal-container');
  const modalButton = Array.from(document.getElementsByClassName('modal-close'))[0];

  player = YouTubePlayer('video-player');

  window.addEventListener('resize', () => { handleToggleMenu(nav) });

  window.addEventListener('keydown', handleEscapeModal);

  burgerButton.addEventListener('click', () => {
    nav.classList.add('nav-mobile-open');
  });

  closeButton.addEventListener('click', () => {
    nav.classList.remove('nav-mobile-open');
  });

  modal.addEventListener('click', handleClickModal);
  modalButton.addEventListener('click', handleClickModal);

  Array.from(projects).forEach((project) => {
    project.addEventListener('click', () => {
      handleClickProject(project);
    });
  });
});