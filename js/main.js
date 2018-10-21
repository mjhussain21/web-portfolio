// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');


menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {

  menuBtn.classList.toggle('close');
  menu.classList.toggle('show');
  menuBranding.classList.toggle('show');
  menuNav.classList.toggle('show');

  //loop through Nav Items
  navItems.forEach(item => item.classList.toggle('show'));

}