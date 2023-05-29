// MANAGES ALL HAMBURGER MENU ACTIONS

function createHamMenu() {
  const hamIcon = document.querySelector('.hamburger-menu-icon input');
  const hamMenu = document.querySelector('.hamburger-menu');
  const body = document.querySelector('body');

  hamIcon.addEventListener('click', () => {
    hamMenu.classList.toggle('active-hamburger');
    body.classList.toggle('active-body');
  });
}

export default createHamMenu;
