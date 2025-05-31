"use strict";
/****NavBar */
const navEl = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const navIconsBtn = document.querySelectorAll(".btn-icon");
/*************/
/*NAVBAR */
/*Navbar Scrolling*/
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navEl.classList.add("bg-custom-menu");
    navEl.classList.remove("bg-transparent");
  } else {
    navEl.classList.remove("bg-custom-menu");
    navEl.classList.add("bg-transparent");
  }
});

/*NAV LINKS STYLING COLOR :CHEKING */
navLinks.forEach((link) => {
  link.classList.add("text-light-custom");
});
dropdownToggle.classList.add("text-light-custom");
navIconsBtn.forEach((icon) => {
  icon.classList.add("btn-light-color");
});

/*Navbar select the active link */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((nav) => {
      nav.classList.remove("active");
    });
    link.classList.add("active");
  });
});
/*************/
/****NavBar  FINISH*/
/****Video Content */
const carousels = document.querySelectorAll(".slider-box");

carousels.forEach((carousel) => {
  const buttons = carousel.querySelectorAll(".carousel-btn");
  // select the btns from carousel
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove 'active' from all buttons in the SAME carousel
      buttons.forEach((b) => b.classList.remove("active"));

      // Add 'active' to the clicked one
      btn.classList.add("active");
    });
  });
});
//////////////****** */
