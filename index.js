/*Hamburger menu */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Kontrola, zda hamburger existuje na stránce
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Získání elementů
const modal = document.getElementById('myIntro');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementsByClassName('close')[0];

// Kontrola, zda modal existuje na stránce
if (modal && openModalBtn && closeModalBtn) {
  // Otevření modalu při kliknutí na tlačítko
  openModalBtn.onclick = function () {
    modal.style.display = 'block';
  };

  // Zavření modalu při kliknutí na "X"
  closeModalBtn.onclick = function () {
    modal.style.display = 'none';
  };

  // Zavření modalu při kliknutí mimo obsah okna
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}
