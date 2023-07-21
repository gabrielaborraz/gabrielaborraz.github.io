import { DESKTOP_WIDTH } from "../constants";

const handleToggleMenu = (element) => {
  if(window.innerWidth < DESKTOP_WIDTH) return;

  element.classList.remove('nav-mobile-open');
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
});