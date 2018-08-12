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

  //initial menu state
  //true = open;
  //false = closed ;

  // let showMenu = false;

  // //if overlay is not shown
  // if (!showMenu) {
  //   menuBtn.classList.add('close');
  //   menu.classList.add('show');
  //   menuBranding.classList.add('show');
  //   menuNav.classList.add('show');

  //   //loop through Nav Items 
  //   //navItems.forEach(item => item.classList.add('show'));

  //   navItems.forEach(function (item) {
  //     item.classList.add('show');
  //   });

  //   showMenu = true;

  // } else {
  //   menuBtn.classList.remove('close');
  //   menu.classList.remove('show');
  //   menuBranding.classList.remove('show');
  //   menuNav.classList.remove('show');

  //   //loop through Nav Items 
  //   navItems.forEach(function (item) {
  //     item.classList.remove('show');
  //   });


  //   showMenu = false;
  // }