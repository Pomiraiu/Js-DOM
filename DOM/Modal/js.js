const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');

openModalButton.addEventListener('click', () => {
  overlay.style.display = 'block';
  modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  overlay.style.display = 'none';
  modal.style.display = 'none';
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    overlay.style.display = 'none';
    modal.style.display = 'none';
  }
});

