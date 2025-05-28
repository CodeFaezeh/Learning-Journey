"use strict";
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

    // navLinks.forEach((link) => {
    //   if (!link.classList.contains("active")) {
    //     link.classList.remove("text-dark-custom");
    //     link.classList.add("text-light-custom");
    //   }
    // });

    // dropdownToggle.classList.remove("text-grey-custom");
    // dropdownToggle.classList.add("text-light-custom");

    // navIconsBtn.forEach((icon) => {
    //   icon.classList.remove("btn-dark-color");
    //   icon.classList.add("btn-light-color");
    // });
  } else {
    navEl.classList.remove("bg-custom-menu");
    navEl.classList.add("bg-transparent");

    // navLinks.forEach((link) => {
    //   if (!link.classList.contains("active")) {
    //     link.classList.remove("text-light-custom");
    //     link.classList.add("text-dark-custom");
    //   }
    // });

    // dropdownToggle.classList.remove("text-light-custom");
    // dropdownToggle.classList.add("text-grey-custom");

    // navIconsBtn.forEach((icon) => {
    //   icon.classList.remove("btn-light-color");
    //   icon.classList.add("btn-dark-color");
    // });
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
      nav.classList.remove("active", "fw-1");
    });
    link.classList.add("active");
  });
});
/*FINISH ::: Navbar select the active link */
// navIconsBtn.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     icon.classList.add("btn-active");
//   });
// });
/*************/
