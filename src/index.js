import createAgriculture from './agriculture';
import createLogistics from './logistics';
import createFood from './foods';
import handleAllPositions from './positions';
import createHamMenu from './ham-menu';
import createMobileCards from './mobile-cards';

const logisticsButton = document.querySelector('.logistics-button');
const agricultureButton = document.querySelector('.agriculture-button');
const foodsButton = document.querySelector('.foods-button');
const imageAreaCards = document.querySelector('.image-area-cards');

foodsButton.addEventListener('click', () => {
  createFood();
  logisticsButton.classList.remove('green-back');
  agricultureButton.classList.remove('yellow-back');
  foodsButton.classList.add('purple-back');
  logisticsButton.classList.add('white-back');
  imageAreaCards.classList.add('yellow-back');
  imageAreaCards.style.backgroundColor = '#B02FE7';
});

agricultureButton.addEventListener('click', () => {
  createAgriculture();
  logisticsButton.classList.remove('green-back');
  agricultureButton.classList.add('yellow-back');
  foodsButton.classList.remove('purple-back');
  logisticsButton.classList.add('white-back');
  imageAreaCards.style.backgroundColor = 'var(--web-yellow)';
});

logisticsButton.addEventListener('click', () => {
  createLogistics();
  logisticsButton.classList.add('green-back');
  agricultureButton.classList.remove('yellow-back');
  foodsButton.classList.remove('purple-back');
  logisticsButton.classList.remove('white-back');
  imageAreaCards.style.backgroundColor = 'var(--web-green)';
});

// POSITION ANIMATIONS

handleAllPositions();

// HAMBURGER MENU

createHamMenu();

// FOR SMALLER DEVICES

createMobileCards();
