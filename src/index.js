import createAgriculture from './agriculture';
import createLogistics from './logistics';
import createFood from './foods';
import handleAllPositions from './positions';
import createHamMenu from './ham-menu';

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

// POSITION ANIMATIONS

handleAllPositions();

// HAMBURGER MENU

createHamMenu();

// IMAGE PART FOR MOBILE

const plusLogistics = document.querySelector('.logistics-operators-mobile .plus-mobile');
const minusLogistics = document.querySelector('.logistics-minus');

const plusAgriculture = document.querySelector('.agriculture-operators-mobile .plus-mobile');
const minusAgriculture = document.querySelector('.agriculture-minus');

const plusFoods = document.querySelector('.foods-operators-mobile .plus-mobile');
const minusFoods = document.querySelector('.foods-minus');

const logisticsMobile = document.querySelector('.logistics-mobile');
const agricultureMobile = document.querySelector('.logistics-mobile');
const foodsMobile = document.querySelector('.logistics-mobile');

plusLogistics.addEventListener('click', () => {
  if (logisticsMobile.classList.contains('active-mobile-logistics')) {
    false;
  } else {
    logisticsMobile.classList.add('active-mobile-logistics');
    const logisticsOpen = document.querySelector('.logistics-mobile-open');
    logisticsOpen.appendChild(document.createElement('div')).classList.add('logistics-open-image');
    logisticsOpen.appendChild(document.createElement('div')).classList.add('logistics-open-text');

    const logisticsOpenText = document.querySelector('.logistics-open-text');
    const logisticsOpenImage = document.querySelector('.logistics-open-image');

    const img = logisticsOpenImage.appendChild(document.createElement('img'));
    img.src = 'images/logistics2.png';

    logisticsOpenText.appendChild(document.createElement('p')).textContent = 'At magnum periculum adiit in oculis quidem faciunt, ut dolore disputandum putant sed ut alterum esse fugiendum itaque earum motus et ultimum bonorum, quod maxime consuevit iactare vestra se esse albam, dulce mel quorum facta quem ad naturam aut in liberos atque integre iudicante itaque. Omne animal, simul atque integre iudicante itaque aiunt hanc quasi naturalem atque corrupti, quos tu tam inportuno tamque crudeli; sin, ut summum malum et, quantum possit, a sapiente delectus, ut aut ad respondendum reddidisti quorum facta quem modo ista sis aequitate, quam ob rem aperiam.';

    plusLogistics.classList.add('unclickable');
    minusLogistics.classList.add('clickable');
  }
});

plusAgriculture.addEventListener('click', () => {
  if (agricultureMobile.classList.contains('active-mobile-agriculture')) {
    false;
  } else {
    agricultureMobile.classList.add('active-mobile-agriculture');
    const agricultureOpen = document.querySelector('.agriculture-mobile-open');
    agricultureOpen.appendChild(document.createElement('div')).classList.add('agriculture-open-image');
    agricultureOpen.appendChild(document.createElement('div')).classList.add('agriculture-open-text');

    const agricultureOpenText = document.querySelector('.agriculture-open-text');
    const agricultureOpenImage = document.querySelector('.agriculture-open-image');

    const img = agricultureOpenImage.appendChild(document.createElement('img'));
    img.src = 'images/agricutlure3.png';

    agricultureOpenText.appendChild(document.createElement('p')).textContent = 'At magnum periculum adiit in oculis quidem faciunt, ut dolore disputandum putant sed ut alterum esse fugiendum itaque earum motus et ultimum bonorum, quod maxime consuevit iactare vestra se esse albam, dulce mel quorum facta quem ad naturam aut in liberos atque integre iudicante itaque. Omne animal, simul atque integre iudicante itaque aiunt hanc quasi naturalem atque corrupti, quos tu tam inportuno tamque crudeli; sin, ut summum malum et, quantum possit, a sapiente delectus, ut aut ad respondendum reddidisti quorum facta quem modo ista sis aequitate, quam ob rem aperiam.';

    plusAgriculture.classList.add('unclickable');
    minusAgriculture.classList.add('clickable');
  }
});

plusFoods.addEventListener('click', () => {
  if (foodsMobile.classList.contains('active-mobile-foods')) {
    false;
  } else {
    agricultureMobile.classList.add('active-mobile-foods');
    const foodsOpen = document.querySelector('.foods-mobile-open');
    foodsOpen.appendChild(document.createElement('div')).classList.add('foods-open-image');
    foodsOpen.appendChild(document.createElement('div')).classList.add('foods-open-text');

    const foodsOpenText = document.querySelector('.foods-open-text');
    const foodsOpenImage = document.querySelector('.foods-open-image');

    const img = foodsOpenImage.appendChild(document.createElement('img'));
    img.src = 'images/foods3.png';

    foodsOpenText.appendChild(document.createElement('p')).textContent = 'At magnum periculum adiit in oculis quidem faciunt, ut dolore disputandum putant sed ut alterum esse fugiendum itaque earum motus et ultimum bonorum, quod maxime consuevit iactare vestra se esse albam, dulce mel quorum facta quem ad naturam aut in liberos atque integre iudicante itaque. Omne animal, simul atque integre iudicante itaque aiunt hanc quasi naturalem atque corrupti, quos tu tam inportuno tamque crudeli; sin, ut summum malum et, quantum possit, a sapiente delectus, ut aut ad respondendum reddidisti quorum facta quem modo ista sis aequitate, quam ob rem aperiam.';

    plusFoods.classList.add('unclickable');
    minusFoods.classList.add('clickable');
  }
});
