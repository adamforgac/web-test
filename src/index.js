import createAgriculture from './agriculture';
import createLogistics from './logistics';
import createFood from './foods';

const logisticsButton = document.querySelector('.logistics-button');
const agricultureButton = document.querySelector('.agriculture-button');
const foodsButton = document.querySelector('.foods-button');

foodsButton.addEventListener('click', () => {
  createFood();
  logisticsButton.classList.remove('yellow-back');
  agricultureButton.classList.remove('yellow-back');
  foodsButton.classList.add('yellow-back');
  logisticsButton.classList.add('white-back');
});

agricultureButton.addEventListener('click', () => {
  createAgriculture();
  logisticsButton.classList.remove('yellow-back');
  agricultureButton.classList.add('yellow-back');
  foodsButton.classList.remove('yellow-back');
  logisticsButton.classList.add('white-back');
});

logisticsButton.addEventListener('click', () => {
  createLogistics();
  logisticsButton.classList.add('yellow-back');
  agricultureButton.classList.remove('yellow-back');
  foodsButton.classList.remove('yellow-back');
  logisticsButton.classList.remove('white-back');
});
