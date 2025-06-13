// header
const headerFrontendDev = document.querySelector(".header-text-job");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    headerFrontendDev.style.visibility = "hidden";
  } else {
    headerFrontendDev.style.visibility = "visible"; // in case you want it back
  }
});
// h1 animation
const h1 = document.querySelector("h1");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        h1.classList.add("show");
      } else {
        h1.classList.remove("show"); // Optional: remove if when i want it only once
      }
    });
  },
  {
    threshold: 0.1, // Adjust this for earlier/later trigger
  }
);

observer.observe(h1);
// projects
const links = document.querySelectorAll(".project-link");
const contents = document.querySelectorAll(".project-content");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    link.classList.add("active");
    const index = link.dataset.project;
    document
      .querySelector(`.project-content[data-id="${index}"]`)
      .classList.add("active");
  });
});
// teck stacks
const html = document.querySelector(".stack-html");
const css = document.querySelector(".stack-css");
const sass = document.querySelector(".stack-sass");
const js = document.querySelector(".stack-js");
const bootstrap = document.querySelector(".stack-bootstrap");
const figma = document.querySelector(".stack-figma");

const section = document.querySelector(".box-tech-stack");

window.addEventListener("scroll", () => {
  const sectionTop = section.getBoundingClientRect().top;
  const sectionHeight = section.offsetHeight;

  // Progress from 0 (top of screen) to 1 (fully scrolled through section)
  let progress = 1 - Math.min(Math.max(sectionTop / window.innerHeight, 0), 1);

  let move = window.innerWidth < 557 ? progress * 80 : progress * 200;

  // Move icons AWAY when scrolling down, BACK when scrolling up
  html.style.left = `calc(38% - ${move}px)`;
  js.style.right = `calc(38% - ${move}px)`;
  bootstrap.style.top = `calc(6rem + ${move * 0.3}px)`; // go down on scroll
  figma.style.top = `calc(6rem + ${move * 0.3}px)`; // go down on scroll
  css.style.bottom = `calc(6rem + ${move * 0.3}px)`; // go down on scroll
  sass.style.bottom = `calc(6rem + ${move * 0.3}px)`; // go down on scroll
});
