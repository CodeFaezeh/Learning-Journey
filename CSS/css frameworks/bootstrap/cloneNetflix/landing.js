"use strict";
const navEl = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");
const searchBtnEl = document.querySelector(".btn-search");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navEl.classList.add("bg-custom-menu");
    navEl.classList.remove("bg-transparent");

    navLinks.forEach((link) => (link.style.color = "#fff"));
    searchBtnEl.classList.remove("btn-outline-dark");
    searchBtnEl.classList.add("btn-outline-light");
  } else {
    navEl.classList.remove("bg-custom-menu");
    navEl.classList.add("bg-transparent");

    navLinks.forEach((link) => (link.style.color = "#000"));
    searchBtnEl.classList.add("btn-outline-dark");
    searchBtnEl.classList.remove("btn-outline-light");
  }
});
// "use strict";
// const navEl = document.querySelector("nav");
// const navLinks = document.querySelectorAll(".nav-link");
// const searchBtnEl = document.querySelector(".btn-search");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 50) {
//     navEl.classList.add("bg-custom-menu");
//     navEl.classList.remove("bg-transparent");

//     navLinks.forEach(link => (link.style.color = "#fff"));
//     searchBtnEl.classList.remove("btn-outline-dark");
//     searchBtnEl.classList.add("btn-outline-light");
//   } else {
//     navEl.classList.remove("bg-custom-menu");
//     navEl.classList.add("bg-transparent");

//     navLinks.forEach(link => (link.style.color = "#333")); // or initial
//     searchBtnEl.classList.remove("btn-outline-light");
//     searchBtnEl.classList.add("btn-outline-dark");
//   }
// });
