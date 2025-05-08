'use strict';
const btnShowModal = document.querySelectorAll('.btn-show-modal');
const btnCloseModal = document.querySelector('.btn-close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModal = function () {
  console.log('Button clicked!');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnShowModal.length; i++) {
  //   console.log(btnShowModal[i].textContent);
  btnShowModal[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (event) {
  //   console.log(event);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
