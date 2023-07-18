import YouTubePlayer from "youtube-player";

import { DESKTOP_WIDTH } from "../constants";

let player = undefined;

const handleToggleMenu = (element) => {
  if(window.innerWidth < DESKTOP_WIDTH) return;

  element.classList.remove('nav-mobile-open');
}

const handleClickFaq = (element) => {
  element.classList.toggle('faq-question-open');

  const answer = element.parentElement.nextElementSibling;
  answer.classList.toggle('show');
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

  if(player) {
    player.loadVideoById(videoId);

    modal.classList.remove("none");
  }
}

const handleClickVideoButton = (button) => {
  if(!button) return;

  const videoUrl = button.getAttribute('data-video');
  const videoId = videoUrl.split('v=').pop();

  const player = YouTubePlayer('video-player-button');
  player.loadVideoById(videoId);
}

document.addEventListener('DOMContentLoaded', function () {
  // Navigation
  const nav = document.getElementById('nav');
  const burgerButton = document.getElementById('nav-burger');
  const closeButton = document.getElementById('nav-close');

  window.addEventListener('resize', () => { handleToggleMenu(nav) });

  burgerButton.addEventListener('click', () => {
    nav.classList.add('nav-mobile-open');
  });

  closeButton.addEventListener('click', () => {
    nav.classList.remove('nav-mobile-open');
  });

  // Projects
  const projects = Array.from(document.getElementsByClassName('project-thumbnail'));

  if(projects.length) {
    projects.forEach((project) => {
      project.addEventListener('click', () => {
        handleClickProject(project, modal);
      });
    });
  }

  // FAQs
  const faqButtons = Array.from(document.getElementsByClassName('faq-question'));

  if(faqButtons.length) {
    faqButtons.forEach((faqButton) => {
      faqButton.addEventListener('click', () => {
        handleClickFaq(faqButton);
      })
    });
  }
  
  // Show reel
  const videoButton = document.getElementById('video-player-button');
  const videoPlayer = document.getElementById('video-player');

  // YouTube player
  player = YouTubePlayer('video-player');

  if(videoPlayer && videoButton) {
    // Show reel video button
    videoButton.addEventListener('click', () => {
      handleClickVideoButton(videoButton);
    });
  }

  // Modals
  const modal = document.getElementById('modal-container');
  const modalButton = Array.from(document.getElementsByClassName('modal-close'))[0];

  if(modal && modalButton) {
    window.addEventListener('keydown', (e) => {
      handleEscapeModal(e, modal);
    });

    modal.addEventListener('click', handleClickModal);
    modalButton.addEventListener('click', handleClickModal);
  }
});