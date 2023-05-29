/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
function createFood() {
  const imageCards = document.querySelector('.image-section-image');
  const imagePar = document.querySelector('.image-section-text-paragraph p');
  const imageHeading = document.querySelector('.image-section-text-heading h3');
  imageCards.innerHTML = '';
  const img = imageCards.appendChild(document.createElement('img'));
  img.classList.add('foods-img');
  img.src = 'images/foods3.png';

  imagePar.style.color = 'var(--web-white)';
  imageHeading.style.color = 'var(--web-white)';

  imageHeading.textContent = 'Foods';

  imagePar.textContent = 'At magnum periculum adiit in oculis quidem faciunt, ut dolore disputandum putant sed ut alterum esse fugiendum itaque earum motus et ultimum bonorum, quod maxime consuevit iactare vestra se esse albam, dulce mel quorum facta quem ad naturam aut in liberos atque integre iudicante itaque. Omne animal, simul atque integre iudicante itaque aiunt hanc quasi naturalem atque corrupti, quos tu tam inportuno tamque crudeli; sin, ut summum malum et, quantum possit, a sapiente delectus, ut aut ad respondendum reddidisti quorum facta quem modo ista sis aequitate, quam ob rem foods';
}

export default createFood;
