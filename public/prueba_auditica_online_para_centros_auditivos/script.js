const modal = document.querySelector('#contactModal');
const openButtons = document.querySelectorAll('.js-open-form');
const closeButton = document.querySelector('.modal-close');

function openModal() {
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  const iframe = modal.querySelector('iframe[data-tally-src]');
  if (iframe && !iframe.src) iframe.src = iframe.dataset.tallySrc;
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

openButtons.forEach((button) => button.addEventListener('click', openModal));
closeButton.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
});
