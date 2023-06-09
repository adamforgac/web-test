/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */

// MANAGES DESKTOP IMAGE SECTION FOR AGRICULTURE

function createAgriculture() {
  const imageCards = document.querySelector('.image-section-image');
  const imagePar = document.querySelector('.image-section-text-paragraph p');
  const imageHeading = document.querySelector('.image-section-text-heading h3');
  imageCards.innerHTML = '';
  const img = imageCards.appendChild(document.createElement('img'));
  img.classList.add('agriculture-img');
  img.src = 'images/agricutlure3.png';

  imagePar.style.color = 'var(--web-black)';
  imageHeading.style.color = 'var(--web-black)';

  imageHeading.textContent = 'Agriculture';

  imagePar.textContent = 'At magnum periculum adiit in oculis quidem faciunt, ut dolore disputandum putant sed ut alterum esse fugiendum itaque earum motus et ultimum bonorum, quod maxime consuevit iactare vestra se esse albam, dulce mel quorum facta quem ad naturam aut in liberos atque integre iudicante itaque. Omne animal, simul atque integre iudicante itaque aiunt hanc quasi naturalem atque corrupti, quos tu tam inportuno tamque crudeli; sin, ut summum malum et, quantum possit, a sapiente delectus, ut aut ad respondendum reddidisti quorum facta quem modo ista sis aequitate, quam ob rem agriculture.';
}

export default createAgriculture;
