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

// POSITION ANIMATIONS

const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const offers = document.querySelectorAll('.offer');

function handleClick(index) {
  extendPosition(index);
}

function handleClick2(index) {
  extendPosition2(index);
}

for (let i = 0; i < plus.length; i++) {
  const item = plus[i];
  const item2 = minus[i];
  item.addEventListener('click', handleClick.bind(null, i));
  item2.addEventListener('click', handleClick2.bind(null, i));
}

function extendPosition(index) {
  const openedOffer = offers[index].querySelector('.offer-opened');
  if (openedOffer.classList.contains('active-position')) {
    false;
  } else {
    openedOffer.appendChild(document.createElement('div')).classList.add('opened-section1');
    openedOffer.appendChild(document.createElement('div')).classList.add('opened-section2');
    openedOffer.appendChild(document.createElement('div')).classList.add('opened-section3');

    const sectionOne = openedOffer.querySelector('.opened-section1');
    sectionOne.appendChild(document.createElement('div')).classList.add('offer-subheading');
    sectionOne.appendChild(document.createElement('div')).classList.add('opened-text-part1', 'opened-text');
    sectionOne.appendChild(document.createElement('div')).classList.add('opened-text-part2', 'opened-text');
    sectionOne.appendChild(document.createElement('div')).classList.add('opened-text-part3', 'opened-text');

    const subHeadingSectionOne = openedOffer.querySelector('.offer-subheading');
    const textSectionOne = openedOffer.querySelector('.opened-text-part1');
    const textSectionTwo = openedOffer.querySelector('.opened-text-part2');
    const textSectionThree = openedOffer.querySelector('.opened-text-part3');

    subHeadingSectionOne.appendChild(document.createElement('h4'));
    subHeadingSectionOne.querySelector('h4').innerHTML = 'Ut placet, inquam tum dicere exorsus est consecutus? laudem et.';

    textSectionOne.appendChild(document.createElement('p'));
    textSectionOne.querySelector('p').innerHTML = 'Primum igitur, inquit, modo dixi, constituto, ut ita ruant itaque negat opus esse fugiendum itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem et fortibus viris commemorandis eorumque factis non quo voluptas in culpa, qui dolorem aspernari ut calere ignem, nivem esse fugiendum.';

    textSectionTwo.appendChild(document.createElement('p'));
    textSectionTwo.querySelector('p').innerHTML = 'Certe, inquam, pertinax non numquam eius modi tempora incidunt, ut perspiciatis, unde omnis iste natus error sit numeranda nec in malis dolor, non numquam eius modi tempora incidunt, ut et negent satis esse, quam interrogare aut officiis debitis aut contra sit, a natura incorrupte atque.In quo ignorare vos arbitrer, sed ipsius honestatis decore laudandis, id ne ferae quidem se repellere, idque facere possimus, omnis voluptas sit, a natura ipsa iudicari ea commodi consequatur? quis autem quibusdam et quasi architecto beatae vitae sine causa, mox videro; interea hoc epicurus in. Esse fugiendum itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem et fortibus viris commemorandis eorumque factis non quo voluptas in culpa, qui dolorem aspernari ut calere ignem, nivem esse fugiendum.';

    textSectionThree.appendChild(document.createElement('p'));
    textSectionThree.querySelector('p').innerHTML = 'Certe, inquam, pertinax non numquam eius modi tempora incidunt, ut perspiciatis, unde omnis iste natus error sit numeranda nec in malis dolor, non numquam eius modi tempora incidunt, ut et negent satis esse, quam interrogare aut officiis debitis aut contra sit, a natura incorrupte atque. In quo ignorare vos arbitrer, sed ipsius honestatis decore laudandis, id ne ferae quidem se repellere, idque facere possimus, omnis voluptas sit, a natura ipsa iudicari ea commodi consequatur?';

    // SECTION2

    const sectionTwo = openedOffer.querySelector('.opened-section2');
    sectionTwo.appendChild(document.createElement('div')).classList.add('offer-subheading');
    sectionTwo.appendChild(document.createElement('div')).classList.add('opened-list');

    const subHeadingSectionTwo = sectionTwo.querySelector('.offer-subheading');
    const listSectionTwo = openedOffer.querySelector('.opened-list');

    subHeadingSectionTwo.appendChild(document.createElement('h4'));
    subHeadingSectionTwo.querySelector('h4').innerHTML = 'Ut placet, inquam tum dicere exorsus est consecutus? laudem et.';

    listSectionTwo.appendChild(document.createElement('ol'));
    const textSectionTwoList = listSectionTwo.querySelector('ol');
    textSectionTwoList.appendChild(document.createElement('li')).classList.add('opened-list1');
    textSectionTwoList.appendChild(document.createElement('li')).classList.add('opened-list2');
    textSectionTwoList.appendChild(document.createElement('li')).classList.add('opened-list3');

    listSectionTwo.querySelector('.opened-list1').innerHTML = 'Torquatos nostros? quos dolores et quasi naturalem atque natum sit, amet, consectetur, adipisci velit, sed quia dolor repellendus temporibus autem quibusdam et dolorem? sunt autem nusquam hoc tenebo, si ob rem aperiam eaque gaudere ut aut quid iudicat, quo voluptas sit, a philosophis compluribus permulta.';

    listSectionTwo.querySelector('.opened-list2').innerHTML = 'Torquatos nostros? quos dolores et quasi naturalem atque natum sit, amet, consectetur, adipisci velit, sed quia dolor repellendus temporibus autem quibusdam et dolorem? sunt autem nusquam hoc tenebo, si ob rem aperiam eaque gaudere ut aut quid iudicat, quo voluptas sit, a philosophis compluribus permulta.';

    listSectionTwo.querySelector('.opened-list3').innerHTML = 'Torquatos nostros? quos dolores et quasi naturalem atque natum sit, amet, consectetur, adipisci velit, sed quia dolor repellendus temporibus autem quibusdam et dolorem? sunt autem nusquam hoc tenebo, si ob rem aperiam eaque gaudere ut aut quid iudicat, quo voluptas sit, a philosophis compluribus permulta.';

    // SECTION3

    const sectionThree = openedOffer.querySelector('.opened-section3');
    sectionThree.appendChild(document.createElement('div')).classList.add('opened-button');

    const buttonSectionThree = sectionThree.querySelector('.opened-button');
    buttonSectionThree.appendChild(document.createElement('button'));
    buttonSectionThree.querySelector('button').innerHTML = 'Odeslat žádost';

    // ADD CLASS

    openedOffer.classList.add('active-position');

    // MANAGING PLUS SIGN

    plus[index].classList.add('unclickable');
    minus[index].classList.add('clickable');

    // MANAGING AREA

    document.querySelector('.offer-opened').style.gap = '45px';
    document.querySelector('.offer').style.gap = '45px';
  }
}

function extendPosition2(index) {
  const openedOffer = offers[index].querySelector('.offer-opened');
  openedOffer.innerHTML = '';
  plus[index].classList.remove('unclickable');
  minus[index].classList.remove('clickable');
  openedOffer.classList.remove('active-position');

  // MANAGING AREA

  document.querySelector('.offer-opened').style.gap = '0px';
  document.querySelector('.offer').style.gap = '0px';
}
