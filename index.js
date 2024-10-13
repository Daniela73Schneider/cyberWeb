/* Hamburger menu */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Kontrola, zda hamburger existuje na stránce
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Získání elementů pro modální okna
const modalInfo = document.getElementById('myIntro');
const modalPrice = document.getElementById('myPrice');
const openModalInfoBtn = document.getElementById('openModalInfoBtn');
const openModalPriceBtn = document.getElementById('openModalPriceBtn');
const closeModalInfoBtn = modalInfo.querySelector('.close');
const closeModalPriceBtn = modalPrice.querySelector('.close');

// Inicializace modálních oken na skrytý stav
modalInfo.style.display = 'none';
modalPrice.style.display = 'none';

// Kontrola, zda modální okna existují na stránce
if (modalInfo && openModalInfoBtn && closeModalInfoBtn) {
  // Otevření modalu při kliknutí na tlačítko pro informace
  openModalInfoBtn.onclick = function () {
    modalInfo.style.display = 'flex'; // Použijeme flex pro vertikální a horizontální centrování
  };

  // Zavření modalu při kliknutí na "X"
  closeModalInfoBtn.onclick = function () {
    modalInfo.style.display = 'none';
  };

  // Zavření modalu při kliknutí mimo obsah okna
  window.onclick = function (event) {
    if (event.target === modalInfo) {
      modalInfo.style.display = 'none';
    }
  };
}

if (modalPrice && openModalPriceBtn && closeModalPriceBtn) {
  // Otevření modalu při kliknutí na tlačítko pro ceník
  openModalPriceBtn.onclick = function () {
    modalPrice.style.display = 'flex'; // Použijeme flex pro vertikální a horizontální centrování
  };

  // Zavření modalu při kliknutí na "X"
  closeModalPriceBtn.onclick = function () {
    modalPrice.style.display = 'none';
  };

  // Zavření modalu při kliknutí mimo obsah okna
  window.onclick = function (event) {
    if (event.target === modalPrice) {
      modalPrice.style.display = 'none';
    }
  };
}
