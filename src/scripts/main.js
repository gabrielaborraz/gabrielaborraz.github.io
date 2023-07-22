import { DESKTOP_WIDTH } from "../constants";


const handleToggleMenu = (nav) => {
  if(window.innerWidth < DESKTOP_WIDTH) return;

  nav.classList.remove('nav-mobile-open');
}

document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('nav');
  const triggerButton = document.getElementById('nav-trigger');
  const closeButton = document.getElementById('nav-close');

  window.addEventListener('resize', () => {
    handleToggleMenu(nav);
  });

  triggerButton.addEventListener('click', () => {
    nav.classList.add('nav-mobile-open');
  });

  closeButton.addEventListener('click', () => {
    nav.classList.remove('nav-mobile-open');
  });

});