"use strict";
const navEl = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navEl.classList.add("bg-dark");
    navEl.classList.remove("bg-transparent");
  } else {
    navEl.classList.remove("bg-light");
    navEl.classList.add("bg-transparent");
  }
});
