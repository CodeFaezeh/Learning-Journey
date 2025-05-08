'use strict';
const modalButtonOpen = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

//Functions
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//open Modals
//Method 2
modalButtonOpen.forEach(button => {
  button.addEventListener('click', openModal);
});
//Method 1
// for (let i = 0; i < modalButtonOpen.length; i++) {
//   modalButtonOpen[i].addEventListener('click', function () {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// }

//Close Modals
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// close using keyboarde esc
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
