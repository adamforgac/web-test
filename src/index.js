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

const plusLogistics = document.querySelector('.logistics-plus');
const minusLogistics = document.querySelector('.logistics-minus');
const logisticsMobile = document.querySelector('.logistics-mobile');
const logisticsOpen = document.querySelector('.logistics-mobile-open');

plusLogistics.addEventListener('click', () => {
  if (logisticsMobile.classList.contains('active-mobile-logistics')) {
    false;
  } else {
    logisticsMobile.classList.add('active-mobile-logistics');
    logisticsOpen.appendChild(document.createElement('div')).classList.add('logistics-open-image');
    logisticsOpen.appendChild(document.createElement('div')).classList.add('logistics-open-text');

    const logisticsOpenText = document.querySelector('.logistics-open-text');
    const logisticsOpenImage = document.querySelector('.logistics-open-image');

    const img = logisticsOpenImage.appendChild(document.createElement('img'));
    img.src = 'images/logistics2.png';

    logisticsOpenText.appendChild(document.createElement('p')).textContent = 'At magnum periculum adiit in oculis quidem faciunt, ut dolore disputandum putant sed ut alterum esse fugiendum itaque earum motus et ultimum bonorum, quod maxime consuevit iactare vestra se esse albam, dulce mel quorum facta quem ad naturam aut in liberos atque integre iudicante itaque. Omne animal, simul atque integre iudicante itaque aiunt hanc quasi naturalem atque corrupti, quos tu tam inportuno tamque crudeli; sin, ut summum malum et, quantum possit, a sapiente delectus, ut aut ad respondendum reddidisti quorum facta quem modo ista sis aequitate, quam ob rem logistics.';

    plusLogistics.classList.add('unclickable-mobile');
    minusLogistics.classList.add('clickable-mobile');

    logisticsMobile.classList.add('active-color-mobile');

    document.querySelector('.logistics-heading-mobile h4').style.color = 'var(--web-black)';
  }
});

minusLogistics.addEventListener('click', () => {
  logisticsMobile.classList.remove('active-mobile-logistics');
  plusLogistics.classList.remove('unclickable-mobile');
  minusLogistics.classList.remove('clickable-mobile');
  logisticsOpen.innerHTML = '';
  logisticsMobile.classList.remove('active-color-mobile');
  document.querySelector('.logistics-heading-mobile h4').style.color = 'var(--web-dark-grey)';
});

const plusAgriculture = document.querySelector('.agriculture-plus');
const minusAgriculture = document.querySelector('.agriculture-minus');
const agricultureMobile = document.querySelector('.agriculture-mobile');
const agricultureOpen = document.querySelector('.agriculture-mobile-open');

plusAgriculture.addEventListener('click', () => {
  if (agricultureMobile.classList.contains('active-mobile-agriculture')) {
    false;
  } else {
    agricultureMobile.classList.add('active-mobile-agriculture');
    agricultureOpen.appendChild(document.createElement('div')).classList.add('agriculture-open-image');
    agricultureOpen.appendChild(document.createElement('div')).classList.add('agriculture-open-text');

    const agricultureOpenText = document.querySelector('.agriculture-open-text');
    const agricultureOpenImage = document.querySelector('.agriculture-open-image');

    const img = agricultureOpenImage.appendChild(document.createElement('img'));
    img.src = 'images/agricutlure3.png';

    agricultureOpenText.appendChild(document.createElement('p')).textContent = 'At magnum periculum adiit in oculis quidem faciunt, ut dolore disputandum putant sed ut alterum esse fugiendum itaque earum motus et ultimum bonorum, quod maxime consuevit iactare vestra se esse albam, dulce mel quorum facta quem ad naturam aut in liberos atque integre iudicante itaque. Omne animal, simul atque integre iudicante itaque aiunt hanc quasi naturalem atque corrupti, quos tu tam inportuno tamque crudeli; sin, ut summum malum et, quantum possit, a sapiente delectus, ut aut ad respondendum reddidisti quorum facta quem modo ista sis aequitate, quam ob rem agriculture.';

    plusAgriculture.classList.add('unclickable-mobile');
    minusAgriculture.classList.add('clickable-mobile');

    agricultureMobile.classList.add('active-color-mobile');
    document.querySelector('.agriculture-heading-mobile h4').style.color = 'var(--web-black)';
  }
});

minusAgriculture.addEventListener('click', () => {
  agricultureMobile.classList.remove('active-mobile-agriculture');
  plusAgriculture.classList.remove('unclickable-mobile');
  minusAgriculture.classList.remove('clickable-mobile');
  agricultureOpen.innerHTML = '';
  agricultureMobile.classList.remove('active-color-mobile');
  document.querySelector('.agriculture-heading-mobile h4').style.color = 'var(--web-dark-grey)';
});

const plusFoods = document.querySelector('.foods-plus');
const minusFoods = document.querySelector('.foods-minus');
const foodsMobile = document.querySelector('.foods-mobile');
const foodsOpen = document.querySelector('.foods-mobile-open');

plusFoods.addEventListener('click', () => {
  if (foodsMobile.classList.contains('active-mobile-foods')) {
    false;
  } else {
    agricultureMobile.classList.add('active-mobile-foods');
    foodsOpen.appendChild(document.createElement('div')).classList.add('foods-open-image');
    foodsOpen.appendChild(document.createElement('div')).classList.add('foods-open-text');

    const foodsOpenText = document.querySelector('.foods-open-text');
    const foodsOpenImage = document.querySelector('.foods-open-image');

    const img = foodsOpenImage.appendChild(document.createElement('img'));
    img.src = 'images/foods3.png';

    foodsOpenText.appendChild(document.createElement('p')).textContent = 'At magnum periculum adiit in oculis quidem faciunt, ut dolore disputandum putant sed ut alterum esse fugiendum itaque earum motus et ultimum bonorum, quod maxime consuevit iactare vestra se esse albam, dulce mel quorum facta quem ad naturam aut in liberos atque integre iudicante itaque. Omne animal, simul atque integre iudicante itaque aiunt hanc quasi naturalem atque corrupti, quos tu tam inportuno tamque crudeli; sin, ut summum malum et, quantum possit, a sapiente delectus, ut aut ad respondendum reddidisti quorum facta quem modo ista sis aequitate, quam ob rem foods.';

    plusFoods.classList.add('unclickable-mobile');
    minusFoods.classList.add('clickable-mobile');

    foodsMobile.classList.add('active-color-mobile');
    document.querySelector('.foods-heading-mobile h4').style.color = 'var(--web-black)';
  }
});

minusFoods.addEventListener('click', () => {
  foodsMobile.classList.remove('active-mobile-foods');
  plusFoods.classList.remove('unclickable-mobile');
  minusFoods.classList.remove('clickable-mobile');
  foodsOpen.innerHTML = '';
  foodsMobile.classList.remove('active-color-mobile');
  document.querySelector('.foods-heading-mobile h4').style.color = 'var(--web-dark-grey)';
});
